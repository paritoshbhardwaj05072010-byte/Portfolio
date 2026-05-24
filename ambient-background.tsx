"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function AmbientBackground() {
  const { x, y } = useMousePosition();
  const reduced = useReducedMotion();
  const [dimensions, setDimensions] = useState({ w: 1920, h: 1080 });

  useEffect(() => {
    const update = () =>
      setDimensions({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  const offsetX = reduced ? 0 : (x / dimensions.w - 0.5) * 40;
  const offsetY = reduced ? 0 : (y / dimensions.h - 0.5) * 40;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />

      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        className="absolute h-[600px] w-[600px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, hsl(217 91% 60% / 0.12) 0%, transparent 70%)",
          left: "50%",
          top: "20%",
          transform: `translate(calc(-50% + ${offsetX}px), ${offsetY}px)`,
        }}
        animate={reduced ? {} : { opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-radial-accent opacity-60" />

      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/80 to-transparent" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground) / 0.5) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground) / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
