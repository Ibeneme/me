import React from "react";
import { motion } from "framer-motion";
import { Hammer, PenTool, Code2, ShieldCheck, ArrowRight } from "lucide-react";

const sections = [
  {
    title: "Dream to Reality",
    description:
      "Architecting bold ideas into functional, high-performance digital ecosystems.",
    icon: <Hammer size={20} />,
  },
  {
    title: "UX Strategy",
    description:
      "Simplicity with purpose. Interfaces focused on high-velocity usability.",
    icon: <PenTool size={20} />,
  },
  {
    title: "The Stack",
    description:
      "Specializing in React, Node, and AI integration. Clean, modular code.",
    icon: <Code2 size={20} />,
  },
  {
    title: "Scale & Security",
    description:
      "Proactive monitoring and optimization to ensure stability for growing architectures.",
    icon: <ShieldCheck size={20} />,
  },
];

const We: React.FC = () => {
  return (
    <section className="bg-[#0C0D0E] py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            Our Protocol
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mt-6 leading-tight">
            How we execute.
          </h2>
        </div>

        {/* Simplified Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="text-white/40">{section.icon}</div>
                <h3 className="text-lg font-medium text-white">
                  {section.title}
                </h3>
              </div>

              <p className="text-zinc-500 text-sm leading-relaxed font-light max-w-sm">
                {section.description}
              </p>

              <div className="mt-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-zinc-600 group-hover:text-[#FFD000] transition-colors">
                Learn more <ArrowRight size={12} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default We;
