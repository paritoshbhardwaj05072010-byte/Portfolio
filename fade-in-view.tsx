"use client";

import { motion } from "framer-motion";
import { EASING } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

interface FadeInViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

export function FadeInView({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 24,
}: FadeInViewProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: EASING }}
    >
      {children}
    </motion.div>
  );
}
