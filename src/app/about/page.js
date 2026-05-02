const skillCategories = [
  {
    label: "Frontend",
    pillClass: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
    headingClass: "text-blue-400",
    skills: ["JavaScript (ES6+)", "React", "Next.js", "HTML", "CSS", "TailwindCSS"],
  },
  {
    label: "Backend",
    pillClass: "bg-green-500/20 text-green-300 border border-green-500/30",
    headingClass: "text-green-400",
    skills: ["Node.js", "Express.js", "C#", "ASP.NET", "RESTful APIs"],
  },
  {
    label: "Database",
    pillClass: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
    headingClass: "text-cyan-400",
    skills: ["PostgreSQL", "SQL"],
  },
  {
    label: "Tooling",
    pillClass: "bg-purple-500/20 text-purple-300 border border-purple-500/30",
    headingClass: "text-purple-400",
    skills: ["Git & GitHub", "JWT / bcrypt", "Agile", "Responsive Design"],
  },
];

export default function About() {
  return (
    <main className="container mx-auto px-8 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold text-white">About Me</h1>
      <p className="mt-4 text-lg text-gray-300 leading-relaxed">
        Hi, I&apos;m Nick Vendetti — a full-stack web developer who loves building
        clean, user-focused applications and solving real problems through code.
      </p>

      <h2 className="text-2xl font-semibold mt-10 text-white border-l-4 border-blue-500 pl-3">My Background</h2>
      <p className="text-gray-300 mt-3 leading-relaxed">
        My path into software wasn&apos;t linear — and I think that&apos;s a strength.
        I spent years in automotive repair and performance upgrades, where precision,
        problem-solving under pressure, and attention to detail weren&apos;t optional.
        When I decided to make the leap into tech, I threw myself into a rigorous
        coding bootcamp: full-stack apps, RESTful APIs, user authentication, modern
        web technologies. That same mechanical mindset — diagnose, understand, fix —
        translates directly into debugging, architecture decisions, and shipping
        reliable software.
      </p>

      <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
        <p className="text-blue-300 text-xs font-semibold uppercase tracking-wider mb-1">
          Currently Exploring
        </p>
        <p className="text-gray-300 text-sm">
          Expanding into C# and ASP.NET — applying my full-stack foundation to the
          .NET ecosystem.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-10 text-white border-l-4 border-blue-500 pl-3">Skills</h2>
      <div className="mt-4 grid sm:grid-cols-2 gap-6">
        {skillCategories.map(({ label, pillClass, headingClass, skills }) => (
          <div key={label}>
            <h3
              className={`text-sm font-semibold uppercase tracking-wider mb-3 ${headingClass}`}
            >
              {label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className={`text-xs px-3 py-1 rounded-full font-medium ${pillClass}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-10 text-white border-l-4 border-blue-500 pl-3">
        What I&apos;m Looking For
      </h2>
      <p className="text-gray-300 mt-3 leading-relaxed">
        I&apos;m looking for a developer role — frontend, backend, or full-stack —
        where I can keep growing, ship real product, and work with a team that
        cares about quality. Particularly excited about opportunities involving
        modern JavaScript frameworks or C# / ASP.NET, building scalable systems,
        and working on problems that actually matter.
      </p>
    </main>
  );
}
