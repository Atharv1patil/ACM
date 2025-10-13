import React from "react";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  email?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image, linkedin, email }) => {
  return (
    <div className="flex flex-col items-center bg-gray-900 rounded-2xl shadow-[0_0_20px_rgba(0,255,255,0.2)] overflow-hidden w-80 hover:-translate-y-2 transition-transform duration-300">
      {/* Profile Image */}
      <div className="relative w-full flex justify-center items-center p-6 bg-gradient-to-b from-gray-800 to-gray-900">
        <img
          src={image}
          alt={name}
          className="w-64 h-80 object-cover rounded-xl shadow-lg border border-cyan-400/30"
        />

        {/* Social Icons */}
        <div className="absolute bottom-5 flex gap-4">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/60 backdrop-blur-md shadow-md p-2 rounded-full hover:bg-cyan-400 transition"
            >
              <FaLinkedinIn className="text-cyan-300 text-lg" />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="bg-black/60 backdrop-blur-md shadow-md p-2 rounded-full hover:bg-cyan-400 transition"
            >
              <FaEnvelope className="text-cyan-300 text-lg" />
            </a>
          )}
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full text-center py-5 bg-gray-900">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <span className="inline-block mt-3 px-5 py-1 text-sm font-medium bg-cyan-400 text-black rounded-full">
          {role}
        </span>
      </div>
    </div>
  );
};

export default TeamCard;
