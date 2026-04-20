import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Code2,
  Rocket,
  Briefcase,
  MapPin,
  Heart,
  Cpu, // Added for AI visual
} from "lucide-react";

// Image Asset
import me from "../../assets/projects/me.png";

const AboutMe: React.FC = () => {
  return (
    <section className="relative py-24 md:py-40 px-6 bg-[#FEFEFE] overflow-hidden font-sans">
      {/* Signature Brand Orbs */}
      <div className="absolute top-0 -left-24 w-[500px] h-[500px] bg-[#FFD000] opacity-[0.07] blur-[120px] rounded-full" />
      <div className="absolute bottom-0 -right-24 w-[500px] h-[500px] bg-[#FFD000] opacity-[0.05] blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Visual & Status */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative aspect-square rounded-[3rem] overflow-hidden bg-gray-100 border-8 border-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]"
            >
              <img
                src={me}
                alt="Ibeneme Ikenna"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-3xl border border-black/5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-black/40">
                    Current Role
                  </p>
                  <p className="text-sm font-black text-black">Founder & CEO</p>
                </div>
                <div className="w-10 h-10 bg-[#FFD000] rounded-xl flex items-center justify-center shadow-[0_10px_20px_-5px_rgba(255,208,0,0.5)]">
                  <Rocket size={18} className="text-black" />
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col gap-4 px-4">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={16} className="text-[#FFD000]" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Port Harcourt, Nigeria
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Briefcase size={16} className="text-[#FFD000]" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  7+ Years Engineering Experience
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Details */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD000]/20 text-[#B89600] font-bold text-xs uppercase tracking-wider mb-6">
                <Sparkles size={14} /> The Story Behind the Code
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-[#1A1A1A] tracking-tightest uppercase leading-[0.9] mb-8">
                I’m Ikenna. <br />
                <span className="text-gray-300">Software & AI Architect.</span>
              </h2>
              <div className="space-y-6 text-gray-500 text-lg font-medium leading-relaxed">
                <p>
                  I thrive at the intersection of high-velocity engineering and
                  autonomous intelligence. With over seven years of professional experience, 
                  I build systems that don't just run—they think. My mission is to bridge 
                  the gap between complex backend logic and seamless user experiences.
                </p>
              </div>
            </motion.div>

            {/* Career Bento Snippet */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-[#FFFCF0] rounded-[2.5rem] space-y-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#B89600]">
                  <Code2 size={22} />
                </div>
                <h4 className="font-black text-black uppercase tracking-tight">
                  Full-Stack Core
                </h4>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-tight leading-relaxed">
                  Expertise in React Native, TypeScript, and high-availability server 
                  architectures for global applications.
                </p>
              </div>

              <div className="p-8 bg-white border-2 border-gray-50 rounded-[2.5rem] space-y-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#B89600]">
                  <Cpu size={22} />
                </div>
                <h4 className="font-black text-black uppercase tracking-tight">
                  AI & Automation
                </h4>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-tight leading-relaxed">
                  Designing intelligent agents, autonomous workflows, and 
                  custom neural mapping models.
                </p>
              </div>
            </div>

            {/* Bottom Signature Vibe */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center gap-8"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-sm"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?u=dev${i}`}
                      alt="Peer"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-gray-400 flex items-center gap-2 text-center md:text-left">
                Collaborating with world-class designers & founders{" "}
                <Heart size={14} className="fill-[#FFD000] text-[#FFD000]" />
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
