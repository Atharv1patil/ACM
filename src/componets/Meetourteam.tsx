"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  src: string;
  shape: "circle" | "tall" | "pill";
  extraClasses?: string;
};

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  name: string;
  role: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Eren from aot",
    role: "Project Lead",
    src: "https://wallpapercg.com/media/ts_2x/23993.webp",
    shape: "tall",
    extraClasses: "lg:col-start-1 lg:row-span-2 order-1",
  },
  {
    id: 2,
    name: "Ethan Lee",
    role: "Frontend Developer",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop",
    shape: "circle",
    extraClasses: "lg:col-start-2 lg:row-start-1 order-2",
  },
  {
    id: 3,
    name: "Om Awadhoot",
    role: "Chairperson",
    src: "/images/om.jpg",
    shape: "tall",
    extraClasses: "lg:col-start-3 lg:row-span-2 order-3",
  },
  {
    id: 4,
    name: "Ryan Smith",
    role: "Backend Engineer",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=900&auto=format&fit=crop",
    shape: "circle",
    extraClasses: "lg:col-start-4 lg:row-start-1 order-4",
  },
  {
    id: 5,
    name: "Maya Johnson",
    role: "Data Scientist",
    src: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1974",
    shape: "pill",
    extraClasses: "lg:col-start-5 lg:row-start-1 lg:row-span-2 order-9",
  },
];

export default function MeetOurTeam() {
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    name: "",
    role: "",
  });

  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // keep tooltip inside viewport
  const clampToViewport = (x: number, y: number) => {
    const padding = 10;
    const vw = typeof window !== "undefined" ? window.innerWidth : 1200;
    const vh = typeof window !== "undefined" ? window.innerHeight : 800;
    const clampedX = Math.max(padding, Math.min(x, vw - padding));
    const clampedY = Math.max(padding, Math.min(y, vh - padding));
    return { x: clampedX, y: clampedY };
  };

  // mouse handlers
  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement>,
    member: TeamMember
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const { x, y } = clampToViewport(rect.left + rect.width / 2, rect.top);
    setTooltip({ visible: true, x, y, name: member.name, role: member.role });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tooltip.visible) return;
    const { x, y } = clampToViewport(e.clientX, e.clientY - 12);
    setTooltip((t) => ({ ...t, x, y }));
  };

  const handleMouseLeave = () => {
    setTooltip((t) => ({ ...t, visible: false }));
  };

  // touch support: show tooltip on touch start, hide on touch end or after timeout
  const touchTimeoutRef = useRef<number | null>(null);
  const handleTouchStart = (
    e: React.TouchEvent<HTMLDivElement>,
    member: TeamMember
  ) => {
    if (touchTimeoutRef.current) {
      window.clearTimeout(touchTimeoutRef.current);
      touchTimeoutRef.current = null;
    }
    const touch = e.touches[0];
    const { x, y } = clampToViewport(touch.clientX, touch.clientY - 12);
    setTooltip({ visible: true, x, y, name: member.name, role: member.role });

    // auto-hide after 2.2s on touch to avoid sticky tooltips
    touchTimeoutRef.current = window.setTimeout(() => {
      setTooltip((t) => ({ ...t, visible: false }));
      touchTimeoutRef.current = null;
    }, 2200);
  };

  const handleTouchEnd = () => {
    if (touchTimeoutRef.current) {
      window.clearTimeout(touchTimeoutRef.current);
      touchTimeoutRef.current = null;
    }
    setTooltip((t) => ({ ...t, visible: false }));
  };

  useEffect(() => {
    const onScroll = () => setTooltip((t) => ({ ...t, visible: false }));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (touchTimeoutRef.current) {
        window.clearTimeout(touchTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-black text-white py-12 md:py-20 lg:py-28"
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-8 px-4 md:px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
          <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,255,0.35)]">
            Meet Our Team
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          A diverse team of passionate professionals with unique skills driving
          innovation and excellence in every project.
        </p>
      </motion.div>

      {/* Grid: responsive columns collapse gracefully */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 z-10">
        {/* grid columns:
            mobile: 2 columns, tablet: 3, desktop-lg: 5 (keeps original layout)
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 items-start justify-items-center">
          {teamMembers.map((member) => {
            // MOBILE (base) size is identical for all shapes (w-28 h-28).
            // Larger breakpoints restore unique dimensions for tall/pill/circle shapes.
            const shapeClasses =
              member.shape === "circle"
                ? // base: same as others -> w-28 h-28; larger -> bigger
                  "w-28 h-28 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full shadow-cyan-500/30 shadow-lg"
                : member.shape === "tall"
                ? // base: same square on mobile, taller on sm+
                  "w-28 h-28 sm:w-36 sm:h-48 md:w-44 md:h-64 lg:w-64 lg:h-96 rounded-[56px] shadow-cyan-500/40 shadow-xl"
                : // pill
                  "w-28 h-28 sm:w-36 sm:h-48 md:w-44 md:h-64 lg:w-56 lg:h-96 rounded-2xl shadow-cyan-500/40 shadow-xl";

            return (
              <motion.div
                key={member.id}
                className={`relative ${member.extraClasses ?? ""} flex items-center justify-center`}
                onMouseEnter={(e) => handleMouseEnter(e, member)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onTouchStart={(e) => handleTouchStart(e, member)}
                onTouchEnd={handleTouchEnd}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
              >
                <div
                  className={`overflow-hidden relative group transition-transform duration-300 ${shapeClasses}`}
                  style={{
                    boxShadow:
                      member.shape === "circle"
                        ? undefined
                        : "0 18px 50px rgba(0,200,220,0.10), inset 0 0 36px rgba(0,180,220,0.05)",
                  }}
                  aria-hidden={false}
                >
                  <motion.img
                    src={member.src}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover block"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.45 }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.objectPosition =
                        "center";
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* cyan glow / blur base */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-[-6.5rem] w-[88%] h-[16rem] blur-[44px] opacity-90 pointer-events-none z-0 rounded-full"
          style={{
            background: `radial-gradient(circle at 8% 70%, rgba(0,255,255,0.12), transparent 8%),
                         radial-gradient(circle at 92% 70%, rgba(0,180,255,0.075), transparent 10%),
                         radial-gradient(circle at 50% 100%, rgba(0,255,200,0.06), transparent 12%)`,
          }}
        />
      </div>

      {/* Tooltip (fixed so it doesn't get clipped on small screens) */}
      <AnimatePresence>
        {tooltip.visible && (
          <motion.div
            key="floating-tooltip"
            className="fixed px-3 py-2 rounded-2xl text-white text-sm font-semibold z-50 pointer-events-none shadow-[0_0_25px_rgba(0,255,255,0.35)] border border-cyan-400/25 backdrop-blur-md"
            style={{
              left: tooltip.x,
              top: tooltip.y,
              transform: "translate(-50%, -120%)",
              background:
                "linear-gradient(90deg, rgba(1,30,40,0.92), rgba(2,48,64,0.95))",
              whiteSpace: "nowrap",
              minWidth: 80,
              textAlign: "center",
            }}
            initial={{ opacity: 0, scale: 0.95, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            <div className="text-cyan-300 font-bold leading-tight">
              {tooltip.name}
            </div>
            <div className="text-xs text-gray-200">{tooltip.role}</div>

            <div
              className="absolute left-1/2 bottom-[-6px] w-3 h-3 -translate-x-1/2 rotate-45"
              style={{
                background:
                  "linear-gradient(90deg, rgba(1,30,40,0.92), rgba(2,48,64,0.95))",
                boxShadow: "0 3px 10px rgba(0,255,255,0.08)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
