import React from "react";
import { ArrowUpRight } from "lucide-react";
import pickarsImg from "../../assets/projects/new/new_pickars.png";
import kindredImg from "../../assets/projects/new/kindred.webp";
import yareImg from "../../assets/projects/new/yare.png";
import colsphere from "../../assets/projects/new/colsphere.webp";
import care from "../../assets/projects/new/care.png";
// (Make sure to include your other existing image imports like pickarsImg, kindredImg, etc. above)

const recentProjects = [
  {
    title: "Colsphere",
    company: "Colsphere",
    description: "Collaborative ecosystem for team interaction.",
    link: "#",
    tag: "SaaS",
    image: colsphere,
  },
  {
    title: "Pickars",
    company: "Pickars Courier Limited",
    description: "Logistics ecosystem streamlining last-mile delivery.",
    link: "#",
    tag: "Logistics",
    image: pickarsImg,
  },
  {
    title: "Kokohor",
    company: "Boring Thinkers Ltd",
    description: "Cooperative management for financial transparency.",
    link: "#",
    tag: "Management",
    image: kindredImg,
  },
  {
    title: "Yare",
    company: "Yare Learning Hub",
    description: "Democratizing access to high-impact learning.",
    link: "#",
    tag: "Edutech",
    image: yareImg,
  },
  {
    title: "One Community Home Health",
    company: "JACOP Healthcare Services, Inc.",
    description:
      "Modern digital interface and brand bento grids for a Texas-based care provider.",
    link: "https://one-community-one.vercel.app/",
    tag: "Healthcare",
    image: care,
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <section className="relative bg-[#07020F] py-28 md:py-36 px-6 overflow-hidden">
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20 md:mb-28 max-w-2xl">
          <p className="text-[#FFD000] text-xs font-semibold tracking-[0.25em] uppercase mb-5">
            Selected Work
          </p>
          <h2
            // style={{ fontFamily: '"Parkinsans", sans-serif' }}
            className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6"
          >
            Most Recent Clients
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
            A curated selection of products, platforms, and systems we’ve
            designed and shipped — from logistics to learning.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-24 md:space-y-32">
          {recentProjects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <article
                key={index}
                className={`group flex flex-col ${
                  isEven ? "md:flex-row-reverse" : "md:flex-row"
                } gap-10 md:gap-16 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-[52%] relative">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-900/80 border border-white/[0.06]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.04] opacity-90 group-hover:opacity-100"
                      loading="lazy"
                    />
                    {/* Soft overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Number badge */}
                  <div className="absolute -top-4 -left-4 md:-top-5 md:-left-5 w-12 h-12 rounded-full bg-[#0A0314] border border-white/10 flex items-center justify-center text-sm font-medium text-white/70">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-[48%] flex flex-col">
                  <div className="mb-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase bg-[#FFD000]/10 text-[#FFD000] border border-[#FFD000]/20">
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2 group-hover:text-[#FFD000] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-zinc-500 text-sm font-medium mb-4">
                    {project.company}
                  </p>

                  <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed max-w-md mb-8">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 self-start text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 group/link"
                  >
                    View project
                    <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/15 group-hover/link:bg-white group-hover/link:text-black group-hover/link:border-white transition-all duration-300">
                      <ArrowUpRight size={14} />
                    </span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
