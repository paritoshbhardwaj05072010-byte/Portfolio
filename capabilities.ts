export interface CapabilityGroup {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: "frontend",
    title: "Frontend Systems",
    description: "Interfaces engineered for clarity, performance, and composability.",
    items: [
      "Design systems & token architecture",
      "SSR/ISR & edge rendering",
      "Animation systems & interaction design",
      "Accessibility & semantic structure",
    ],
  },
  {
    id: "backend",
    title: "Backend Architecture",
    description: "Services designed for reliability, observability, and evolution.",
    items: [
      "API design & contract-first development",
      "Event-driven & queue-based patterns",
      "Database modeling & query optimization",
      "Distributed systems fundamentals",
    ],
  },
  {
    id: "ai",
    title: "AI Tooling",
    description: "Practical ML integration with production constraints in mind.",
    items: [
      "RAG pipelines & embedding strategies",
      "Agent orchestration & tool use",
      "Inference cost optimization",
      "Evaluation & guardrail systems",
    ],
  },
  {
    id: "performance",
    title: "Performance Engineering",
    description: "Speed as a product feature, measured and defended.",
    items: [
      "Core Web Vitals optimization",
      "Profiling & bottleneck analysis",
      "Caching & CDN strategy",
      "Bundle architecture & code splitting",
    ],
  },
  {
    id: "infra",
    title: "Developer Infrastructure",
    description: "Tooling that multiplies team output without adding friction.",
    items: [
      "CI/CD pipelines & deployment automation",
      "Infrastructure as code",
      "Observability & incident response",
      "Preview environments & GitOps",
    ],
  },
  {
    id: "product",
    title: "Product Thinking",
    description: "Engineering decisions anchored in user outcomes and leverage.",
    items: [
      "Scope definition & trade-off analysis",
      "Metrics-driven iteration",
      "Technical writing & documentation",
      "Cross-functional communication",
    ],
  },
];
