"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="uppercase tracking-[0.3em] text-violet-400 mb-3">
        PROJECTS
      </p>

      <h2 className="text-5xl md:text-6xl font-bold mb-6">
        Featured Work
      </h2>

      <p className="text-zinc-400 max-w-2xl mb-14 leading-8">
        A collection of AI, Machine Learning, and Full Stack applications
        built to solve real-world problems, explore emerging technologies,
        and create meaningful user experiences.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}