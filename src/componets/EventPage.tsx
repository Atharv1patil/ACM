"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EventCard from "../componets/Eventcard";
import EventHeader from "./Event";
import Footer from "./Footer";

// 🗓️ Event Data
const allEvents = [
  {
    title: "Hack the Future 2025",
    shortDesc: "A 24-hour hackathon to innovate and collaborate.",
    details:
      "Hack the Future brings together coders, designers, and visionaries to build next-gen solutions using AI, IoT, and blockchain.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80",
    date: "March 15–16, 2025",
    location: "GHRCE Auditorium",
    registerLink: "#",
    status: "upcoming",
  },
  {
    title: "TechTalk: Future of AI",
    shortDesc: "An interactive session on the AI revolution.",
    details:
      "Join ACM GHRCE as we explore how Artificial Intelligence is transforming industries, education, and research.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
    date: "April 5, 2025",
    location: "Seminar Hall 2, GHRCE",
    status: "upcoming",
  },
  {
    title: "CodeSprint 2024",
    shortDesc: "Competitive coding challenge for logic masters.",
    details:
      "CodeSprint 2024 tested participants’ speed, accuracy, and problem-solving skills. With algorithmic puzzles and real-time ranking, it was a true test of competitive programming prowess!",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1000&q=80",
    date: "October 10, 2024",
    location: "Online (HackerRank)",
    status: "past",
  },
  {
    title: "DesignCraft 2024",
    shortDesc: "A creative design marathon for aspiring UI/UX designers.",
    details:
      "DesignCraft was an exciting 8-hour sprint where students reimagined user experiences through design challenges inspired by real-world apps.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
    date: "August 12, 2024",
    location: "Innovation Lab, GHRCE",
    status: "past",
  },
  {
    title: "CyberSecure 2025",
    shortDesc: "A cybersecurity workshop for ethical hackers.",
    details:
      "CyberSecure 2025 is an intensive hands-on session focusing on penetration testing, security tools, and threat modeling — ideal for cybersecurity enthusiasts.",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437e1?auto=format&fit=crop&w=1000&q=80",
    date: "June 1, 2025",
    location: "GHRCE Lab 3",
    registerLink: "#",
    status: "upcoming",
  },
  {
    title: "DevFest 2024",
    shortDesc: "A full-day tech celebration hosted by ACM GHRCE.",
    details:
      "DevFest 2024 featured project showcases, panel discussions, and coding competitions — connecting innovators from across departments.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
    date: "December 2, 2024",
    location: "GHRCE Main Hall",
    status: "past",
  },
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
