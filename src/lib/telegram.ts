const TELEGRAM_TIMEOUT_MS = 5000;

const escapeHtml = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const formatTime = (date: Date) =>
  date.toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });

const MAX_DESCRIPTION_CHARS = 3000; // giới hạn tin nhắn Telegram là 4096 ký tự

/** Gửi tin nhắn (HTML) tới chat admin qua bot Telegram. Không throw. */
export async function sendTelegramMessage(text: string): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error("Missing TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID");
    return false;
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
        signal: AbortSignal.timeout(TELEGRAM_TIMEOUT_MS),
      },
    );
    if (!response.ok) {
      console.error(
        "Telegram sendMessage failed:",
        response.status,
        await response.text(),
      );
      return false;
    }
    return true;
  } catch (error) {
    console.error("Telegram sendMessage error:", error);
    return false;
  }
}

/** Gửi ảnh tới chat admin: 1 ảnh dùng sendPhoto, nhiều ảnh dùng sendMediaGroup. */
export async function sendTelegramPhotos(images: File[]): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId || images.length === 0) return false;

  const form = new FormData();
  form.append("chat_id", chatId);
  let method = "sendPhoto";
  if (images.length === 1) {
    form.append("photo", images[0], images[0].name);
  } else {
    method = "sendMediaGroup";
    form.append(
      "media",
      JSON.stringify(
        images.map((_, i) => ({ type: "photo", media: `attach://photo${i}` })),
      ),
    );
    images.forEach((image, i) => form.append(`photo${i}`, image, image.name));
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/${method}`,
      {
        method: "POST",
        body: form,
        // Ảnh lớn cần thời gian tải lên lâu hơn tin nhắn chữ
        signal: AbortSignal.timeout(TELEGRAM_TIMEOUT_MS * 4),
      },
    );
    if (!response.ok) {
      console.error(
        `Telegram ${method} failed:`,
        response.status,
        await response.text(),
      );
      return false;
    }
    return true;
  } catch (error) {
    console.error(`Telegram ${method} error:`, error);
    return false;
  }
}

/** Thông báo yêu cầu liên hệ mới tới Telegram. */
export async function notifyContact(
  contact: {
    name: string;
    email: string;
    phone: string;
    budget: string;
    projectType?: string;
    description: string;
  },
  images: File[] = [],
): Promise<boolean> {
  const description =
    contact.description.length > MAX_DESCRIPTION_CHARS
      ? `${contact.description.slice(0, MAX_DESCRIPTION_CHARS)}…`
      : contact.description;

  const sent = await sendTelegramMessage(
    [
      "💬 <b>Yêu cầu liên hệ mới</b>",
      "",
      `👤 ${escapeHtml(contact.name)}`,
      `📧 ${escapeHtml(contact.email)}`,
      `📞 ${escapeHtml(contact.phone)}`,
      ...(contact.projectType
        ? [`🧩 ${escapeHtml(contact.projectType)}`]
        : []),
      `💰 ${escapeHtml(contact.budget)}`,
      "",
      escapeHtml(description),
      "",
      `🕒 ${formatTime(new Date())}`,
      ...(images.length > 0 ? [`🖼 ${images.length} ảnh đính kèm bên dưới`] : []),
    ].join("\n"),
  );
  // Ảnh là phần phụ: gửi lỗi không làm hỏng yêu cầu đã báo thành công
  if (sent) await sendTelegramPhotos(images);
  return sent;
}
