import React from "react";


const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-sky-400">ACM</div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-6">
            <a
              href="/"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              About Us
            </a>
            <a
              href="/Gallery"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Gallery
            </a>
            <a
              href="#events"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Events
            </a>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Contact
            </a>
            <a
              href="/team"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Team
            </a>
          </div>

          {/* Mobile Menu Button (Optional) */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              {/* You can add a hamburger icon here */}
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
