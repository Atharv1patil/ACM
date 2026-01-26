"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Globe } from "lucide-react";

export default function FacultyIntro() {
  return (
    <section className="relative w-full bg-black text-white py-20 sm:py-24 overflow-hidden border-t border-neutral-800">
      {/* Subtle cyan gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-transparent to-black pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* LEFT — Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            <span className="block text-cyan-400">Meet Our Faculty Mentor</span>
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg max-w-lg leading-relaxed">
            <strong className="text-cyan-300">Prof. [Faculty Name]</strong> — a visionary
            leader and guiding force behind GHRCE ACM. With extensive experience in
            teaching, research, and innovation, our mentor inspires students to think
            creatively, collaborate effectively, and build technology-driven solutions
            that make a lasting impact.
          </p>
        </motion.div>

        {/* RIGHT — Faculty Image + Socials */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center justify-center space-y-6"
        >
          {/* Background cyan glow */}
          <motion.div
            className="absolute -inset-4 bg-gradient-to-tr from-cyan-600/30 to-transparent blur-3xl rounded-full"
            animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.03, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Faculty image */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden ring-2 ring-cyan-500/40 shadow-[0_0_50px_rgba(0,255,255,0.25)]">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80&auto=format&fit=crop"
              alt="Faculty Mentor"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating info badges (animated) */}
          <motion.div
            className="absolute -top-3 left-0 bg-white/10 backdrop-blur-md border border-cyan-400/20 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full shadow-md"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            10+ Years Experience
          </motion.div>

          <motion.div
            className="absolute top-12 -right-10 bg-white/10 backdrop-blur-md border border-cyan-400/20 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full shadow-md"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            AI & Research Expert
          </motion.div>

          {/* Social box under photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="relative mt-4 bg-neutral-900/60 backdrop-blur-md border border-cyan-500/20 rounded-xl px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-6 shadow-[0_0_25px_rgba(0,255,255,0.1)] w-full max-w-sm"
          >
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/example"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-200 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium text-sm">LinkedIn</span>
            </a>

            {/* Email */}
            <a
              href="mailto:faculty@ghrce.ac.in"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-200 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium text-sm">Email</span>
            </a>

            {/* Website */}
            <a
              href="https://ghrce.raisoni.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-200 transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span className="font-medium text-sm">Website</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}