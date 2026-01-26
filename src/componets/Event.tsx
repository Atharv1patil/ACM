"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Helmet } from 'react-helmet-async';

// 🌀 Shuffle Function
const shuffle = <T,>(array: T[]): T[] => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

// 🖼️ Image Data (4 images)
const squareData = [
  { id: 1, src: "https://images.unsplash.com/photo-1557804506-669a67965ba0" },
  { id: 2, src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c" },
  { id: 3, src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1" },
  { id: 4, src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" },
];

// 🔁 Generate Animated Squares
const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="w-full h-full rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></motion.div>
  ));
};

// 🧩 Shuffle Grid Component (4 tiles)
const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000); // Shuffle every 3s
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2 h-[380px] md:h-[480px] gap-2 rounded-lg overflow-hidden">
      {squares.map((sq) => sq)}
    </div>
  );
};

// 🎉 Event Header Component
const EventHeader = () => {
  return (
    <section className="w-full bg-black text-white px-4 sm:px-8 py-16 md:py-24 pt-32 md:pt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10">
        {/* 🔹 Left Section — Event Info */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
          >
            <span className="text-cyan-400 pt-32 md:pt-24">Our Events</span>
            <br />
           
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg max-w-md"
          >
            Discover a world of innovation, learning, and collaboration. From 
            hackathons to workshops, seminars to competitions, we bring together 
            passionate technologists to shape the future of computing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-cyan-500 text-black font-semibold py-2 px-6 rounded-md hover:bg-cyan-400 transition-all">
              Explore Events
            </button>
            <button className="border border-cyan-400 text-cyan-400 font-semibold py-2 px-6 rounded-md hover:bg-cyan-400 hover:text-black transition-all" onClick={() => {window.location.href = '/about'}}>
              Join Us
            </button>
          </motion.div>
        </div>

        {/* 🔹 Right Section — Shuffle Grid (Hidden on Mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:block rounded-lg overflow-hidden shadow-xl shadow-cyan-500/10"
        >
          <ShuffleGrid />
        </motion.div>
      </div>
    </section>
  );
};

// 🎉 Event Page Component with Helmet
function Event() {
  return (
    <>
      <Helmet>
        <title>Events - GHRCE ACM Student Chapter</title>
        <meta name="description" content="Join us for exciting technology events, workshops, hackathons, coding competitions, tech talks, and networking sessions at GHRCE ACM. Stay updated with upcoming and past events in Nagpur's premier computing community." />
        <meta name="keywords" content="GHRCE ACM events, tech workshops Nagpur, hackathons GHRCE, coding competitions, tech events, student workshops, ACM activities, technology seminars Nagpur" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Events - GHRCE ACM Student Chapter" />
        <meta property="og:description" content="Join us for exciting technology events, workshops, hackathons, and coding competitions at GHRCE ACM." />
        <meta property="og:url" content="https://ghrce.acm.org/events" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ghrce.acm.org/acm_logo_white_png.png" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Events - GHRCE ACM" />
        <meta name="twitter:description" content="Upcoming workshops, hackathons, and tech events at GHRCE ACM" />
        
        <link rel="canonical" href="https://ghrce.acm.org/events" />
        
        {/* Breadcrumb */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://ghrce.acm.org/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Events",
                "item": "https://ghrce.acm.org/events"
              }
            ]
          })}
        </script>
      </Helmet>

      <EventHeader />
    </>
  );
}

export default Event;