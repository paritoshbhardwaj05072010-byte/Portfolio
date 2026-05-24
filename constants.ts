export const SITE = {
  name: "Nikhil",
  fullName: "Nikhil Sharma",
  role: "Software Engineer",
  tagline: "Building systems that compound.",
  mission:
    "Focused on leverage, software, and long-term mastery. Engineering tools for high-agency people.",
  email: "hello@nikhil.dev",
  github: "https://github.com/nikhil",
  linkedin: "https://linkedin.com/in/nikhil",
  twitter: "https://x.com/nikhil",
} as const;

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Evolution", href: "#evolution" },
  { label: "Contact", href: "#contact" },
] as const;

export const EASING = [0.16, 1, 0.3, 1] as const;

export const SECTION_IDS = {
  work: "work",
  philosophy: "philosophy",
  capabilities: "capabilities",
  evolution: "evolution",
  contact: "contact",
} as const;
