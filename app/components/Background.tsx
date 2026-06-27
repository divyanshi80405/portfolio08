"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <motion.div
      className="fixed inset-0 -z-10 overflow-hidden"
      animate={{
        backgroundPosition: ["0px 0px", "40px 40px"],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      {/* Purple Glow */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,.18), transparent 70%)",
        }}
        animate={{
          x: [-150, 150, -150],
          y: [-80, 80, -80],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cyan Glow */}
      <motion.div
        className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,.12), transparent 70%)",
        }}
        animate={{
          x: [100, -100, 100],
          y: [60, -60, 60],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}