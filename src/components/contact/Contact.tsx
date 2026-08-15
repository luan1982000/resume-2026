"use client";

import emailPng from "@/assest/image/png/email.png";
import facePng from "@/assest/image/png/facebook.png";
import githubPng from "@/assest/image/png/github.png";
import igPng from "@/assest/image/png/ig.png";
import linkinPng from "@/assest/image/png/linkin.png";
import youtubePng from "@/assest/image/png/youtube.png";
import { moveLeft, moveUp } from "@/styles/effects";
import { Col, Input, Row } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { OverlayLoading, Title } from "..";
import { FeedbackForm } from "./FeedbackForm";
import "./styles.css";

export const Contact = () => {
  const [values, setValues] = useState<{
    name: string;
    mail: string;
    message: string;
  }>({
    name: "",
    mail: "",
    message: "",
  });
  return (
    <motion.div
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        delay: 0.8,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      }}
      className="container p-6 pb-[100px] lg:p-0"
    >
      <OverlayLoading key={`about-overlay`} />
      <Title>
        <motion.div {...moveUp}>
          Get in <span className="text-primary">Touch</span>
        </motion.div>
      </Title>
      <Row>
        <Col md={12} className="pr-0 md:pr-6">
          <motion.h1 {...moveUp} className="text-3xl font-bold mb-6">
            Hi Friends !{" "}
          </motion.h1>
          <motion.p {...moveUp} className="text-lg">
            {`I’m Levi. I would be happy to have the opportunity to work together. Please feel free to contact me via email or through one of the social media platforms below. Thank you.`}
          </motion.p>
          <div className="list-socials">
            <motion.a
              {...moveLeft}
              href="https://github.com/KhungLongAnCo"
              target="_blank"
              rel="noopener noreferrer"
              className="social"
            >
              <Image
                className="social-img"
                src={githubPng}
                alt="githubIc"
                width={githubPng.width}
                height={githubPng.height}
              />
            </motion.a>
            <motion.a
              {...moveLeft}
              href="https://www.linkedin.com/in/lu%C3%A2n-nguy%E1%BB%85n-7266b1224"
              target="_blank"
              rel="noopener noreferrer"
              className="social"
            >
              <Image
                className="social-img"
                src={linkinPng}
                alt="linkin"
                width={githubPng.width}
                height={githubPng.height}
              />
            </motion.a>
            <motion.a
              {...moveLeft}
              href="mailto:luan1982000@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social"
            >
              <Image
                className="social-img"
                src={emailPng.src}
                alt="emailIc"
                width={githubPng.width}
                height={githubPng.height}
              />
            </motion.a>
            <motion.a
              {...moveLeft}
              href="https://www.facebook.com/luan.nguyenvanluan.393/"
              target="_blank"
              rel="noopener noreferrer"
              className="social"
            >
              <Image
                className="social-img"
                src={facePng.src}
                alt="facebook"
                width={githubPng.width}
                height={githubPng.height}
              />
            </motion.a>
            <motion.a
              {...moveLeft}
              href="https://www.instagram.com/yuull_1908/"
              target="_blank"
              rel="noopener noreferrer"
              className="social"
            >
              <Image
                className="social-img"
                src={igPng.src}
                alt="igIc"
                width={githubPng.width}
                height={githubPng.height}
              />
            </motion.a>
            <motion.a
              {...moveLeft}
              href="https://www.youtube.com/@KhungLongAnCo2000"
              target="_blank"
              rel="noopener noreferrer"
              className="social"
            >
              <Image
                className="social-img"
                src={youtubePng.src}
                alt="youtubePng"
                width={youtubePng.width}
                height={youtubePng.height}
              />
            </motion.a>
          </div>
        </Col>
        <FeedbackForm />
      </Row>
    </motion.div>
  );
};
