"use client";

import { SOFTWARE_SKILLS } from "@/data";
import { moveUp } from "@/styles/effects";
import { motion } from "framer-motion";
import { CSSProperties } from "react";

// Số cột (trên lưới 6 cột) mỗi nhóm chiếm ở màn hình lớn
const SPANS = [3, 3, 2, 4];

export const Skills = () => {
  return (
    <>
      <motion.h3 animate="visible" {...moveUp} className="about-section-title">
        Software Skills
      </motion.h3>
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delayChildren: 0.1, staggerChildren: 0.12 }}
        className="skill-board"
      >
        {SOFTWARE_SKILLS.map((branch, index) => (
          <motion.div
            key={branch.name}
            {...moveUp}
            className="skill-panel"
            style={
              {
                "--accent": branch.color,
                "--span": SPANS[index] ?? 3,
              } as CSSProperties
            }
          >
            <header className="skill-panel-head">
              <h4>{branch.name}</h4>
              <span>{String(branch.skills.length).padStart(2, "0")} skills</span>
            </header>
            <ul>
              {branch.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};
