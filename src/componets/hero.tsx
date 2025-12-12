"use client"
import { motion } from "framer-motion"
import ColorBends from "../components/ColorBends"
import AboutSection from "./AboutSection"
import WhatWeDo from "./Whatwedo"
import CCG from "./CCG"
import FAQ from "./FAQ"
import Footer from "./Footer"
import JoinUsSection from "./SolutionsSection"
import { useNavigate } from "react-router-dom"

export default function Hero() {
  const navigate = useNavigate();
  
  return (
    <>
      {/* Add padding-top to account for fixed navbar */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <ColorBends
            rotation={52}
            speed={0.26}
            autoRotate={-2}
            warpStrength={1}
            scale={1}
            frequency={1}
            colors={["#238fe1"]}
            parallax={0.5}
            noise={0.1}
            mouseInfluence={2.0}
          />
        </div>

        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Centered Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          {/* Logo (centered above text) */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4"
          >
            <img
              src="/images/logo.png"
              alt="ACM GHRCE Logo"
              className="mx-auto w-50 h-50 object-contain"
            />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            ACM GHRCE Chapter
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Empowering innovation, collaboration, and learning for the next generation of tech leaders.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
              Get Started
            </button>
            <button 
              onClick={() => {navigate('/about')}} 
              className="border border-white/70 text-white px-6 py-3 rounded-full hover:bg-white/10 transition"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      <section className="bg-black">
        <AboutSection />
        <WhatWeDo />
        <CCG />
        <JoinUsSection />
        <FAQ />
        <Footer />
      </section>
    </>
  )
}