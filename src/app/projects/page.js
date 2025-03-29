export default function Projects() {
  const projects = [
    {
      name: "Photo Finder",
      description:
        "A platform for discovering photographers based on style and location.",
      techStack: ["React", "Express", "PostgreSQL", "Node.js", "TailwindCSS"],
      github: "https://github.com/NickVendetti/photo-finder",
      demo: null
    },
    {
      name: "Jobly",
      description:
        "A job board where users can search and apply for jobs in real-time.",
      techStack: ["React", "Express", "PostgreSQL", "Node.js"],
      github: "https://github.com/NickVendetti/react-jobly",
      demo: null
    },
    {
      name: "Portfolio Website",
      description:
        "A website I built and deployed as a landing page for future employers to check out my work. THIS IS THE SITE!",
      techStack: ["React", "Next.js", "TailwindCSS"],
      github: "https://github.com/NickVendetti/Portfolio",
      demo: ""
    }
  ];

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-400">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) =>
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold text-black">
              {project.name}
            </h2>
            <p className="text-gray-600">
              {project.description}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Tech: {project.techStack.join(", ")}
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href={project.github}
                className="text-blue-500 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {project.demo
                ? <a
                    href={project.demo}
                    className="text-green-500 hover:text-green-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                : <span className="text-gray-500">(Can be run locally)</span>}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
