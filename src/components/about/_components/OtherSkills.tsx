import { OTHER_SKILLS } from "@/data";
import { moveUp } from "@/styles/effects";
import { motion } from "framer-motion";

export const OtherSkills = () => {
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
        Other Skills
      </motion.h3>
      <div className="creative-list">
        {OTHER_SKILLS?.map((skill) => (
          <motion.div {...moveUp} key={skill} className="creative-card">
            <h4>{skill}</h4>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
