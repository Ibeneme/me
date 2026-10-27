import React from "react";
import { motion, Variants } from "framer-motion";
import { Code2, Terminal, GitCommit } from "lucide-react";
import me from "../../assets/images/image.png";

/* ─────────────────────────────────────────────
   Content & config (single source of truth)
───────────────────────────────────────────── */

const content = {
  headline: "I build high-performance mobile apps and reactive web frontends.",
  intro: [
    "I've shipped fintech apps that move real money, logistics platforms tracking deliveries in real time, and the AI features layered on top of them. My focus stays the same across all of it: buttery 60fps mobile interfaces, pixel-perfect web frontends, and resilient architectures that never let the user down.",
  ],
  approach: {
    title: "How I build",
    body: "I prioritize gesture fluidity, instant touch feedback, and clean component architecture so apps and web interfaces never stutter. Whether it's complex mobile navigation stacks or reactive state management, everything is engineered for speed and responsiveness.",
  },
  stackTitle: "What I build with",
  stack: [
    "React Native",
    "React / Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
  ] as const,
  softSkillsTitle: "Core Strengths",
  softSkills: [
    "Cross-Platform Mobile & Web UI Engineering",
    "UX-First Mobile Intuition",
    "Offline-First Architecture",
    "State Management & Data Flow",
    "Technical Communication & Mentorship",
    "Pragmatic Problem Solving",
    "Rapid Prototyping & Iteration",
    "Cross-Functional Collaboration",
  ] as const,
  importLine: {
    items: ["React Native", "TypeScript", "Node.js"],
    from: "@ikenna/core",
  },
  marquee: [
    "open to work",
    "react native",
    "frontend major",
    "buttery 60fps",
    "port harcourt → anywhere",
  ] as const,
  timeline: [
    {
      hash: "9f2a1c4",
      role: "Lead Mobile & Frontend Architect",
      period: "2024 — now",
      copy: "Architecting high-performance mobile apps and web frontends for finance, logistics, and AI products — optimizing bridge communication, custom gesture handling, and responsive layouts. Owning the product lifecycle from design system down to production release.",
      active: true,
    },
    {
      hash: "3c8e9a2",
      role: "Full-Stack & Mobile Engineer",
      period: "2021 — 2024",
      copy: "Built scalable mobile products and responsive web interfaces for growing teams, mastering React Native animation worklets, state machines, and component optimization. This is where I honed my focus on frontend polish and user experience.",
      active: false,
    },
    {
      hash: "5b7e001",
      role: "Systems & Software Engineer",
      period: "2019",
      copy: "Started out focused on performance and backend fundamentals — the foundation everything since has built on.",
      active: false,
    },
  ],
} as const;

/* ─────────────────────────────────────────────
   Animation
───────────────────────────────────────────── */

const rise: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const viewport = { once: true, margin: "-60px" } as const;

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */

const About: React.FC = () => {
  return (
    <section className="relative pt-4 bg-[#0A0314] pb-24 md:pb-32 selection:bg-[#FFD000] selection:text-black">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[560px] -translate-x-1/2 rounded-full bg-[#FFD000]/[0.04] blur-[140px]"
        aria-hidden
      />

      <div className="relative z-10 px-6 sm:px-8">
        {/* Intro — widest section, sets the outer measure */}
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mb-20 grid max-w-4xl items-center gap-10 md:grid-cols-[220px_1fr] md:gap-14"
        >
          <div className="group relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] sm:w-56 md:w-full">
            <img
              src={me}
              alt="Ikenna Ibeneme"
              className="h-full w-full object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
            />
          </div>

          <div>
            <h1 className="mb-5 text-3xl font-black leading-[1.05] tracking-tight text-white md:text-5xl">
              I build smooth mobile apps and reactive web{" "}
              <span style={{ color: "#ffd000" }}>frontends</span>.
            </h1>
            <p className="mb-4 text-base text-zinc-300 md:text-lg">
              I'm a full-stack developer with a{" "}
              <span style={{ color: "#ffd000" }}>mobile & frontend major</span>{" "}
              and <span style={{ color: "#ffd000" }}> 5+ years </span>crafting
              high-performance products people actually enjoy using—focusing on
              fluid navigation, responsive touch interactions, and pixel-perfect
              design.
            </p>
            {content.intro.map((paragraph, i) => (
              <p
                key={i}
                className={`max-w-lg font-light leading-relaxed ${
                  i === 1
                    ? "mb-4 text-base text-zinc-300 md:text-lg"
                    : "text-sm text-zinc-400 md:text-base"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 px-6 sm:px-8">
        {/* Approach + stack — matches intro measure */}
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto mb-6 max-w-4xl rounded-2xl border border-white/10 bg-[#0F0619] p-8 md:p-10"
        >
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 text-base font-semibold text-white">
                {content.approach.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-zinc-400">
                {content.approach.body}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-base font-semibold text-white">
                  {content.stackTitle}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {content.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-[#FFD000]/15 bg-[#FFD000]/[0.08] px-3 py-1.5 text-xs text-[#FFD000]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-base font-semibold text-white">
                  {content.softSkillsTitle}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {content.softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Fake import — same measure as approach card */}
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto mb-16 flex max-w-4xl items-center gap-2 px-1 text-xs text-zinc-500"
        >
          <Code2 className="h-3.5 w-3.5" />
          <span className="overflow-x-auto whitespace-pre">
            <span className="text-[#9876AA]">import</span>
            {" { "}
            {content.importLine.items.map((item, i) => (
              <React.Fragment key={item}>
                {i > 0 && <span className="text-zinc-600">, </span>}
                <span className="text-[#FFD000]">{item}</span>
              </React.Fragment>
            ))}
            {" } "}
            <span className="text-[#9876AA]">from</span>{" "}
            <span className="text-[#6A8759]">"{content.importLine.from}"</span>
          </span>
        </motion.div>

        {/* Timeline — narrower measure, better for reading long copy */}
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-3xl"
        >
          <div className="mb-8 flex items-center gap-2 text-xs text-zinc-500">
            <Terminal className="h-3.5 w-3.5" />
            git log --oneline career
          </div>

          <ol className="relative space-y-10 border-l border-white/10 pl-8">
            {content.timeline.map((item) => (
              <li key={item.hash} className="relative">
                <span
                  className={`absolute -left-[calc(2rem+7px)] top-1.5 h-3 w-3 rounded-full ring-4 ring-[#07020D] ${
                    item.active ? "bg-[#FFD000]" : "bg-purple-500/60"
                  }`}
                />
                <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                  <GitCommit className="h-3.5 w-3.5" />
                  {item.hash}
                  <span className="text-zinc-600">·</span>
                  {item.period}
                </div>
                <h4 className="mb-1.5 text-lg font-semibold tracking-tight text-white">
                  {item.role}
                </h4>
                <p className="max-w-xl text-sm font-light leading-relaxed text-zinc-400">
                  {item.copy}
                </p>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default About;
