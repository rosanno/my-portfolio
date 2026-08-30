import React from "react";
import { FileCode2 } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import { PROJECTS } from "../data/content.js";

export default function Projects() {
  return (
    <PageTransition>
      <section className="px-4 sm:px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-slate-500 font-mono text-sm mb-3">
            <FileCode2 size={14} />
            projects/
          </div>
          <h2 className="text-2xl font-bold text-slate-100 mb-6">Projects</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {PROJECTS.map((project) => (
              <div
                key={project.file}
                className="rounded-lg border border-slate-800 bg-slate-900 bg-opacity-50 p-5 hover:border-cyan-500 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-slate-500">{project.file}</span>
                  <span className="rounded bg-slate-950 border border-slate-700 px-2 py-0.5 text-xs font-mono text-amber-400">
                    {project.ext}
                  </span>
                </div>
                <h3 className="text-slate-100 font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-slate-500 border border-slate-800 rounded px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
