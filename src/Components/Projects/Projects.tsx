import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import pickarsImg from "../../assets/projects/new/new_pickars.png";
import kindredImg from "../../assets/projects/new/kindred.webp";
import yareImg from "../../assets/projects/new/yare.png";
import colsphere from "../../assets/projects/new/colsphere.webp";
import care from "../../assets/projects/new/care.png";
import skypayImg from "../../assets/projects/new/skypay.png";
import { Bracket, CategoryLabel, Discipline, useMotion } from "../ui/design";

type Project = {
  title: string;
  company: string;
  description: string;
  link: string;
  tag: string;
  discipline: Discipline;
  image: string;
};

const recentProjects: Project[] = [
  {
    title: "Pickars",
    company: "Pickars Courier Limited",
    description: "Logistics ecosystem streamlining last-mile delivery.",
    link: "#",
    tag: "Logistics",
    discipline: "mobile",
    image: pickarsImg,
  },
  {
    title: "SkyPay Africa",
    company: "SkyPay Africa",
    description:
      "Secure digital wallet built for seamless transfers, bill payments, and everyday money management.",
    link: "https://www.skypay.africa/",
    tag: "Fintech",
    discipline: "mobile",
    image: skypayImg,
  },
  {
    title: "Kokohor",
    company: "Boring Thinkers Ltd",
    description: "Cooperative management for financial transparency.",
    link: "#",
    tag: "Management",
    discipline: "web",
    image: kindredImg,
  },
  {
    title: "Yare",
    company: "Yare Learning Hub",
    description: "Democratizing access to high-impact learning.",
    link: "#",
    tag: "Edutech",
    discipline: "web",
    image: yareImg,
  },
  {
    title: "One Community Home Health",
    company: "JACOP Healthcare Services, Inc.",
    description: "Modern digital interface and brand bento grids for a Texas-based care provider.",
    link: "https://one-community-one.vercel.app/",
    tag: "Healthcare",
    discipline: "web",
    image: care,
  },
  {
    title: "Colsphere",
    company: "Colsphere",
    description: "Collaborative ecosystem for team interaction.",
    link: "#",
    tag: "SaaS",
    discipline: "mobile",
    image: colsphere,
  },
];

const Projects: React.FC = () => {
  const root = useRef<HTMLElement>(null);
  useMotion(root);

  return (
    <section ref={root} className="bg-ink py-20 md:py-28">
      <div className="container-x">
        <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-6">
            <Bracket>Selected work</Bracket>
            <h2 data-reveal className="t-heading-lg max-w-[12ch] text-cream">
              Most recent clients
            </h2>
          </div>
          <p data-reveal className="t-body-lg max-w-[36ch] text-muted">
            Products, platforms and systems designed and shipped — from logistics to learning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {recentProjects.map((p, i) => {
            const external = p.link.startsWith("http");
            return (
              <article
                key={p.title}
                data-reveal
                className="group flex flex-col gap-6 rounded-[8px] bg-panel p-6"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[8px] bg-ink">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <CategoryLabel d={p.discipline} />
                  <span className="t-caption text-muted">
                    {String(i + 1).padStart(2, "0")} — {p.tag}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="text-[28px] font-semibold leading-[1.1] tracking-[-0.011em] text-cream md:text-[33px]">
                    {p.title}
                  </h3>
                  <p className="t-caption text-muted">{p.company}</p>
                  <p className="text-[19px] leading-[1.38] text-cream/80">{p.description}</p>
                </div>

                <a
                  href={p.link}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="pill pill-sm mt-auto self-start"
                >
                  View project <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
