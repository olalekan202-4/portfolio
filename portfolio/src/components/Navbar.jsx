import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">Olalekan</h1>
          <div className="w-12 h-12"></div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tight gradient-text">
          Olalekan
        </h1>

        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection("projects")}
            className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
              activeSection === "projects" 
                ? "text-blue-600 dark:text-blue-400" 
                : "text-gray-600 dark:text-gray-400"
            }`}
          >
            Projects
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
              activeSection === "contact" 
                ? "text-blue-600 dark:text-blue-400" 
                : "text-gray-600 dark:text-gray-400"
            }`}
          >
            Contact
          </button>

          {/* Enhanced theme toggle with clear visual indicator */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="
              relative w-12 h-12 rounded-full
              border border-gray-200 dark:border-gray-700
              flex items-center justify-center
              transition-all duration-500 hover:scale-110
              hover:shadow-lg dark:hover:shadow-gray-800/50
              overflow-hidden bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900
            "
          >
            {/* Sun/Moon icon */}
            <div className="relative w-6 h-6">
              {/* Sun rays for light mode */}
              <div className={`
                absolute inset-0 rounded-full transition-all duration-500
                ${theme === 'dark' ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}
                bg-gradient-to-br from-yellow-400 to-orange-500
              `} />
              
              {/* Moon for dark mode */}
              <div className={`
                absolute inset-0 rounded-full transition-all duration-500
                ${theme === 'dark' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                bg-gradient-to-br from-gray-300 to-gray-500
              `} />
              
              {/* Moon crater */}
              <div className={`
                absolute top-1 left-2 w-2 h-2 rounded-full transition-all duration-500
                ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}
                bg-gradient-to-br from-gray-400 to-gray-600
              `} />
            </div>
            
            {/* Theme indicator text */}
            <span className="absolute -bottom-6 text-xs font-medium text-gray-500 dark:text-gray-400">
              {theme === 'dark' ? 'Dark' : 'Light'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;