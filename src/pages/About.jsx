import React from "react";
import { FileCode2 } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import { PROFILE } from "../data/content.js";

export default function About() {
  return (
    <PageTransition>
      <section className="px-4 sm:px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-slate-500 font-mono text-sm mb-3">
            <FileCode2 size={14} />
            README.md
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900 bg-opacity-40 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-100 mb-4">About</h2>
            <p className="text-slate-400 leading-relaxed">
              I'm {PROFILE.name}, a full-stack developer who moves comfortably
              between frontend and backend — React, TypeScript, and Vue.js on
              one side, PHP and SQL on the other. Lately most of what I build
              has an AI layer somewhere in it: retrieval over documents, chat
              interfaces, or assistants embedded directly into the product.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              I care about getting the structure right before the polish —
              clean data models, sane component architecture, and interfaces
              that don't get in the way of the person using them.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
