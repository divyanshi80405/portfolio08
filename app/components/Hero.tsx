"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-8">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-violet-400 mb-5"
        >
          AI • Software Engineering • Machine Learning

          
        </motion.p>

        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-300 mb-4">
  Hi, I'm <span className="text-violet-400">Divyanshi Negi</span>
</h2>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.95] tracking-tight"
        >
          Building AI
<br />
Experiences
<br />
That Matter.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 text-zinc-400 text-xl max-w-2xl leading-8"
        >
          Final-year Computer Science student focused on Artificial Intelligence,
Machine Learning, and Full-Stack Development.

I enjoy transforming ideas into intelligent products using Python,
FastAPI, Next.js, React, TypeScript, and modern AI frameworks.
        </motion.p>

        <div className="flex gap-5 mt-10">

          <a
            href="#projects"
            className="bg-violet-600 hover:bg-violet-500 px-7 py-4 rounded-2xl flex items-center gap-2 transition"
          >
            View Projects
            <ArrowRight size={18}/>
          </a>

        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">

  <div className="glass rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-violet-400">8+</h3>
    <p className="text-zinc-400 mt-2">Projects</p>
  </div>

  <div className="glass rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-violet-400">AI</h3>
    <p className="text-zinc-400 mt-2">Research</p>
  </div>

  <div className="glass rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-violet-400">3+</h3>
    <p className="text-zinc-400 mt-2">Hackathons</p>
  </div>

  <div className="glass rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-violet-400">2027</h3>
    <p className="text-zinc-400 mt-2">Graduate</p>
  </div>

</div>

      </div>
    </section>
  );
}