import React from "react";
import { ArrowUpRight } from "lucide-react";
import pickarsImg from "../../assets/projects/new/pickars.webp";
import kindredImg from "../../assets/projects/new/kindred.webp";
import yareImg from "../../assets/projects/new/yare.webp";
import colsphere from "../../assets/projects/new/colsphere.webp";

const recentProjects = [
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
    title: "Colsphere",
    company: "Colsphere",
    description: "Collaborative ecosystem for team interaction.",
    link: "#",
    tag: "SaaS",
    image: colsphere,
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <section className="relative bg-[#0A0314] py-32 px-6 overflow-hidden">

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff75 1px, transparent 1px), linear-gradient(90deg, #ffffff75 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            Recent Projects Built
          </h2>
          <div className="h-px w-20 bg-white/20 mb-8" />
          <p className="text-zinc-500 text-lg max-w-lg font-light">
            A curation of recent projects, mobile apps and websites built, and
            deployed cloud servers and systems.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {recentProjects.map((project, index) => (
            <div key={index} className="group flex flex-col gap-6">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 border border-white/5 rounded-xl pointer-events-none" />
              </div>

              {/* Meta */}
              <div className="flex justify-between items-start gap-4">
                <div>
                  <span className="text-[10px] font-black text-[#FFD000] uppercase tracking-[0.2em]">
                    {project.tag}
                  </span>
                  <h3 className="text-4xl font-bold text-white mt-1">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-sm font-light mt-2 max-w-sm">
                    {project.description}
                  </p>
                </div>

                <a
                  href={project.link}
                  className="shrink-0 p-3 border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
                  aria-label={`View ${project.title}`}
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
