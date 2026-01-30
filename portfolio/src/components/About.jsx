const About = () => {
  const skills = [
    { name: "React & Next.js", level: 90, category: "Frontend" },
    { name: "Tailwind CSS", level: 95, category: "Styling" },
    { name: "JavaScript/TypeScript", level: 85, category: "Languages" },
    // { name: "UI/UX Design", level: 80, category: "Design" },
    { name: "Firebase/Supabase", level: 75, category: "Backend" },
    { name: "Web3/Blockchain", level: 75, category: "Specialized" },
    { name: "Git & GitHub", level: 85, category: "Tools" },
    { name: "REST APIs", level: 85, category: "Integration" },
  ];

  const experiences = [
    { year: "2024-Present", role: "Freelance Frontend Developer", company: "Various Clients" },
    { year: "2024", role: "Web3 Frontend Developer", company: "LilGarg NFTs" },
    { year: "2024", role: "Frontend Intern", company: "E-commerce Projects" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-28 md:py-36 fade-in-up">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full" />
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight linear-text">
              About Me
            </h3>
          </div>

          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300 max-w-3xl mb-6">
            I'm a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Frontend Developer</span> with 2+ years of experience building modern web applications. 
            I specialize in creating responsive, accessible, and performant user interfaces using React and modern web technologies.
          </p>

          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300 max-w-3xl mb-6">
            My journey includes working on diverse projects from e-commerce platforms to Web3 applications, 
            where I've developed a strong understanding of user experience, clean code architecture, and collaborative development.
          </p>

          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 mb-8">
            <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">Experience Timeline</h4>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-3 h-3 mt-2 rounded-full bg-blue-500 shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">{exp.role}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{exp.company} • {exp.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300 max-w-3xl">
            Currently seeking an <span className="font-semibold">internship or junior frontend role</span> where I can contribute to meaningful products, 
            learn from experienced teams, and grow as a professional developer.
          </p>
        </div>

        <div className="lg:w-1/3">
          <h4 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <span>🛠️</span> Technical Skills
          </h4>
          
          {/* Skill categories */}
          <div className="space-y-6">
            {["Frontend", "Styling", "Languages", "Tools"].map((category) => (
              <div key={category}>
                <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-3">{category}</h5>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {skill.name}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          {/* <div className="mt-10 p-4 bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-900/50 dark:to-gray-800/50 rounded-xl">
            <h5 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">🎓 Education</h5>
            <p className="text-gray-700 dark:text-gray-300">B.Sc. Computer Science</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">University of [Your University]</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;