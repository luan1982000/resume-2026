import { OTHER_SKILLS } from "@/data";
import { moveUp } from "@/styles/effects";
import { Col, Row } from "antd";
import { motion } from "framer-motion";

const RowMotion = motion.create(Row);
const ColMotion = motion.create(Col);

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
      <motion.h3
        {...moveUp}
        className="mt-20 text-center font-bold text-2xl mb-20"
      >
        OTHER SKILLS
      </motion.h3>
      <RowMotion
        whileInView="visible"
        transition={{
          delayChildren: 0.2,
          staggerChildren: 0.1,
        }}
        gutter={[24, 24]}
        justify="center"
      >
        {OTHER_SKILLS?.map((skill) => (
          <ColMotion {...moveUp} xs={24} sm={12} md={8} lg={6} key={skill}>
            <div className="skill-card">
              <h4 className="skill-name">{skill}</h4>
            </div>
          </ColMotion>
        ))}
      </RowMotion>
    </motion.div>
  );
};
