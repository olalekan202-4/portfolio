import { useEffect, useState } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const roles = ["Frontend Developer", "React Specialist", "Web3 Enthusiast"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section id="hero" className="max-w-6xl mx-auto px-6 py-10 fade-in-up">
      {/* Location badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full mb-8">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">📍</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">Available for remote opportunities</span>
      </div>

      {/* Animated accent line */}
      <div className="w-16 h-1 bg-linear-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 mb-8 rounded-full animate-pulse" />

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
        <span className="linear-text">Olalekan Adejumo</span>
        <br className="hidden md:block" />
        <div className="mt-4 text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 dark:text-gray-200 h-12">
          {typedText}
          <span className="animate-pulse">|</span>
        </div>
      </h1>

      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-8">
        Crafting exceptional digital experiences with clean code, modern design, and user-focused interfaces.
        Currently seeking <span className="font-semibold text-blue-600 dark:text-blue-400">frontend internships & junior roles</span>.
      </p>

      <div className="flex flex-wrap gap-4 mt-10">
        <a
          href="#projects"
          className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg font-medium hover:scale-105 transition-all duration-300 hover:shadow-xl flex items-center gap-2 group"
        >
          <span>View Projects</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border-2 border-gray-700 dark:border-gray-400 rounded-lg font-medium hover:scale-105 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 text-gray-900 dark:text-gray-100 flex items-center gap-2"
        >
          <span>Get in Touch</span>
          <span>📱</span>
        </a>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-7 mt-16 pt-4 border-t border-gray-200 dark:border-gray-800">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-white">2+</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-white">8+</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Projects Completed</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-white">100%</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Client Satisfaction</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;