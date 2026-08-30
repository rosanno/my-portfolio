import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FileCode2, Menu, X } from "lucide-react";
import { PROFILE, NAV_LINKS } from "../../data/content.js";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `hover:text-cyan-400 transition-colors ${
      isActive ? "text-cyan-400" : "text-slate-400"
    }`;

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-slate-800 bg-slate-950 bg-opacity-90 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 font-mono text-slate-100">
          <FileCode2 size={18} className="text-cyan-400" />
          <span className="font-semibold">{PROFILE.name.toLowerCase()}.dev</span>
        </NavLink>

        <nav className="hidden sm:flex items-center gap-6 font-mono text-sm">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="sm:hidden text-slate-300"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="sm:hidden border-t border-slate-800 px-4 py-3 flex flex-col gap-3 font-mono text-sm bg-slate-950">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
