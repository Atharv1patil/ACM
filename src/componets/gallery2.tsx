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
    cover: '/InstallationCeremony/2.JPG',
    images: [
      { id: 1, url: '/InstallationCeremony/2.JPG', title: 'Moment 1' },
      { id: 2, url: '/InstallationCeremony/RTK_7709.JPG', title: 'Moment 2' },
      { id: 3, url: '/InstallationCeremony/4.JPG', title: 'Moment 3' },
      { id: 4, url: '/InstallationCeremony/3.JPG', title: 'Moment 4' },
      { id: 5, url: '/InstallationCeremony/6.JPG', title: 'Moment 5' },
      { id: 6, url: '/InstallationCeremony/5.JPG', title: 'Moment 6' },
      { id: 7, url: '/InstallationCeremony/RTK_7731.JPG', title: 'Moment 7' },
      { id: 8, url: '/InstallationCeremony/7.JPG', title: 'Moment 8' },
      { id: 9, url: '/InstallationCeremony/RTK_7769.JPG', title: 'Moment 9' },
    ],
  },
  {
    id: 2,
    title: 'International Talks 2026',
    cover: '/International_talks/talks1.jpg',
    images: [
      { id: 1, url: '/International_talks/talks1.jpg', title: 'Event 2 - Image 1' },
      { id: 2, url: '/International_talks/talks2.jpg', title: 'Event 2 - Image 2' },
      { id: 3, url: '/International_talks/talks3.jpg', title: 'Event 2 - Image 3' },
      { id: 4, url: '/International_talks/talks4.jpg', title: 'Event 2 - Image 4' },
    ],
  },
  {
    id: 3,
    title: 'Alumni Guest Lecture 2026',
    cover: '/Alumni_talks/talks1.jpg',
    images: [
      { id: 1, url: '/Alumni_talks/talks2.jpg', title: 'Event 3 - Image 1' },
      { id: 2, url: '/Alumni_talks/talks3.jpg', title: 'Event 3 - Image 2' },
      { id: 3, url: '/Alumni_talks/Sunil (1).jpg', title: 'Event 3 - Image 3' },
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
        <p className="text-white/60 uppercase mt-2">
          Installation Ceremony Highlights
        </p>
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
