import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Hero from "./componets/hero";
import Team from "./componets/Team";
import Gallery from "./componets/gallery2";
import AboutUs from "./componets/About";
import EventsPage from "./componets/EventPage";
import ContactUs from "../src/componets/ContactUs";

const AppContent: React.FC = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/wegic';

  return (
    <div className="min-h-screen bg-black text-white">
      {!hideNavbar && <Navbar />}

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team/>} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/events" element={<EventsPage />} />
    <Route path="/contact" element={<ContactUs />} />
    
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;