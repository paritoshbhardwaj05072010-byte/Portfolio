export interface CredibilityMetric {
  id: string;
  label: string;
  value: string;
  detail: string;
}

export const credibilityMetrics: CredibilityMetric[] = [
  {
    id: "commits",
    label: "Commits",
    value: "2.4k+",
    detail: "Last 12 months",
  },
  {
    id: "projects",
    label: "Systems shipped",
    value: "14",
    detail: "Production deployments",
  },
  {
    id: "uptime",
    label: "Service uptime",
    value: "99.97%",
    detail: "Across owned services",
  },
  {
    id: "prs",
    label: "PRs merged",
    value: "380+",
    detail: "Open source & teams",
  },
  {
    id: "stack",
    label: "Core stack depth",
    value: "12",
    detail: "Production-grade tools",
  },
  {
    id: "latency",
    label: "P95 latency",
    value: "<120ms",
    detail: "Primary API surfaces",
  },
];
