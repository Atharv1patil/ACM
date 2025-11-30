"use client";

import { motion, useTransform, useScroll, useInView } from "framer-motion";
import { useRef } from "react";

export default function WhatWeDo() {
  return (
    <div className="bg-black text-white">
      {/* Section Header */}
      <div className="py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          What <span className="text-blue-400">We Do</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Discover how the ACM GHRCE Student Chapter empowers students through
          innovation, collaboration, and creativity.
        </motion.p>
      </div>

      <HorizontalScrollCarousel />

      <div className="flex h-32 items-center justify-center">
        <span className="text-gray-500 font-semibold uppercase tracking-wider">
          Scroll Up
        </span>
      </div>
    </div>
  );
}

/* ---------------- SCROLL CAROUSEL ---------------- */
const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Reduced gap between cards */}
        <motion.div style={{ x }} className="flex gap-3 px-6">
          {cards.map((card) => (
            <AnimatedCard key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ---------------- INDIVIDUAL CARD ---------------- */
const AnimatedCard = ({ card }: { card: { id: number; url: string; title: string } }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group relative h-[420px] w-[380px] overflow-hidden rounded-xl border border-white/10 bg-black"
    >
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105 opacity-90"
      ></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

      {/* Title Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-black/40 border border-white/10 px-4 py-3 text-2xl md:text-3xl font-bold uppercase text-white backdrop-blur-sm rounded-lg"
        >
          {card.title}
        </motion.p>
      </div>
    </motion.div>
  );
};

/* ---------------- CARD DATA ---------------- */
const cards = [
  {
    url: "https://plus.unsplash.com/premium_photo-1661546333305-667b3326bb99?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Workshops",
    id: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1568027763553-53a8cddd7c6f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Hackathons",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    title: "Coding Contests",
    id: 3,
  },
  {
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    title: "Tech Talks",
    id: 4,
  },
  {
    url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    title: "Industry Connects",
    id: 5,
  },
  {
    url: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    title: "Research & Innovation",
    id: 6,
  },
  {
    url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    title: "Community Projects",
    id: 7,
  },
];
