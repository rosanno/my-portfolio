import React from "react";
import { CircleDot, Mail, Github, Linkedin } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import { PROFILE } from "../data/content.js";

export default function Contact() {
  return (
    <PageTransition>
      <section className="px-4 sm:px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-slate-500 font-mono text-sm mb-3">
            <CircleDot size={12} className="text-emerald-500" />
            available for work
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-3">
            Let's build something.
          </h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Have a project in mind, or just want to talk stack? Reach out
            directly, or ask the AI assistant in the corner.
          </p>
          <div className="flex justify-center gap-4 font-mono text-sm">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 rounded border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 px-4 py-2 transition-colors"
            >
              <Mail size={16} /> email
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 px-4 py-2 transition-colors"
            >
              <Github size={16} /> github
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 px-4 py-2 transition-colors"
            >
              <Linkedin size={16} /> linkedin
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
