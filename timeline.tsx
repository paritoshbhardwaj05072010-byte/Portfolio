import { timelineEntries } from "@/lib/data/timeline";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { FadeInView } from "@/components/motion/fade-in-view";
import { SectionLabel } from "@/components/motion/section-label";
import { SectionHeading } from "@/components/motion/section-heading";

export function Timeline() {
  return (
    <SectionWrapper id="evolution" className="border-t border-border/30">
      <FadeInView>
        <SectionLabel>Evolution</SectionLabel>
        <SectionHeading
          className="mt-4"
          title="Compounding capability."
          description="Growth framed as increasing ownership, complexity, and intentionality—not a résumé timeline."
        />
      </FadeInView>

      <div className="mt-16 relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-border/60 to-transparent md:left-4"
          aria-hidden
        />
        <ol className="space-y-12 md:space-y-16">
          {timelineEntries.map((entry, i) => (
            <FadeInView key={entry.id} delay={i * 0.1}>
              <li className="relative pl-8 md:pl-16">
                <span
                  className="absolute left-0 top-1.5 h-2 w-2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent)/0.6)] md:left-4"
                  aria-hidden
                />
                <p className="font-mono text-[11px] uppercase tracking-widest text-accent/80">
                  {entry.period}
                </p>
                <h3 className="mt-2 text-xl font-medium tracking-tight text-foreground md:text-2xl">
                  {entry.title}
                </h3>
                <p className="mt-3 max-w-prose text-muted-foreground leading-relaxed">
                  {entry.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {entry.focus.map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-border/50 px-3 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </li>
            </FadeInView>
          ))}
        </ol>
      </div>
    </SectionWrapper>
  );
}
