'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="flex space-x-6">
      {navLinks.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={`transition ${
              pathname === href
                ? 'text-blue-400 font-semibold'
                : 'text-gray-300 hover:text-blue-400'
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
