import React from "react";
import { Menu, X } from "lucide-react";

const Navigation = ({ activeSection, isMobileMenuOpen, setIsMobileMenuOpen, scrollToSection }) => {
  const navLinks = [
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-20">
        
        <span
          className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent cursor-pointer transition-colors hover:from-blue-400 hover:to-cyan-300"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Hardik's Portfolio
        </span>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`${
                activeSection === link.id ? "text-blue-400" : "text-slate-300 hover:text-white"
              } transition`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-slate-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block text-left py-2 text-slate-300 hover:text-white w-full"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;