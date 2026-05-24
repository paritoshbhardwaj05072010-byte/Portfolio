"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";
import { EASING } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const reduced = useReducedMotion();

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMove}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.65, ease: EASING }}
      className="group relative"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border/50 bg-surface/40 transition-all duration-hover ease-premium",
          "hover:border-accent/25 hover:shadow-[0_24px_80px_-24px_hsl(var(--accent)/0.15)]"
        )}
        style={
          reduced
            ? undefined
            : {
                background: `radial-gradient(600px circle at ${spotlight.x}% ${spotlight.y}%, hsl(var(--accent) / 0.08), transparent 40%)`,
              }
        }
      >
        {/* Visual preview area */}
        <div className="relative aspect-[16/9] overflow-hidden border-b border-border/40 bg-surface-elevated/50">
          <div
            className={cn(
              "absolute inset-0 opacity-40",
              project.accent === "blue"
                ? "bg-gradient-to-br from-accent/20 via-transparent to-transparent"
                : "bg-gradient-to-br from-violet-500/15 via-transparent to-transparent"
            )}
          />
          {/* Abstract system diagram */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="grid w-full max-w-md grid-cols-3 gap-3 opacity-60">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-12 rounded-md border border-border/60 bg-background/40 backdrop-blur-sm transition-transform duration-hover group-hover:scale-[1.02]",
                    i === 1 && "col-span-2 h-20",
                    i === 4 && "col-span-2"
                  )}
                />
              ))}
            </div>
          </div>
          <div className="absolute right-4 top-4 font-mono text-[11px] text-muted-foreground">
            {project.year}
          </div>
        </div>

        <div className="p-8 md:p-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent/80">
                {project.subtitle}
              </p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                {project.title}
              </h3>
            </div>
            <div className="flex gap-2">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-border/60 p-2 text-muted-foreground transition-all duration-hover hover:border-accent/40 hover:text-foreground"
                  aria-label={`${project.title} on GitHub`}
                >
                  <Github className="h-4 w-4" />
                </Link>
              )}
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-border/60 p-2 text-muted-foreground transition-all duration-hover hover:border-accent/40 hover:text-foreground"
                  aria-label={`${project.title} live preview`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Architecture
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                {project.architecture}
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Challenges solved
              </p>
              <ul className="mt-2 space-y-2">
                {project.challenges.map((c) => (
                  <li
                    key={c}
                    className="flex gap-2 text-sm text-muted-foreground before:mt-2 before:h-px before:w-3 before:shrink-0 before:bg-accent/50 before:content-['']"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t border-border/30 pt-8">
            <div className="flex flex-wrap gap-6">
              {project.outcomes.map((o) => (
                <div key={o.label}>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {o.label}
                  </p>
                  <p className="mt-1 text-lg font-medium text-foreground">
                    {o.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border/50 bg-background/30 px-3 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
