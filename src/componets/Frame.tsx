'use client';

import  { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  animate,
} from 'motion/react';

interface CarouselItem {
  id: number;
  url: string;
  title: string;
}

// const THUMB_HEIGHT = 70;
// const ACTIVE_WIDTH = 110;
// const INACTIVE_WIDTH = 36;

export default function FramerCarouselThumbnails({
  items,
}: {
  items: CarouselItem[];
}) {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);

  /* ================= SNAP TO SLIDE ================= */

  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const width = containerRef.current.offsetWidth || 1;

      animate(x, -index * width, {
        type: 'spring',
        stiffness: 200,
        damping: 25,
      });
    }
  }, [index, isDragging, x]);

  /* ================= PRELOAD NEIGHBORS ================= */

  useEffect(() => {
    [index - 1, index + 1].forEach((i) => {
      if (items[i]) {
        const img = new Image();
        img.src = items[i].url;
      }
    });
  }, [index, items]);

  return (
  <div className="w-full h-full flex flex-col items-center justify-center px-6">
    {/* ================= MAIN IMAGE ================= */}
    <div
      ref={containerRef}
      className="relative w-full max-w-6xl overflow-hidden rounded-xl bg-black"
    >
      <motion.div
        className="flex"
        drag="x"
        dragElastic={0.15}
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={(_, info) => {
          setIsDragging(false);
          const width = containerRef.current?.offsetWidth || 1;

          if (Math.abs(info.offset.x) > width * 0.3) {
            setIndex((i) =>
              info.offset.x > 0
                ? Math.max(i - 1, 0)
                : Math.min(i + 1, items.length - 1)
            );
          }
        }}
        style={{ x }}
      >
        {/* Render only current ±1 */}
        {items.map((item, i) =>
          Math.abs(i - index) <= 1 ? (
            <div
              key={item.id}
              className="shrink-0 w-full h-[70vh] flex items-center justify-center"
            >
              <img
                src={item.url}
                alt={item.title}
                draggable={false}
                className="max-w-full max-h-full object-contain select-none pointer-events-none"
              />
            </div>
          ) : (
            <div
              key={item.id}
              className="shrink-0 w-full h-[70vh]"
            />
          )
        )}
      </motion.div>
    </div>

    {/* ================= THUMBNAILS (CENTERED) ================= */}
    <div className="mt-6 w-full flex justify-center">
      <div className="flex gap-3">
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => setIndex(i)}
            initial={false}
            animate={{
              width: i === index ? 110 : 40,
              opacity: i === index ? 1 : 0.6,
              scale: i === index ? 1 : 0.9,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="h-[70px] overflow-hidden rounded-md bg-black shadow-md"
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover pointer-events-none"
            />
          </motion.button>
        ))}
      </div>
    </div>
  </div>
);
}
