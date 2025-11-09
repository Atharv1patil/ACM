"use client"

import { motion } from "framer-motion"
import {
  IconCode,
  IconUsers,
  IconTrophy,
  IconBook2,
} from "@tabler/icons-react"
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid"

export default function AboutSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: About Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            About <span className="text-blue-400">ACM GHRCE</span> Chapter
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            The <span className="font-semibold text-blue-400">ACM Student Chapter of GHRCE</span> is a thriving community of
            learners, coders, and innovators. We strive to create an environment
            where students explore emerging technologies and share ideas that
            shape the future of computing.
          </p>

          <p className="text-gray-400 max-w-xl">
            Through technical workshops, hackathons, coding contests, and
            industry collaborations, we aim to empower students to think
            critically, build creatively, and lead confidently in the world of
            technology.
          </p>

          <div className="pt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full transition">
              Join Our Community
            </button>
          </div>
        </motion.div>

        {/* RIGHT: Bento Grid Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <BentoGrid className="max-w-3xl mx-auto md:auto-rows-[20rem]">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={`bg-black border border-white/10 hover:border-blue-500/40 transition-all duration-300 rounded-2xl shadow-lg shadow-blue-900/10 ${item.className}`}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  )
}

/* --- Supporting Data and Components --- */

// Dummy image block for each grid
const ImageBox = ({ src }: { src: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <img
      src={src}
      alt="ACM activity"
      className="object-cover w-full h-full opacity-80 hover:opacity-100 transition duration-500 hover:scale-105"
    />
  </div>
)

const items = [
  {
    title: "Workshops & Skill Sessions",
    description:
      "Interactive coding and tech workshops to help students learn by doing.",
    header: (
      <ImageBox src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169" />
    ),
    className: "md:col-span-2",
    icon: <IconCode className="h-4 w-4 text-blue-400" />,
  },
  {
    title: "Team Collaboration",
    description:
      "A platform where like-minded students collaborate, build, and innovate.",
    header: (
      <ImageBox src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80" />
    ),
    className: "md:col-span-1",
    icon: <IconUsers className="h-4 w-4 text-blue-400" />,
  },
  {
    title: "Hackathons & Competitions",
    description:
      "Engage in exciting challenges that push creativity and technical skills.",
    header: (
      <ImageBox src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" />
    ),
    className: "md:col-span-1",
    icon: <IconTrophy className="h-4 w-4 text-blue-400" />,
  },
  {
    title: "Research & Publications",
    description:
      "Encouraging members to dive deep into research and present innovative ideas.",
    header: (
      <ImageBox src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169" />
    ),
    className: "md:col-span-2",
    icon: <IconBook2 className="h-4 w-4 text-blue-400" />,
  },
]
