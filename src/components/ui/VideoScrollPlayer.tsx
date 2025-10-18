// // src/components/ScrollLinkedVideo.tsx
// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export interface TimedText {
//   time: number;
//   text: string;
// }

// export interface ScrollLinkedVideoProps {
//   videoSrc?: string;                 // primary mp4 path (required)
//   webmSrc?: string;                  // optional webm path (if omitted, will try to replace .mp4 -> .webm)
//   poster?: string;                   // poster/fallback image path
//   sectionHeight?: string;            // ex: '300vh'
//   start?: string;
//   end?: string;
//   scrub?: number;
//   className?: string;
//   timedContent?: TimedText[];
//   smoothing?: number;                // lerp alpha (0..1) - default 0.16
//   snapToStep?: boolean;              // optional snapping to reduce seek frequency
//   snapStep?: number;                 // seconds step for snapping, e.g. 0.05
//   hideOnMobile?: boolean;            // show poster instead of video on small screens
//   mobileBreakpoint?: number;         // px width threshold (default 768)
// }

// const isBrowser = typeof window !== "undefined";

// const ScrollLinkedVideo: React.FC<ScrollLinkedVideoProps> = ({
//   videoSrc = "/videos/3d-animation.mp4",
//   webmSrc,
//   poster = "/images/3d-poster.jpg",
//   sectionHeight = "250vh",
//   start = "top top",
//   end = "bottom top",
//   scrub = 0.6,
//   className = "",
//   timedContent = [],
//   smoothing = 0.16,
//   snapToStep = false,
//   snapStep = 0.05,
//   hideOnMobile = true,
//   mobileBreakpoint = 768,
// }) => {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const pinRef = useRef<HTMLDivElement | null>(null);
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const stRef = useRef<any>(null);
//   const rafRef = useRef<number | null>(null);
//   const targetTimeRef = useRef<number>(0);
//   const [currentText, setCurrentText] = useState<string | null>(null);
//   const [ready, setReady] = useState(false);
//   const durationRef = useRef<number>(1);
//   const [isMobile, setIsMobile] = useState<boolean>(false);

//   // derive webm path if not provided
//   const derivedWebm = webmSrc ?? (videoSrc ? videoSrc.replace(/\.mp4$/i, ".webm") : undefined);

//   // detect mobile by window width (update on resize)
//   useEffect(() => {
//     if (!isBrowser) return;
//     const check = () => setIsMobile(window.innerWidth <= mobileBreakpoint);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, [mobileBreakpoint]);

//   useEffect(() => {
//     const video = videoRef.current;
//     const container = containerRef.current;
//     const pinEl = pinRef.current;
//     if (!video || !container || !pinEl || !isBrowser) return;

//     // If mobile and hideOnMobile, do not attach ScrollTrigger / video seeking
//     if (hideOnMobile && isMobile) return;

//     const prefersReducedMotion =
//       window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//     if (prefersReducedMotion) return;

//     function onLoadedMeta() {
//       durationRef.current = video.duration || 1;
//       setReady(true);
//     }
//     video.addEventListener("loadedmetadata", onLoadedMeta);

//     // Cleanup any existing instance (hot reload safety)
//     if (stRef.current) {
//       try { stRef.current.kill(); } catch {}
//       stRef.current = null;
//     }
//     if (rafRef.current) {
//       cancelAnimationFrame(rafRef.current);
//       rafRef.current = null;
//     }

//     stRef.current = ScrollTrigger.create({
//       trigger: container,
//       start,
//       end,
//       scrub,
//       pin: pinEl,
//       pinSpacing: true,
//       onUpdate: (self: { progress: number }) => {
//         if (!ready) return;
//         const progress = Math.min(1, Math.max(0, self.progress));
//         let desired = durationRef.current * progress;

//         if (snapToStep && snapStep > 0) {
//           desired = Math.round(desired / snapStep) * snapStep;
//         }

//         targetTimeRef.current = desired;

//         // start RAF smoothing if not running
//         if (rafRef.current === null) {
//           const step = () => {
//             const v = videoRef.current;
//             if (!v) return;

//             const cur = v.currentTime || 0;
//             const tgt = targetTimeRef.current;
//             const diff = tgt - cur;
//             const alpha = Math.max(0.01, Math.min(0.5, smoothing)); // clamp alpha

//             if (Math.abs(diff) > 0.01) {
//               try {
//                 v.currentTime = cur + diff * alpha;
//               } catch {
//                 // ignore browser exceptions
//               }
//               rafRef.current = requestAnimationFrame(step);
//             } else {
//               // snap and stop RAF
//               try {
//                 v.currentTime = tgt;
//               } catch {}
//               if (rafRef.current) {
//                 cancelAnimationFrame(rafRef.current);
//                 rafRef.current = null;
//               }
//             }
//           };

//           rafRef.current = requestAnimationFrame(step);
//         }

//         // update timed text (choose latest item whose time <= currentTime)
//         const visible = timedContent.slice().reverse().find((it) => desired >= it.time);
//         setCurrentText(visible?.text ?? null);
//       },
//     });

//     return () => {
//       try {
//         if (stRef.current) {
//           stRef.current.kill && stRef.current.kill();
//           stRef.current = null;
//         }
//       } catch {}
//       if (rafRef.current) {
//         cancelAnimationFrame(rafRef.current);
//         rafRef.current = null;
//       }
//       video.removeEventListener("loadedmetadata", onLoadedMeta);
//     };
//   }, [
//     ready,
//     start,
//     end,
//     scrub,
//     smoothing,
//     snapToStep,
//     snapStep,
//     timedContent,
//     hideOnMobile,
//     isMobile,
//   ]);

