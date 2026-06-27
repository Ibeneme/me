import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const serviceCategories = [
  {
    id: "01",
    shortTitle: "Software Development",
    description:
      "Robust, scalable, high-performance applications built from the ground up — no shortcuts, no technical debt left behind.",
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
      "Native-feeling mobile experiences that users love — shipped to both iOS and Android without compromise.",
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
      "Intelligent systems and automated workflows that think, adapt, and scale — so you don't have to do it manually.",
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
      "Technical depth meets refined design sensibility — every pixel earns its place, every interaction feels inevitable.",
    services: [
      "UI/UX Design",
      "Prototyping & User Testing",
      "Brand-Aligned Interfaces",
      "Product Strategy",
    ],
  },
];

const ExpertiseSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const toggle = (i: number) => setActiveIdx(activeIdx === i ? null : i);

  return (
    <section className="bg-[#0C0D0E] py-20 md:py-28 overflow-hidden">
      {/* Header */}
      <div className="px-5 md:px-6 max-w-6xl mx-auto mb-12 md:mb-20">
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
          Clean code, thoughtful design, intelligent systems — combined into
          digital products that are fast, scalable, and genuinely delightful.
        </p>
      </div>

      {/* Accordion */}
      <div className="px-5 md:px-6 max-w-6xl mx-auto flex flex-col">
        {serviceCategories.map((cat, i) => {
          const isOpen = activeIdx === i;
          return (
            <motion.div
              key={cat.id}
              layout
              className="relative border-t border-white/[0.07] p-4 overflow-hidden"
            >
              {/* Sweep bg */}
              <div
                className={`absolute  inset-0 pointer-events-none transition-opacity duration-500 ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
                style={{
  
                  background:
                    "linear-gradient(90deg, rgba(255,208,0,0.05) 0%, transparent 70%)",
                }}
              />

              {/* Tap target — full row, large enough for thumbs */}
              <button
                onClick={() => toggle(i)}
                className="relative w-full flex items-center justify-between py-6 md:py-9 gap-4 text-left active:opacity-70 transition-opacity"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-4 md:gap-10 min-w-0">
                  <span
                    className={`text-[11px] font-mono shrink-0 transition-colors duration-300 ${
                      isOpen ? "text-[#FFD000]" : "text-zinc-700"
                    }`}
                  >
                    {cat.id}
                  </span>
                  <h3
                    className={`text-xl md:text-4xl font-black uppercase tracking-tight truncate transition-colors duration-300 ${
                      isOpen ? "text-white" : "text-zinc-400"
                    }`}
                  >
                    {cat.shortTitle}
                  </h3>
                </div>

                {/* Toggle icon */}
                <div
                  className={`relative w-8 h-8 md:w-9 md:h-9 shrink-0 flex items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen
                      ? "border-[#FFD000] bg-[#FFD000]"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <span
                    className={`absolute w-3 md:w-3.5 h-[1.5px] transition-colors duration-200 ${
                      isOpen ? "bg-black" : "bg-white"
                    }`}
                  />
                  <motion.span
                    animate={{
                      rotate: isOpen ? 90 : 0,
                      opacity: isOpen ? 0 : 1,
                    }}
                    transition={{ duration: 0.25 }}
                    className={`absolute w-[1.5px] h-3 md:h-3.5 ${
                      isOpen ? "bg-black" : "bg-white"
                    }`}
                  />
                </div>
              </button>

              {/* Expanded content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.38, ease: [0.25, 0, 0, 1] }}
                    className="overflow-hidden"
                  >
                    {/* Mobile: stacked. Desktop: side-by-side */}
                    <div className="pb-8 md:pb-14 flex flex-col md:grid md:grid-cols-2 gap-7 md:gap-16">
                      {/* Description */}
                      <p className="text-zinc-300 text-base md:text-xl font-light leading-relaxed">
                        {cat.description}
                      </p>

                      {/* Services — card grid on mobile */}
                      <div className="grid grid-cols-2 md:flex md:flex-col gap-2.5 md:gap-3">
                        {cat.services.map((item, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.06 * j, duration: 0.28 }}
                            className="flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.06] rounded-xl px-3.5 py-3 md:bg-transparent md:border-none md:rounded-none md:px-0 md:py-0"
                          >
                            <div className="w-1 h-1 rounded-full bg-[#FFD000] shrink-0" />
                            <span className="text-zinc-300 text-[13px] md:text-[15px] leading-snug tracking-wide">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Active bottom rule */}
              <motion.div
                animate={{ scaleX: isOpen ? 1 : 0 }}
                initial={{ scaleX: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 h-px w-full bg-white/10 origin-left"
              />
            </motion.div>
          );
        })}

        {/* Last border */}
        <div className="border-t border-white/[0.07]" />
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
