import { Col, Row, Grid, Progress } from "antd";
import { motion } from "framer-motion";
import briefCase from "@/assest/image/svg/brief-case.svg";
import classes from "./styles.module.css";
import Image from "next/image";
import { moveLeft, moveUp } from "@/styles/effects";

const EXPERIENCES = {
  left: [
    {
      time: "AUGUST 2023 - PRESENT",
      role: "Web Developer",
      company: "FPT SOFTWARE",
      overview: `At the AIC Center, I focus on AI projects and related technologies, which are part of FPT's strategic initiatives.`,
    },
    {
      time: "APRIL 2020 - AUGUST 2023",
      role: "Web Developer",
      company: "VMO-GROUP",
      overview: `I maintained an application with over 20,000 active users. As a front-end developer and tech lead, I worked on multiple projects utilizing various frameworks and libraries, including Vanilla JavaScript, jQuery, React.js, Next.js, and TypeScript. I was also recognized as an exceptional team member and received a Certificate of Merit for outstanding performance.`,
    },
    {
      time: "AUGUST 2019 - MARCH 2020",
      role: "Web Developer",
      company: "Intelads | BeeGuide",
      overview: `I began my career as a full-stack developer, responsible for developing a web application for outdoor advertising management. My primary focus was on utilizing technologies such as React.js, JavaScript, Java Spring Boot, MariaDB, and PostgreSQL.`,
    },
  ],
};

const RowMotion = motion.create(Row);
const ColMotion = motion.create(Col);

export const Experience = () => {
  return (
    <motion.div
      whileInView="visible"
      transition={{
        delay: 0.8,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      }}
      className="mb-10"
    >
      <motion.h3
        {...moveUp}
        className="mt-20 text-center font-bold text-2xl mb-20"
      >
        EXPERIENCE
      </motion.h3>
      <RowMotion
        whileInView="visible"
        transition={{
          delay: 0.8,
          delayChildren: 0.2,
          staggerChildren: 0.1,
        }}
      >
        {EXPERIENCES?.left?.map((i) => (
          <ColMotion {...moveLeft} xs={24} lg={8} key={i.time}>
            <div className={classes.wrapBox}>
              <div className="icon min-w-[40px] h-[40px] flex items-center justify-center bg-primary rounded-full mr-3">
                <Image
                  className="brief-case w-[20px] h-[20px]"
                  priority
                  src={briefCase}
                  alt="briefCase svg"
                />
              </div>
              <div className="content">
                <div className={classes.badge}>{i.time}</div>
                <h5 className="font-bold mb-2 text-xl uppercase">
                  {i.role} - {i.company}
                </h5>
                <p className="open-sans-font">{i.overview}</p>
              </div>
            </div>
          </ColMotion>
        ))}
      </RowMotion>
    </motion.div>
  );
};
