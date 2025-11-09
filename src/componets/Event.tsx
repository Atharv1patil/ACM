"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// 🌀 Shuffle Function
const shuffle = <T,>(array: T[]): T[] => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

// 🖼️ Image Data (4 images)
const squareData = [
  { id: 1, src: "https://images.unsplash.com/photo-1557804506-669a67965ba0" },
  { id: 2, src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c" },
  { id: 3, src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1" },
  { id: 4, src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" },
];

// 🔁 Generate Animated Squares
const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="w-full h-full rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></motion.div>
  ));
};

// 🧩 Shuffle Grid Component (4 tiles)
const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000); // Shuffle every 3s
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2 h-[380px] md:h-[480px] gap-2 rounded-lg overflow-hidden">
      {squares.map((sq) => sq)}
    </div>
  );
};

// 🎉 Event Header Component
const EventHeader = () => {
  return (
    <section className="w-full bg-black text-white px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* 🔹 Left Section — Event Info */}
        <div className="space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="block text-sm uppercase font-semibold text-cyan-400 tracking-widest"
          >
            Upcoming ACM Event
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            <span className="text-cyan-400">Hack the Future</span>
            <br />
            ACM GHRCE Hackathon 2025
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-md"
          >
            Join the brightest minds in coding, AI, and design for a 24-hour
            challenge where innovation meets impact. Win exciting prizes,
            connect with mentors, and showcase your talent!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex gap-4"
          >
            <button className="bg-cyan-500 text-black font-semibold py-2 px-6 rounded-md hover:bg-cyan-400 transition-all">
              Register Now
            </button>
            <button className="border border-cyan-400 text-cyan-400 font-semibold py-2 px-6 rounded-md hover:bg-cyan-400 hover:text-black transition-all">
              Learn More
            </button>
          </motion.div>
        </div>

        {/* 🔹 Right Section — 4-Image Shuffle Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="rounded-lg overflow-hidden shadow-xl shadow-cyan-500/10"
        >
          <ShuffleGrid />
        </motion.div>
      </div>
    </section>
  );
};

export default EventHeader;
