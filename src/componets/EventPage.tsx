"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EventCard from "../componets/Eventcard";
import EventHeader from "./Event";
import Footer from "./Footer";

// 🗓️ Event Data
const allEvents = [
  // {
  //   title: "Hack the Future 2025",
  //   shortDesc: "A 24-hour hackathon to innovate and collaborate.",
  //   details:
  //     "Hack the Future brings together coders, designers, and visionaries to build next-gen solutions using AI, IoT, and blockchain.",
  //   image:
  //     "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80",
  //   date: "March 15–16, 2025",
  //   location: "GHRCE Auditorium",
  //   registerLink: "#",
  //   status: "upcoming",
  // },
  {
    title: "Installation Ceremony 2026",
    shortDesc: "GHRCE ACM Student Chapter Installation & Recognition Ceremony.",
    details:
      "The Installation Ceremony 2026 celebrated the inauguration of GHRCE ACM's new leadership and recognized outstanding contributions from members. The event brought together faculty, students, and industry mentors to mark an exciting new chapter for our community. Certificates of appreciation were awarded, and the new office bearers took their oaths to lead with dedication and excellence.",
    image:
      "/InstallationCeremony/1.PNG",
    date: "January 13, 2026",
    location: "Raisoni College, Nagpur",
    status: "past",
  }
];

export default function EventsPage() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");

  const filteredEvents =
    filter === "all"
      ? allEvents
      : allEvents.filter((event) => event.status === filter);

  return (
    <>
      <EventHeader />

      <main className="bg-black text-white min-h-screen py-16 px-6">
        <h1 className="text-4xl font-bold text-center text-cyan-400 mb-10">
          ACM GHRCE Events
        </h1>

        {/* 🔹 Filter Buttons */}
        <div className="flex justify-center gap-6 mb-10">
          {["all", "upcoming", "past"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as "all" | "upcoming" | "past")}
              className={`px-5 py-2 rounded-full font-semibold transition-all ${
                filter === f
                  ? "bg-cyan-500 text-black"
                  : "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* 🔹 Event Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <EventCard {...event} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
      <Footer/> 
    </>
  );
}
