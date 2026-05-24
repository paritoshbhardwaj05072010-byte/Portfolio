"use client";

import { motion } from "framer-motion";
import { credibilityMetrics } from "@/lib/data/credibility";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { FadeInView } from "@/components/motion/fade-in-view";
import { EASING } from "@/lib/constants";

export function Credibility() {
  return (
    <SectionWrapper id="credibility" className="py-16 md:py-20">
      <FadeInView>
        <div className="relative overflow-hidden rounded-xl border border-border/50 bg-surface/30 backdrop-blur-sm">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-transparent"
            aria-hidden
          />
          <div className="relative grid grid-cols-2 divide-x divide-y divide-border/40 md:grid-cols-3 lg:grid-cols-6">
            {credibilityMetrics.map((metric, i) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: EASING }}
                className="group flex flex-col gap-1 p-6 md:p-8"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {metric.label}
                </p>
                <p className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                  {metric.value}
                </p>
                <p className="text-xs text-muted-foreground/80">{metric.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </FadeInView>
    </SectionWrapper>
  );
}
