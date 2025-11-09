"use client";

import React from "react";

const images = [
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&q=80&auto=format&fit=crop", // top right
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&q=80&auto=format&fit=crop", // mid left
    "https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1115", // mid right
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&auto=format&fit=crop", // bottom left
];

export default function TeamHero(): React.ReactElement {
    return (
        <section className="relative bg-black text-white overflow-hidden py-20">
            {/* Subtle cyan grid background */}
            <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "120px 120px",
                    opacity: 0.05,
                }}
            />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left content */}
                <div className="space-y-5">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                        Meet the minds
                        <br />
                        <span className="block">behind the innovation</span>
                        <span className="block text-cyan-400">our ACM Team</span>
                    </h1>

                    <p className="mt-5 text-neutral-400 max-w-xl text-sm sm:text-base leading-relaxed">
                        A diverse team of passionate developers, designers, and innovators who work together
                        to build impactful experiences. We collaborate, create, and code to shape the future
                        of technology and community at GHRCE.
                    </p>
                </div>

                {/* Right symmetrical image grid */}
                <div className="grid grid-cols-2 gap-6 justify-end">
                    {/* Left column */}
                    <div className="flex flex-col gap-6">
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-cyan-900/30 bg-cyan-500/5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.25)] hover:scale-[1.02]">
                            <img
                                src={images[1]}
                                alt="Team photo 1"
                                className="w-full h-80 object-cover"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-cyan-900/30 bg-cyan-500/5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.25)] hover:scale-[1.02]">
                            <img
                                src={images[3]}
                                alt="Team photo 2"
                                className="w-full h-80 object-cover"
                            />
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="flex flex-col gap-6 mt-10">
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-cyan-900/30 bg-cyan-500/5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.25)] hover:scale-[1.02]">
                            <img
                                src={images[0]}
                                alt="Team photo 3"
                                className="w-full h-80 object-cover"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-cyan-900/30 bg-cyan-500/5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.25)] hover:scale-[1.02]">
                            <img
                                src={images[2]}
                                alt="Team photo 4"
                                className="w-full h-80 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
