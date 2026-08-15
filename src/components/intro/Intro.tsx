import { blurImgBase64 } from "@/assest/image/blur-img";
import avatarUrl from "@/assest/image/jpg/avatar.jpg";
import arrowRight from "@/assest/image/svg/arrow-right.svg";
import { Button } from "@/components";
import { TABS } from "@/constants";
import { bounce, fade, moveLeft, moveUp } from "@/styles/effects";
import { Col, Row } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import { OverlayLoading } from "..";
import "./styles.css";

export const Intro: React.FC<{ setActiveTab: any }> = ({ setActiveTab }) => {
  return (
    <motion.section
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        delay: 0.8,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      }}
    >
      <OverlayLoading key={`home-overlay`} />
      <div className="color-block" />

      <Row>
        <Col xs={24} lg={10} className="lg:pl-16">
          <motion.div
            {...bounce}
            transition={{ delay: 0.8 }}
            className="flex items-center h-full"
          >
            <Image
              className="avatar"
              priority
              src={avatarUrl}
              alt="avatar svg"
              placeholder="blur"
              blurDataURL={blurImgBase64}
            />
          </motion.div>
        </Col>
        <Col xs={24} lg={14}>
          <div className="intro-description">
            <div className="content">
              <motion.h1 {...moveUp} className="text-primary">
                {`I'M LUAN (LEVI)`}
                <br /> WEB DEVELOPER
              </motion.h1>
              <motion.p {...moveLeft}>
                Hi, I’m Luan (Levi), a Senior Web Developer with over 6 years of
                experience, specializing in Full-Stack Development since 2019.
                I’m passionate about building high-quality, user-focused
                software that improves people’s lives.
              </motion.p>
              <motion.div
                {...fade}
                className="flex items-center justify-center flex-wrap mt-4 gap-4"
              >
                {/* <motion.div {...fade}>
                  <a
                    href="https://luan-blog-2025.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      buttonProps={{
                        className: "more-btn",
                      }}
                      afterFix={
                        <Image
                          className="arrowRight"
                          priority
                          src={arrowRight}
                          alt="arrowRight svg"
                        />
                      }
                    >
                      Visit My Blog
                    </Button>
                  </a>
                </motion.div> */}
                <Button
                  buttonProps={{
                    className: "more-btn",
                    onClick: () => setActiveTab(TABS.ABOUT),
                  }}
                  afterFix={
                    <Image
                      className="arrowRight"
                      priority
                      src={arrowRight}
                      alt="arrowRight svg"
                    />
                  }
                >
                  More About Me
                </Button>
                <motion.div {...fade}>
                  <a
                    href="https://www.youtube.com/@KhungLongAnCo2000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      buttonProps={{
                        className: "youtube-btn",
                      }}
                      afterFix={
                        <Image
                          className="arrowRight"
                          priority
                          src={arrowRight}
                          alt="arrowRight svg"
                        />
                      }
                    >
                      YouTube Channel
                    </Button>
                  </a>
                </motion.div>
                <motion.div {...fade}>
                  <a
                    href="https://luyenviet.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      buttonProps={{
                        className: "more-btn",
                      }}
                      afterFix={
                        <Image
                          className="arrowRight"
                          priority
                          src={arrowRight}
                          alt="arrowRight svg"
                        />
                      }
                    >
                      Luyện Viết Cùng AI
                    </Button>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Col>
      </Row>
    </motion.section>
  );
};
