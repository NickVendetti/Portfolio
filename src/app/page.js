export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)] pointer-events-none" />
      <div className="relative max-w-2xl">
        <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4">
          Full-Stack Developer
        </p>
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-violet-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent pb-2">
          Nick Vendetti
        </h1>
        <p className="text-xl text-gray-300 mt-6 leading-relaxed">
          From torque wrenches to TypeScript — I bring the same precision and
          attention to detail from automotive performance into building fast,
          scalable web applications.
        </p>
        <p className="text-sm text-gray-400 mt-4 font-mono tracking-wide">
          React · Node.js · PostgreSQL · C# · ASP.NET
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
          >
            View My Work
          </a>
          <a
            href="/about"
            className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg text-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition"
          >
            About Me
          </a>
        </div>
      </div>
    </main>
  );
}
