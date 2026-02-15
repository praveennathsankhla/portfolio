import React from 'react'

import { Github, Linkedin, Mail, Moon } from "lucide-react";

export default function Navbaar() {
  return (
    <header className="w-full border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT - LOGO */}
        <a href="/home" className="text-2xl font-eagle tracking-wide cursor-pointer">
          Praveen
        </a>

        {/* CENTER - LINKS */}
        <nav className="hidden md:flex gap-8 text-sm text-neutral-600 dark:text-neutral-400">
          <a href="#about" className="hover:text-black dark:hover:text-white">About</a>
          <a href="#tech" className="hover:text-black dark:hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-black dark:hover:text-white">Projects</a>
          <a href="/blogs" className="hover:text-black dark:hover:text-white">Blogs</a>
          <a href="/articles" className="hover:text-black dark:hover:text-white">Articles</a>
          <a href="/research" className="hover:text-black dark:hover:text-white">Research</a>
          <a href="#Contact" className="hover:text-black dark:hover:text-white">Contact</a>
        </nav>

        {/* RIGHT - ICONS + BUTTON */}
        <div className="flex items-center gap-4">
          <button className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white">
            <Moon size={18} />
          </button>

          <a href="https://github.com" target="_blank" className="hover:text-black dark:hover:text-white">
            <Github size={18} />
          </a>

          <a href="https://linkedin.com" target="_blank" className="hover:text-black dark:hover:text-white">
            <Linkedin size={18} />
          </a>

          <a href="mailto:pnath6745@gmail.com" className="hover:text-black dark:hover:text-white">
            <Mail size={18} />
          </a>

          <a
            href="/resume.pdf"
            className="ml-2 px-4 py-2 text-sm rounded-lg bg-black text-white hover:bg-neutral-800"
          >
            Resume
          </a>
        </div>

      </div>
    </header>
  );
}
