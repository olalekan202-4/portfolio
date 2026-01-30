import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    // Add fade-in-up class to all sections on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
      
      <div className="min-h-screen bg-linear-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500">
        <Navbar />
        
        <main id="main-content">
          <Hero />
          <About />
          <Projects />
          <TechStack />
          <Contact />
        </main>
        
        {/* Enhanced Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">Olalekan Adejumo</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  © {new Date().getFullYear()} All rights reserved.
                </p>
              </div>
              
              <div className="flex flex-col md:items-end gap-4">
                <div className="flex gap-6">
                  <a 
                    href="https://github.com/olalekan202-4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
                    aria-label="GitHub profile"
                  >
                    <span className="text-lg">🐙</span>
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/olalekan-adejumo2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
                    aria-label="LinkedIn profile"
                  >
                    <span className="text-lg">💼</span>
                    <span className="hidden sm:inline">LinkedIn</span>
                  </a>
                  <a 
                    href="mailto:adejumoolalekan16@yahoo.com" 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
                    aria-label="Send email"
                  >
                    <span className="text-lg">✉️</span>
                    <span className="hidden sm:inline">Email</span>
                  </a>
                </div>
                
                <div className="flex gap-4">
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label="Back to top"
                  >
                    Back to top ↑
                  </button>
                  <span className="text-sm text-gray-500 dark:text-gray-500">
                    Built with React & Tailwind
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;