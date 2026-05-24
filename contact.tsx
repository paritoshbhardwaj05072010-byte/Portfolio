"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { FadeInView } from "@/components/motion/fade-in-view";
import { SectionLabel } from "@/components/motion/section-label";
import { SectionHeading } from "@/components/motion/section-heading";
import { SITE } from "@/lib/constants";
import { EASING } from "@/lib/constants";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionWrapper id="contact">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <FadeInView>
          <SectionLabel>Contact</SectionLabel>
          <SectionHeading
            className="mt-4"
            title="Let's build something enduring."
            description="Open to ambitious projects, collaborations, and conversations with people who care about craft."
          />

          <div className="mt-10 space-y-4">
            <Link
              href={`mailto:${SITE.email}`}
              className="group flex items-center gap-2 text-lg text-foreground transition-colors duration-hover hover:text-accent"
            >
              {SITE.email}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-hover group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <div className="flex gap-6 text-sm text-muted-foreground">
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
                href={SITE.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-hover hover:text-foreground"
              >
                X
              </Link>
            </div>
          </div>
        </FadeInView>

        <FadeInView delay={0.15}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: EASING }}
              className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-xl border border-border/50 bg-surface/30 p-10 text-center"
            >
              <p className="text-lg font-medium text-foreground">Message received.</p>
              <p className="mt-2 text-sm text-muted-foreground">
                I&apos;ll respond thoughtfully. For urgent matters, email directly.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-xl border border-border/50 bg-surface/30 p-8 md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-muted-foreground">
                    Name
                  </label>
                  <Input id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-muted-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-muted-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="What are you building?"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Send message
                <Send className="h-4 w-4" />
              </Button>
            </form>
          )}
        </FadeInView>
      </div>
    </SectionWrapper>
  );
}
