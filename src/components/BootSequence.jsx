import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { BOOT_LINES } from "../data/content.js";

const lineVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0 },
};

export default function BootSequence({ onDone }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= BOOT_LINES.length) {
      const t = setTimeout(onDone, 400);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setVisibleCount((c) => c + 1), 450);
    return () => clearTimeout(t);
  }, [visibleCount, onDone]);

  return (
    <div className="font-mono text-sm sm:text-base space-y-2">
      <AnimatePresence>
        {BOOT_LINES.slice(0, visibleCount).map((line, i) => (
          <motion.div
            key={i}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="text-slate-500">{line.prompt}</div>
            <div className="text-cyan-400">{line.output}</div>
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.span
        className="inline-block w-2 h-4 bg-cyan-400 align-middle"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
