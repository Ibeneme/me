import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, CheckCircle2 } from "lucide-react";

const sections = [
  {
    title: "Branding",
    items: [
      "Logo Design",
      "Brand Guidelines",
      "Collateral Design",
      "Rebranding Services",
    ],
  },
  {
    title: "UX/UI Designs",
    items: [
      "User Research",
      "Wireframing & Prototyping",
      "UI Design",
      "Experience Testing",
    ],
  },
  {
    title: "Web Development",
    items: [
      "Responsive Design",
      "React & Next.js",
      "Node.js Backend",
      "CMS Integration",
    ],
  },
  {
    title: "Mobile App Development",
    items: ["Cross-Platform Apps", "iOS & Android", "App Store Optimization"],
  },
  {
    title: "AI Models Development",
    items: [
      "Custom Model Training",
      "NLP",
      "Computer Vision",
      "AI Integration",
    ],
  },
  {
    title: "Server Development",
    items: [
      "API Architecture",
      "Database Management",
      "Microservices",
      "Real-Time Systems",
    ],
  },
];

const AccordionSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F8F9FA] min-h-screen py-24 px-6 font-sans selection:bg-black selection:text-white">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-black/10" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">
              Solutions Stack // 2026
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tightest text-black uppercase leading-[0.9]">
            Ibeneme's <br />
            <span className="text-gray-300">Expertise.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {sections.map((section, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                layout
                className={`group transition-all duration-500 rounded-3xl border ${
                  isOpen
                    ? "bg-white border-black/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]"
                    : "bg-transparent border-transparent hover:bg-black/[0.02]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span
                      className={`text-xs font-black tabular-nums transition-colors ${
                        isOpen ? "text-black" : "text-black/10"
                      }`}
                    >
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <h3
                      className={`text-xl md:text-2xl font-black uppercase tracking-tight transition-all ${
                        isOpen
                          ? "text-black translate-x-1"
                          : "text-black/30 group-hover:text-black"
                      }`}
                    >
                      {section.title}
                    </h3>
                  </div>

                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-black text-white"
                        : "bg-black/5 text-black/20"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={18} strokeWidth={3} />
                    ) : (
                      <Plus size={18} strokeWidth={3} />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-8 md:px-24 pb-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12 pt-6 border-t border-gray-50">
                          {section.items.map((item, idx) => (
                            <motion.li
                              initial={{ y: 10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: idx * 0.08 }}
                              key={idx}
                              className="flex items-center gap-3 list-none"
                            >
                              <CheckCircle2
                                size={14}
                                className="text-black/20"
                              />
                              <span className="text-[11px] font-black uppercase tracking-widest text-black/50">
                                {item}
                              </span>
                            </motion.li>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Meta */}
        <div className="mt-24 pt-10 border-t border-black/5 flex justify-between items-center">
          <p className="text-[9px] font-black uppercase tracking-widest text-black/20">
            Build // Deploy // Scale
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-[9px] font-black uppercase tracking-widest text-black/40">
              Active for hire
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
