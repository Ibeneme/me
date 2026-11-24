import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Blob, Bracket, CategoryLabel, Discipline, useMotion } from "../ui/design";

type Block = {
  d: Discipline;
  shape: "pill" | "dome" | "liquid" | "orb";
  title: string;
  body: string;
  cta: { label: string; to: string };
};

const blocks: Block[] = [
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

const Disciplines: React.FC = () => {
  const root = useRef<HTMLElement>(null);
  useMotion(root);

  return (
    <section ref={root} className="bg-ink py-20 md:py-28">
      <div className="container-x">
        <div className="mb-16 flex flex-col gap-6 md:mb-20">
          <Bracket>What I do</Bracket>
          <h2 data-reveal className="t-heading max-w-[16ch] text-cream">
            Four disciplines, one obsession with motion.
          </h2>
        </div>

        <div className="hairline" />
        {blocks.map((b) => (
          <React.Fragment key={b.d}>
            <article className="grid items-center gap-10 py-14 md:grid-cols-2 md:gap-16 md:py-20">
              <div className="relative mx-auto aspect-square w-full max-w-[420px]">
                <Blob
                  d={b.d}
                  shape={b.shape}
                  rotate={b.shape === "pill" ? -32 : 0}
                  className={
                    b.shape === "pill"
                      ? "inset-x-[4%] top-[30%] h-[40%]"
                      : b.shape === "dome"
                        ? "inset-x-[12%] top-[18%] bottom-[18%]"
                        : "inset-[14%]"
                  }
                />
              </div>
              <div data-reveal className="flex flex-col items-start gap-5">
                <CategoryLabel d={b.d} />
                <h3 className="t-sub max-w-[22ch] text-cream">{b.title}</h3>
                <p className="t-body-lg max-w-[40ch] text-muted">{b.body}</p>
                <Link to={b.cta.to} className="pill mt-2">
                  {b.cta.label}
                </Link>
              </div>
            </article>
            <div className="hairline" />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Disciplines;
