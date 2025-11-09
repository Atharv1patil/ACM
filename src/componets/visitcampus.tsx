"use client";

import { MapPin, Users } from "lucide-react";
import { PinContainer } from "../components/ui/3d-pin";
import QuickConnectCard from "../componets/Quickconnect"; // ✅ Make sure filename matches exactly

export default function VisitCampus() {
  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#0a0a0a] to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 sm:mb-4">
            Visit Our Campus
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto">
            Located at G.H. Raisoni College of Engineering, Nagpur. Stop by and connect with our team in person!
          </p>
        </div>

        {/* 3D Pin Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 place-items-center">
          {/* Main Office */}
          <PinContainer title="Main Office" href="#">
            <div className="flex flex-col p-6 sm:p-8 rounded-xl bg-neutral-900/40 border border-neutral-800 hover:border-sky-400/50 transition-all duration-300 w-[20rem] h-[20rem] text-left">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-sky-400/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Main Office</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Building A, Room 205
                    <br />
                    Campus Drive
                  </p>
                </div>
              </div>
              <div className="flex-1 rounded-lg mt-6 bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-400 opacity-20" />
            </div>
          </PinContainer>

          {/* Meeting Times */}
          <PinContainer title="Meeting Times" href="#">
            <div className="flex flex-col p-6 sm:p-8 rounded-xl bg-neutral-900/40 border border-neutral-800 hover:border-sky-400/50 transition-all duration-300 w-[20rem] h-[20rem] text-left">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-sky-400/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Meeting Times</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Thursdays 3:00 PM - 5:00 PM
                    <br />
                    By appointment available
                  </p>
                </div>
              </div>
              <div className="flex-1 rounded-lg mt-6 bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-400 opacity-20" />
            </div>
          </PinContainer>

          {/* ✅ Quick Connect - replaced old box with 3D ACM card */}
         
            <QuickConnectCard />
          
        </div>
      </div>
    </section>
  );
}
