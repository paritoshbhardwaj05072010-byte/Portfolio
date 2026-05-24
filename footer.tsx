import Link from "next/link";
import { SITE } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-surface/20">
      <div className="mx-auto max-w-content px-gutter py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">
              {SITE.fullName}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{SITE.tagline}</p>
          </div>

          <nav
            className="flex flex-wrap gap-6 text-sm text-muted-foreground"
            aria-label="Footer"
          >
            <Link
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-hover hover:text-foreground"
            >
              GitHub
            </Link>
            <Link
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-hover hover:text-foreground"
            >
              LinkedIn
            </Link>
            <Link
              href={`mailto:${SITE.email}`}
              className="transition-colors duration-hover hover:text-foreground"
            >
              Email
            </Link>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border/30 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-muted-foreground/70">
            © {year} {SITE.fullName}. Engineered with intention.
          </p>
          <p className="font-mono text-[11px] text-muted-foreground/50">
            Press <kbd className="text-muted-foreground/70">?</kbd> for shortcuts
          </p>
        </div>
      </div>
    </footer>
  );
}
