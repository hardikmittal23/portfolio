import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

// List of titles to cycle through
const titles = ["Full Stack Developer", "AI/ML Enthusiast"];

const Hero = ({ scrollToSection }) => {
  // State to hold the current title's index
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to manage the fade animation
  const [isFading, setIsFading] = useState(false);

  // useEffect to manage the title-changing logic
  useEffect(() => {
    // Set an interval to change the title every 3 seconds (3000ms)
    const intervalId = setInterval(() => {
      setIsFading(true); // Start fading out

      // After the fade-out (500ms), change the text and fade back in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsFading(false); // Start fading in
      }, 500); // This MUST match the transition duration below

    }, 3000); // Change text every 3 seconds

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="h-screen flex items-center justify-center pt-16 bg-slate-900 relative">
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="relative text-center z-10 px-4">
        
        {/* --- UPDATED H2 with gradient and size --- */}
        <h2 className={`
          bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent 
          text-base uppercase mb-4 tracking-wider
          transition-opacity duration-500 
          ${isFading ? "opacity-0" : "opacity-100"}
        `}>
          {titles[currentIndex]}
        </h2>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-down">
          Building digital <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            experiences that matter.
          </span>
        </h1>

        <p className="text-slate-400 max-w-xl mx-auto mb-10 text-base sm:text-lg animate-fade-in-up">
          I build accessible, beautiful, and high-performance web applications using modern technologies.
        </p>

        {/* --- UPDATED BUTTONS/ICON section --- */}
        <div className="flex justify-center items-center gap-4 animate-fade-in-up">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            View Work
          </button>

          {/* <div className="text-slate-500 animate-bounce">
            <ChevronDown size={26} />
          </div> */}

          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border border-slate-700 text-slate-300 rounded-full hover:text-white"
          >
            Contact Me
          </button>
        </div>

        {/* --- This absolute div is no longer needed --- */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce">
          <ChevronDown size={26} />
        </div> 
       
      </div>
    </section>
  );
};

export default Hero;