"use client";

import { motion } from "framer-motion";

const skills = [
  "Python",
  "C++",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "FastAPI",
  "Machine Learning",
  "TensorFlow",
  "PyTorch",
  "LangChain",
  "FAISS",
  "Git",
  "GitHub",
  "SQL",
  "Tailwind CSS",
];

export default function Skills() {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="uppercase tracking-[0.3em] text-violet-400 mb-3">
        SKILLS
      </p>

      <h2 className="text-5xl md:text-6xl font-bold mb-10">
        Technologies I Work With
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
            }}
            whileHover={{
              y: -5,
              scale: 1.08,
            }}
            className="glass px-5 py-3 rounded-full border border-zinc-800 hover:border-violet-500 transition-all duration-300 cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}