import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Hero from "./componets/hero";
import Gallery from "./componets/Gallery";
import Team from "./componets/Team";
import EventPage from "./componets/gallery2";


const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        {/* Navbar always visible */}
        <Navbar />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/gallery" element={<EventPage />} />
          <Route path="/team" element={<Team/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
