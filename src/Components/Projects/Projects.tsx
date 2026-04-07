import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  MousePointer2,
  Star,
} from "lucide-react";

const recentProjects = [
  {
    id: "p1",
    title: "Kindred",
    company: "Kindred Web",
    description:
      "A private digital sanctuary for families to preserve heritage and share moments with zero-knowledge security.",
    link: "https://kindred-web.onrender.com/",
    tag: "Family Tech",
    code: "01",
  },
  {
    id: "p2",
    title: "Pickars",
    company: "Pickars Logistics",
    description:
      "On-demand courier ecosystem streamlining last-mile logistics for the Port Harcourt metropolitan area.",
    link: "https://www.pickars.com",
    tag: "Logistics On-Demand",
    code: "02",
  },
  {
    id: "p3",
    title: "Clonekraft",
    company: "Clonekraft AI",
    description:
      "Harnessing AI vision to bridge the gap between complex furniture design and localized carpentry costing.",
    link: "https://www.clonekraft.com/",
    tag: "AI Structural Vision",
    code: "03",
  },
  {
    id: "p5",
    title: "Colsphere",
    company: "Colsphere",
    description:
      "A collaborative ecosystem designed for digital connectivity and high-velocity team interactions.",
    link: "https://colsphere.com/",
    tag: "SaaS Collaboration",
    code: "05",
  },
];

const ProjectsPage: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen bg-[#FEFEFE] py-32 px-6 font-sans selection:bg-[#FFD000] selection:text-black overflow-hidden">
      {/* Soft Yellow Orbs (from Contact styling) */}
      <div className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-[#FFD000] opacity-[0.07] blur-[120px] rounded-full" />
      <div className="absolute top-1/2 -left-48 w-[500px] h-[500px] bg-[#FFD000] opacity-[0.05] blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Friendly Header (from Contact styling) */}
        <header className="mb-32 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD000]/20 text-[#B89600] font-bold text-xs uppercase tracking-wider mb-8"
          >
            <Sparkles size={14} /> Proven Track Record
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black text-[#1A1A1A] tracking-tightest uppercase leading-none mb-6">
            Latest <br />
            <span className="text-gray-300">Creations.</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl font-medium leading-relaxed">
            A collection of digital products built with performance,
            scalability, and user-happiness in mind.
          </p>
        </header>

        {/* Project Feed */}
        <div className="space-y-40 lg:space-y-64">
          {recentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
            >
              {/* Info Side */}
              <div
                className={`lg:col-span-5 ${
                  index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black text-black/10 font-mono italic">
                      / 0{index + 1}
                    </span>
                    <div className="h-px w-8 bg-black/5" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/40">
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 text-lg leading-relaxed font-medium">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-6 pt-4">
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-[#FFD000] text-black font-black rounded-2xl shadow-[0_15px_30px_-10px_rgba(255,208,0,0.3)] flex items-center gap-3 text-xs uppercase tracking-widest"
                    >
                      Explore Live <ArrowUpRight size={16} />
                    </motion.a>

                    <span className="text-black/30 text-[10px] font-black uppercase tracking-widest">
                      {project.company}
                    </span>
                  </div>
                </div>
              </div>

              {/* Preview Side */}
              <div
                className={`lg:col-span-7 ${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div
                  className="relative group cursor-none"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] bg-white transition-all duration-700 group-hover:shadow-[0_60px_100px_-20px_rgba(0,0,0,0.15)] group-hover:-translate-y-2">
                    {/* Browser Bar */}
                    <div className="h-12 bg-gray-50/50 flex items-center px-6 border-b border-gray-100">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/20" />
                      </div>
                    </div>

                    <div className="aspect-video w-full bg-gray-100 relative overflow-hidden">
                      <iframe
                        src={project.link}
                        title={project.title}
                        className="w-[125%] h-[125%] origin-top-left scale-[0.8] border-none grayscale-[0.6] group-hover:grayscale-0 transition-all duration-1000 opacity-50 group-hover:opacity-100 pointer-events-none"
                      />

                      {/* Interaction Overlay */}
                      <AnimatePresence>
                        {hoveredId !== project.id && (
                          <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-white/60 backdrop-blur-[4px] flex flex-col items-center justify-center gap-4"
                          >
                            <div className="w-14 h-14 rounded-full bg-[#FFD000] flex items-center justify-center shadow-lg animate-bounce">
                              <MousePointer2
                                size={24}
                                className="text-black ml-1 mt-1"
                              />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black">
                              Preview Project
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Footer (Social Proof logic) */}
        <footer className="mt-48 pt-20 border-t border-gray-100 flex flex-col items-center gap-6">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full border-4 border-[#FEFEFE] bg-gray-100 overflow-hidden shadow-sm"
              >
                <img
                  src={`https://i.pravatar.cc/100?u=project${i}`}
                  alt="Client"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-[#FEFEFE] bg-[#FFD000] flex items-center justify-center text-xs font-black shadow-sm">
              +12
            </div>
          </div>
          <p className="text-gray-400 text-xs font-black uppercase tracking-[0.4em] flex items-center gap-3">
            Trusted by tech teams worldwide{" "}
            <Star size={14} className="fill-[#FFD000] text-[#FFD000]" />
          </p>
        </footer>
      </div>
    </section>
  );
};

export default ProjectsPage;
