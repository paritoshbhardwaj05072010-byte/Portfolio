"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASING } from "@/lib/constants";

const SECRET = "craft";

export function CraftModeEasterEgg() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      setBuffer((prev) => {
        const next = (prev + e.key).slice(-SECRET.length);
        if (next === SECRET) {
          setVisible(true);
          return "";
        }
        return next;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setVisible(false), 3200);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ ease: EASING }}
          className="fixed bottom-6 left-1/2 z-[90] -translate-x-1/2 rounded-full border border-border/60 bg-surface/90 px-5 py-2.5 font-mono text-[11px] tracking-widest text-muted-foreground backdrop-blur-xl"
        >
          obsession with refinement — acknowledged.
        </motion.div>
      )}
    </AnimatePresence>
  );
}
