"use client";

import { useCallback, useEffect, useState } from "react";
import { Command } from "cmdk";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts";
import {
  ArrowRight,
  FileText,
  Github,
  Mail,
  Search,
} from "lucide-react";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  const navigate = useCallback((href: string) => {
    onOpenChange(false);
    setQuery("");
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }, [onOpenChange]);

  useKeyboardShortcuts(
    [
      {
        key: "k",
        meta: true,
        action: () => onOpenChange(!open),
      },
    ],
    true
  );

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden p-0 gap-0 max-w-lg border-border/60 bg-surface/95 backdrop-blur-xl">
        <DialogTitle className="sr-only">Command palette</DialogTitle>
        <Command
          className="[&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-muted-foreground"
          shouldFilter
        >
          <div className="flex items-center gap-3 border-b border-border/40 px-4">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <Command.Input
              value={query}
              onValueChange={setQuery}
              placeholder="Navigate, search, or jump to..."
              className="flex h-12 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="py-8 text-center text-sm text-muted-foreground">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigate">
              {NAV_LINKS.map((link) => (
                <Command.Item
                  key={link.href}
                  value={link.label}
                  onSelect={() => navigate(link.href)}
                  className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2.5 text-sm text-foreground aria-selected:bg-accent/10 aria-selected:text-foreground"
                >
                  {link.label}
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="External">
              <Command.Item
                value="GitHub"
                onSelect={() => {
                  onOpenChange(false);
                  window.open(SITE.github, "_blank");
                }}
                className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-sm aria-selected:bg-accent/10"
              >
                <Github className="h-4 w-4 text-muted-foreground" />
                GitHub profile
              </Command.Item>
              <Command.Item
                value="Email"
                onSelect={() => {
                  onOpenChange(false);
                  window.location.href = `mailto:${SITE.email}`;
                }}
                className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-sm aria-selected:bg-accent/10"
              >
                <Mail className="h-4 w-4 text-muted-foreground" />
                Send email
              </Command.Item>
              <Command.Item
                value="Resume"
                onSelect={() => navigate("#work")}
                className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-sm aria-selected:bg-accent/10"
              >
                <FileText className="h-4 w-4 text-muted-foreground" />
                View selected work
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
