import { useState, useEffect, useCallback } from "react";
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

function Spotlight() {
  useEffect(() => {
    let frame;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    const el = document.getElementById("cursor-spotlight");

    const update = () => {
      if (el) {
        el.style.setProperty("--x", `${x}px`);
        el.style.setProperty("--y", `${y}px`);
      }
      frame = null;
    };

    const handleMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      id="cursor-spotlight"
      className="pointer-events-none fixed inset-0 z-30"
      style={{
        background:
          "radial-gradient(650px circle at var(--x, 50%) var(--y, 50%), rgba(129,140,248,0.14), rgba(129,140,248,0.05) 35%, transparent 70%)",
      }}
    />
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* faint grid, fading toward the edges */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-40
          bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]
          bg-[size:48px_48px]
          [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_50%,transparent_100%)]"
      />

      {/* soft ambient glow, top of page */}
      <div className="pointer-events-none fixed left-1/2 top-0 z-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-indigo-600/20 blur-3xl" />

      <Spotlight />

      <div className="relative z-10">
        <Nav />

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
    </div>
  );
}
