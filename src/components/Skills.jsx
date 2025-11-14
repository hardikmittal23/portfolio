import React from "react";
import { Terminal } from "lucide-react";

const Skills = () => {
  const skills = [
    { category: "Frontend", items: ["React", "Tailwind", "JS", "Next.js", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "Django", "Firebase", "MYSQL"] },
    { category: "Tools", items: ["Git", "GitHub", "Docker", "Vite", "Postman"] },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <div className="inline-flex px-3 py-1 text-purple-400 bg-purple-500/10 rounded-full mb-4">
            <Terminal size={16} className="mr-2" /> Tech Stack
          </div>

          <h2 className="text-4xl text-white font-bold mb-4">Technologies I Use</h2>
          <p className="text-slate-400">
            I choose the right tools for the job to build robust and beautiful interfaces.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((s, i) => (
            <div key={i} className="p-6 bg-slate-950 border border-slate-800 rounded-xl transition transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl text-white font-bold mb-6">{s.category}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 rounded-lg text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;