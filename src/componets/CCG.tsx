import React from "react";
import CircularGallery from "../components/CircularGallery";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"

const CCG = () => {
  const events = [
    {
      image:
        "https://marketplace.canva.com/EAF6QeL9pmc/2/0/1131w/canva-orange-and-red-vintage-music-festival-poster-Fap2AkFKwbc.jpg",
      text: "Music Festival",
    },
    {
      image:
        "https://assets.visme.co/templates/banners/thumbnails/i_Tech-Innovation-Conference-Poster_full.jpg",
      text: "Tech Innovation Summit",
    },
    {
      image:
        "https://marketplace.canva.com/EAGP_v63uK4/3/0/1131w/canva-blue-and-black-bold-simple-painting-exhibit-poster-jFXK3PFTJkA.jpg",
      text: "Art Exhibition",
    },
    {
      image:
        "https://i.etsystatic.com/47382259/r/il/1ce47d/5806146012/il_fullxfull.5806146012_ljin.jpg",
      text: "Food and Wine Tasting",
    },
    {
      image:
        "https://media.gettyimages.com/id/491937171/vector/vintage-marathon-runners.jpg?s=612x612&w=gi&k=20&c=APAt5kAPuZwXxC_N9OSZ3FmIk5vW45gEbM1PrC5xuj4=",
      text: "Fitness Marathon",
    },
  ];

  return (
    <div className="text-center px-4 md:px-16 py-10 bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
      <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
        Discover our exciting lineup of upcoming events designed to inspire,
        entertain, and connect. From music and tech to art and fitness, there's
        something for everyone. Click on any card to flip and view more details!
      </p>

      {/* Circular Gallery */}
      <div className="relative flex justify-center items-center mb-6" style={{ height: "600px" }}>
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
          items={events}
        //   activeIndex={Math.floor(events.length / 2)} // center the middle event
        />
      </div>

      {/* View All Events Button */}
      <InteractiveHoverButton className="bg-sky-500 hover:bg-sky-600 transition-all px-8 py-3 rounded-lg text-white font-medium shadow-md">📅 View All Events</InteractiveHoverButton> 
    </div>
  );
};

export default CCG;
