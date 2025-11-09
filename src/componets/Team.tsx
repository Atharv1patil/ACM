import React from "react";
import TeamCard from "../components/TeamCard";
import TeamHero from "./TeamHero";
import FacultyIntro from "../componets/FacultyINtro";
import Footer from "./Footer";

const teamData = {
  leadership: [
    {
      name: "Om Awadhoot",
      role: "Chairperson",
      image: "/images/om.jpg",
      linkedin: "https://linkedin.com/in/example",
      email: "john@example.com",
    },
    {
      name: "Shreyash B",
      role: "Vice Chairperson",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=600&q=80&auto=format&fit=crop",
      linkedin: "https://linkedin.com/in/example",
      email: "shreyash@example.com",
    },
    {
      name: "Ananya Verma",
      role: "Event Head",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80&auto=format&fit=crop",
      linkedin: "https://linkedin.com/in/example",
      email: "ananya@example.com",
    },
  ],
  core: [
    {
      name: "Atharv Patil",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&q=80&auto=format&fit=crop",
      linkedin: "https://linkedin.com/in/example",
      email: "atharv@example.com",
    },
    {
      name: "Sakshi Deshmukh",
      role: "Secretary",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80&auto=format&fit=crop",
      linkedin: "https://linkedin.com/in/example",
      email: "sakshi@example.com",
    },
    {
      name: "Rohit Sharma",
      role: "Public Relations Head",
      image: "https://images.unsplash.com/photo-1502767089025-6572583495b0?w=600&q=80&auto=format&fit=crop",
      linkedin: "https://linkedin.com/in/example",
      email: "rohit@example.com",
    },
    {
      name: "Simran Kaur",
      role: "Documentation Head",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80&auto=format&fit=crop",
      linkedin: "https://linkedin.com/in/example",
      email: "simran@example.com",
    },
  ],
  Secretary:[
    {
      name: "Simran Kaur",
      role: "Documentation Head",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80&auto=format&fit=crop",
      linkedin: "https://linkedin.com/in/example",
      email: "simran@example.com",
    },
  ],
  technical: [
    {
      name: "Yash Gupta",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&q=80&auto=format&fit=crop",
      linkedin: "https://linkedin.com/in/example",
      email: "yash@example.com",
    },
    {
      name: "Aarav Singh",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80&auto=format&fit=crop",
      linkedin: "https://linkedin.com/in/example",
      email: "aarav@example.com",
    },
    {
      name: "Priya Sharma",
      role: "Backend Developer",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80&auto=format&fit=crop",
      linkedin: "https://linkedin.com/in/example",
      email: "priya@example.com",
    },
    {
      name: "Isha Patel",
      role: "AI/ML Developer",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80&auto=format&fit=crop",
      linkedin: "https://linkedin.com/in/example",
      email: "isha@example.com",
    },
    {
      name: "Karan Jain",
      role: "DevOps Engineer",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80&auto=format&fit=crop",
      linkedin: "https://linkedin.com/in/example",
      email: "karan@example.com",
    },
  ],
  design: [
    {
      name: "Riya Mehta",
      role: "Design Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&auto=format&fit=crop",
      linkedin: "https://linkedin.com/in/example",
      email: "riya@example.com",
    },
    {
      name: "Kunal Rao",
      role: "Graphic Designer",
      image: "https://images.unsplash.com/photo-1502767089025-6572583495b0?w=600&q=80&auto=format&fit=crop",
      linkedin: "https://linkedin.com/in/example",
      email: "kunal@example.com",
    },
    {
      name: "Sneha Joshi",
      role: "Visual Designer",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80&auto=format&fit=crop",
      linkedin: "https://linkedin.com/in/example",
      email: "sneha@example.com",
    },
    {
      name: "Tanya Kapoor",
      role: "Illustrator",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80&auto=format&fit=crop",
      linkedin: "https://linkedin.com/in/example",
      email: "tanya@example.com",
    },
  ],
};

const Team: React.FC = () => {
  return (
    <>
      {/* 🌟 Hero + Faculty Intro */}
      <TeamHero />
      <FacultyIntro />

      {/* 👥 Hierarchical Team Section */}
      <section className="bg-black py-24 px-6 sm:px-10 lg:px-12 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-24">
          {/* ✨ Section Heading */}
          <div className="mb-12">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4 tracking-tight">
              Our <span className="text-cyan-400">Team</span>
            </h1>
            <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Meet the creative minds and technical innovators driving ACM GHRCE forward — 
              a passionate group committed to excellence, collaboration, and innovation.
            </p>
            <div className="mt-5 h-1 w-28 bg-gradient-to-r from-cyan-400 to-sky-500 mx-auto rounded-full" />
          </div>

          {/* 🔹 Leadership */}
          <div className="w-full">
            <h2 className="text-4xl font-bold text-cyan-400 mb-12 tracking-wide">
              Leadership
            </h2>

            <div className="flex flex-col items-center space-y-10">
              <TeamCard {...teamData.leadership[0]} />
              <div className="flex flex-wrap justify-center gap-12">
                {teamData.leadership.slice(1).map((member, idx) => (
                  <TeamCard key={idx} {...member} />
                ))}
              </div>
            </div>
          </div>

          {/* 🔹 Core Team */}
          <div className="w-full">
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-12 tracking-wide">
              Core Team
            </h2>

            <div className="flex flex-col items-center space-y-10">
              <TeamCard {...teamData.core.find(m => m.role === "Technical Lead")!} />
              <div className="flex flex-wrap justify-center gap-12">
                {teamData.core
                  .filter(m => m.role !== "Technical Lead")
                  .map((member, idx) => (
                    <TeamCard key={idx} {...member} />
                  ))}
              </div>
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-12 tracking-wide">
              Secretary
            </h2>

            <div className="flex flex-col items-center space-y-10">
              <TeamCard {...teamData.core.find(m => m.role === "Secretary")!} />
              <div className="flex flex-wrap justify-center gap-12">
                
              </div>
            </div>
          </div>

          {/* 🔹 Technical Team */}
          <div className="w-full">
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-12 tracking-wide">
              Technical Team
            </h2>
            <div className="flex flex-col items-center space-y-10">
              <TeamCard {...teamData.technical.find(m => m.role === "Technical Lead")!} />
              <div className="flex flex-wrap justify-center gap-12">
                {teamData.technical
                  .filter(m => m.role !== "Technical Lead")
                  .map((member, idx) => (
                    <TeamCard key={idx} {...member} />
                  ))}
              </div>
            </div>
          </div>

          {/* 🔹 Design Team */}
          <div className="w-full">
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-12 tracking-wide">
              Design Team
            </h2>
            <div className="flex flex-col items-center space-y-10">
              <TeamCard {...teamData.design.find(m => m.role === "Design Lead")!} />
              <div className="flex flex-wrap justify-center gap-12">
                {teamData.design
                  .filter(m => m.role !== "Design Lead")
                  .map((member, idx) => (
                    <TeamCard key={idx} {...member} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-24">
        <Footer />
      </section>
    </>
  );
};

export default Team;
