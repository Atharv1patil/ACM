import React, { useRef } from "react";
import { ReactLenis } from "lenis/react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import Footer from "./Footer";

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

const Hero: React.FC<{ images: EventImage[] }> = ({ images }) => {
  return (
    <>
      {/* Desktop */}
      <div
        style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
        className="relative w-full hidden md:block"
      >
        <CenterImage />
        <ParallaxImages images={images} />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-black/0 to-black" />
      </div>

      {/* Mobile - Bento Grid */}
      <div className="relative w-full md:hidden bg-black min-h-screen">
        <BentoGallery images={images} />
      </div>
    </>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  // Controls the expansion animation (clip path)
  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  // Controls background size zoom
  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  
  // Controls opacity fade out
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  const backgroundPositionValue = "50% 0%";

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: "url('/InstallationCeremony/1.PNG')",
        backgroundPosition: `${backgroundPositionValue}`,
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages: React.FC<{ images: EventImage[] }> = ({ images }) => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[100px]">
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

// Bento Grid Component for Mobile
const BentoGallery: React.FC<{ images: EventImage[] }> = ({ images }) => {
  return (
    <div className="w-full px-3 sm:px-4 pb-12">
      <div className="grid grid-cols-2 gap-2 sm:gap-3 auto-rows-max">
        {images.map((img, i) => (
          <BentoItem key={i} index={i} {...img} />
        ))}
      </div>
    </div>
  );
};

const BentoItem: React.FC<EventImage & { index: number }> = ({
  src,
  alt,
  index,
}) => {
  const getGridSpan = () => {
    switch (index % 5) {
      case 0:
        return "col-span-2 h-56 sm:h-64";
      case 1:
        return "col-span-1 h-40 sm:h-48";
      case 2:
        return "col-span-1 h-40 sm:h-48";
      case 3:
        return "col-span-2 h-44 sm:h-45";
      case 4:
        return "col-span-1 h-48 sm:h-56";
      default:
        return "col-span-2 h-40 sm:h-48";
    }
  };

  return (
    <motion.div
      className={`${getGridSpan()} rounded-xl overflow-hidden shadow-lg`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover hover:brightness-110 transition-all duration-300"
      />
    </motion.div>
  );
};

const Gallery = () => {
  const eventImages = [
    {
      src: "/InstallationCeremony/2.JPG",
      alt: "Installation Ceremony Moment 1",
      start: -120,
      end: 160,
      className: "w-full md:w-1/3 rounded-lg",
    },
    {
      src: "/InstallationCeremony/RTK_7709.JPG",
      alt: "Installation Ceremony Moment 2",
      start: 180,
      end: -120,
      className: "w-full md:w-1/3 mx-auto rounded-lg",
    },
    {
      src: "/InstallationCeremony/4.JPG",
      alt: "Installation Ceremony Moment 3",
      start: -160,
      end: 140,
      className: "w-full md:w-1/3 md:ml-auto rounded-lg",
    },
    {
      src: "/InstallationCeremony/3.JPG",
      alt: "Installation Ceremony Moment 4",
      start: 200,
      end: -150,
      className: "w-full md:w-1/2 rounded-lg",
    },
    {
      src: "/InstallationCeremony/6.JPG",
      alt: "Installation Ceremony Moment 5",
      start: -180,
      end: 120,
      className: "w-full md:w-2/3 mx-auto rounded-lg",
    },
    {
      src: "/InstallationCeremony/5.JPG",
      alt: "Installation Ceremony Moment 6",
      start: 160,
      end: -160,
      className: "w-full md:w-1/3 md:ml-auto rounded-lg",
    },
    {
      src: "/InstallationCeremony/RTK_7731.JPG",
      alt: "Installation Ceremony Moment 7",
      start: -140,
      end: 180,
      className: "w-full md:w-1/2 rounded-lg",
    },
    {
      src: "/InstallationCeremony/7.JPG",
      alt: "Installation Ceremony Moment 4",
      start: 160,
      end: -160,
      className: "w-full md:w-1/2 md:ml-auto rounded-lg",
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="text-center py-8 px-4 w-full pt-20">
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-400 leading-tight">
            Our Gallery
          </h1>
          <p className="text-white/60 text-xs sm:text-sm md:text-base tracking-wider uppercase">
            Installation Ceremony Highlights
          </p>
        </motion.div>
      </div>
      <EventShowcase images={eventImages} />
      <Footer />
    </div>
  );
};

export default Gallery;