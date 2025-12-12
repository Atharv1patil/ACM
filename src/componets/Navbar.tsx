"use client";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    // { name: "Gallery", href: "/gallery" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-cyan-500/10 text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo/Image on Left */}
          <div className="flex-shrink-0">
            <a href="/">
            <img 
              src="/acm-logo.svg" 
              alt="acm-logo.svg" 
              className="h-18 w-auto"
            />
            </a>
          </div>

          {/* Desktop Menu - Right Side */}
          <div className="hidden md:flex space-x-8 items-center font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-cyan-400 focus:outline-none text-2xl p-1 rounded hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span>{isOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-md border-t border-cyan-500/10">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={closeMenu}
                className="block py-3 text-lg font-medium hover:text-cyan-400 transition-colors duration-300 border-b border-white/5 last:border-b-0"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;