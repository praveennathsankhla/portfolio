import React from "react";
import { Star, Brain, Cloud, Server } from "lucide-react";

export default function Expertise() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-28 text-center">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-black">
        My Expertise
      </h2>

      <p className="mt-4 text-neutral-500 max-w-xl mx-auto">
        Specialized in building intelligent data solutions and AI-powered applications
      </p>

      {/* Top Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Card 1 */}
        <div className="rounded-xl border border-neutral-200 p-8">
          <div className="w-10 h-10 mx-auto mb-6 flex items-center justify-center rounded-lg bg-neutral-100">
            <Star size={18} />
          </div>
          <h3 className="font-semibold mb-3">Data Engineering</h3>
          <p className="text-sm text-neutral-500 leading-relaxed">
            Building robust ETL pipelines, data modeling, and data warehouse migration
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-xl border border-neutral-200 p-8">
          <div className="w-10 h-10 mx-auto mb-6 flex items-center justify-center rounded-lg bg-neutral-100">
            <Brain size={18} />
          </div>
          <h3 className="font-semibold mb-3">AI Integration</h3>
          <p className="text-sm text-neutral-500 leading-relaxed">
            Implementing cutting-edge AI solutions with LLMs and ML models
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-xl border border-neutral-200 p-8">
          <div className="w-10 h-10 mx-auto mb-6 flex items-center justify-center rounded-lg bg-neutral-100">
            <Cloud size={18} />
          </div>
          <h3 className="font-semibold mb-3">Cloud Infrastructure</h3>
          <p className="text-sm text-neutral-500 leading-relaxed">
            AWS, Kubernetes, and Terraform for scalable cloud solutions
          </p>
        </div>

        {/* Card 4 */}
        <div className="rounded-xl border border-neutral-200 p-8">
          <div className="w-10 h-10 mx-auto mb-6 flex items-center justify-center rounded-lg bg-neutral-100">
            <Server size={18} />
          </div>
          <h3 className="font-semibold mb-3">Backend Systems</h3>
          <p className="text-sm text-neutral-500 leading-relaxed">
            Python, RESTful APIs, MCP Server, and distributed systems architecture
          </p>
        </div>

      </div>

      {/* Bottom Wide Card */}
      <div className="mt-10 max-w-3xl mx-auto rounded-xl border border-neutral-200 p-10">

        <div className="w-10 h-10 mx-auto mb-6 flex items-center justify-center rounded-lg bg-neutral-100">
          <Brain size={18} />
        </div>

        <h3 className="font-semibold mb-4">
          Continuous Learning Journey
        </h3>

        <p className="text-sm text-neutral-600 leading-relaxed">
          I embrace the mindset of a perpetual learner in the rapidly evolving field
          of AI and data engineering. Every project is an opportunity to explore new
          technologies, implement innovative solutions, and push the boundaries of
          what’s possible with modern data stacks and AI technologies.
        </p>
      </div>

    </section>
  );
}

