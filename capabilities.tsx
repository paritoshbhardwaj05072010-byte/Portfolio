"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { capabilityGroups } from "@/lib/data/capabilities";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { FadeInView } from "@/components/motion/fade-in-view";
import { SectionLabel } from "@/components/motion/section-label";
import { SectionHeading } from "@/components/motion/section-heading";
import { cn } from "@/lib/utils";
import { EASING } from "@/lib/constants";

export function Capabilities() {
  const [active, setActive] = useState(capabilityGroups[0].id);
  const activeGroup = capabilityGroups.find((g) => g.id === active)!;

  return (
    <SectionWrapper id="capabilities">
      <FadeInView>
        <SectionLabel>Capabilities</SectionLabel>
        <SectionHeading
          className="mt-4"
          title="Depth across the stack."
          description="Capabilities organized as interconnected systems—not skill percentages."
        />
      </FadeInView>

      <div className="mt-16 grid gap-12 lg:grid-cols-[280px_1fr]">
        <nav className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:gap-1" aria-label="Capability areas">
          {capabilityGroups.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setActive(group.id)}
              className={cn(
                "shrink-0 rounded-lg px-4 py-3 text-left text-sm transition-all duration-hover ease-premium",
                active === group.id
                  ? "bg-accent/10 text-foreground border border-accent/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-surface/50 border border-transparent"
              )}
            >
              {group.title}
            </button>
          ))}
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.35, ease: EASING }}
            className="rounded-xl border border-border/50 bg-surface/30 p-8 md:p-10"
          >
            <h3 className="text-xl font-medium tracking-tight text-foreground">
              {activeGroup.title}
            </h3>
            <p className="mt-3 max-w-prose text-muted-foreground leading-relaxed">
              {activeGroup.description}
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {activeGroup.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-foreground/90"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
