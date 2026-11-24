import React, { useRef } from "react";
import me from "../../assets/images/image.png";
import { Blob, Bracket, CategoryLabel, Discipline, useMotion } from "../ui/design";

const content = {
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
  softSkills: [
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

const About: React.FC = () => {
  const root = useRef<HTMLElement>(null);
  useMotion(root);

  return (
    <section ref={root} className="bg-ink pb-20 md:pb-28">
      <div className="container-x">
        {/* Intro */}
        <div className="grid items-center gap-12 py-16 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16 md:py-20">
          <div data-reveal className="relative mx-auto w-full max-w-[420px]">
            <Blob d="mobile" shape="pill" rotate={-30} className="-right-6 -top-6 z-10 h-[70px] w-[160px]" />
            <Blob d="backend" shape="orb" className="-bottom-5 -left-5 z-10 h-[80px] w-[80px]" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-panel">
              <img
                src={me}
                alt="Ikenna Ibeneme"
                className="h-full w-full object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Bracket>About</Bracket>
            <h2 data-reveal className="t-heading-sm text-cream">
              I build smooth mobile apps and reactive web <span className="brand-text">frontends</span>.
            </h2>
            <p data-reveal className="t-body-lg text-cream">
              A full-stack developer with a mobile &amp; frontend major and 5+ years crafting high-performance
              products people actually enjoy using — fluid navigation, responsive touch interactions and
              pixel-perfect design.
            </p>
            <p data-reveal className="t-body-lg text-muted">
              {content.intro}
            </p>
          </div>
        </div>

        <div className="hairline" />

        {/* Approach + stack */}
        <div className="grid gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-20">
          <div data-reveal className="flex flex-col gap-5">
            <Bracket>How I build</Bracket>
            <p className="t-sub text-cream">{content.approach}</p>
          </div>

          <div className="flex flex-col gap-12">
            <div data-reveal className="flex flex-col gap-5">
              <Bracket>What I build with</Bracket>
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {content.stack.map((t) => (
                  <li key={t.name} className="text-[23px]">
                    <CategoryLabel d={t.d} className="!text-[23px]" />
                    <span className="sr-only"> — </span>
                    <span className="ml-2 text-cream">{t.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div data-reveal className="flex flex-col gap-5">
              <Bracket>Core strengths</Bracket>
              <ul className="flex flex-wrap gap-2">
                {content.softSkills.map((s) => (
                  <li key={s} className="rounded-[100px] border border-line px-4 py-2 text-[16px] text-cream">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="hairline" />

        {/* Timeline */}
        <div className="py-16 md:py-20">
          <div className="mb-12 flex flex-col gap-6">
            <Bracket>Career</Bracket>
            <h2 data-reveal className="t-heading text-cream">
              The journey so far
            </h2>
          </div>

          <ol>
            {content.timeline.map((item) => (
              <li
                key={item.role}
                data-reveal
                className="grid gap-4 border-t border-line py-10 md:grid-cols-[200px_1fr_1.3fr] md:gap-10"
              >
                <span className={`text-[19px] ${item.active ? "brand-text" : "text-muted"}`}>{item.period}</span>
                <h3 className="t-sub text-cream">{item.role}</h3>
                <p className="t-body-lg text-muted">{item.copy}</p>
              </li>
            ))}
          </ol>
          <div className="hairline" />
        </div>
      </div>
    </section>
  );
};

export default About;
