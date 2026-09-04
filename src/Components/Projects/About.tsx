import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/images/image.png";

// Animation variant for the newly integrated sections
const rise = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const About: React.FC = () => {
  return (
    <section className="relative bg-[#0A0314] py-24 md:py-32 overflow-x-clip">
      {/* Background ambient glow matching your theme */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ffd000]/[0.02] blur-[120px] pointer-events-none rounded-full" />

      {/* Main container with horizontal padding preserved for boxed content */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Intro */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 mb-24 md:mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-4"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.07] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)] group">
              <img
                src={me}
                alt="Ikenna Ibeneme"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="md:col-span-8 flex flex-col justify-center"
          >
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#FFD000] mb-6 block font-medium">
              The Developer & Architect
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[0.98] mb-8">
              I build software systems that prioritize clarity, performance, and
              intent.
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed font-light max-w-xl">
              Based in Port Harcourt, I operate at the intersection of complex
              software architecture, mobile engineering, and product design.
              With over seven years of professional building, I specialize in
              crafting full-stack ecosystems that turn high-level technical
              requirements into intuitive, high-velocity digital tools.
            </p>
          </motion.div>
        </div>

        {/* Philosophy & Capabilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-2 gap-x-16 gap-y-12 border-t border-white/[0.07] pt-16 md:pt-20 mb-16"
        >
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.01] border border-white/[0.04] transition-all duration-300 hover:border-white/[0.08]">
            <h3 className="text-white font-bold text-lg mb-3 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD000]" />
              The Approach
            </h3>
            <p className="text-zinc-400 text-base leading-relaxed font-light mb-4">
              I champion a “tech-brutalist” philosophy: efficiency over ego.
              Whether developing a cross-border fintech gateway, a logistics
              dispatch app, or an AI vision-processing pipeline, I strip away
              unnecessary complexity to leave behind systems that are robust,
              functional, and exceptionally performant.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Software Dev", "Server Architecture", "AI Engineering"].map(
                (tag, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] text-zinc-300 border border-white/[0.05]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.01] border border-white/[0.04] transition-all duration-300 hover:border-white/[0.08]">
            <h3 className="text-white font-bold text-lg mb-3 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD000]" />
              The Core Stack
            </h3>
            <p className="text-zinc-400 text-base leading-relaxed font-light mb-4">
              Engineered for absolute scalability and seamless multi-platform
              experiences. My primary toolkit bridges lightning-fast systems
              programming with fluid frontend and mobile application dynamics.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["React", "React Native", "JavaScript", "Swift", "Rust"].map(
                (tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#ffd000]/[0.05] text-[#FFD000] border border-[#ffd000]/20"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Absolute Full-Width Marquee Banner — fixed so it is never clipped */}
      <div
        aria-hidden="true"
        className="relative z-10 w-full my-12 -rotate-1 border-y-2 border-black bg-[#D4FF3F] py-6 overflow-hidden"
      >
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap text-xl font-black uppercase tracking-tight text-[#0B0014]">
          {/* Duplicate the content twice for a seamless loop */}
          {[...Array(2)].map((_, setIndex) => (
            <span key={setIndex} className="flex items-center gap-8">
              <span>open to work</span>
              <span>✦</span>
              <span>react native</span>
              <span>✦</span>
              <span>node.js</span>
              <span>✦</span>
              <span>ml that ships</span>
              <span>✦</span>
              <span>port harcourt → anywhere</span>
              <span>✦</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>

      {/* Main container resumed for remaining content */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        {/* ====================================================== */}
        {/* Stack as import statement                              */}
        {/* ====================================================== */}
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-8 rounded-xl border border-white/[0.08] bg-white/[0.015] px-6 py-5 font-mono text-[13px] sm:text-[14px] overflow-x-auto"
        >
          <p className="text-zinc-500 mb-2.5"># tools reached for most often</p>
          <p className="whitespace-pre text-zinc-300">
            <span className="text-[#7C7CE0]">import</span> {"{ "}
            {[
              "React",
              "React Native",
              "TypeScript",
              "Node.js",
              "Swift",
              "Rust",
            ].map((tech, i, arr) => (
              <React.Fragment key={tech}>
                <span className="text-[#FFD000]">{tech}</span>
                {i < arr.length - 1 && (
                  <span className="text-zinc-500">, </span>
                )}
              </React.Fragment>
            ))}
            {" }"} <span className="text-[#7C7CE0]">from</span>{" "}
            <span className="text-[#B8E986]">"@ikenna/stack"</span>
            <span className="text-zinc-500">;</span>
          </p>
        </motion.div>

        {/* ====================================================== */}
        {/* Career as git log                                      */}
        {/* ====================================================== */}
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="rounded-xl border border-white/[0.08] bg-white/[0.015] overflow-hidden"
        >
          <div className="px-6 py-3.5 border-b border-white/[0.08] font-mono text-[12px] text-zinc-500 flex items-center gap-3">
            <span>$ git log --graph --oneline --decorate career</span>
          </div>

          <div className="px-6 py-7 sm:px-8">
            <ol className="relative border-l border-white/[0.12] space-y-11">
              {/* Present */}
              <li className="relative pl-8">
                <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#FFD000] ring-[5px] ring-[#0A0314]" />
                <div className="font-mono text-[12px] text-zinc-500 mb-2 flex flex-wrap items-center gap-2">
                  <span className="text-zinc-400">9f2a1c4</span>
                  <span className="text-[#FFD000] border border-[#FFD000]/35 bg-[#FFD000]/10 rounded px-1.5 py-0.5 text-[11px]">
                    HEAD → present
                  </span>
                </div>
                <h4 className="text-white text-lg font-bold tracking-tight mb-2">
                  Lead Software Developer &amp; Architect
                </h4>
                <p className="text-zinc-400 text-[15px] leading-relaxed max-w-2xl">
                  Leading full product lifecycles across fintech, logistics, and
                  AI. Shipping scalable native apps (React Native + Swift),
                  high-performance web platforms, and resilient backend
                  infrastructure. Currently focused on cross-border payments and
                  two-sided marketplace systems.
                </p>
              </li>

              {/* Mid career */}
              <li className="relative pl-8">
                <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-500 ring-[5px] ring-[#0A0314]" />
                <div className="font-mono text-[12px] text-zinc-500 mb-2 flex flex-wrap items-center gap-2">
                  <span className="text-zinc-400">3c8e9a2</span>
                  <span className="text-zinc-500 border border-white/10 bg-white/[0.03] rounded px-1.5 py-0.5 text-[11px]">
                    2021 – 2024
                  </span>
                </div>
                <h4 className="text-white text-lg font-bold tracking-tight mb-2">
                  Full-Stack &amp; Mobile Engineer
                </h4>
                <p className="text-zinc-400 text-[15px] leading-relaxed max-w-2xl">
                  Built and shipped production systems for startups and product
                  teams. Deepened expertise in React Native, TypeScript,
                  Node.js, and cloud infrastructure while owning features from
                  architecture through release.
                </p>
              </li>

              {/* Origin */}
              <li className="relative pl-8">
                <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-600 ring-[5px] ring-[#0A0314]" />
                <div className="font-mono text-[12px] text-zinc-500 mb-2 flex flex-wrap items-center gap-2">
                  <span className="text-zinc-400">5b7e001</span>
                  <span className="text-zinc-500 border border-white/10 bg-white/[0.03] rounded px-1.5 py-0.5 text-[11px]">
                    2019
                  </span>
                </div>
                <h4 className="text-white text-lg font-bold tracking-tight mb-2">
                  Systems &amp; Software Engineer
                </h4>
                <p className="text-zinc-400 text-[15px] leading-relaxed max-w-2xl">
                  Started the journey focusing on server-side reliability,
                  performant client applications, and clean, maintainable
                  codebases. Laid the foundation for seven years of deliberate,
                  end-to-end engineering.
                </p>
              </li>
            </ol>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;