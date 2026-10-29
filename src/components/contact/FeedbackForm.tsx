import { moveUp } from "@/styles/effects";
import {
  Col,
  Form,
  Input,
  message as antMessage,
  Spin,
  Upload,
  UploadFile,
} from "antd";
import { motion } from "framer-motion";
import { Button } from "@/components";
import Image from "next/image";
import arrowRight from "@/assest/image/svg/arrow-right.svg";
import { useState } from "react";

const { TextArea } = Input;

const MAX_IMAGES = 3;
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

const PROJECT_TYPES = [
  "Website",
  "Web app",
  "Mobile app",
  "Landing page",
  "Khác",
];
const BUDGETS = [
  "Dưới 10 triệu",
  "10 – 30 triệu",
  "30 – 100 triệu",
  "Trên 100 triệu",
  "Chưa xác định",
];

type ChipGroupProps = {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
};

const ChipGroup: React.FC<ChipGroupProps> = ({ options, value, onChange }) => (
  <div className="chip-group">
    {options.map((option) => (
      <button
        key={option}
        type="button"
        aria-pressed={value === option}
        className={`chip ${value === option ? "chip-active" : ""}`}
        onClick={() => onChange?.(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

export const FeedbackForm: React.FC = () => {
  const [form] = Form.useForm();
  const [message, contextHolder] = antMessage.useMessage();
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<UploadFile[]>([]);

  const beforeUpload = (file: File) => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      message.error("Chỉ nhận ảnh JPEG, PNG hoặc WebP.");
      return Upload.LIST_IGNORE;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      message.error("Mỗi ảnh tối đa 5MB.");
      return Upload.LIST_IGNORE;
    }
    return false; // không upload tự động, gửi cùng form khi submit
  };

  const handleSubmit = async (values: Record<string, string>) => {
    setLoading(true);
    try {
      const body = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (value) body.append(key, value);
      });
      files.forEach((file) => {
        if (file.originFileObj) body.append("images", file.originFileObj);
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        body,
      });

      if (response.ok) {
        message.success(
          "Cảm ơn bạn đã gửi yêu cầu! Mình sẽ phản hồi trong vòng 24 giờ 💙",
          5,
        );
        form.resetFields();
        setFiles([]);
      } else {
        message.error("Failed to send your request. Please try again.");
      }
    } catch (error) {
      message.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Col xs={24} md={12}>
      {contextHolder}
      <motion.div {...moveUp} className="quote-card">
        <h2 className="quote-title">Nhận báo giá dự án</h2>
        <p className="quote-subtitle">
          Mô tả nhanh về dự án, mình sẽ phản hồi trong vòng 24 giờ.
        </p>
        <Form
          form={form}
          layout="vertical"
          size="large"
          requiredMark={false}
          onFinish={handleSubmit}
          className="contact-form"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4">
            <Form.Item
              name="name"
              label="Họ tên"
              rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}
            >
              <Input placeholder="Nguyễn Văn A" />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Số điện thoại / Zalo"
              rules={[
                { required: true, message: "Vui lòng nhập số điện thoại" },
              ]}
            >
              <Input placeholder="09xx xxx xxx" />
            </Form.Item>
          </div>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Vui lòng nhập email" },
              { type: "email", message: "Email không hợp lệ" },
            ]}
          >
            <Input placeholder="ban@example.com" />
          </Form.Item>
          <Form.Item name="projectType" label="Loại dự án">
            <ChipGroup options={PROJECT_TYPES} />
          </Form.Item>
          <Form.Item
            name="budget"
            label="Ngân sách dự kiến"
            rules={[{ required: true, message: "Vui lòng chọn ngân sách" }]}
          >
            <ChipGroup options={BUDGETS} />
          </Form.Item>
          <Form.Item
            name="description"
            label="Mô tả dự án"
            rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
          >
            <TextArea
              rows={4}
              placeholder="Dự án làm về gì, cần những tính năng nào, mong muốn hoàn thành khi nào..."
            />
          </Form.Item>
          <Form.Item
            label={
              <>
                Ảnh đính kèm&nbsp;
                <span className="opacity-60">
                  (tuỳ chọn, tối đa {MAX_IMAGES})
                </span>
              </>
            }
          >
            <Upload.Dragger
              multiple
              accept={ALLOWED_TYPES.join(",")}
              listType="picture"
              fileList={files}
              maxCount={MAX_IMAGES}
              beforeUpload={beforeUpload}
              onChange={({ fileList }) => setFiles(fileList)}
              className="quote-upload"
            >
              <p className="quote-upload-title">
                Bấm để chọn hoặc kéo thả ảnh vào đây
              </p>
              <p className="quote-upload-hint">
                Mockup, wireframe, tham khảo · JPEG, PNG, WebP · tối đa 5MB mỗi
                ảnh
              </p>
            </Upload.Dragger>
          </Form.Item>
          <Form.Item className="!mb-0">
            <Button
              buttonProps={{
                className: "more-btn",
                type: "submit",
                disabled: loading,
              }}
              afterFix={
                loading ? (
                  <Spin spinning={loading} className="flex" />
                ) : (
                  <Image
                    className="arrowRight"
                    priority
                    src={arrowRight}
                    alt="arrowRight svg"
                  />
                )
              }
            >
              Gửi yêu cầu báo giá
            </Button>
          </Form.Item>
        </Form>
      </motion.div>
    </Col>
  );
};
