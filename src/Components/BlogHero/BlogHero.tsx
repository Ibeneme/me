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
    <section className="bg-[#0C0D0E] pt-48 pb-48 px-6 border-b border-zinc-900">
      <div className="max-w-4xl mx-auto">
        {/* Metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-6 mb-12"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
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
          className="text-4xl md:text-6xl font-light text-[#ffd000] tracking-tight leading-tight"
        >
          {title}
        </motion.h1>

        {/* Author Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex items-center gap-4"
        >
          <div className="w-8 h-[1px] bg-zinc-700" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            Ibeneme Ikenna
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;
