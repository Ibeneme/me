import type { Discipline } from "../lib/disciplines";

export const DISCIPLINE_BLOCKS: {
  d: Discipline;
  shape: "pill" | "dome" | "liquid" | "orb";
  title: string;
  body: string;
  cta: { label: string; to: string };
}[] = [
  {
    d: "mobile",
    shape: "pill",
    title: "Native-feeling apps that never stutter.",
    body: "React Native apps for iOS and Android with gesture fluidity, instant touch feedback and animation worklets tuned for a steady 60fps — shipped to both stores.",
    cta: { label: "Explore Mobile", to: "/projects" },
  },
  {
    d: "web",
    shape: "dome",
    title: "Pixel-perfect, reactive frontends.",
    body: "React and Next.js interfaces with clean component architecture, considered state management and design systems that scale from landing page to dashboard.",
    cta: { label: "Explore Web", to: "/projects" },
  },
  {
    d: "backend",
    shape: "liquid",
    title: "Resilient systems underneath.",
    body: "Node.js services, offline-first data flow and real-time tracking that keep fintech and logistics products dependable when it matters.",
    cta: { label: "Explore Backend", to: "/about" },
  },
  {
    d: "ai",
    shape: "orb",
    title: "AI features, layered in thoughtfully.",
    body: "Intelligent workflows built into real products — practical models and assistants that make the experience feel smarter, not noisier.",
    cta: { label: "Explore AI", to: "/about" },
  },
];

export const ABOUT = {
  intro:
    "I've shipped fintech apps that move real money, logistics platforms tracking deliveries in real time, and the AI features layered on top of them. My focus stays the same across all of it: buttery 60fps mobile interfaces, pixel-perfect web frontends, and resilient architectures that never let the user down.",
  approach:
    "I prioritize gesture fluidity, instant touch feedback, and clean component architecture so apps and web interfaces never stutter. Whether it's complex mobile navigation stacks or reactive state management, everything is engineered for speed and responsiveness.",
  stack: [
    { name: "React Native", d: "mobile" },
    { name: "React / Next.js", d: "web" },
    { name: "TypeScript", d: "web" },
    { name: "Node.js", d: "backend" },
    { name: "Tailwind CSS", d: "web" },
  ] as { name: string; d: Discipline }[],
  strengths: [
    "Cross-Platform Mobile & Web UI Engineering",
    "UX-First Mobile Intuition",
    "Offline-First Architecture",
    "State Management & Data Flow",
    "Technical Communication & Mentorship",
    "Pragmatic Problem Solving",
    "Rapid Prototyping & Iteration",
    "Cross-Functional Collaboration",
  ],
  timeline: [
    {
      role: "Lead Mobile & Frontend Architect",
      period: "2024 — now",
      copy: "Architecting high-performance mobile apps and web frontends for finance, logistics, and AI products — optimizing bridge communication, custom gesture handling, and responsive layouts. Owning the product lifecycle from design system down to production release.",
      active: true,
    },
    {
      role: "Full-Stack & Mobile Engineer",
      period: "2021 — 2024",
      copy: "Built scalable mobile products and responsive web interfaces for growing teams, mastering React Native animation worklets, state machines, and component optimization. This is where I honed my focus on frontend polish and user experience.",
      active: false,
    },
    {
      role: "Systems & Software Engineer",
      period: "2019",
      copy: "Started out focused on performance and backend fundamentals — the foundation everything since has built on.",
      active: false,
    },
  ],
};
