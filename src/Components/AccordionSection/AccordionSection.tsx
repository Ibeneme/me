import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const serviceCategories = [
  {
    id: "01",
    shortTitle: "Software Development",
    description:
      "Robust, scalable, high-performance applications built from the ground up no shortcuts, no technical debt left behind.",
    services: [
      "Full-Stack Development",
      "React & Next.js Applications",
      "Node.js & Backend Systems",
      "API Development & Integration",
    ],
  },
  {
    id: "02",
    shortTitle: "Mobile Apps",
    description:
      "Native-feeling mobile experiences that users love shipped to both iOS and Android without compromise.",
    services: [
      "Cross-Platform (React Native)",
      "iOS & Android Development",
      "App Store Optimization",
      "Seamless Backend Sync",
    ],
  },
  {
    id: "03",
    shortTitle: "AI & Agents",
    description:
      "Intelligent systems and automated workflows that think, adapt, and scale so you don't have to do it manually.",
    services: [
      "LLM Agent Development",
      "Custom AI Solutions",
      "Workflow Automation",
      "Smart API Orchestration",
    ],
  },
  {
    id: "04",
    shortTitle: "UX Design",
    description:
      "Technical depth meets refined design sensibility every pixel earns its place, every interaction feels inevitable.",
    services: [
      "UI/UX Design",
      "Prototyping & User Testing",
      "Brand-Aligned Interfaces",
      "Product Strategy",
    ],
  },
];

const ExpertiseSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = serviceCategories[activeIdx];

  return (
    <section className="bg-[#0A0314] py-20 md:py-28 overflow-hidden">
      {/* Header */}
      <div className="px-5 md:px-6 max-w-6xl mx-auto mb-12 md:mb-16">
        <p className="text-[10px] text-[#FFD000] uppercase tracking-[0.35em] mb-4">
          Capabilities
        </p>
        <h2 className="text-[clamp(2.6rem,10vw,5.5rem)] font-black text-white tracking-tight leading-[0.88] uppercase">
          What I{" "}
          <span className="relative inline-block">
            Build
            <span
              className="absolute -bottom-1.5 left-0 h-[4px] md:h-[5px] w-full"
              style={{ background: "#FFD000" }}
            />
          </span>
          .
        </h2>
        <p className="text-zinc-500 mt-8 max-w-lg text-sm md:text-base font-light leading-relaxed">
          Clean code, thoughtful design, intelligent systems combined into
          digital products that are fast, scalable, and genuinely delightful.
        </p>
      </div>

      {/* Tabs */}
      <div className="px-5 md:px-6 max-w-6xl mx-auto">
        {/* Tab bar scrollable row on mobile, full row on desktop */}
        <div className="flex md:grid md:grid-cols-4 border-t border-b border-white/[0.07] overflow-x-auto no-scrollbar">
          {serviceCategories.map((cat, i) => {
            const isActive = activeIdx === i;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveIdx(i)}
                aria-selected={isActive}
                className={`relative shrink-0 md:shrink flex flex-col items-start gap-2 px-5 md:px-2 py-6 md:py-8 text-left transition-colors duration-300 ${
                  i !== 0 ? "border-l border-white/[0.07]" : ""
                }`}
              >
                <span
                  className={`text-[11px] font-mono transition-colors duration-300 ${
                    isActive ? "text-[#FFD000]" : "text-zinc-700"
                  }`}
                >
                  {cat.id}
                </span>
                <span
                  className={`text-sm md:text-lg font-black uppercase tracking-tight whitespace-nowrap md:whitespace-normal transition-colors duration-300 ${
                    isActive ? "text-white" : "text-zinc-500"
                  }`}
                >
                  {cat.shortTitle}
                </span>
                <motion.span
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 0, 0, 1] }}
                  className="absolute left-0 -bottom-px h-[2px] w-full origin-left"
                  style={{ background: "#FFD000" }}
                />
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.25, 0, 0, 1] }}
            className="pt-8 md:pt-14 pb-4 flex flex-col md:grid md:grid-cols-2 gap-7 md:gap-16"
          >
            <p className="text-zinc-300 text-base md:text-xl font-light leading-relaxed">
              {active.description}
            </p>

            <div className="grid grid-cols-2 md:flex md:flex-col gap-2.5 md:gap-3">
              {active.services.map((item, j) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * j, duration: 0.25 }}
                  className="flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.06] rounded-xl px-3.5 py-3 md:bg-transparent md:border-none md:rounded-none md:px-0 md:py-0"
                >
                  <div className="w-1 h-1 rounded-full bg-[#FFD000] shrink-0" />
                  <span className="text-zinc-300 text-[13px] md:text-[15px] leading-snug tracking-wide">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="px-5 md:px-6 max-w-6xl mx-auto mt-10 md:mt-16 flex items-center gap-4">
        <div className="h-px flex-1 bg-white/[0.04]" />
        <span className="text-[10px] text-zinc-700 uppercase tracking-[0.3em]">
          {serviceCategories.length} Disciplines
        </span>
      </div>
    </section>
  );
};

export default ExpertiseSection;