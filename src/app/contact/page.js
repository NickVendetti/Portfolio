export default function Contact() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-400">Contact</h1>
      <p className="mt-4 text-lg text-gray-700">
        Feel free to reach out to me through any of the following platforms:
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Email</h2>
          <p className="text-lg text-gray-600">nrvendetti@gmail.com</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">GitHub</h2>
          <a
            href="https://github.com/NickVendetti"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/NickVendetti
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">LinkedIn</h2>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/nick-vendetti/
          </a>
        </div>
      </div>
    </main>
  );
}
