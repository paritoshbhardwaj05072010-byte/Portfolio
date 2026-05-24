"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function CursorGlow() {
  const { x, y } = useMousePosition();
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        className="absolute h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] transition-transform duration-300 ease-out"
        style={{
          left: x,
          top: y,
          background:
            "radial-gradient(circle, hsl(217 91% 60% / 0.06) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
