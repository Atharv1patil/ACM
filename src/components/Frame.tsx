import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FrameByFrameHeroProps {
  totalFrames: number;           // Total frames extracted (e.g., 243)
  className?: string;            // Optional container class
  pinDuration?: string;          // Scroll range, e.g., '300vh'
  children?: React.ReactNode;    // Overlay content (hero text/buttons)
  framePath?: string;            // Base path for frames (default: '/frames/')
  scrollSpeed?: number;          // Multiplier for scroll speed (default: 1)
  smoothing?: number;            // Lerp alpha for smooth movement (0..1, default: 0.15)
}

const FrameByFrameHero: React.FC<FrameByFrameHeroProps> = ({
  totalFrames,
  className = '',
  pinDuration = '100vh',
  children,
  framePath = '/frames/',
  scrollSpeed = 1,
  smoothing = 0.15,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const frameRef = useRef(0);        // current displayed frame
  const targetFrameRef = useRef(0);  // target frame controlled by scroll

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadingState, setLoadingState] = useState<'idle' | 'loading' | 'loaded' | 'error'>('idle');

  // Preload all frames
  useEffect(() => {
    if (totalFrames <= 0) {
      setLoadingState('error');
      console.error('Error: totalFrames must be greater than 0');
      return;
    }

    setLoadingState('loading');
    const loadedImages: HTMLImageElement[] = [];
    let loadCount = 0;

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = `${framePath}frame_${(i + 1).toString().padStart(4, '0')}.jpg`;
      img.onload = () => {
        loadCount++;
        loadedImages.push(img);
        if (loadCount === totalFrames) {
          setImages(loadedImages);
          setLoadingState('loaded');
        }
      };
      img.onerror = () => {
        console.error(`Failed to load frame ${i + 1}: ${img.src}`);
        loadCount++;
        if (loadCount === totalFrames) {
          setImages(loadedImages);
          setLoadingState('loaded');
        }
      };
    }
  }, [totalFrames, framePath]);

  // Setup canvas and ScrollTrigger
  useEffect(() => {
    if (loadingState !== 'loaded' || images.length === 0 || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high-DPI canvas
    const resizeCanvas = () => {
      const rect = containerRef.current!.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform
      ctx.scale(ratio, ratio);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Render current frame
    const render = () => {
      const rect = containerRef.current!.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      const idx = Math.floor(frameRef.current);
      const img = images[idx];
      if (img && img.complete) {
        ctx.drawImage(img, 0, 0, rect.width, rect.height);
      } else {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, rect.width, rect.height);
      }
    };

    // Animate frame with lerp smoothing
    const animate = () => {
      frameRef.current += (targetFrameRef.current - frameRef.current) * smoothing;
      render();
      requestAnimationFrame(animate);
    };
    animate();

    // ScrollTrigger to control target frame
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: pinDuration,
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        const adjustedProgress = Math.min(1, Math.max(0, self.progress * scrollSpeed));
        targetFrameRef.current = adjustedProgress * (totalFrames - 1);
      },
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      st.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [loadingState, images, totalFrames, pinDuration, scrollSpeed, smoothing]);

  return (
    <section
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ height: '100vh', backgroundColor: '#000' }}
    >
      {/* Canvas for frames */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />

      {/* Overlay content */}
      {children && (
        <div className="absolute inset-0 flex justify-center items-center z-10 pointer-events-none">
          {children}
        </div>
      )}

      {/* Optional loading overlay */}
      {loadingState === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            Loading frames...
          </div>
        </div>
      )}
    </section>
  );
};

export default FrameByFrameHero;
