"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-8">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <p className="uppercase tracking-[0.3em] text-violet-400 mb-3">
  ABOUT
</p>

<h2 className="text-5xl md:text-6xl font-bold mb-10">
  Building AI that solves
  <span className="text-violet-500"> real problems.</span>
</h2>

        <div className="grid lg:grid-cols-2 gap-10">

          <div>

            <p className="text-zinc-400 text-lg leading-8">
              I'm Divyanshi Negi, a final-year Computer Science student
              specializing in Artificial Intelligence and IoT.

              <br /><br />

              I enjoy building AI-powered applications, developer tools,
              and full-stack web products using Python, FastAPI, Next.js,
              React, TypeScript, Machine Learning and modern cloud
              technologies.

              <br /><br />

              I'm currently looking for Software Engineering and AI/ML
              opportunities where I can build impactful products and
              continue learning.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-5">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-4xl font-bold text-violet-400">8+</h3>
              <p className="text-zinc-400 mt-2">Projects Built</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-4xl font-bold text-violet-400">AI</h3>
              <p className="text-zinc-400 mt-2">Focused Development</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-4xl font-bold text-violet-400">Full Stack</h3>
              <p className="text-zinc-400 mt-2">Next.js & FastAPI</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-4xl font-bold text-violet-400">Open</h3>
              <p className="text-zinc-400 mt-2">Internships & SDE Roles</p>
            </div>

          </div>

        </div>

      </motion.div>

    </div>
  );
}