"use client";

import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Youtube,
  Mail,
  Hash,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-gray-300 border-t border-cyan-500/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* -------- Left Section: Contact + Social -------- */}
        <div>
          <div className="flex items-start gap-4">
            <img
              src="https://i.ibb.co/6P0jH0G/Apar-Mahajan-Co-President-Cloud-edited.png"
              alt="Apar Mahajan"
              className="w-20 h-20 rounded-full ring-2 ring-cyan-400 object-cover"
            />
            <div>
              <h4 className="text-white font-semibold">Apar Mahajan</h4>
              <p className="text-sm text-gray-400">Co-President, ACM GHRCE</p>
            </div>
          </div>

          <h3 className="mt-6 mb-3 text-cyan-400 font-semibold uppercase tracking-wide">
            Connect With Us
          </h3>

          {/* --- Social Media Icons --- */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-cyan-500/10 text-cyan-400 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-cyan-500/10 text-cyan-400 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-cyan-500/10 text-cyan-400 transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-cyan-500/10 text-cyan-400 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              aria-label="GitHub"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-cyan-500/10 text-cyan-400 transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://discord.com"
              aria-label="Discord"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-cyan-500/10 text-cyan-400 transition"
            >
              <Hash className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-cyan-500/10 text-cyan-400 transition"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* --- Buttons --- */}
          <div className="mt-6 space-y-3">
            <button className="w-full py-2 rounded-md font-semibold bg-cyan-500 text-black hover:bg-cyan-400 transition">
              Join Our Mailing List
            </button>
            <button className="w-full py-2 rounded-md font-semibold bg-white text-gray-900 hover:bg-gray-200 transition">
              Linktree
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-cyan-400 font-semibold uppercase">Reach Us At</h3>
            <a
              href="mailto:acm.ghrce@gmail.com"
              className="flex items-center gap-2 mt-2 text-sm hover:text-cyan-400 transition"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              acm.ghrce@gmail.com
            </a>
          </div>
        </div>

        {/* -------- Middle Section: Quick Links -------- */}
        <div>
          <h3 className="text-cyan-400 font-semibold uppercase mb-3 tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-cyan-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-cyan-400 transition">
                Events
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-cyan-400 transition">
                Our Team
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-cyan-400 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* -------- Right Section: Domains -------- */}
        <div>
          <h3 className="text-cyan-400 font-semibold uppercase mb-3 tracking-wide">
            ACM Domains
          </h3>
          <div className="flex flex-col gap-2 text-sm">
            <a href="#" className="hover:text-cyan-400 transition">
              ACM Cloud
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              ACM AI
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              ACM Cyber
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              ACM Design
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              ACM Hack
            </a>
          </div>
        </div>
      </div>

      {/* -------- Footer Bottom -------- */}
      <div className="border-t border-white/10 py-6 text-center">
        <div className="max-w-6xl mx-auto px-6 text-gray-400 text-sm">
          <div className="mb-2 text-cyan-400 font-semibold">
            ACM GHRCE Student Chapter
          </div>
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} ACM GHRCE. All rights reserved.
          </p>
          <p className="text-cyan-400 text-xs mt-1 opacity-50 hidden md:block">
            Built by Atharv Patil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;