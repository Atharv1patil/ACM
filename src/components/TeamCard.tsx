"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  email?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image, linkedin, email }) => {
  return (
    <motion.div
      className="group relative flex flex-col bg-gradient-to-b from-neutral-900 to-black rounded-2xl shadow-[0_0_25px_rgba(0,255,255,0.15)] overflow-hidden w-72 sm:w-80 md:w-72 lg:w-80 transition-all duration-500 md:hover:shadow-[0_0_40px_rgba(0,255,255,0.3)]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Image */}
      <div className="relative w-full h-80 sm:h-96 overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
          whileHover={{ scale: 1.05 }}
          draggable={false}
        />
        {/* Gradient overlay on hover (desktop only) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Mobile-only: Always visible info section (name, role, socials) */}
      <div className="block md:hidden p-5 space-y-4 bg-black/70 backdrop-blur-md border-t border-cyan-400/10">
        <h3 className="text-xl font-bold text-white text-center">{name}</h3>
        <div className="text-center">
          <span className="inline-block text-sm font-medium text-black bg-gradient-to-r from-cyan-400 to-sky-400 px-4 py-1.5 rounded-full shadow-[0_0_12px_rgba(0,255,255,0.3)]">
            {role}
          </span>
        </div>
        {/* Social Icons - Always visible on mobile */}
        {(linkedin || email) && (
          <div className="flex justify-center gap-4 pt-2">
            {linkedin && (
              <motion.a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-black/70 backdrop-blur-md border border-cyan-400/30 p-3 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.1)] hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300">
                  <FaLinkedinIn className="text-cyan-300 text-lg" />
                </div>
              </motion.a>
            )}
            {email && (
              <motion.a
                href={`mailto:${email}`}
                className="block"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-black/70 backdrop-blur-md border border-cyan-400/30 p-3 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.1)] hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300">
                  <FaEnvelope className="text-cyan-300 text-lg" />
                </div>
              </motion.a>
            )}
          </div>
        )}
      </div>

      {/* Desktop: Name always visible at bottom */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 text-center pointer-events-none">
        <h3 className="text-2xl font-bold text-cyan-300">{name}</h3>
      </div>

      {/* Desktop: Role + Socials appear on hover */}
      <motion.div
        className="hidden md:flex absolute inset-0 flex-col justify-end p-6 pb-16 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-center space-y-4 pointer-events-auto">
          <span className="inline-block text-sm font-medium text-black bg-gradient-to-r from-cyan-400 to-sky-400 px-4 py-1.5 rounded-full shadow-[0_0_12px_rgba(0,255,255,0.3)]">
            {role}
          </span>
          <div className="flex justify-center gap-4">
            {linkedin && (
              <motion.a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-black/70 backdrop-blur-md border border-cyan-400/30 p-3 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.1)] hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300">
                  <FaLinkedinIn className="text-cyan-300 text-xl" />
                </div>
              </motion.a>
            )}
            {email && (
              <motion.a
                href={`mailto:${email}`}
                className="pointer-events-auto"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-black/70 backdrop-blur-md border border-cyan-400/30 p-3 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.1)] hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300">
                  <FaEnvelope className="text-cyan-300 text-xl" />
                </div>
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeamCard;