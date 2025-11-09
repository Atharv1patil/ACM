"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

// ✅ Props type
interface EventCardProps {
  title: string;
  shortDesc: string;
  details: string;
  image: string;
  date: string;
  location: string;
  registerLink?: string;
}

// 🧩 Single Expandable Event Card Component
const EventCard: React.FC<EventCardProps> = ({
  title,
  shortDesc,
  details,
  image,
  date,
  location,
  registerLink,
}) => {
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  // Close when pressing ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close when clicking outside
  useOutsideClick(ref, () => setExpanded(false));

  return (
    <>
      {/* 🔹 Background overlay when expanded */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* 🔹 Expanded Modal */}
      <AnimatePresence>
        {expanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              layoutId={`card-${title}-${id}`}
              ref={ref}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative bg-neutral-900 text-white rounded-2xl overflow-hidden w-full max-w-lg shadow-2xl border border-cyan-500/30"
            >
              <motion.img
                layoutId={`image-${title}-${id}`}
                src={image}
                alt={title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6 space-y-3">
                <motion.h3
                  layoutId={`title-${title}-${id}`}
                  className="text-2xl font-bold text-cyan-400"
                >
                  {title}
                </motion.h3>

                <motion.p
                  layoutId={`shortDesc-${shortDesc}-${id}`}
                  className="text-gray-300"
                >
                  {shortDesc}
                </motion.p>

                <div className="text-gray-400 text-sm space-y-1">
                  <p>
                    <strong>Date:</strong> {date}
                  </p>
                  <p>
                    <strong>Location:</strong> {location}
                  </p>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed max-h-40 overflow-auto scrollbar-none">
                  {details}
                </p>

                <div className="flex gap-3 pt-4">
                  {registerLink && (
                    <a
                      href={registerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-md transition-all"
                    >
                      Register Now
                    </a>
                  )}
                  <button
                    onClick={() => setExpanded(false)}
                    className="px-4 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-md transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 🔹 Compact Card View */}
      <motion.div
        layoutId={`card-${title}-${id}`}
        onClick={() => setExpanded(true)}
        className="cursor-pointer bg-neutral-900 hover:bg-neutral-800 rounded-xl overflow-hidden border border-cyan-500/20 transition-all"
      >
        <motion.img
          layoutId={`image-${title}-${id}`}
          src={image}
          alt={title}
          className="h-56 w-full object-cover"
        />
        <div className="p-4 space-y-2">
          <motion.h3
            layoutId={`title-${title}-${id}`}
            className="text-lg font-semibold text-cyan-400"
          >
            {title}
          </motion.h3>
          <motion.p
            layoutId={`shortDesc-${shortDesc}-${id}`}
            className="text-gray-400 text-sm"
          >
            {shortDesc}
          </motion.p>
        </div>
      </motion.div>
    </>
  );
};

export default EventCard;
