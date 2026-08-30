import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/layout/Nav.jsx";
import Footer from "./components/layout/Footer.jsx";
import AiTerminal from "./components/ai/AiTerminal.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Nav />

      {/* mode="wait" makes the outgoing page finish its exit animation
          before the incoming page enters, so transitions never overlap */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>

      <Footer />
      <AiTerminal />
    </div>
  );
}