//   // cleanup on unmount as well
//   useEffect(() => {
//     return () => {
//       try {
//         if (stRef.current) {
//           stRef.current.kill && stRef.current.kill();
//           stRef.current = null;
//         }
//       } catch {}
//       if (rafRef.current) {
//         cancelAnimationFrame(rafRef.current);
//         rafRef.current = null;
//       }
//     };
//   }, []);

//   // runtime reduced-motion or mobile fallback
//   const reducedMotion =
//     isBrowser && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//   const showPosterOnly = reducedMotion || (hideOnMobile && isMobile);

//   return (
//     <section ref={containerRef} className={`relative w-full overflow-hidden ${className}`}>
//       {/* Tall wrapper defines the scroll range */}
//       <div style={{ height: sectionHeight }}>
//         {/* This element will be pinned by GSAP */}
//         <div ref={pinRef} className="relative w-full h-screen">
//           {/* Show poster on mobile / reduced motion */}
//           {showPosterOnly ? (
//             <img
//               src={poster}
//               alt="poster"
//               className="absolute inset-0 w-full h-full object-cover"
//               style={{ zIndex: 0 }}
//             />
//           ) : (
//             <video
//               ref={videoRef}
//               muted
//               playsInline
//               preload="auto"
//               poster={poster}
//               className="absolute inset-0 w-full h-full object-cover"
//               style={{ zIndex: 0 }}
//               // important: disable native controls and pointer events
//               // controls are intentionally omitted; we seek programmatically
//             >
//               {derivedWebm && <source src={derivedWebm} type="video/webm" />}
//               {videoSrc && <source src={videoSrc} type="video/mp4" />}
//               Your browser does not support HTML5 video.
//             </video>
//           )}

//           {/* overlay for contrast */}
//           <div className="absolute inset-0 bg-black/30 pointer-events-none" style={{ zIndex: 5 }} />

//           {/* Timed text/content above the video */}
//           {currentText && (
//             <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none px-6">
//               <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center drop-shadow-lg transition-opacity duration-300">
//                 {currentText}
//               </h1>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ScrollLinkedVideo;
// src/components/ScrollLinkedVideo.tsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TimedText {
  time: number; // in seconds
  text: string;
}

interface ScrollFrameVideoProps {
  videoSrc: string;          // MP4 source
  webmSrc?: string;          // optional WebM source
  poster?: string;           // fallback poster
  sectionHeight?: string;    // e.g., '250vh'
  start?: string;
  end?: string;
  timedText?: TimedText[];
  className?: string;
  hideOnMobile?: boolean;
  mobileBreakpoint?: number;
}

const isBrowser = typeof window !== "undefined";

const ScrollFrameVideo: React.FC<ScrollFrameVideoProps> = ({
  videoSrc,
  webmSrc,
  poster,
  sectionHeight = "250vh",
  start = "top top",
  end = "bottom top",
  timedText = [],
  className = "",
  hideOnMobile = true,
  mobileBreakpoint = 768,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const stRef = useRef<any>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [currentText, setCurrentText] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const durationRef = useRef<number>(1);

  const derivedWebm = webmSrc ?? videoSrc.replace(/\.mp4$/i, ".webm");

  // Detect mobile
  useEffect(() => {
    if (!isBrowser) return;
    const check = () => setIsMobile(window.innerWidth <= mobileBreakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [mobileBreakpoint]);

  // Setup ScrollTrigger
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    const pinEl = pinRef.current;
    if (!video || !container || !pinEl || !isBrowser) return;
    if (hideOnMobile && isMobile) return;

    const onLoaded = () => {
      durationRef.current = video.duration || 1;
      setReady(true);

      // Kill old instance
      if (stRef.current) stRef.current.kill();

      stRef.current = ScrollTrigger.create({
        trigger: container,
        start,
        end,
        scrub: true,
        pin: pinEl,
        pinSpacing: true,
        onUpdate: (self) => {
          const progress = Math.min(1, Math.max(0, self.progress));
          const time = progress * durationRef.current;
          video.currentTime = time;

          // Update timed text
          const visible = timedText.slice().reverse().find((t) => time >= t.time);
          if (visible?.text !== currentText) {
            setCurrentText(visible?.text ?? null);
          }
        },
      });
    };

    video.addEventListener("loadedmetadata", onLoaded);

    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      if (stRef.current) stRef.current.kill();
    };
  }, [isMobile, timedText, start, end, hideOnMobile, currentText]);

  const showPosterOnly = hideOnMobile && isMobile;

  return (
    <section ref={containerRef} className={`relative w-full overflow-hidden ${className}`}>
      <div style={{ height: sectionHeight }}>
        <div ref={pinRef} className="relative w-full h-screen">
          {showPosterOnly ? (
            poster && <img src={poster} alt="poster" className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <video
              ref={videoRef}
              muted
              playsInline
              preload="auto"
              poster={poster}
              className="absolute inset-0 w-full h-full object-cover"
            >
              {derivedWebm && <source src={derivedWebm} type="video/webm" />}
              {videoSrc && <source src={videoSrc} type="video/mp4" />}
              Your browser does not support HTML5 video.
            </video>
          )}

          {/* Optional overlay for contrast */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />

          {/* Timed text */}
          {currentText && (
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none px-6">
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center drop-shadow-lg">
                {currentText}
              </h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ScrollFrameVideo;
