"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-8 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="uppercase tracking-[0.3em] text-violet-400 mb-3">
        CONTACT
      </p>

      <h2 className="text-5xl md:text-6xl font-bold mb-6">
        Let's Build Something Amazing
      </h2>

      <p className="text-zinc-400 max-w-2xl mx-auto leading-8 mb-14">
        Whether it's AI, machine learning, full-stack development, research,
        or exciting opportunities, I'd love to connect and collaborate.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        <a
          href="mailto:divyanshi80405@gmail.com"
          className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-300"
        >
          <p className="text-violet-400 text-sm uppercase tracking-widest mb-3">
            Email
          </p>

          <h3 className="text-xl font-semibold">
            Get in Touch
          </h3>

          <p className="text-zinc-500 mt-3 text-sm">
            Send me an email anytime.
          </p>
        </a>

        <a
          href="https://github.com/divyanshi80405"
          target="_blank"
          className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-300"
        >
          <p className="text-violet-400 text-sm uppercase tracking-widest mb-3">
            GitHub
          </p>

          <h3 className="text-xl font-semibold">
            View My Code
          </h3>

          <p className="text-zinc-500 mt-3 text-sm">
            Projects, experiments & open source.
          </p>
        </a>

        <a
          href="https://linkedin.com/in/divyanshi-negi"
          target="_blank"
          className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-300"
        >
          <p className="text-violet-400 text-sm uppercase tracking-widest mb-3">
            LinkedIn
          </p>

          <h3 className="text-xl font-semibold">
            Let's Connect
          </h3>

          <p className="text-zinc-500 mt-3 text-sm">
            Connect professionally and stay in touch.
          </p>
        </a>

      </div>
    </motion.div>
  );
}