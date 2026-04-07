import React from "react";
import { motion } from "framer-motion";
import { Calendar, Hash, ChevronRight } from "lucide-react";

interface BlogHeroProps {
  title: string;
  category?: string;
  date?: string;
}

const BlogHero: React.FC<BlogHeroProps> = ({
  title,
  category = "Engineering",
  date = "April 2026",
}) => {
  return (
    <section className="relative w-full pt-40 pb-20 px-6 bg-[#050505] overflow-hidden">
      {/* Background Architectural Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="absolute top-0 right-0 w-[600px] h-[300px] bg-[#FFD000] opacity-[0.03] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb / Category Metadata */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            <Hash size={12} className="text-[#FFD000]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
              {category}
            </span>
          </div>
          <ChevronRight size={14} className="text-white/20" />
          <div className="flex items-center gap-2">
            <Calendar size={12} className="text-white/20" />
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
              {date}
            </span>
          </div>
        </motion.div>

        {/* The Title - Massive & Brutalist */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] max-w-5xl"
          >
            {title}
            <span className="text-[#FFD000]">.</span>
          </motion.h1>

          {/* Decorative Side-Label (Vertical) */}
          <div className="absolute -left-12 top-0 hidden xl:block h-full">
            <span className="sticky top-40 text-[10px] font-black text-white/10 uppercase tracking-[1em] [writing-mode:vertical-lr] rotate-180">
              Technical // Archive
            </span>
          </div>
        </div>

        {/* Footer Detail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex items-center gap-6"
        >
          <div className="h-[1px] w-24 bg-gradient-to-r from-[#FFD000] to-transparent" />
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em]">
            Deep Dive Into Software Architecture
          </p>
        </motion.div>
      </div>

      <style>{`
        /* Optional: Add a texture mask to the title */
        h1 {
          background: linear-gradient(180deg, #FFFFFF 0%, #A1A1A1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default BlogHero;
