import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FileCode2, Menu, X } from "lucide-react";
import { PROFILE, NAV_LINKS } from "../../data/content.js";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu automatically if the viewport grows past sm
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative py-1 transition-colors ${
      isActive ? "text-cyan-400" : "text-slate-400 hover:text-slate-200"
    }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 border-b backdrop-blur transition-colors duration-300 ${
        scrolled
          ? "border-slate-800 bg-slate-950/90"
          : "border-transparent bg-slate-950/50"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <NavLink
          to="/"
          className="group flex items-center gap-2 font-mono text-slate-100"
        >
          <span className="flex items-center justify-center w-7 h-7 rounded-md bg-cyan-400/10 ring-1 ring-cyan-400/30 group-hover:ring-cyan-400/60 transition-all">
            <FileCode2 size={15} className="text-cyan-400" />
          </span>
          <span className="font-semibold tracking-tight">
            {PROFILE.name.toLowerCase()}
            <span className="text-cyan-400">.dev</span>
          </span>
        </NavLink>

        <nav className="hidden sm:flex items-center gap-1 font-mono text-sm">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {({ isActive }) => (
                <span className="px-3 py-1.5 block">
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-[1px] h-px bg-cyan-400"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          className="sm:hidden text-slate-300 relative z-50"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="sm:hidden overflow-hidden border-t border-slate-800 bg-slate-950"
          >
            <div className="px-4 py-3 flex flex-col gap-1 font-mono text-sm">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 transition-colors ${
                      isActive
                        ? "text-cyan-400 bg-cyan-400/10"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
