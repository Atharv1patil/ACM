"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PreloaderProps = {
  onFinish?: () => void;
  duration?: number;
};

export default function Preloader({ onFinish, duration = 2200 }: PreloaderProps) {
  useEffect(() => {
    const timeout = setTimeout(() => onFinish?.(), duration + 500);
    return () => clearTimeout(timeout);
  }, [onFinish, duration]);

  const hexPoints = "100,10 173,50 173,150 100,190 27,150 27,50";

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6 } }}
      >
        <div className="flex flex-col items-center">
          <svg
            viewBox="0 0 200 200"
            className="w-48 h-48 sm:w-64 sm:h-64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="hexMask">
                <polygon points={hexPoints} />
              </clipPath>
              <radialGradient id="glow" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
                <stop offset="80%" stopColor="transparent" />
              </radialGradient>
            </defs>

            {/* Glow background */}
            <motion.polygon
              points={hexPoints}
              fill="url(#glow)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.95, 1.02, 0.98],
              }}
              transition={{ duration: 2.8, repeat: Infinity }}
            />

            {/* Image masked inside the hexagon */}
            <image
              href="/path/to/your/acm-logo.png"
              clipPath="url(#hexMask)"
              width="200"
              height="200"
              preserveAspectRatio="xMidYMid slice"
            />

            {/* Hex border animation */}
            <motion.polygon
              points={hexPoints}
              fill="none"
              stroke="#06b6d4"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </svg>

          {/* Text below logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-4 text-center"
          >
            <h2 className="text-2xl font-bold text-white">ACM GHRCE</h2>
            <p className="text-cyan-400 text-sm">Student Chapter</p>
          </motion.div>

          {/* Animated loading line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 1, 0] }}
            transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
            className="mt-6 h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full origin-left"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
