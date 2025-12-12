"use client";

import React from "react";
import { Facebook, Linkedin, Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-xl mx-auto px-6 text-center">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/logo.png"
            alt="ACME Logo"
            className="h-25 w-auto drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]"
          />
        </div>

        {/* Company Name */}
        <h2 className="text-2xl font-bold tracking-wide text-cyan-400">
          ACM Student Chapter
        </h2>

        {/* Tagline */}
        <p className="text-gray-400 mt-1 mb-6 text-sm">
          Empowering tech and innovation
        </p>

        {/* Copyright */}
        <p className="text-sm text-cyan-300 mb-8">
          © 2025 GHRCE ACM – All rights reserved
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8">
          <a
            href="https://www.facebook.com/ghrceacm/"
            className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(0,255,255,0.8)]"
          >
            <Facebook size={28} />
          </a>

          <a
            href="https://www.instagram.com/acm_ghrce/"
            target="_blank"
            className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(0,255,255,0.8)]"
          >
            <Instagram size={28} />
          </a>

          <a
            href="https://www.linkedin.com/company/ghrce-acm-student-chapter/"
            target="_blank"
            className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(0,255,255,0.8)]"
          >
            <Linkedin size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
