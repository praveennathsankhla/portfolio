import React, { useState } from "react";

export default function Projects({ projects }) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const next = () => {
    if (index < projects.length - 1) setIndex(index + 1);
  };

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
      <h3 className="text-xl font-semibold mb-8">Projects</h3>

      {/* OUTER WRAPPER (for arrows outside) */}
      <div className="flex items-center gap-4">

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          disabled={index === 0}
          className="bg-black text-white px-3 py-2 rounded disabled:opacity-40"
        >
          ◀
        </button>

        {/* SLIDER AREA */}
        <div className="relative overflow-hidden flex-1">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {projects.map((project, i) => (
              <div key={i} className="min-w-full">

                {/* ✅ YOUR CARD (UNCHANGED DESIGN) */}
                <div className="border border-neutral-800 bg-black p-4 rounded-lg h-60 text-white">
                  <div className="text-white pb-4 flex items-center justify-center text-3xl font-bold">
                    {project.title}
                  </div>

                  <div className="text-sm text-white">
                    <p className="pb-5 text-yellow-300">
                      ABOUT : <span className="text-white/80">{project.about}</span>
                    </p>

                    <p className="pb-5 text-yellow-300">
                      TECH USED : <span className="text-white/80">{project.tech}</span>
                    </p>

                    <p className="text-sm">
                      LINK :
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-yellow-300 underline cursor-pointer hover:text-white"
                      >
                        {project.link}
                      </a>
                    </p>
                  </div>
                </div>
                {/* ✅ END CARD */}

              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          disabled={index === projects.length - 1}
          className="bg-black text-white px-3 py-2 rounded disabled:opacity-40"
        >
          ▶
        </button>

      </div>
    </section>
  );
}
