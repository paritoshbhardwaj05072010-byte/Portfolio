export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  architecture: string;
  challenges: string[];
  outcomes: { label: string; value: string }[];
  stack: string[];
  github?: string;
  live?: string;
  accent: "blue" | "violet";
  year: string;
}

export const projects: Project[] = [
  {
    id: "fluxor",
    title: "Fluxor",
    subtitle: "AI workflow infrastructure",
    description:
      "Orchestration layer for multi-agent pipelines with deterministic replay, observability, and cost governance at scale.",
    architecture:
      "Event-sourced DAG executor with Redis streams, worker pools on Kubernetes, and a control plane API for workflow versioning.",
    challenges: [
      "Guaranteed exactly-once step execution under partial failures",
      "Sub-200ms scheduling latency at 10k concurrent runs",
      "Token budget enforcement across heterogeneous model providers",
    ],
    outcomes: [
      { label: "Throughput", value: "8.2k runs/hr" },
      { label: "Cost reduction", value: "34%" },
      { label: "MTTR", value: "<4 min" },
    ],
    stack: ["TypeScript", "Go", "PostgreSQL", "Redis", "K8s"],
    github: "https://github.com",
    live: "https://example.com",
    accent: "blue",
    year: "2025",
  },
  {
    id: "meridian",
    title: "Meridian",
    subtitle: "Intelligent productivity platform",
    description:
      "Context-aware workspace that unifies tasks, docs, and calendar into a single inference-driven surface for knowledge workers.",
    architecture:
      "Next.js edge shell, Rust inference service, vector store for semantic retrieval, and real-time sync via CRDTs.",
    challenges: [
      "Cross-device conflict resolution without user-visible merges",
      "Privacy-preserving on-device embeddings with cloud fallback",
      "Sub-100ms search across 50k+ indexed entities",
    ],
    outcomes: [
      { label: "DAU retention", value: "68%" },
      { label: "Search latency", value: "47ms p50" },
      { label: "NPS", value: "+52" },
    ],
    stack: ["Next.js", "Rust", "Pinecone", "Yjs", "tRPC"],
    github: "https://github.com",
    live: "https://example.com",
    accent: "violet",
    year: "2025",
  },
  {
    id: "telemetry",
    title: "Telemetry",
    subtitle: "Analytics engine",
    description:
      "Columnar event pipeline with streaming aggregations, cohort analysis, and self-serve dashboards for product teams.",
    architecture:
      "Ingest via Kafka, ClickHouse storage tier, GraphQL federation layer, and pre-computed rollups with incremental materialization.",
    challenges: [
      "Ingesting 2M events/min with schema evolution",
      "Query federation across hot and cold storage tiers",
      "Row-level security for multi-tenant workspaces",
    ],
    outcomes: [
      { label: "Ingest rate", value: "2.1M/min" },
      { label: "Query p95", value: "890ms" },
      { label: "Storage cost", value: "-41%" },
    ],
    stack: ["Go", "ClickHouse", "Kafka", "GraphQL", "Terraform"],
    github: "https://github.com",
    accent: "blue",
    year: "2024",
  },
  {
    id: "relay",
    title: "Relay",
    subtitle: "Developer infrastructure",
    description:
      "Internal developer platform for preview environments, secret rotation, and deployment promotion with policy-as-code gates.",
    architecture:
      "GitOps controller, ephemeral namespace provisioner, Vault integration, and Slack-native approval workflows.",
    challenges: [
      "Cold-start preview envs under 90 seconds",
      "Blast-radius containment for failed promotions",
      "Audit trail compliance for SOC2 readiness",
    ],
    outcomes: [
      { label: "Deploy frequency", value: "12×" },
      { label: "Preview time", value: "72s" },
      { label: "Incidents", value: "-60%" },
    ],
    stack: ["Python", "ArgoCD", "Vault", "AWS", "Pulumi"],
    live: "https://example.com",
    accent: "violet",
    year: "2024",
  },
];
