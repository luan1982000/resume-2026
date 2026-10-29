"use client";

import download from "@/assest/image/svg/download.svg";
import { Button } from "@/components";
import { moveLeft, moveUp } from "@/styles/effects";
import { Col, Row } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import { OverlayLoading } from "..";
import { Title } from "../title";
import { Experience, OtherSkills, Skills } from "./_components";
import "./styles.css";

type InfoItem = {
  label: string;
  value: string;
  href?: string;
  status?: boolean;
};

const INFO_GROUPS: { title: string; items: InfoItem[] }[] = [
  {
    title: "Basic",
    items: [
      { label: "First Name", value: "Nguyen" },
      { label: "Last Name", value: "Luan" },
      { label: "Date of birth", value: "19/08/2000" },
      { label: "Nationality", value: "Viet Nam" },
      { label: "Address", value: "Ha Noi" },
      { label: "Languages", value: "Viet Nam, English" },
      { label: "Freelance", value: "Available", status: true },
    ],
  },
  {
    title: "Contact",
    items: [
      {
        label: "Phone",
        value: "+84367031442",
        href: "tel:+84367031442",
      },
      {
        label: "Email",
        value: "luan1982000@gmail.com",
        href: "mailto:luan1982000@gmail.com",
      },
      {
        label: "Facebook",
        value: "luanluan",
        href: "https://www.facebook.com/luan.nguyenvanluan.393/",
      },
      {
        label: "Youtube",
        value: "KhungLongAnCo",
        href: "https://www.youtube.com/@KhungLongAnCo2000",
      },
      {
        label: "Tiktok",
        value: "KhungLongAnCo",
        href: "https://www.tiktok.com/@khunglonganco1908",
      },
    ],
  },
];

const STATS = [
  { value: 6, label: "Years of experience" },
  { value: 30, label: "Completed projects" },
  { value: 20, label: "Happy customers" },
  { value: 3, label: "Awards won" },
];

export const About = () => {
  return (
    <section className="h-[100vh] overflow-hidden">
      <OverlayLoading key={`about-overlay`} />
      <div className="h-[100vh] overflow-auto">
        <div className="container overflow-auto p-6 lg:p-0">
          <motion.div animate="visible" {...moveUp}>
            <Title>
              About <span className="text-primary">me</span>
            </Title>
          </motion.div>
          <motion.div
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              delay: 0.8,
              delayChildren: 0.2,
              staggerChildren: 0.1,
            }}
          >
            <motion.div
              {...moveUp}
              className="about-section-title !mt-0"
            >
              Personal Infos
            </motion.div>
            <Row gutter={[24, 24]} align="stretch">
              <Col xs={24} lg={16}>
                <motion.div {...moveUp} className="about-profile">
                  <div className="about-groups">
                    {INFO_GROUPS.map((group) => (
                      <div key={group.title} className="about-group">
                        <h4 className="about-group-title">{group.title}</h4>
                        <dl>
                          {group.items.map((item) => (
                            <div key={item.label} className="about-row">
                              <dt>{item.label}</dt>
                              <dd>
                                {item.status ? (
                                  <span className="about-status">
                                    {item.value}
                                  </span>
                                ) : item.href ? (
                                  <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="about-link"
                                  >
                                    {item.value}
                                  </a>
                                ) : (
                                  item.value
                                )}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    ))}
                  </div>
                  <a
                    href="/pdf/Nguyen-Van-Luan-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6"
                    download="Nguyen-Van-Luan-2026.pdf"
                  >
                    <Button
                      buttonProps={{
                        className: "more-btn",
                      }}
                      afterFix={
                        <Image
                          className="download"
                          priority
                          src={download}
                          alt="download svg"
                        />
                      }
                    >
                      VIEW CV
                    </Button>
                  </a>
                </motion.div>
              </Col>
              <Col xs={24} lg={8}>
                <div className="about-stats">
                  {STATS.map((stat) => (
                    <motion.div
                      key={stat.label}
                      {...moveLeft}
                      className="about-stat"
                    >
                      <div className="about-stat-number">
                        {stat.value}
                        <span>+</span>
                      </div>
                      <p className="about-stat-label">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </Col>
            </Row>
          </motion.div>
          <Skills />
          <OtherSkills />
          <Experience />
        </div>
      </div>
    </section>
  );
};
