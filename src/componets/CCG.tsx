import { useEffect, useState } from "react";
import CircularGallery from "../components/CircularGallery";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import useEmblaCarousel from "embla-carousel-react";

const CCG = () => {
  const events = [
    {
      image: "https://marketplace.canva.com/EAF6QeL9pmc/2/0/1131w/canva-orange-and-red-vintage-music-festival-poster-Fap2AkFKwbc.jpg",
      text: "Music Festival",
    },
    {
      image: "https://assets.visme.co/templates/banners/thumbnails/i_Tech-Innovation-Conference-Poster_full.jpg",
      text: "Tech Innovation Summit",
    },
    {
      image: "https://marketplace.canva.com/EAGP_v63uK4/3/0/1131w/canva-blue-and-black-bold-simple-painting-exhibit-poster-jFXK3PFTJkA.jpg",
      text: "Art Exhibition",
    },
    {
      image: "https://i.etsystatic.com/47382259/r/il/1ce47d/5806146012/il_fullxfull.5806146012_ljin.jpg",
      text: "Food and Wine Tasting",
    },
    {
      image: "https://media.gettyimages.com/id/491937171/vector/vintage-marathon-runners.jpg?s=612x612&w=gi&k=20&c=APAt5kAPuZwXxC_N9OSZ3FmIk5vW45gEbM1PrC5xuj4=",
      text: "Fitness Marathon",
    },
  ];

  // Quadruple slides for ultra-seamless infinite scroll (prevents any "edge" feel)
  const infiniteSlides = [...events, ...events, ...events, ...events];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,                 // Pure momentum – no snap EVER
    containScroll: false,           // No edge restrictions – full freedom
    slidesToScroll: 1,              // But since dragFree, it's irrelevant
    skipSnaps: false,               // Allows partial stops
    inViewThreshold: 0,             // No "active" slide forcing
  });

  // Optional: Start centered for polish
  useEffect(() => {
    if (emblaApi) {
      const startIndex = events.length * 2; // Middle of duplicates
      emblaApi.scrollTo(startIndex, false);
    }
  }, [emblaApi]);

  // Mobile detection
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="text-center px-4 md:px-16 py-10 bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
      <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
        Discover our exciting lineup of upcoming events designed to inspire,
        entertain, and connect. Swipe freely to explore!
      </p>

      {/* Mobile: Unlimited Free Momentum Scroll */}
      {isMobile ? (
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4"> {/* Negative margin for full-bleed start */}
            {infiniteSlides.map((event, index) => (
              <div
                key={`${event.text}-${index}`}
                className="flex-none w-64 ml-4" // w-64 ≈ 256px – shows 1.5+ images on mobile
              >
                <div className="relative group cursor-grab active:cursor-grabbing select-none">
                  <img
                    src={event.image}
                    alt={event.text}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl pointer-events-none transition-transform duration-300 group-hover:scale-[1.02]"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-2xl flex items-end">
                    <p className="text-xl font-bold p-4 text-white drop-shadow-lg">
                      {event.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Desktop: Circular Gallery */
        <div className="relative flex justify-center items-center mb-6" style={{ height: "600px" }}>
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
            items={events}
          />
        </div>
      )}

      {/* Button */}
      <div className="mt-12">
        <InteractiveHoverButton className="bg-sky-500 hover:bg-sky-600 transition-all px-10 py-4 rounded-xl text-white font-semibold text-lg shadow-xl">
          View All Events
        </InteractiveHoverButton>
      </div>
    </div>
  );
};

export default CCG;