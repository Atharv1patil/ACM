"use client";

import { motion } from "framer-motion";
import ContactHero from "./contacthero";
import TerminalContactForm from "./TerminalContact";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import VisitCampus from "./visitcampus";
import Footer from "./Footer";

export default function ContactUs() {
  return (
    <>
      {/* 🌟 Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#0a0a0a] to-black">
        <ContactHero />
      </section>

      {/* 📞 Contact Info + Terminal Section */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-20 px-6 sm:px-10 lg:px-12 py-16 sm:py-24">
        {/* Left: Contact Info */}
        <motion.div
          className="flex-1 space-y-6 sm:space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-sky-400 mb-4">
              Get in Touch
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-md">
              We'd love to hear from you! Whether you're a student, developer, or
              partner, reach out anytime.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-5 sm:space-y-6 pt-4">
            <div className="flex items-start gap-3">
              <Mail className="text-sky-400 w-5 h-5 flex-shrink-0 mt-1" />
              <a
                href="mailto:acm@ghrce.ac.in"
                className="text-neutral-300 hover:text-sky-400 transition text-sm sm:text-base break-all"
              >
                acm@ghrce.ac.in
              </a>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="text-sky-400 w-5 h-5 flex-shrink-0 mt-1" />
              <span className="text-neutral-300 text-sm sm:text-base">
                +91 98765 43210
              </span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="text-sky-400 w-5 h-5 flex-shrink-0 mt-1" />
              <span className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                G.H. Raisoni College of Engineering,
                <br />
                Nagpur, Maharashtra, India
              </span>
            </div>

            <div className="flex items-start gap-3">
              <Globe className="text-sky-400 w-5 h-5 flex-shrink-0 mt-1" />
              <a
                href="https://acmghrce.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-sky-400 transition text-sm sm:text-base break-all"
              >
                acmghrce.vercel.app
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-6">
            <a
              href="https://github.com/acmghrce"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 text-neutral-400 transition text-2xl"
            >
              <i className="ri-github-fill"></i>
            </a>
            <a
              href="https://linkedin.com/company/acm-ghrce"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 text-neutral-400 transition text-2xl"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a
              href="https://instagram.com/acmghrce"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 text-neutral-400 transition text-2xl"
            >
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
        </motion.div>

        {/* Right: Terminal Contact Form */}
        <motion.div
          className="flex-1 w-full max-w-xl"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <TerminalContactForm />
        </motion.div>
      </section>

      {/* 🏫 Visit Campus Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <VisitCampus />
      </motion.div>

      {/* 🗺️ Google Map Section */}
      <motion.section
        className="px-6 sm:px-10 lg:px-12 pb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="relative w-full bg-[#0c0c0c] rounded-2xl border border-neutral-800 overflow-hidden shadow-[0_0_25px_rgba(0,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] transition-all duration-500 ease-in-out">
          <div className="mapouter rounded-2xl overflow-hidden">
            <div className="gmap_canvas">
              <iframe
                className="gmap_iframe rounded-2xl"
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=GH Raisoni College of Engineering&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="ACM GHRCE Location"
              ></iframe>
            </div>
          </div>
          <style>{`
            .mapouter {
              position: relative;
              width: 100%;
              height: 400px;
              background: #0a0a0a;
            }
            .gmap_canvas {
              overflow: hidden;
              background: none !important;
              width: 100%;
              height: 400px;
              filter: grayscale(35%) contrast(115%) brightness(90%);
              transition: filter 0.4s ease-in-out;
            }
            .gmap_canvas:hover {
              filter: grayscale(0%) contrast(110%) brightness(100%);
            }
            .gmap_iframe {
              height: 400px !important;
              border-radius: 1rem;
            }
          `}</style>
        </div>
      </motion.section>

      {/* ⚙️ Footer */}
      <Footer />
    </>
  );
}
