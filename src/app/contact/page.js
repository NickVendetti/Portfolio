const contacts = [
  {
    label: "Email",
    value: "nrvendetti@gmail.com",
    href: "mailto:nrvendetti@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/NickVendetti",
    href: "https://github.com/NickVendetti",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nick-vendetti",
    href: "https://www.linkedin.com/in/nick-vendetti/",
  },
];

export default function Contact() {
  return (
    <main className="container mx-auto px-8 py-12 max-w-xl">
      <h1 className="text-4xl font-bold text-white">Contact</h1>
      <p className="mt-3 text-gray-300">
        I&apos;m open to new opportunities — feel free to reach out.
      </p>
      <div className="mt-8 space-y-4">
        {contacts.map(({ label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500/60 hover:bg-gray-800/80 transition group"
          >
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                {label}
              </p>
              <p className="text-blue-400 group-hover:text-blue-300 transition mt-0.5">
                {value}
              </p>
            </div>
            <span className="text-gray-600 group-hover:text-blue-400 transition text-xl">
              →
            </span>
          </a>
        ))}
      </div>
    </main>
  );
}
