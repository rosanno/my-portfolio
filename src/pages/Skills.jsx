import React from "react";
import { FileCode2 } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import { SKILLS } from "../data/content.js";

export default function Skills() {
  return (
    <PageTransition>
      <section className="px-4 sm:px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-slate-500 font-mono text-sm mb-3">
            <FileCode2 size={14} />
            stack.json
          </div>
          <h2 className="text-2xl font-bold text-slate-100 mb-6">Skills</h2>
          <div className="space-y-6">
            {SKILLS.map((group) => (
              <div key={group.group}>
                <div className="font-mono text-sm text-slate-500 mb-2">// {group.group}</div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-slate-700 bg-slate-950 px-3 py-1 text-sm font-mono text-cyan-400"
                    >
                      {item}
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
