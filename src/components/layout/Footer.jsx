import React from "react";
import { PROFILE } from "../../data/content.js";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 py-6 border-t border-slate-800 text-center">
      <p className="font-mono text-xs text-slate-600">
        © {new Date().getFullYear()} {PROFILE.name} — built with React, Tailwind & Framer Motion
      </p>
    </footer>
  );
}
