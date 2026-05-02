const techColors = {
  React: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
  "Next.js": "bg-slate-500/30 text-slate-300 border border-slate-500/30",
  Express: "bg-green-700/20 text-green-400 border border-green-700/30",
  PostgreSQL: "bg-cyan-600/20 text-cyan-300 border border-cyan-600/30",
  "Node.js": "bg-green-500/20 text-green-300 border border-green-500/30",
  TailwindCSS: "bg-sky-500/20 text-sky-300 border border-sky-500/30",
  "C#": "bg-purple-500/20 text-purple-300 border border-purple-500/30",
  "ASP.NET": "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",
};
const defaultBadge = "bg-gray-700/40 text-gray-300 border border-gray-600/40";

const projects = [
  {
    name: "Photo Finder",
    description:
      "A full-stack platform for discovering and browsing photographers by style and location. Features user auth, profile creation, and a dynamic search system. Backend currently being rebuilt with C# and ASP.NET.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "TailwindCSS", "C#", "ASP.NET"],
    github: "https://github.com/NickVendetti/photo-finder",
    demo: "https://photo-finder-ten.vercel.app/",
  },
  {
    name: "Jobly",
    description:
      "A job search app where users can browse companies, explore listings, and apply for roles — with JWT authentication and a RESTful Express/PostgreSQL backend.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/NickVendetti/react-jobly",
    demo: null,
  },
  {
    name: "Portfolio Website",
    description:
      "This site — a clean, responsive developer portfolio built with Next.js App Router and deployed on Vercel.",
    techStack: ["React", "Next.js", "TailwindCSS"],
    github: "https://github.com/NickVendetti/Portfolio",
    demo: "",
  },
];

export default function Projects() {
  return (
    <main className="container mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-white">Projects</h1>
      <p className="text-gray-400 mt-2">A selection of things I&apos;ve built.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden flex flex-col hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition"
          >
            <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
            <div className="p-6 flex flex-col flex-1">
            <h2 className="text-xl font-bold text-white">{project.name}</h2>
            <p className="text-gray-300 mt-2 text-sm leading-relaxed flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`text-xs px-2 py-1 rounded-full font-medium ${techColors[tech] ?? defaultBadge}`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-3">
              <a
                href={project.github}
                className="text-sm text-gray-300 hover:text-white border border-gray-600 hover:border-gray-400 px-3 py-1.5 rounded transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {project.demo ? (
                <a
                  href={project.demo}
                  className="text-sm text-blue-400 hover:text-blue-300 border border-blue-500/50 hover:border-blue-400 px-3 py-1.5 rounded transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>
              ) : (
                <span className="text-xs text-gray-600 self-center">
                  Run locally
                </span>
              )}
            </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
