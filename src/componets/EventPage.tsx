"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EventCard from "../componets/Eventcard";
import EventHeader from "./Event";
import Footer from "./Footer";

// 🗓️ Event Data
const allEvents = [
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
  },
  {
  title: "Alumni Guest Lecture – Professor of Practice",
  shortDesc: "Expert Talk on Information Security by Dr. Anant Joshi.",
  details:
    "The Department of Information Technology, G. H. Raisoni College of Engineering, Nagpur organized an Alumni Guest Lecture under the Professor of Practice initiative on December 26, 2025. The session was delivered by Dr. Anant Joshi, Academic Director and Associate Professor at the School of Business and Economics, Maastricht University, Netherlands. The expert talk focused on Global Information Management System and highlighted key aspects of information security, global information management practices, data-driven decision-making, and the role of information systems in modern organizations. Dr. Joshi shared real-world applications, international perspectives, and emerging trends in the field. The session was conducted at F-08, GHRCE, Nagpur and was attended by 60 students and faculty members. The lecture proved to be highly informative, engaging, and beneficial for enhancing students’ understanding of global IT and management systems",
  image:
    "/images/International_talks.png",
  date: "December 26, 2025",
  location: "F-08, GHRCE, Nagpur",
  status: "past",
},
{
  title: "Alumni Guest Lecture – Defense & Technological Integration",
  shortDesc: "Expert session on modern warfare, defense innovation, and India’s global vision.",
  details:
    "The Department of Information Technology, G. H. Raisoni College of Engineering, Nagpur organized an Alumni Guest Lecture delivered by Mr. Sunil Shrivastava, Director of Warrior Infratech Pvt. Ltd. The session highlighted the pivotal role of engineering students in the defense sector, emphasizing technological integration, industry collaboration, and India’s vision of becoming a global leader in defense manufacturing. Mr. Shrivastava discussed how modern warfare is evolving with the integration of cutting-edge technologies into military frameworks. He also stressed the importance of skill development, innovation, and global competitiveness in strengthening national defense capabilities. The session was attended by faculty members and students and proved to be highly informative, engaging, and beneficial in enhancing students’ understanding of global warfare strategies and military frameworks.",
  image:
    "/images/Alumni_guest.jpg",
  date: "December 26, 2025",
  location: "F-08, GHRCE, Nagpur",
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
          GHRCE ACM Events
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
