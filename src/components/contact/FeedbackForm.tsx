import { moveUp } from "@/styles/effects";
import { Col, Form, Input, message, Spin } from "antd";
import { motion } from "framer-motion";
import { Button } from "@/components";
import Image from "next/image";
import arrowRight from "@/assest/image/svg/arrow-right.svg";
import { useState } from "react";

const { TextArea } = Input;

export const FeedbackForm: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success("Your request has been sent successfully!");
        form.resetFields();
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
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="contact-form"
      >
        <motion.div {...moveUp}>
          <Form.Item
            name="name"
            className="mb-3"
            label="Họ tên"
            rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}
          >
            <Input placeholder="Họ tên" />
          </Form.Item>
        </motion.div>
        <motion.div {...moveUp}>
          <Form.Item
            name="email"
            label="Your Email"
            className="mb-3"
            rules={[
              { required: true, message: "Vui lòng nhập email" },
              { type: "email", message: "Email không hợp lệ" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
        </motion.div>
        <motion.div {...moveUp}>
          <Form.Item
            name="phone"
            label="Số điện thoại"
            className="mb-3"
            rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}
          >
            <Input placeholder="Số điện thoại" />
          </Form.Item>
        </motion.div>
        <motion.div {...moveUp}>
          <Form.Item
            name="budget"
            label="Ngân sách"
            className="mb-3"
            rules={[{ required: true, message: "Vui lòng nhập ngân sách" }]}
          >
            <Input placeholder="Chí phí bạn dự định dành cho dự án" />
          </Form.Item>
        </motion.div>
        <motion.div {...moveUp} className="mb-3">
          <Form.Item
            name="description"
            label="Mô tả"
            className="mb-3"
            rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
          >
            <TextArea rows={4} placeholder="Mô tả một chút về dự án của bạn" />
          </Form.Item>
        </motion.div>
        <motion.div {...moveUp}>
          <Form.Item>
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
              Gửi yêu cầu
            </Button>
          </Form.Item>
        </motion.div>
      </Form>
    </Col>
  );
};
