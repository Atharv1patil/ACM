"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Events", href: "#events" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" }
  ];

  const specialLink = { name: "HackGHRCE", href: "/hackghrce" };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-cyan-500/10 text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl md:text-2xl font-bold text-cyan-400 tracking-wide hover:text-cyan-300 transition-colors duration-300">
              ACM GHRCE
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            
            {/* Special HackGHRCE Link with Shine Effect */}
            <a
              href={specialLink.href}
              className="relative px-6 py-2 rounded-lg text-sm font-bold overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #06b6d4 0%, #22d3ee 25%, #06b6d4 50%, #22d3ee 75%, #06b6d4 100%)",
                backgroundSize: "200% 100%",
                animation: "shine 3s linear infinite",
                boxShadow: "0 0 20px rgba(6, 182, 212, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.3)"
              }}
            >
              <span className="relative z-10 text-white drop-shadow-lg">
                ✨ {specialLink.name} ✨
              </span>
              {/* Sparkle elements */}
              <span className="absolute top-0 left-0 w-full h-full opacity-40">
                <span className="absolute top-1 left-2 text-xs animate-pulse" style={{animationDelay: "0s"}}>⭐</span>
                <span className="absolute top-2 right-3 text-xs animate-pulse" style={{animationDelay: "0.5s"}}>✨</span>
                <span className="absolute bottom-1 right-5 text-xs animate-pulse" style={{animationDelay: "1s"}}>⭐</span>
              </span>
            </a>
          </div>

          <style jsx>{`
            @keyframes shine {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
          `}</style>

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
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="block py-3 text-lg font-medium hover:text-cyan-400 transition-colors duration-300 border-b border-white/5 last:border-b-0"
              >
                {link.name}
              </a>
            ))}
            
            {/* Special HackGHRCE Link for Mobile */}
            <a
              href={specialLink.href}
              onClick={closeMenu}
              className="relative block px-3 py-3 rounded-md text-base font-bold overflow-hidden mt-2"
              style={{
                background: "linear-gradient(135deg, #06b6d4 0%, #22d3ee 25%, #06b6d4 50%, #22d3ee 75%, #06b6d4 100%)",
                backgroundSize: "200% 100%",
                animation: "shine 3s linear infinite",
                boxShadow: "0 0 15px rgba(6, 182, 212, 0.6)"
              }}
            >
              <span className="text-white drop-shadow-lg">✨ {specialLink.name} ✨</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;