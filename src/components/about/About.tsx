"use client";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Slider from "react-slick";

import download from "@/assest/image/svg/download.svg";
import { Button } from "@/components";
import { LIST_SKILLS } from "@/data";
import { fade, moveLeft, moveUp } from "@/styles/effects";
import { Col, Progress, Row } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import { OverlayLoading } from "..";
import { Title } from "../title";
import { Experience } from "./_components";
import "./styles.css";

const RowMotion = motion.create(Row);
const ColMotion = motion.create(Col);

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
              className="info-title text-2xl font-bold mb-4"
            >
              PERSONAL INFOS
            </motion.div>
            <Row gutter={[24, 24]} align="top">
              <Col
                xs={24}
                sm={24}
                md={16}
                lg={16}
                xl={15}
                className="wrap-info relative overflow-hidden"
              >
                <RowMotion
                  animate="visible"
                  transition={{
                    delayChildren: 0.2,
                    staggerChildren: 0.1,
                  }}
                  gutter={[20, 20]}
                  className="personal-info-grid"
                >
                  <ColMotion
                    {...moveUp}
                    xs={24}
                    sm={12}
                    md={8}
                    lg={8}
                    className="personal-info-item"
                  >
                    <div className="info-card">
                      <span className="info-label">First Name:</span>
                      <span className="info-value">Nguyen</span>
                    </div>
                  </ColMotion>
                  <ColMotion
                    {...moveUp}
                    xs={24}
                    sm={12}
                    md={8}
                    lg={8}
                    className="personal-info-item"
                  >
                    <div className="info-card">
                      <span className="info-label">Last Name:</span>
                      <span className="info-value">Luan</span>
                    </div>
                  </ColMotion>
                  <ColMotion
                    {...moveUp}
                    xs={24}
                    sm={12}
                    md={8}
                    lg={8}
                    className="personal-info-item"
                  >
                    <div className="info-card">
                      <span className="info-label">Date of birth:</span>
                      <span className="info-value">19/08/2000</span>
                    </div>
                  </ColMotion>
                  <ColMotion
                    {...moveUp}
                    xs={24}
                    sm={12}
                    md={8}
                    lg={8}
                    className="personal-info-item"
                  >
                    <div className="info-card">
                      <span className="info-label">Nationality:</span>
                      <span className="info-value">Viet Nam</span>
                    </div>
                  </ColMotion>
                  <ColMotion
                    {...moveUp}
                    xs={24}
                    sm={12}
                    md={8}
                    lg={8}
                    className="personal-info-item"
                  >
                    <div className="info-card">
                      <span className="info-label">Freelance:</span>
                      <span className="info-value">
                        <span className="text-success">Available</span>
                      </span>
                    </div>
                  </ColMotion>
                  <ColMotion
                    {...moveUp}
                    xs={24}
                    sm={12}
                    md={8}
                    lg={8}
                    className="personal-info-item"
                  >
                    <div className="info-card">
                      <span className="info-label">Address:</span>
                      <span className="info-value">Ha Noi</span>
                    </div>
                  </ColMotion>
                  <ColMotion
                    {...moveUp}
                    xs={24}
                    sm={12}
                    md={8}
                    lg={8}
                    className="personal-info-item"
                  >
                    <div className="info-card">
                      <span className="info-label">Phone:</span>
                      <span className="info-value">+84367031442</span>
                    </div>
                  </ColMotion>
                  <ColMotion
                    {...moveUp}
                    xs={24}
                    sm={12}
                    md={8}
                    lg={8}
                    className="personal-info-item"
                  >
                    <div className="info-card">
                      <span className="info-label">Email:</span>
                      <span className="info-value">luan1982000@gmail.com</span>
                    </div>
                  </ColMotion>
                  <ColMotion
                    {...moveUp}
                    xs={24}
                    sm={12}
                    md={8}
                    lg={8}
                    className="personal-info-item"
                  >
                    <div className="info-card">
                      <span className="info-label">Facebook:</span>
                      <a
                        className="info-link"
                        href="https://www.facebook.com/luan.nguyenvanluan.393/"
                        target="_blank"
                      >
                        luanluan
                      </a>
                    </div>
                  </ColMotion>
                  <ColMotion
                    {...moveUp}
                    xs={24}
                    sm={12}
                    md={8}
                    lg={8}
                    className="personal-info-item"
                  >
                    <div className="info-card">
                      <span className="info-label">Languages:</span>
                      <span className="info-value">Viet Nam, English</span>
                    </div>
                  </ColMotion>
                  <ColMotion
                    {...moveUp}
                    xs={24}
                    sm={12}
                    md={8}
                    lg={8}
                    className="personal-info-item"
                  >
                    <div className="info-card">
                      <span className="info-label">Youtube:</span>
                      <a
                        className="info-link"
                        href="https://www.youtube.com/@KhungLongAnCo2000"
                        target="_blank"
                      >
                        KhungLongAnCo
                      </a>
                    </div>
                  </ColMotion>
                  <ColMotion {...fade} xs={12}>
                    <a
                      href="/pdf/Nguyen-Van-Luan-2026.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
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
                  </ColMotion>
                </RowMotion>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={9}>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={12} md={24} lg={12} xl={12}>
                    <motion.div
                      {...moveLeft}
                      className="card-info border-primary"
                    >
                      <h3 className="relative text-primary">6</h3>
                      <p className="relative text-lg">
                        YEARS OF <br /> EXPERIENCE
                      </p>
                    </motion.div>
                  </Col>
                  <Col xs={24} sm={12} md={24} lg={12} xl={12}>
                    <motion.div
                      {...moveLeft}
                      className="card-info border-primary"
                    >
                      <h3 className="relative text-primary">30</h3>
                      <p className="relative text-lg">
                        COMPLETED <br />
                        PROJECTS
                      </p>
                    </motion.div>
                  </Col>
                  <Col xs={24} sm={12} md={24} lg={12} xl={12}>
                    <motion.div
                      {...moveLeft}
                      className="card-info border-primary"
                    >
                      <h3 className="relative text-primary">20</h3>
                      <p className="relative text-lg">
                        HAPPY
                        <br /> CUSTOMERS
                      </p>
                    </motion.div>
                  </Col>
                  <Col xs={24} sm={12} md={24} lg={12} xl={12}>
                    <motion.div
                      {...moveLeft}
                      className="card-info border-primary"
                    >
                      <h3 className="relative text-primary">3</h3>
                      <p className="relative text-lg">
                        AWARDS
                        <br />
                        WON
                      </p>
                    </motion.div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </motion.div>
          <motion.h3
            animate="visible"
            {...moveUp}
            className="mt-20 text-center font-bold text-2xl mb-20"
          >
            MY SKILLS
          </motion.h3>
          <motion.div
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            {...fade}
            className="skills-carousel-wrapper"
          >
            <Slider
              dots={false}
              infinite={true}
              slidesToShow={4}
              slidesToScroll={1}
              arrows={false}
              autoplay={true}
              autoplaySpeed={1000}
              speed={500}
              responsive={[
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
              ]}
            >
              {LIST_SKILLS?.map((item) => (
                <div key={item.name} className="carousel-slide">
                  <div className="skill-card">
                    <div className="skill-content">
                      <div className="skill-header">
                        <h4 className="skill-name">{item.name}</h4>
                        <span className="skill-percent">{item.percent}%</span>
                      </div>
                      <div className="skill-progress-wrapper">
                        <Progress
                          percent={item.percent}
                          showInfo={false}
                          strokeColor={{
                            "0%": "#00b7ff",
                            "100%": "#ff30ff",
                          }}
                          trailColor="rgba(255, 255, 255, 0.1)"
                          size={6}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
          <Experience />
        </div>
      </div>
    </section>
  );
};
