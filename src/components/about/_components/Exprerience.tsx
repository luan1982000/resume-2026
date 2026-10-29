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
      <motion.h3 {...moveUp} className="about-section-title">
        Experience
      </motion.h3>
      <div className={classes.timeline}>
        {EXPERIENCES.left.map((i) => (
          <motion.div {...moveLeft} key={i.time} className={classes.item}>
            <div className={classes.dot}>
              <Image
                className="brief-case w-[18px] h-[18px]"
                priority
                src={briefCase}
                alt="briefCase svg"
              />
            </div>
            <div className={classes.card}>
              <div className={classes.badge}>{i.time}</div>
              <h5 className={classes.role}>{i.role}</h5>
              <div className={classes.company}>{i.company}</div>
              <p className="open-sans-font mb-0">{i.overview}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
