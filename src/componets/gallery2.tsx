'use client';

import  { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { X } from 'lucide-react';
import FramerCarouselThumbnails from './Frame';
import Footer from './Footer';
import ScrollElement from './Scroll-animation';

/* ================= TYPES ================= */

interface CarouselImage {
  id: number;
  url: string;
  title: string;
}

interface EventGallery {
  id: number;
  title: string;
  cover: string;
  images: CarouselImage[];
}

/* ================= DATA ================= */

const events: EventGallery[] = [
  {
    id: 1,
    title: 'Installation Ceremony 2026',
    cover: 'https://res.cloudinary.com/dbdjd3yf6/image/upload/v1771867045/2_srj4sm.jpg',
    images: [
      { id: 1, url: 'https://res.cloudinary.com/dbdjd3yf6/image/upload/v1771867045/2_srj4sm.jpg', title: 'Moment 1' },
      { id: 2, url: 'https://res.cloudinary.com/dbdjd3yf6/image/upload/v1771866857/RTK_7709_fggewi.jpg', title: 'Moment 2' },
      { id: 3, url: 'https://res.cloudinary.com/dbdjd3yf6/image/upload/v1771866871/4_o1ummj.jpg', title: 'Moment 3' },
      { id: 4, url: 'https://res.cloudinary.com/dbdjd3yf6/image/upload/v1771866924/3_zxjcbw.jpg', title: 'Moment 4' },
      { id: 5, url: 'https://res.cloudinary.com/dbdjd3yf6/image/upload/v1771866899/6_pg36wy.jpg', title: 'Moment 5' },
      { id: 6, url: 'https://res.cloudinary.com/dbdjd3yf6/image/upload/v1771866915/5_vphlbd.jpg', title: 'Moment 6' },
      { id: 7, url: 'https://res.cloudinary.com/dbdjd3yf6/image/upload/v1771866867/RTK_7731_dxe06n.jpg', title: 'Moment 7' },
      { id: 8, url: 'https://res.cloudinary.com/dbdjd3yf6/image/upload/v1771866836/7_ogfux3.jpg', title: 'Moment 8' },
      { id: 9, url: 'https://res.cloudinary.com/dbdjd3yf6/image/upload/v1771866901/RTK_7769_ks9a6z.jpg', title: 'Moment 9' },
    ],
  },
  {
    id: 2,
    title: 'International Talks 2026',
    cover: 'https://res.cloudinary.com/dbdjd3yf6/image/upload/v1771867437/talks1_srfoje.jpg',
    images: [
      { id: 1, url: 'https://res.cloudinary.com/dbdjd3yf6/image/upload/v1771867437/talks1_srfoje.jpg', title: 'Event 2 - Image 1' },
      { id: 2, url: 'https://res.cloudinary.com/dbdjd3yf6/image/upload/v1771867436/talks2_eszg41.jpg', title: 'Event 2 - Image 2' },
      { id: 3, url: 'https://res.cloudinary.com/dbdjd3yf6/image/upload/v1771867442/talks3_gp1usg.jpg', title: 'Event 2 - Image 3' },
      { id: 4, url: 'https://res.cloudinary.com/dbdjd3yf6/image/upload/v1771867429/talks4_rsawoh.jpg', title: 'Event 2 - Image 4' },
    ],
  },
  {
    id: 3,
    title: 'Alumni Guest Lecture 2026',
    cover: 'https://res.cloudinary.com/dbdjd3yf6/image/upload/v1771866380/talks1_lnsaed.jpg',
    images: [
      { id: 1, url: 'https://res.cloudinary.com/dbdjd3yf6/image/upload/v1771866380/talks1_lnsaed.jpg', title: 'Event 3 - Image 1' },
      { id: 2, url: 'https://res.cloudinary.com/dbdjd3yf6/image/upload/v1771866385/talks3_xpierj.jpg', title: 'Event 3 - Image 2' },
      { id: 3, url: 'https://res.cloudinary.com/dbdjd3yf6/image/upload/v1771866366/Sunil_1_ikvfkd.jpg', title: 'Event 3 - Image 3' },
    ],
  }
];

/* ================= MAIN ================= */

export default function Gallery() {
  const [selectedEvent, setSelectedEvent] = useState<EventGallery | null>(null);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', !!selectedEvent);
  }, [selectedEvent]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <div className="text-center pt-24 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
          Our Gallery
        </h1>
        
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <ScrollElement>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <GalleryItem
              key={event.id}
              event={event}
              setSelectedEvent={setSelectedEvent}
            />
          ))}
        </div>
        </ScrollElement>
      </div>

      {/* MODAL */}
      <GalleryModal
        selectedEvent={selectedEvent}
        setSelectedEvent={setSelectedEvent}
      />

      <Footer />
    </div>
  );
}

/* ================= GRID ITEM ================= */

function GalleryItem({
  event,
  setSelectedEvent,
}: {
  event: EventGallery;
  setSelectedEvent: (e: EventGallery) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
      onClick={() => setSelectedEvent(event)}
      className="relative cursor-pointer overflow-hidden rounded-xl bg-neutral-900"
    >
      <img
        src={event.cover}
        alt={event.title}
        className="w-full h-72 object-cover transition-transform duration-300 hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-4 left-4 font-semibold">
        {event.title}
      </div>
    </motion.div>
  );
}

/* ================= BEAUTIFUL MODAL ================= */

function GalleryModal({
  selectedEvent,
  setSelectedEvent,
}: {
  selectedEvent: EventGallery | null;
  setSelectedEvent: (e: EventGallery | null) => void;
}) {
  return (
    <AnimatePresence>
      {selectedEvent && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedEvent(null)}
        >
          {/* MODAL BOX */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative w-full max-w-7xl
              bg-neutral-950
              rounded-2xl
              shadow-2xl
              border border-white/10
              overflow-hidden
            "
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <h2 className="text-lg md:text-xl font-semibold">
                {selectedEvent.title}
              </h2>

              <button
                onClick={() => setSelectedEvent(null)}
                className="text-white/70 hover:text-white transition"
              >
                <X size={22} />
              </button>
            </div>

            {/* CONTENT */}
            <div className="p-4 md:p-6">
              <FramerCarouselThumbnails items={selectedEvent.images} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
