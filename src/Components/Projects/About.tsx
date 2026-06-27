import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/images/image.png";

const AboutPage: React.FC = () => {
  return (
    <section className="bg-[#0C0D0E] py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Intro Section */}
        <div className="grid md:grid-cols-12 gap-16 mb-32 items-start">
          <div className="md:col-span-4">
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-zinc-900 border border-zinc-800">
              <img
                src={me}
                alt="Ikenna Ibeneme"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1000ms]"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-8 flex flex-col justify-center h-full"
          >
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#FFD000] mb-8 block">
              The Developer
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-[0.95] mb-10">
              I build software systems that prioritize clarity, performance, and
              intent.
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              Based in Port Harcourt, I operate at the intersection of complex
              software architecture and product design. With over seven years of
              building, I specialize in crafting full-stack ecosystems that turn
              high-level technical requirements into intuitive, high-velocity
              digital tools. My focus remains on bridging the gap between
              advanced backend logic and refined, human-centric design.
            </p>
          </motion.div>
        </div>

        {/* Philosophy Grid */}
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16 border-t border-zinc-900 pt-20">
          <div>
            <h3 className="text-white font-bold text-lg mb-6">The Approach</h3>
            <p className="text-zinc-400 text-base leading-relaxed">
              I champion a "tech-brutalist" philosophy: efficiency over ego.
              Whether developing a logistics gateway or an AI-vision engine, I
              strip away unnecessary complexity to leave behind only what is
              robust, functional, and exceptionally performant.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">The Core</h3>
            <p className="text-zinc-400 text-base leading-relaxed">
              Built on a foundation of React, TypeScript, and Node.js, my work
              is defined by scalability. I engineer systems designed to evolve,
              ensuring that local ventures can grow into international fintech
              and logistics powerhouses without technical friction.
            </p>
          </div>
        </div>

        {/* Professional Context */}
        <div className="mt-32 bg-[#0C0D0E] border border-zinc-900 p-16 rounded-sm">
          <h3 className="text-white font-bold text-xl mb-12">
            Professional Trajectory
          </h3>
          <ul className="space-y-10">
            <li className="flex gap-10">
              <span className="text-zinc-700 font-mono text-sm mt-1 shrink-0">
                2026
              </span>
              <div className="border-l border-zinc-800 pl-8">
                <h4 className="text-white text-lg font-bold">
                  Software Developer & Founder
                </h4>
                <p className="text-zinc-400 text-base mt-2 max-w-xl">
                  Leading the development of proprietary engines and software
                  infrastructure that power high-growth startups and digital
                  ventures.
                </p>
              </div>
            </li>
            <li className="flex gap-10">
              <span className="text-zinc-700 font-mono text-sm mt-1 shrink-0">
                2019
              </span>
              <div className="border-l border-zinc-800 pl-8">
                <h4 className="text-white text-lg font-bold">
                  Software Developer
                </h4>
                <p className="text-zinc-400 text-base mt-2 max-w-xl">
                  Seven years of deep-dive architectural work, focusing on
                  complex full-stack integration and high-performance system
                  design.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
