import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Hero from "./componets/hero";
// import Gallery from "./componets/Gallery";
import Team from "./componets/Team";
import Gallery from "./componets/gallery2";
import CrepuscularACM from "./components/CrepuscularACM";
// import Footer from "./componets/Footer";
import AboutUs from "./componets/About";
import EventsPage from "./componets/EventPage";
// import ContactUs from "./componets/ContactUs";
import Hackghrce from "./componets/Hackghrce";
import ContactUs from "../src/componets/ContactUs";

const AppContent: React.FC = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/wegic';

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar - hidden on /wegic route for full-screen experience */}
      {!hideNavbar && <Navbar />}

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team/>} />
        {/* <Route path="/chat" element={<CrepuscularACM bgColor="#000000" textColor="#00000" intensity={0.4}
  spread={0.3} rayCount={90}
  rayDecay={0.9}
  rayDensity={1.2}
  rayExposure={2.99}
  rayBlur={0.005}
  rayColor="#00000" />} /> */}
    <Route path="/about" element={<AboutUs />} />
    <Route path="/events" element={<EventsPage />} />

    <Route path="/contact" element={<ContactUs />} />
    {/* <Route path="/contact-us" element={<ContactUs />} /> */}
    <Route path="/hackghrce" element={<Hackghrce />} />
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
