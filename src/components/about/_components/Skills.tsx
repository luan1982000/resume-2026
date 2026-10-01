"use client";

import { SOFTWARE_SKILLS } from "@/data";
import { moveUp } from "@/styles/effects";
import { motion } from "framer-motion";
import { Transformer } from "markmap-lib/no-plugins";
import { Markmap, deriveOptions } from "markmap-view";
import { useEffect, useRef } from "react";

const transformer = new Transformer();

const MARKDOWN = [
  "# Levi",
  ...SOFTWARE_SKILLS.flatMap((branch) => [
    `## ${branch.name}`,
    ...branch.skills.map((skill) => `- ${skill}`),
  ]),
].join("\n");

const OPTIONS = {
  ...deriveOptions({
    color: ["#007ba7", ...SOFTWARE_SKILLS.map((branch) => branch.color)],
    colorFreezeLevel: 2,
    lineWidth: 2,
    maxWidth: 160,
    spacingVertical: 8,
    zoom: false,
    pan: false,
  }),
  autoFit: true,
};

export const Skills = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const markmap = Markmap.create(
      svg,
      OPTIONS,
      transformer.transform(MARKDOWN).root,
    );

    let timer: number;
    const observer = new ResizeObserver(() => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => markmap.fit(), 150);
    });
    observer.observe(svg);

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
      markmap.destroy();
    };
  }, []);

  return (
    <>
      <motion.h3
        animate="visible"
        {...moveUp}
        className="mt-20 text-center font-bold text-2xl mb-20"
      >
        SOFTWARE SKILLS
      </motion.h3>
      <div className="skill-markmap-wrap">
        <svg ref={svgRef} className="skill-markmap" />
      </div>
    </>
  );
};
