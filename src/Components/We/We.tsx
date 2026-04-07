import React from "react";
import { motion } from "framer-motion";
import {
  Hammer,
  PenTool,
  Code2,
  ShieldCheck,
  ArrowUpRight,
  Zap,
  Activity,
  Layers,
  Cpu,
} from "lucide-react";

const sections = [
  {
    title: "Dream to Reality",
    description:
      "I architect bold ideas into functional, scalable, and high-performance digital ecosystems. If you can imagine it, I can build it.",
    icon: <Hammer size={24} />,
    tag: "Concept → Build",
    subIcon: <Zap size={14} />,
    // Large featured card
    className: "md:col-span-2 lg:col-span-2 bg-white/[0.02] border-white/5",
    accent: "#FFD000",
  },
  {
    title: "UX Strategy",
    description:
      "Simplicity with purpose. Interfaces focused on high-velocity usability.",
    icon: <PenTool size={20} />,
    tag: "UX-Focused",
    subIcon: <Layers size={14} />,
    className: "md:col-span-1 lg:col-span-1 bg-white/[0.01] border-white/5",
    accent: "#FF3E3E",
  },
  {
    title: "The Stack",
    description:
      "Specializing in React, Node, and AI Models. Modular, clean, and aggressive code.",
    icon: <Code2 size={20} />,
    tag: "High Velocity",
    subIcon: <Cpu size={14} />,
    className: "md:col-span-1 lg:col-span-1 bg-white/[0.01] border-white/5",
    accent: "#3E8BFF",
  },
  {
    title: "Scale & Security",
    description:
      "Proactive monitoring and continuous optimization to ensure 99.9% uptime for growing software architectures.",
    icon: <ShieldCheck size={24} />,
    tag: "24/7 Stability",
    subIcon: <Activity size={14} />,
    className: "md:col-span-2 lg:col-span-2 bg-white/[0.02] border-white/5",
    accent: "#00FF94",
  },
];

const We: React.FC = () => {
  return (
    <section className="relative bg-[#050505] py-32 md:py-48 px-6 font-sans overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-[#FFD000] opacity-[0.03] blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-10 h-[1px] bg-[#FFD000]" />
            <span className="text-[#FFD000] text-[10px] font-black uppercase tracking-[0.6em]">
              Operation Protocol
            </span>
          </motion.div>

          <h2 className="text-white text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.8] mb-8">
            How I <br />
            <span className="text-transparent outline-text">Execute.</span>
          </h2>

          <div className="flex items-center gap-6 text-gray-600 font-mono text-[10px] uppercase tracking-widest">
            <span>[ Precision Architecture ]</span>
            <span>[ Scalability First ]</span>
            <span>[ Est. 2026 ]</span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative overflow-hidden rounded-[2.5rem] p-10 border backdrop-blur-sm flex flex-col justify-between transition-all duration-700 hover:bg-white/[0.04] ${section.className}`}
            >
              {/* Internal Glow */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                style={{ backgroundColor: section.accent }}
              />

              <div className="flex justify-between items-start relative z-10">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-white group-hover:text-[#FFD000] group-hover:scale-110 transition-all duration-500">
                  {section.icon}
                </div>
                <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-white/20 group-hover:bg-white group-hover:text-black transition-all duration-500 transform group-hover:rotate-45">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <div className="mt-16 space-y-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-4 bg-white/20 group-hover:w-8 group-hover:bg-[#FFD000] transition-all duration-500" />
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">
                    {section.tag}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white leading-none">
                  {section.title}
                </h3>

                <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-[320px] group-hover:text-gray-300 transition-colors">
                  {section.description}
                </p>
              </div>

              {/* Status Indicator */}
              <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                  <span className="animate-pulse">{section.subIcon}</span>
                  <span className="text-[8px] font-black uppercase tracking-widest text-white/30">
                    System Verified
                  </span>
                </div>
                <span className="text-[4rem] font-black text-white/[0.02] absolute -bottom-4 right-0 leading-none select-none group-hover:text-white/[0.05] transition-colors">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
        }
        @media (min-width: 768px) {
          .outline-text { -webkit-text-stroke: 2px rgba(255, 255, 255, 0.15); }
        }
        .tracking-tightest { letter-spacing: -0.05em; }
      `}</style>
    </section>
  );
};

export default We;
