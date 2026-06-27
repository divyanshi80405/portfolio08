"use client";

import { useState } from "react";

type Props = {
  project: any;
};

export default function ProjectCard({ project }: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-[420px] cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full duration-700`}
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}

        <div
          className="absolute inset-0 glass rounded-3xl overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-57 w-full object-cover transition duration-500 hover:scale-110"
          />

          <div className="p-6">

            <div className="inline-block bg-violet-500/20 text-violet-300 text-xs px-3 py-1 rounded-full mb-4">
  Featured Project
</div>

            <h3 className="text-2xl font-bold mb-3">
              {project.title}
            </h3>

            <p className="text-zinc-400">
              {project.description}
            </p>

            <p className="mt-8 text-violet-400">
              Click to view details →
            </p>

          </div>
        </div>

        {/* BACK */}

        <div
          className="absolute inset-0 glass rounded-3xl p-6 flex flex-col justify-between"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <div>

            <h3 className="text-2xl font-bold mb-5">
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-2">

              {project.tech.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full border border-violet-500/40 bg-violet-500/10 text-violet-300 text-sm"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

          <div className="flex gap-4">

            <a
              href={project.live}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="bg-violet-600 px-5 py-3 rounded-xl"
            >
              Live
            </a>

            <a
              href={project.github}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="border border-zinc-700 px-5 py-3 rounded-xl"
            >
              GitHub
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}