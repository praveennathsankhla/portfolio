
import React from "react";
const ProjectBox = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border w-100 m-4 p-6 hover:shadow-md transition">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <span className="text-sm text-gray-500">{project.year}</span>
      </div>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <a href={project.link} className=" cursor-pointer text-blue-500 hover:underline mb-4 block">
        View Project
      </a>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, index) => (
          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectBox;