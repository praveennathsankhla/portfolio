import React from "react";
export default function Projects({projects}) {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
      <h3 className="text-xl font-semibold mb-8">Projects</h3>

      <div className="space-y-4">
        <div className="border border-neutral-800 bg-black p-4 rounded-lg h-60 text-white">
          <div className="text-white pb-4 flex items-center justify-center text-3xl font-bold">{projects.title}</div>
          <div className="text-sm text-white">
          <p className="pb-5 text-yellow-300">ABOUT : <span className="text-white/80"> {projects.about}</span></p>
          <p className="pb-5 text-yellow-300">TECH USED : <span className="text-white/80"> {projects.tech}</span></p>
          <p className="text-sm">
  LINK :
  <a
    href={projects.link}
    target="_blank"
    rel="noopener noreferrer"
    className="ml-2 text-yellow-300 underline cursor-pointer hover:text-white"
  >
    {projects.link}
  </a>
</p>


            </div>
          <p className="text-sm text-neutral-400">
          </p>
        </div>
      </div>
    </section>
  );
}
