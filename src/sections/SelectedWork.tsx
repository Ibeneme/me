import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Bracket, CategoryLabel } from "../components/ui";
import { PROJECTS, Project } from "../data/projects";
import { useMotion } from "../hooks/useMotion";

const Card: React.FC<{ p: Project; i: number }> = ({ p, i }) => {
  const external = p.link.startsWith("http");
  return (
    <article data-tilt className="group flex flex-col gap-6 rounded-[8px] bg-panel p-5 md:p-6">
      <a
        href={p.link}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        data-cursor="View"
        data-clip
        className="relative block aspect-[16/10] overflow-hidden rounded-[8px] bg-ink"
      >
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.2,1,0.3,1)] group-hover:scale-[1.08]"
        />
      </a>

      <div className="flex items-center justify-between gap-4">
        <CategoryLabel d={p.discipline} />
        <span className="t-caption text-muted">
          {String(i + 1).padStart(2, "0")} — {p.tag}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-[28px] font-semibold leading-[1.05] tracking-[-0.025em] md:text-[36px]">{p.title}</h3>
        <p className="t-caption text-muted">{p.company}</p>
        <p className="text-[18px] font-light leading-[1.45] text-white/80">{p.description}</p>
      </div>

      <a
        href={p.link}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        data-magnetic
        className="pill pill-sm mt-auto self-start"
      >
        View project <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden />
      </a>
    </article>
  );
};

/** Two staggered columns that drift at different speeds while you scroll. */
const SelectedWork: React.FC = () => {
  const root = useRef<HTMLElement>(null);
  useMotion(root);

  const left = PROJECTS.filter((_, i) => i % 2 === 0);
  const right = PROJECTS.filter((_, i) => i % 2 === 1);

  return (
    <section ref={root} className="bg-ink py-20 md:py-28">
      <div className="container-x">
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-6">
            <Bracket>Selected work</Bracket>
            <h2 data-split className="t-heading-lg max-w-[12ch]">
              Most recent clients
            </h2>
          </div>
          <p data-split="scrub" className="t-body-lg max-w-[36ch] text-white">
            Products, platforms and systems designed and shipped — from logistics to learning.
          </p>
        </div>

        {/* mobile: single column in order */}
        <div className="flex flex-col gap-6 md:hidden">
          {PROJECTS.map((p, i) => (
            <Card key={p.title} p={p} i={i} />
          ))}
        </div>

        {/* desktop: offset columns with parallax */}
        <div className="hidden grid-cols-2 gap-6 md:grid">
          <div className="flex flex-col gap-6">
            {left.map((p) => (
              <Card key={p.title} p={p} i={PROJECTS.indexOf(p)} />
            ))}
          </div>
          <div data-parallax="0.15" className="mt-40 flex flex-col gap-6">
            {right.map((p) => (
              <Card key={p.title} p={p} i={PROJECTS.indexOf(p)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
