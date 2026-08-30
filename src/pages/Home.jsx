import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import PageTransition from "../components/PageTransition.jsx";
import BootSequence from "../components/BootSequence.jsx";

import { PROFILE } from "../data/content.js";

export default function Home() {
  const [bootDone, setBootDone] = useState(false);

  return (
    <PageTransition>
      <section className="min-h-[calc(100vh-56px)] flex flex-col justify-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto w-full">
          <div className="rounded-lg border border-slate-800 bg-slate-900 bg-opacity-60 p-5 sm:p-8">
            <BootSequence onDone={() => setBootDone(true)} />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={bootDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="mt-6 text-3xl sm:text-5xl font-bold text-slate-100 leading-tight">
                Full-stack developer,
                <br />
                <span className="text-cyan-400">building with AI in mind.</span>
              </h1>
              <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-xl">
                {PROFILE.tagline}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 font-mono text-sm">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2 font-semibold transition-colors"
                >
                  view projects <ChevronRight size={14} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 rounded border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 px-4 py-2 transition-colors"
                >
                  get in touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
