import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const serviceCategories = [
  {
    title: "Software Development",
    description:
      "I’m a hands-on Software Engineer who builds robust, scalable, and high-performance applications from the ground up.",
    services: [
      "Full-Stack Development",
      "React & Next.js Applications",
      "Node.js & Backend Systems",
      "API Development & Integration",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "I design and develop native-feeling mobile experiences that users love on both iOS and Android.",
    services: [
      "Cross-Platform Apps (React Native)",
      "iOS & Android Development",
      "App Store Optimization",
      "Seamless Backend Sync",
    ],
  },
  {
    title: "AI & Automation",
    description:
      "I build intelligent systems and automated workflows that save time and scale efficiently.",
    services: [
      "LLM Agent Development",
      "Custom AI Solutions",
      "Workflow Automation",
      "Smart API Orchestration",
    ],
  },
  {
    title: "Product & Experience Design",
    description:
      "I combine deep technical knowledge with refined design sensibilities to create elegant, intuitive digital products.",
    services: [
      "UI/UX Design",
      "Prototyping & User Testing",
      "Brand-Aligned Interfaces",
      "Product Strategy",
    ],
  },
];

const ExpertiseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#0C0D0E] py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            What I build.
          </h2>
          <p className="text-zinc-500 mt-6 max-w-xl text-lg font-light">
            As a Software Developer and Engineer, I merge clean code, thoughtful
            design, and intelligent systems to create digital products that are
            fast, scalable, and genuinely delightful to use.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Navigation Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {serviceCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`text-left px-6 py-5 rounded-2xl transition-all duration-200 border ${
                  activeTab === idx
                    ? "bg-white/5 border-white/10"
                    : "border-transparent hover:bg-white/[0.02]"
                }`}
              >
                <h3
                  className={`text-xl font-medium tracking-tight transition-colors ${
                    activeTab === idx ? "text-white" : "text-zinc-400"
                  }`}
                >
                  {cat.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Active Content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="h-full"
              >
                <p className="text-2xl text-zinc-200 font-light leading-relaxed mb-14">
                  {serviceCategories[activeTab].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {serviceCategories[activeTab].services.map((item, i) => (
                    <div
                      key={i}
                      className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-300"
                    >
                      <div className="w-2 h-2 bg-[#FFD000] rounded-full group-hover:scale-125 transition-transform" />
                      <span className="text-zinc-300 text-[15px]">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
