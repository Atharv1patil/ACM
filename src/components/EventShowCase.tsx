import React, { useRef } from "react";
import { ReactLenis } from "lenis/react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

interface EventImage {
  src: string;
  alt: string;
  start: number;
  end: number;
  className?: string;
}

interface EventShowcaseProps {
  images: EventImage[];
}

const SECTION_HEIGHT = 2800;

const EventShowcase: React.FC<EventShowcaseProps> = ({ images }) => {
  return (
    <div className="bg-black">
      <ReactLenis root options={{ lerp: 0.05 }}>
        <Hero images={images} />
      </ReactLenis>
    </div>
  );
};

export default EventShowcase;

// ---------------- HERO SECTION ----------------

const Hero: React.FC<{ images: EventImage[] }> = ({ images }) => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />
      <ParallaxImages images={images} />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-black/0 to-black" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
  className="sticky top-0 h-screen w-full"
  style={{
    clipPath,
    backgroundSize,
    opacity,
    backgroundImage: "url('/InstallationCeremony/1.PNG')",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
  }}
/>

  );
};

// ---------------- PARALLAX IMAGES ----------------

const ParallaxImages: React.FC<{ images: EventImage[] }> = ({ images }) => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      {images.map((img, i) => (
        <ParallaxImg key={i} {...img} />
      ))}
    </div>
  );
};

const ParallaxImg: React.FC<EventImage> = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      ref={ref}
      className={className}
      style={{ transform, opacity }}
    />
  );
};