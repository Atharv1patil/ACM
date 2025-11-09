import React, { useState, useRef } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { MotionProps } from "framer-motion";

export const AnimatedTooltip = ({
  item,
  children,
}: {
  item: {
    id: number;
    name: string;
    designation: string;
    image: string;
  };
  children: React.ReactElement<MotionProps & React.HTMLAttributes<HTMLElement>>;
}) => {
  const [hovered, setHovered] = useState(false);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const target = event.currentTarget as HTMLElement;
      const halfWidth = target.offsetWidth / 2;
      x.set(event.clientX - target.getBoundingClientRect().left - halfWidth);
    });
  };

  const childWithProps = React.cloneElement(children, {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onMouseMove: handleMouseMove,
  });

  return (
    <div className="relative"> {/* Wrapper for positioning tooltip outside */}
      {childWithProps}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              translateX: translateX,
              rotate: rotate,
              whiteSpace: "nowrap",
            }}
            className="absolute -top-24 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl border border-white/20" // Increased offset to -top-24 for outside, added white border
          >
            <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
            <div className="relative z-30 text-base font-bold text-white">
              {item.name}
            </div>
            <div className="text-xs text-white">{item.designation}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};