import React, { useRef } from "react";
import { ReactLenis } from "lenis/react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiMapPin } from "react-icons/fi";

interface EventImage {
  src: string;
  alt: string;
  start: number;
  end: number;
  className?: string;
}

interface EventItem {
  title: string;
  date: string;
  location: string;
}

interface EventShowcaseProps {
  images: EventImage[];
  events: EventItem[];
}

const SECTION_HEIGHT = 1500;

const EventShowcase: React.FC<EventShowcaseProps> = ({ images, events }) => {
  return (
    <div className="bg-black">
      <ReactLenis root options={{ lerp: 0.05 }}>
        <Hero images={images} />
        <Schedule events={events} />
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
        backgroundImage:
          "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop)",
        backgroundPosition: "center",
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

// ---------------- SCHEDULE SECTION ----------------

const Schedule: React.FC<{ events: EventItem[] }> = ({ events }) => {
  return (
    <section id="event-schedule" className="mx-auto max-w-5xl px-4 py-48 text-white">
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-cyan-400 text-center"
      >
        Event Schedule
      </motion.h1>

      {events.map((item, i) => (
        <ScheduleItem key={i} {...item} />
      ))}
    </section>
  );
};

const ScheduleItem: React.FC<EventItem> = ({ title, date, location }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-white">{title}</p>
        <p className="text-sm uppercase text-zinc-400">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-400">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};
