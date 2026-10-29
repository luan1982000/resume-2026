import { notifyContact } from "@/lib/telegram";
import { NextRequest, NextResponse } from "next/server";

const MAX_IMAGES = 3;
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData();
    const field = (key: string) => {
      const value = form.get(key);
      return typeof value === "string" ? value.trim() : "";
    };
    const name = field("name");
    const email = field("email");
    const phone = field("phone");
    const budget = field("budget");
    const projectType = field("projectType");
    const description = field("description");
    const images = form
      .getAll("images")
      .filter((item): item is File => item instanceof File && item.size > 0);

    if (!name || !email || !phone || !budget || !description) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    if (
      images.length > MAX_IMAGES ||
      images.some(
        (image) =>
          !ALLOWED_IMAGE_TYPES.includes(image.type) ||
          image.size > MAX_IMAGE_BYTES,
      )
    ) {
      return NextResponse.json({ error: "Invalid images" }, { status: 400 });
    }

    const sent = await notifyContact(
      { name, email, phone, budget, projectType, description },
      images,
    );

    if (!sent) {
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Contact form sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
