import EventShowcase from "../components/EventShowCase";
import Footer from "./Footer";

const eventImages = [
  {
    src: "https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format",
    alt: "Tech event",
    start: -200,
    end: 200,
    className: "w-1/3",
  },
  {
    src: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2370&auto=format",
    alt: "Innovation talk",
    start: 200,
    end: -250,
    className: "mx-auto w-2/3",
  },
  {
    src: "https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format",
    alt: "Hackathon",
    start: -200,
    end: 200,
    className: "ml-auto w-1/3",
  },
];

const eventList = [
  { title: "Tech Talk 2025", date: "Jan 20", location: "Pune" },
  { title: "HackFest 3.0", date: "Feb 10", location: "Mumbai" },
  { title: "AI Expo", date: "Mar 5", location: "Delhi" },
];

const Gallery = () => {
  return (
    <>
      <EventShowcase images={eventImages} events={eventList} />

      <Footer />
    </>
  );
};

export default Gallery;
