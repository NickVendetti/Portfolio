import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-6">
      <main className="max-w-2xl">
        <h1 className="text-5xl font-extrabold">Hi, I&apos;m Nick!</h1>
        <p className="text-xl text-gray-400 mt-4">
          Web developer specializing in React, Next.js, and full-stack
          applications.
        </p>
        <div className="mt-6">
          <a
            href="/projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
          >
            View My Work
          </a>
        </div>
      </main>
      {/*
      <div className="mt-10">
        <Image
          src="image"
          alt="Developer working"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
      */}
    </div>
  );
}
