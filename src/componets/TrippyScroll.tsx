"use client";

import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import React, { useRef } from "react";

/**
 * A visually striking infinite black-and-white recursive rotation effect
 * that animates based on scroll position using Framer Motion.
 */
export default function TrippyScroll() {
  const targetRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Rotate from 0° to 90° as the user scrolls through
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "90deg"]);

  return (
    <div
      ref={targetRef}
      className="relative z-0 h-[800vh] bg-neutral-200 overflow-hidden"
    >
      <div className="sticky top-0 h-screen bg-white">
        <Trippy rotate={rotate} />
      </div>
    </div>
  );
}

/* ---------- Configuration ---------- */
const NUM_SECTIONS = 25; // how deep the recursion goes
const PADDING = `${100 / NUM_SECTIONS / 2}vmin`; // spacing between each nested layer

/* ---------- Recursive Section Generation ---------- */
function generateSections(count: number, color: string, rotate: MotionValue<string>): React.ReactElement {
  if (count === NUM_SECTIONS) return <></>;
  const nextColor = color === "black" ? "white" : "black";

  return (
    <Section rotate={rotate} background={color}>
      {generateSections(count + 1, nextColor, rotate)}
    </Section>
  );
}

/* ---------- Main Trippy Container ---------- */
function Trippy({ rotate }: { rotate: MotionValue<string> }) {
  return (
    <motion.div className="absolute inset-0 overflow-hidden bg-black">
      {generateSections(0, "black", rotate)}
    </motion.div>
  );
}

/* ---------- Individual Section ---------- */
function Section({
  background,
  children,
  rotate,
}: {
  background: string;
  children: React.ReactNode;
  rotate: MotionValue<string>;
}) {
  return (
    <motion.div
      className="relative h-full w-full origin-center"
      style={{
        background,
        rotate,
        padding: PADDING,
      }}
    >
      {children}
    </motion.div>
  );
}
