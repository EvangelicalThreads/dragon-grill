"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (menuOpen && menuRef.current && !menuRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-20">
        {/* Logo Only */}
        <Link href="/" className="flex items-center">
          <Image
            src="/dragon-grill-logo.png"
            alt="Dragon Grill Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12 font-medium text-gray-800 tracking-wide uppercase">
          <Link href="/" className="hover:text-red-600 transition">Home</Link>
          <Link href="/menu" className="hover:text-red-600 transition">Menu</Link>
          <Link href="/about" className="hover:text-red-600 transition">About</Link>
          <Link href="/contact" className="hover:text-red-600 transition">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="relative z-50"
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        ref={menuRef}
        className={`fixed top-20 right-0 h-[calc(100%-5rem)] w-64 bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-8">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-semibold uppercase tracking-wide hover:text-red-600"
          >
            Home
          </Link>
          <Link
            href="/menu"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-semibold uppercase tracking-wide hover:text-red-600"
          >
            Menu
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-semibold uppercase tracking-wide hover:text-red-600"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-semibold uppercase tracking-wide hover:text-red-600"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
