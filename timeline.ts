export interface TimelineEntry {
  id: string;
  period: string;
  title: string;
  description: string;
  focus: string[];
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: "2026",
    period: "2026 — Present",
    title: "Systems at scale",
    description:
      "Owning end-to-end architecture for production platforms. Optimizing for leverage, reliability, and compounding technical decisions.",
    focus: ["Platform ownership", "AI infrastructure", "Team multiplier effects"],
  },
  {
    id: "2025",
    period: "2025",
    title: "Depth over breadth",
    description:
      "Shifted from feature velocity to architectural intentionality. Built systems with explicit trade-off documentation and measurable SLOs.",
    focus: ["Distributed systems", "Performance budgets", "Design systems"],
  },
  {
    id: "2024",
    period: "2024",
    title: "Full-stack fluency",
    description:
      "Shipped multiple production applications spanning frontend, backend, and infrastructure. Developed intuition for where complexity belongs.",
    focus: ["Production deployments", "Observability", "Product iteration"],
  },
  {
    id: "2023",
    period: "2023",
    title: "Foundation",
    description:
      "Established disciplined fundamentals: clean abstractions, testing habits, and obsessive attention to craft in every commit.",
    focus: ["Core CS fundamentals", "Open source", "Consistent execution"],
  },
];
