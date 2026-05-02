import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import NavLinks from "./components/NavLinks";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nick Vendetti — Full-Stack Developer",
  description:
    "Full-stack developer specializing in React, Node.js, PostgreSQL, and C#/ASP.NET. Browse my projects and get in touch.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed top-0 left-0 w-full px-5 py-4 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 text-white z-50">
          <div className="container mx-auto flex justify-between items-center">
            <Link
              href="/"
              className="text-2xl font-bold tracking-wide hover:text-blue-400 transition"
            >
              Nick Vendetti
            </Link>
            <nav>
              <NavLinks />
            </nav>
          </div>
        </header>
        <div className="bg-gray-900 text-white min-h-screen pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
