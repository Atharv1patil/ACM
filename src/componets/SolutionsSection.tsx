"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaHandsHelping, FaLightbulb } from "react-icons/fa";

const JoinUsSection = () => {
  const categories = [
    {
      id: 1,
      title: "Student Members 👩‍💻",
      description:
        "Join ACM GHRCE to explore hands-on workshops, hackathons, and networking opportunities with peers who share your passion for technology.",
      icon: <FaUserGraduate className="text-cyan-400 text-2xl" />,
    },
    {
      id: 2,
      title: "Volunteer Team 🔬",
      description:
        "Collaborate with others to organize events, manage operations, and contribute to ACM's mission of empowering learners through technology.",
      icon: <FaHandsHelping className="text-cyan-400 text-2xl" />,
    },
    {
      id: 3,
      title: "Leadership Opportunities 💡",
      description:
        "Step into leadership roles and help shape ACM GHRCE's future by mentoring peers and driving impactful tech initiatives.",
      icon: <FaLightbulb className="text-cyan-400 text-2xl" />,
    }
  ];

  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className="relative px-6 sm:px-10 md:px-16 py-20 bg-black text-white overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-transparent to-black pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto relative z-10">
        {/* CONTENT */}
        <div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-white text-center">
            <span className="text-cyan-400">Join</span> ACM GHRCE
          </h3>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-center">
            Be part of a growing community of passionate developers, designers,
            and innovators. Learn, build, and grow with us.
          </p>

          <div className="flex flex-col gap-5">
            {categories.map((item) => (
              <motion.div
                key={item.id}
                onMouseEnter={() => setSelected(item)}
                className={`p-0.5 rounded-xl relative overflow-hidden cursor-pointer transition-all duration-300 ${
                  selected.id === item.id
                    ? "ring-2 ring-cyan-500 shadow-[0_0_25px_rgba(0,255,255,0.5)]"
                    : "hover:ring-1 hover:ring-cyan-400/50"
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className={`p-6 sm:p-7 rounded-[10px] bg-neutral-900 flex flex-col justify-between relative z-20 transition-all duration-500 ease-in-out ${
                    selected.id === item.id ? "h-[230px]" : "h-[90px]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <p className="text-xl sm:text-2xl font-semibold text-cyan-300">
                      {item.title}
                    </p>
                  </div>

                  <motion.p
                    animate={{
                      opacity: selected.id === item.id ? 1 : 0,
                      height: selected.id === item.id ? "auto" : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="mt-3 text-base text-gray-300 leading-relaxed overflow-hidden"
                  >
                    {item.description}
                  </motion.p>

                  <motion.a
                    href="https://forms.gle/your-google-form-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: selected.id === item.id ? 1 : 0,
                      y: selected.id === item.id ? 0 : 10,
                    }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 py-2.5 rounded-md flex items-center justify-center text-sm sm:text-base gap-2 transition-all duration-300 bg-gradient-to-r from-cyan-400 to-sky-500 text-black font-semibold hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]"
                  >
                    Become a Member →
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;