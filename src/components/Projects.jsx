import React from "react";
import { Code, Github, ExternalLink } from "lucide-react";
import ProjectPlaceholder from "../assets/project-placeholder.svg";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A dashboard for managing orders, analytics, and inventory.",
      tags: ["React", "Tailwind", "Firebase"],
      link: "#",
      github: "#",
    },
    {
      title: "TaskMaster Pro",
      description: "A task management platform like Trello with authentication.",
      tags: ["Next.js", "PostgreSQL", "Prisma"],
      link: "#",
      github: "#",
    },
    {
      title: "Weather AI",
      description: "Smart AI-powered weather insights and outfit suggestions.",
      tags: ["React Native", "OpenAI API"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="inline-flex px-3 py-1 text-green-400 bg-green-500/10 rounded-full mb-4">
              <Code size={16} className="mr-2" /> Projects
            </div>
            <h2 className="text-3xl md:text-4xl text-white font-bold">Recent Work</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-600 transition transform hover:scale-105 hover:shadow-lg">
              
              <div className="h-48 bg-slate-800 flex items-center justify-center text-slate-500">
                <img src={ProjectPlaceholder} alt="Project Preview" className="w-full h-full object-cover" />
              </div>

              <div className="p-6">
                <h3 className="text-xl text-white font-bold mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-sm border-t border-slate-800 pt-4">
                  <a href={p.github} className="text-slate-400 hover:text-white flex items-center">
                    <Github size={14} className="mr-1" /> Code
                  </a>
                  <a href={p.link} className="text-slate-400 hover:text-white flex items-center">
                    <ExternalLink size={14} className="mr-1" /> Demo
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;