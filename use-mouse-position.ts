"use client";

import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition(enabled = true): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [enabled]);

  return position;
}
