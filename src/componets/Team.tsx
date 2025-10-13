import React from "react";
import TeamCard from "../components/TeamCard";

const teamData = [
  {
    title: "Faculty Coordinators",
    members: [
      {
        name: "Mrs. Swati Tiwari",
        role: "Faculty Coordinator",
        image: "https://www.shutterstock.com/image-photo/woman-teacher-portrait-classroom-confidence-260nw-2622093545.jpg",
        linkedin: "https://linkedin.com/in/example",
        email: "rahul.pitale@example.com",
      },
    ],
  },
  {
    title: "Core Team",
    members: [
      {
        name: "Shreyash B",
        role: "Vice President",
        image: "/images/atharv.png",
        linkedin: "https://linkedin.com/in/example",
        email: "atharv@example.com",
      },
      {
        name: "Sakshi Deshmukh",
        role: "Secretary",
        image: "/images/sakshi.png",
        linkedin: "https://linkedin.com/in/example",
        email: "sakshi@example.com",
      },
      {
        name: "Atharv Patil",
        role: "Techincal Lead",
        image: "/images/ritik.png",
        linkedin: "https://linkedin.com/in/example",
        email: "ritik@example.com",
      }
    ],
  },
  {
    title: "Technical Team",
    members: [
      {
        name: "Aarav Singh",
        role: "Frontend Developer",
        image: "/images/aarav.png",
        linkedin: "https://linkedin.com/in/example",
        email: "aarav@example.com",
      },
      {
        name: "Priya Sharma",
        role: "Backend Developer",
        image: "/images/priya.png",
        linkedin: "https://linkedin.com/in/example",
        email: "priya@example.com",
      },
    ],
  },
];

const Team: React.FC = () => {
  return (
    <div className="bg-black py-20 px-8 min-h-screen">
      {teamData.map((group, index) => (
        <div key={index} className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
            {group.title}
          </h2>

          <div className="flex flex-wrap justify-center gap-12">
            {group.members.map((member, idx) => (
              <TeamCard key={idx} {...member} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
