import { philosophyPrinciples } from "@/lib/data/philosophy";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { FadeInView } from "@/components/motion/fade-in-view";
import { SectionLabel } from "@/components/motion/section-label";
import { SectionHeading } from "@/components/motion/section-heading";

export function Philosophy() {
  return (
    <SectionWrapper id="philosophy" className="border-y border-border/30 bg-surface/10">
      <FadeInView>
        <SectionLabel>Philosophy</SectionLabel>
        <SectionHeading
          className="mt-4"
          title="How I think about building."
          description="Not a manifesto. A set of operating principles that guide technical and product decisions."
        />
      </FadeInView>

      <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border/50 bg-border/50 md:grid-cols-2">
        {philosophyPrinciples.map((principle, i) => (
          <FadeInView key={principle.id} delay={i * 0.08}>
            <article className="h-full bg-surface/40 p-8 md:p-10 backdrop-blur-sm transition-colors duration-hover hover:bg-surface/60">
              <h3 className="text-lg font-medium tracking-tight text-foreground">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {principle.body}
              </p>
            </article>
          </FadeInView>
        ))}
      </div>
    </SectionWrapper>
  );
}
