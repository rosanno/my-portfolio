import React from "react";
import { motion } from "framer-motion";

// One shared transition "feel" for every page, so navigating the site
// stays consistent instead of each page inventing its own motion.
const variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="min-h-[calc(100vh-56px)] pt-14"
    >
      {children}
    </motion.div>
  );
}
