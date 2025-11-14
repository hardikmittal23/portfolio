import React from "react";
import { User } from "lucide-react";

const About = () => (
  <section id="about" className="py-20 md:py-24 bg-slate-950">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center px-6">

      <div>
        <div className="inline-flex items-center px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full mb-3">
          <User size={16} className="mr-2" /> About Me
        </div>

        <h2 className="text-4xl font-bold text-white mb-4">
          Passionate about solving problems through code.
        </h2>

        <p className="text-slate-400 mb-4">
          I am a software engineer who enjoys building modern, efficient, and visually appealing products.
        </p>

        <p className="text-slate-400">
          When I'm not coding, I read books, chill with friends, or explore new tech.
        </p>
      </div>

      <div className="relative group transition transform hover:scale-105 hover:shadow-lg">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-25 blur rounded-lg group-hover:opacity-60 transition"></div>

        <div className="relative bg-slate-900 border border-slate-800 rounded-lg p-8">
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <pre className="text-sm text-slate-300 font-mono">
{`const developer = {
  name: "Hardik Mittal",
  role: "Student & Software Engineer",
  location: "India",
  hobbies: ["reading", "gaming", "coding"],
  loves: ["Python", "C++", "Clean Code"]
}`}
          </pre>
        </div>
      </div>

    </div>
  </section>
);

export default About;