"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EASING, SITE } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASING },
  },
};

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      className="relative flex min-h-[100dvh] flex-col justify-center pt-16"
      aria-label="Introduction"
    >
      <div className="mx-auto w-full max-w-content px-gutter">
        <motion.div
          variants={reduced ? undefined : container}
          initial={reduced ? false : "hidden"}
          animate="visible"
          className="max-w-5xl"
        >
          <motion.p
            variants={reduced ? undefined : item}
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground"
          >
            {SITE.role}
          </motion.p>

          <motion.h1
            variants={reduced ? undefined : item}
            className="mt-6 text-display-xl text-foreground"
          >
            {SITE.fullName.split(" ")[0]}
            <br />
            <span className="text-muted-foreground/90">
              {SITE.fullName.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            variants={reduced ? undefined : item}
            className="mt-8 max-w-xl text-xl font-medium tracking-tight text-foreground md:text-2xl"
          >
            {SITE.tagline}
          </motion.p>

          <motion.p
            variants={reduced ? undefined : item}
            className="mt-5 max-w-prose text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {SITE.mission}
          </motion.p>

          <motion.div
            variants={reduced ? undefined : item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button asChild size="lg">
              <Link href="#work">
                View work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Get in touch</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6, ease: EASING }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <Link
            href="#credibility"
            className="flex flex-col items-center gap-2 text-muted-foreground transition-colors duration-hover hover:text-foreground"
            aria-label="Scroll to learn more"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
              Explore
            </span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
