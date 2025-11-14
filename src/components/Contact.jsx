import React from "react";
import { Mail, Github, Linkedin, Briefcase } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-24 bg-slate-900 text-center">
    <div className="inline-flex items-center px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full mb-4">
      <Mail size={16} className="mr-2" /> Contact
    </div>

    <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">Let's work together</h2>

    <p className="text-slate-400 max-w-xl mx-auto mb-10 text-base sm:text-lg">
      I'm open to new opportunities and collaborations. Feel free to reach out!
    </p>

    <a
      href="mailto:mittalhardik2007@gmail.com"
      className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700"
    >
      Send Email
    </a>

    <div className="flex justify-center gap-8 mt-12">
      <a href="https://github.com/hardikmittal23" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
        <Github size={28} />
      </a>
      <a href="https://linkedin.com/in/hardikmittal1/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
        <Linkedin size={28} />
      </a>
      <a href="https://twitter.com/hardikmittal149" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
        <Briefcase size={28} /> 
      </a>
    </div>
  </section>
);

export default Contact;