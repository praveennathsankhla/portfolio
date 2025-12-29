import React from "react";
export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-8 py-25 flex justify-between gap-16">

      {/* LEFT SIDE – MAIN HERO CONTENT */}
      <div className="max-w-3xl">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 mb-6
                        rounded-full border border-neutral-300 text-sm text-neutral-600">
          <span className="w-2 h-2 bg-neutral-800 rounded-full"></span>
          Open to opportunities
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
         PRAVEEN NATH
        </h1>

        {/* Title */}
        <h2 className="text-4xl md:text-4xl font-bold text-neutral-500 mt-2">
          WEB DEVELOPER
        </h2>

        {/* Description */}
        <div className="mt-8 space-y-3 text-neutral-800 text-lg max-w-2xl">
          <p>
            Designing scalable architectures that bridge data, AI,
            and business impact.
          </p>
          <p>
            Applying systems thinking to turn petabyte-scale data
            into real-time intelligence.
          </p>
          <p>
            Building AI agents and RAG pipelines that deliver
            seven-figure impact.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2
                       px-6 py-3 rounded-lg bg-black text-white
                       text-sm font-medium hover:bg-neutral-800 transition"
          >
            Schedule a meeting
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2
                       px-6 py-3 rounded-lg border border-neutral-300
                       text-sm font-medium text-neutral-700
                       hover:bg-neutral-100 transition"
          >
            View work →
          </a>
        </div>
      </div>

      {/* RIGHT SIDE – VERTICAL NAV BUTTONS */}
      <div className="hidden md:flex flex-col gap-4 text-sm text-neutral-500 mt-12">
        <a href="/projects" className="hover:text-white transition inline-flex items-center gap-2
                       px-6 py-3 rounded-lg bg-black text-violet-500
                       text-sm font-medium hover:bg-neutral-800 transition
                       inline-flex items-center gap-2
                       px-6 py-3 rounded-lg bg-black text-white
                       text-sm font-medium hover:bg-neutral-800 transition">Projects</a>
        <a href="#tech" className="hover:text-white transition
        inline-flex items-center gap-2
                       px-6 py-3 rounded-lg bg-black text-white
                       text-sm font-medium hover:bg-neutral-800 transition">Skills</a>
        <a href="#projects" className="hover:text-white transition
        inline-flex items-center gap-2
                       px-6 py-3 rounded-lg bg-black text-violet-300
                       text-sm font-medium hover:bg-neutral-800 transition">Articles</a>
        <a href="/blogs" className="hover:text-white transition
        inline-flex items-center gap-2
                       px-6 py-3 rounded-lg bg-black text-violet-300
                       text-sm font-medium hover:bg-neutral-800 transition">Blogs</a>
                       <a href="#projects" className="hover:text-white transition
        inline-flex items-center gap-2
                       px-6 py-3 rounded-lg bg-black text-violet-300
                       text-sm font-medium hover:bg-neutral-800 transition">Research</a>
        <a href="#contact" className="hover:text-white transition
        inline-flex items-center gap-2
                       px-6 py-3 rounded-lg bg-black text-white
                       text-sm font-medium hover:bg-neutral-800 transition">Contact</a>
      </div>

    </section>
  );
}
