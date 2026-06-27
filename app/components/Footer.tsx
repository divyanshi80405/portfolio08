import { GitBranch } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-32">
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">

        <div>
          <h2 className="text-2xl font-bold">
            Divyanshi<span className="text-violet-500">.</span>
          </h2>

          <p className="text-zinc-500 mt-2">
            Turning ideas into intelligent software through AI, full-stack development, and research.
          </p>
        </div>

        <div className="flex gap-6 text-zinc-400">

          <a
            href="https://github.com/divyanshi80405"
            target="_blank"
            className="hover:text-violet-400 transition"
          >
            <GitBranch size={22} />
          </a>

          <a
            href="https://linkedin.com/in/divyanshi-negi"
            target="_blank"
            className="hover:text-violet-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:divyanshi80405@gmail.com"
            className="hover:text-violet-400 transition"
          >
            Email
          </a>

        </div>

        <p className="text-sm text-zinc-500">
          © 2026 Divyanshi Negi. All rights reserved.
        </p>

      </div>
    </footer>
  );
}