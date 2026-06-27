"use client";

import Link from "next/link";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-zinc-800 bg-black/30">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        <h1 className="text-xl font-bold tracking-wide">
          Divyanshi<span className="text-violet-500">.</span>
        </h1>

        <div className="hidden md:flex gap-8">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-zinc-400 hover:text-violet-400 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <a
          href="/resume.pdf"
          className="rounded-full bg-violet-600 px-5 py-2 hover:bg-violet-500 transition"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}