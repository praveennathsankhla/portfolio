import React from "react";
import {
  Database,
  Cloud,
  Snowflake,
  Star,
  Terminal,
  Box,
} from "lucide-react";

export default function TechStack() {
  const techs = [
    { name: "Python", icon: "🐍" },
    { name: "SQL", icon: <Database size={26} /> },
    { name: "AWS", icon: <Cloud size={26} /> },
    { name: "OpenAI", icon: "🤖" },
    { name: "Kubernetes", icon: "☸️" },
    { name: "Terraform", icon: "🏗️" },
    { name: "Apache Spark", icon: <Star size={26} /> },
    { name: "Docker", icon: <Box size={26} /> },
    { name: "Unix / Linux", icon: <Terminal size={26} /> },
    { name: "Snowflake", icon: <Snowflake size={26} /> },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "ETL Pipelines", icon: "⚡" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-28 text-center">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-black">
        My Tech Stack
      </h2>

      <p className="mt-4 text-neutral-500 max-w-xl mx-auto">
        Technologies I work with to build scalable and intelligent data solutions
      </p>

      {/* Grid */}
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="rounded-xl border border-neutral-200 p-8
                       flex flex-col items-center justify-center
                       hover:shadow-md transition"
          >
            <div className="mb-4 text-2xl">
              {tech.icon}
            </div>
            <p className="font-medium text-sm">
              {tech.name}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
