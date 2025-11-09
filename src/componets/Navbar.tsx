"use client";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-cyan-500/10 text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* 🔹 Logo Section */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/logo.svg"
              alt="ACM GHRCE Logo"
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <span className="text-xl md:text-2xl font-bold text-cyan-400 tracking-wide">
              ACM GHRCE
            </span>
          </div>

          {/* 🔹 Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium">
            <a
              href="/"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              About Us
            </a>
            <a
              href="/gallery"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Gallery
            </a>
            <a
              href="/events"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Events
            </a>
            <a
              href="/team"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Team
            </a>
            <a
              href="/contact"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* 🔹 Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-cyan-400 focus:outline-none text-2xl p-1 rounded hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* 🔹 Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/95 backdrop-blur-md border-t border-cyan-500/10">
            <div className="px-4 py-4 space-y-2">
              <a
                href="/"
                onClick={closeMenu}
                className="block py-3 text-lg font-medium hover:text-cyan-400 transition-colors duration-300 border-b border-white/5 last:border-b-0"
              >
                Home
              </a>
              <a
                href="/about"
                onClick={closeMenu}
                className="block py-3 text-lg font-medium hover:text-cyan-400 transition-colors duration-300 border-b border-white/5 last:border-b-0"
              >
                About Us
              </a>
              <a
                href="/gallery"
                onClick={closeMenu}
                className="block py-3 text-lg font-medium hover:text-cyan-400 transition-colors duration-300 border-b border-white/5 last:border-b-0"
              >
                Gallery
              </a>
              <a
                href="/events"
                onClick={closeMenu}
                className="block py-3 text-lg font-medium hover:text-cyan-400 transition-colors duration-300 border-b border-white/5 last:border-b-0"
              >
                Events
              </a>
              <a
                href="/team"
                onClick={closeMenu}
                className="block py-3 text-lg font-medium hover:text-cyan-400 transition-colors duration-300 border-b border-white/5 last:border-b-0"
              >
                Team
              </a>
              <a
                href="/contact"
                onClick={closeMenu}
                className="block py-3 text-lg font-medium hover:text-cyan-400 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;