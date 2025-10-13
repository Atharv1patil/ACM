import React from "react";
import PixelTransition from "../components/PixelTransition";
import type { Pi } from "lucide-react";

const Pixelcard: React.FC = () => {
 
  const upcomingEvents = [
    {
      id: 1,
      title: "Hackathon 2025",
      description: "Join the ultimate coding challenge and win amazing prizes!",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      date: "Dec 15, 2025",
    },
    {
      id: 2,
      title: "AI Innovation Summit",
      description: "Discover the latest in AI and machine learning research.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      date: "Jan 5, 2026",
    },
    {
      id: 3,
      title: "Web Dev Bootcamp",
      description: "Learn React, Node.js, and full-stack development in 2 weeks.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      date: "Feb 20, 2026",
    },
    {
      id: 4,
      title: "Cybersecurity Workshop",
        description: "Hands-on training on ethical hacking and network security.",
        image: "https://images.unsplash.com/photo-1551836022-1b3f1d8f0b4d",
        date: "Mar 10, 2026",
        },
    {
      id: 5,
      title: "Cloud Computing Seminar",
        description: "Explore AWS, Azure, and Google Cloud platforms.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        date: "Apr 15, 2026",
        },
    
  ];

  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {upcomingEvents.map((event) => (
        <PixelTransition
          key={event.id}
          firstContent={
            <img
              src={event.image}
              alt={event.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111",
                padding: "1rem",
                textAlign: "center",
              }}
            >
              <div>
                <h2 style={{ fontWeight: 800, fontSize: "1.8rem", color: "#00FFFF" }}>
                  {event.title}
                </h2>
                <p style={{ color: "#ccc", marginTop: "0.5rem" }}>{event.description}</p>
                <p style={{ color: "#999", marginTop: "0.8rem" }}>{event.date}</p>
              </div>
            </div>
          }
          gridSize={12}
          pixelColor="#00FFFF"
          animationStepDuration={0.4}
          className="rounded-2xl overflow-hidden shadow-lg"
        />
      ))}
    </div>
  );
};

export default Pixelcard;
