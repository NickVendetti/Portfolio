export default function About() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-300">About Me</h1>
      <p className="mt-4 text-lg text-gray-500">
        Hi, I&apos;m Nick Vendetti, a passionate web developer with experience
        in JavaScript, React, Node.js, Express, PostgreSQL, and full-stack
        development. I love building clean, user-friendly applications and
        solving real-world problems through code.
      </p>

      <h2 className="text-2xl font-semibold mt-6">My Background</h2>
      <p className="text-lg text-gray-500 mt-2">
        I started my journey in web development through a rigorous coding
        bootcamp, where I gained hands-on experience in modern web technologies,
        including frontend and backend development. During the program, I built
        full-stack applications, worked with RESTful APIs, implemented user
        authentication, and learned best practices in software development.
        Before that, I worked in automotive repair and performance upgrades, but
        my passion for technology and problem-solving led me to transition into
        software development.
      </p>

      <h2 className="text-2xl font-semibold mt-6">My Skills</h2>
      <ul className="mt-2 text-lg text-gray-500 list-disc list-inside">
        <li>Frontend: JavaScript (ES6+), React, HTML, CSS, TailwindCSS</li>
        <li>
          Backend: Node.js, Express.js, PostgreSQL, RESTful API Development
        </li>
        <li>Database: SQL, PostgreSQL, Database Design & Queries</li>
        <li>
          Other: Git & GitHub, Authentication (JWT, bcrypt), Responsive Design,
          Debugging, Agile Development
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">What I&apos;m Looking For</h2>
      <p className="text-lg text-gray-500 mt-2">
        I&apos;m currently looking for a junior web developer position where I
        can apply my knowledge in frontend and backend technologies to
        real-world projects. I&apos;m particularly interested in working with
        modern JavaScript frameworks, building scalable applications, and
        collaborating with a team to develop innovative software solutions.
        I&apos;m open to frontend, backend, or full-stack roles, and I&apos;m
        excited about growing as a developer while making an impact through
        technology.
      </p>
    </main>
  );
}
