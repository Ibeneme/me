import React from "react";
import { motion } from "framer-motion";

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
    <section className="bg-[#0A0314] pt-40 pb-32 md:pt-52 md:pb-40 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-6 mb-8"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#ffd000]">
            {category}
          </span>
          <div className="h-[1px] w-8 bg-zinc-800" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
            {date}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-light text-white tracking-tight leading-[1.05] max-w-3xl"
        >
          {title}
        </motion.h1>

        {/* Accent bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0, 0, 1] }}
          className="h-[3px] w-16 bg-[#ffd000] origin-left mt-10"
        />

        {/* Author line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex items-center gap-3"
        >
          <div className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
            <span className="text-[9px] font-bold text-zinc-400">II</span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            Ibeneme Ikenna
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;
