"use client";

import { useEffect } from "react";

interface Shortcut {
  key: string;
  meta?: boolean;
  ctrl?: boolean;
  shift?: boolean;
  action: () => void;
}

export function useKeyboardShortcuts(shortcuts: Shortcut[], enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      for (const shortcut of shortcuts) {
        const metaMatch = shortcut.meta
          ? e.metaKey || e.ctrlKey
          : !e.metaKey && !e.ctrlKey;
        const ctrlMatch = shortcut.ctrl ? e.ctrlKey || e.metaKey : true;
        const shiftMatch = shortcut.shift ? e.shiftKey : !e.shiftKey;

        if (
          e.key.toLowerCase() === shortcut.key.toLowerCase() &&
          (shortcut.meta || shortcut.ctrl ? ctrlMatch : metaMatch) &&
          shiftMatch
        ) {
          e.preventDefault();
          shortcut.action();
          return;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shortcuts, enabled]);
}
