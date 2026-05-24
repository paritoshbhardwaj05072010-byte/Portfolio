"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts";

const shortcuts = [
  { keys: ["⌘", "K"], description: "Open command palette" },
  { keys: ["?"], description: "Show keyboard shortcuts" },
  { keys: ["G", "H"], description: "Go to hero (top)" },
  { keys: ["G", "W"], description: "Go to work" },
  { keys: ["G", "C"], description: "Go to contact" },
  { keys: ["Esc"], description: "Close dialogs" },
];

export function KeyboardHints() {
  const [open, setOpen] = useState(false);

  useKeyboardShortcuts(
    [
      {
        key: "?",
        shift: true,
        action: () => setOpen((v) => !v),
      },
    ],
    true
  );

  useEffect(() => {
    let gPressed = false;
    let gTimeout: ReturnType<typeof setTimeout>;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === "g" && !e.metaKey && !e.ctrlKey) {
        gPressed = true;
        clearTimeout(gTimeout);
        gTimeout = setTimeout(() => {
          gPressed = false;
        }, 1000);
        return;
      }

      if (gPressed) {
        const map: Record<string, string> = {
          h: "#",
          w: "#work",
          c: "#contact",
        };
        const href = map[e.key];
        if (href) {
          e.preventDefault();
          gPressed = false;
          if (href === "#") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(gTimeout);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md border-border/60 bg-surface/95 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle>Keyboard shortcuts</DialogTitle>
        </DialogHeader>
        <ul className="mt-4 space-y-3">
          {shortcuts.map((s) => (
            <li
              key={s.description}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-muted-foreground">{s.description}</span>
              <span className="flex gap-1">
                {s.keys.map((k) => (
                  <kbd
                    key={k}
                    className="rounded border border-border/60 bg-background/50 px-2 py-0.5 font-mono text-[11px]"
                  >
                    {k}
                  </kbd>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
