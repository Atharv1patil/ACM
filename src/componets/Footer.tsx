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
    <footer className="bg-black text-white py-16">
  <div className="max-w-2xl mx-auto px-6 text-center">
    
    {/* Logo/Icon */}
    <div className="mb-6">
      <img className="w-auto h-52 ml-52" src="/images/logo.svg" alt="" />
    </div>

    {/* Company Name and Tagline */}
    <h2 className="text-2xl font-bold mb-2 text-white">ACME Industries Ltd.</h2>
    <p className="text-base text-gray-400 mb-6">Providing reliable tech since 1992</p>

    {/* Copyright */}
    <p className="text-sm text-cyan-400 mb-8">Copyright © 2025 - All right reserved</p>

    {/* Social Media Icons */}
    <div className="flex justify-center gap-8">
      <a href="#" className="text-white hover:text-cyan-400 transition-colors">
        <Twitter size={28} />
      </a>
      <a href="#" className="text-white hover:text-cyan-400 transition-colors">
        <Youtube size={28} />
      </a>
      <a href="#" className="text-white hover:text-cyan-400 transition-colors">
        <Facebook size={28} />
      </a>
    </div>
  </div>
</footer>
  );
};

export default Footer;