import { useState } from "react";

const projects = [
  { 
    name: "ShopMafs", 
    description: "Full-featured e-commerce platform with seller authentication, cart.", 
    link: "https://shopmafs.com",
    category: "E-commerce",
    tech: ["React", "Tailwind", "Firebase"]
  },
  { 
    name: "Nile", 
    description: "Business website and digital platform with CMS integration and responsive design.", 
    link: "https://nile.ng",
    category: "Business",
    tech: ["React", "Tailwind", "API"]
  },
  { 
    name: "SurplusShare", 
    description: "Platform for sharing surplus food and goods with real-time notifications.", 
    link: "https://surplushare.com",
    category: "Social",
    tech: ["React", "Firebase", "Tailwind"]
  },
  { 
    name: "RustyRigs", 
    description: "Web3 NFT mining and claiming platform with wallet integration.", 
    link: "https://rustyrigs.club",
    category: "Web3",
    tech: ["React", "Web3", "Tailwind"]
  },
  { 
    name: "LilGarg", 
    description: "Web3 NFT minting platform with gallery and collection features.", 
    link: "https://lilgarg.xyz",
    category: "Web3",
    tech: ["React", "Web3", "API"]
  },
  { 
    name: "LilGarg Revenue", 
    description: "Revenue and analytics dashboard with data visualization.", 
    link: "https://revenue.lilgarg.xyz",
    category: "Dashboard",
    tech: ["React", "Charts", "API"]
  },
  { 
    name: "GargPad", 
    description: "NFT launchpad and minting interface with multi-wallet support.", 
    link: "https://gargpad.lilgarg.xyz",
    category: "Web3",
    tech: ["React", "Web3", "UI"]
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-32 md:py-40 fade-in-up">
      <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
        Selected Projects
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
        A showcase of real-world applications I've built, highlighting different domains and technologies.
      </p>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === category
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl border border-gray-200 dark:border-gray-800
            p-6 transition-all duration-500 hover:-translate-y-2 glow-hover
            hover:shadow-2xl dark:hover:shadow-black/50 overflow-hidden
            before:absolute before:inset-0 before:bg-linear-to-br before:from-blue-50/0 before:via-transparent before:to-purple-50/0
            before:transition-all before:duration-500 hover:before:from-blue-50/20 hover:before:to-purple-50/20
            dark:before:from-blue-900/0 dark:before:to-purple-900/0 dark:hover:before:from-blue-900/10 dark:hover:before:to-purple-900/10"
          >
            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span 
                  key={i}
                  className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h4 className="text-lg font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.name}
            </h4>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {project.description}
            </p>

            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
              <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                {project.category}
              </span>
              <span className="text-sm text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Visit →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;