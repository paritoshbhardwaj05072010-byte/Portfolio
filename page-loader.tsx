"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { EASING, SITE } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function PageLoader() {
  const [loading, setLoading] = useState(true);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, [reduced]);

  if (reduced) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASING }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="h-px w-32 bg-border overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="h-full bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: EASING }}
              />
            </motion.div>
            <motion.p
              className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: EASING }}
            >
              {SITE.name}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
