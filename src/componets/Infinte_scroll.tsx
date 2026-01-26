"use client";

import { useEffect, useRef, useState } from "react";

const brands = [
  { name: "ACM", logo: "/images/logo.svg" },
];

export default function BrandMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);

  const speed = 0.5; // scroll speed

  const recalc = () => {
    const track = trackRef.current;
    if (!track) return;

    const children = track.children;
    let half = children.length / 2;
    let width = 0;

    for (let i = 0; i < half; i++) {
      width += (children[i] as HTMLElement).offsetWidth;
    }

    setTrackWidth(width);
  };

  useEffect(() => {
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, []);

  useEffect(() => {
    let frame: number;
    const loop = () => {
      if (!paused && trackWidth > 0) {
        setOffset((prev) => (prev + speed) % trackWidth);
      }
      frame = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(frame);
  }, [paused, trackWidth]);

  return (
    <div className="relative w-full bg-black py-6 overflow-hidden border-y border-cyan-500/20">
      
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

      <div
        className="overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex items-center gap-12"
          style={{
            transform: `translateX(-${offset}px)`,
            willChange: "transform",
          }}
        >
         
          {brands.map((item, index) => (
            <BrandItem key={index} name={item.name} logo={item.logo} />
          ))}

         
          {brands.map((item, index) => (
            <BrandItem key={`${index}-clone`} name={item.name} logo={item.logo} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BrandItem({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logo}
        alt={name}
        className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-[0_0_6px_rgba(0,255,255,0.4)]"
      />
      <span className="uppercase font-bold text-cyan-300 text-xl">
        {name}
      </span>
    </div>
  );
}
