"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

interface HeaderProps {
  onOpenCommand: () => void;
}

export function Header({ onOpenCommand }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-hover ease-premium",
        scrolled
          ? "border-b border-border/40 bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      {/* Scroll progress */}
      <div
        className="absolute bottom-0 left-0 h-px bg-accent/60 transition-all duration-150"
        style={{ width: `${progress * 100}%` }}
        aria-hidden
      />

      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-gutter">
        <Link
          href="#"
          className="font-mono text-sm tracking-tight text-foreground transition-colors duration-hover hover:text-accent"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {SITE.name}
          <span className="text-muted-foreground">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors duration-hover hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenCommand}
            className="hidden items-center gap-2 rounded-md border border-border/60 bg-surface/40 px-3 py-1.5 text-xs text-muted-foreground transition-all duration-hover hover:border-accent/30 hover:text-foreground sm:flex"
            aria-label="Open command palette"
          >
            <span>Search</span>
            <kbd className="font-mono text-[10px] opacity-60">⌘K</kbd>
          </button>

          <Link
            href="#contact"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-all duration-hover hover:brightness-110"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
