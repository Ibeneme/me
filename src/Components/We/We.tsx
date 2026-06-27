import React from "react";
import { motion } from "framer-motion";
import { Hammer, PenTool, Code2, ShieldCheck, ArrowRight } from "lucide-react";

const sections = [
  {
    title: "Dream to Reality",
    description:
      "Transforming abstract, ambitious concepts into robust, high-performance digital ecosystems. We bridge the gap between vision and execution with surgical precision.",
    icon: <Hammer size={24} />,
  },
  {
    title: "UX Strategy",
    description:
      "Design driven by intent. We craft interfaces that prioritize high-velocity usability and aesthetic clarity, ensuring every interaction feels both intuitive and intentional.",
    icon: <PenTool size={24} />,
  },
  {
    title: "The Stack",
    description:
      "Engineering with modern primitives: React, TypeScript, and Node.js. We build modular, AI-integrated foundations that are as scalable as they are maintainable.",
    icon: <Code2 size={24} />,
  },
  {
    title: "Scale & Security",
    description:
      "Stability is our default. We implement proactive monitoring and rigorous optimization, ensuring your infrastructure remains impenetrable and fast as your user base expands.",
    icon: <ShieldCheck size={24} />,
  },
];

const We: React.FC = () => {
  return (
    <section className="bg-[#0C0D0E] py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <span className="text-[11px] uppercase tracking-[0.4em] text-zinc-600">
            Our Protocol
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mt-6 leading-[0.9]">
            What I do
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group flex flex-col gap-6"
            >
              <div className="flex items-center gap-6">
                <div className="p-3 bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:border-[#FFD000]/30 group-hover:text-[#FFD000] transition-all duration-300">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-100 tracking-tight">
                  {section.title}
                </h3>
              </div>

              <p className="text-zinc-400 text-base leading-relaxed font-light max-w-md">
                {section.description}
              </p>

              <div className="mt-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-700 group-hover:text-[#FFD000] transition-colors cursor-pointer">
                Process Details <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default We;
