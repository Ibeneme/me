import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/images/image.png";

const AboutPage: React.FC = () => {
  return (
    <section className="bg-[#0C0D0E] py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Intro Section with Headshot */}
        <div className="grid md:grid-cols-12 gap-12 mb-24 items-start">
          <div className="md:col-span-4">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900 border border-white/5">
              <img
                src={me}
                alt="Ikenna Ibeneme"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-8"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#FFD000] mb-6 block">
              Profile
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-8">
              I build digital systems that prioritize clarity, performance, and
              intent.
            </h1>
            <p className="text-zinc-500 text-lg font-light leading-relaxed">
              Based in Port Harcourt, Nigeria, I work at the intersection of
              software architecture and product design. With over seven years of
              experience, I specialize in crafting full-stack ecosystems ranging
              from fintech and logistics platforms to AI-driven vision
              engines, that bridge the gap between complex technical needs and
              refined, human-centric design.
            </p>
          </motion.div>
        </div>

        {/* Philosophy Grid */}
        <div className="grid md:grid-cols-2 gap-16 border-t border-zinc-900 pt-16">
          <div>
            <h3 className="text-white font-medium mb-6">The Approach</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              I believe in "tech-brutalist" efficiency architecture that is
              stripped of unnecessary complexity. Whether it’s a logistics app
              or an AI-vision tool, I focus on building systems that are robust
              under the hood and intuitive on the surface.
            </p>
          </div>
          <div>
            <h3 className="text-white font-medium mb-6">The Core</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              My stack is built around React, Node.js, and TypeScript, but my
              focus is always on the goal: scalability. I don't just write code;
              I design systems that grow alongside the businesses they support,
              from local logistics ventures to international fintech gateways.
            </p>
          </div>
        </div>

        {/* Professional Context */}
        <div className="mt-24 bg-white/[0.02] border border-white/5 p-12 rounded-2xl">
          <h3 className="text-white font-medium mb-8">
            Professional Trajectory
          </h3>
          <ul className="space-y-6">
            <li className="flex gap-6 border-b border-white/5 pb-6">
              <span className="text-zinc-600 font-mono text-xs mt-1">2026</span>
              <div>
                <h4 className="text-white text-sm font-medium">
                  Software Developer & Founder
                </h4>
                <p className="text-zinc-500 text-sm mt-1">
                  Uniquely building softwares and engines that runs startups
                </p>
              </div>
            </li>
            <li className="flex gap-6 border-b border-white/5 pb-6">
              <span className="text-zinc-600 font-mono text-xs mt-1">2019</span>
              <div>
                <h4 className="text-white text-sm font-medium">
                  Software Developer
                </h4>
                <p className="text-zinc-500 text-sm mt-1">
                  Seven years of deep-dive development into complex software
                  architectures.
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
