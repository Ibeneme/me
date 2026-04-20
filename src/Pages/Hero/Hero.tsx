import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Star,
  ArrowRight,
} from "lucide-react";
import me from "../../assets/projects/me.png";

const Hero: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const handleSendMail = () => {
    window.location.href = "mailto:ikennaibenemee@gmail.com";
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] pt-[180px] pb-[180px] w-full flex items-center justify-center bg-[#050505] overflow-hidden font-sans selection:bg-[#FFD000] selection:text-black"
    >
      {/* --- BACKGROUND LAYERS --- */}
      <motion.div
        style={{ y: y1, scale, opacity: 0.2 }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="w-full h-full bg-cover bg-center grayscale contrast-125"
          style={{ backgroundImage: `url(${me})` }}
        />
      </motion.div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-10 opacity-[0.15] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 w-full flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-10 flex items-center gap-3 px-5 py-2.5 bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-2xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD000] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD000]"></span>
          </span>
          <span className="text-[#FFD000] text-center text-[10px] font-black uppercase tracking-[0.4em]">
            SOFTWARE ENGINEER • AI AUTOMATION SPECIALIST
          </span>
        </motion.div>

        {/* Headline Section */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="relative text-center mb-12"
        >
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-[16vw] md:text-[8rem] font-[1000] tracking-tighter leading-[0.8] uppercase"
          >
            Ibeneme <br />
            Ikenna
          </motion.h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl w-full text-center space-y-12"
        >
          <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed tracking-tight">
            Specializing in the end-to-end development of
            <span className="text-white"> scalable websites</span>,
            <span className="text-white"> mobile apps</span>, and
            <span className="text-white"> AI-driven automation workflows</span> to optimize business growth.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-20 flex flex-col md:flex-row items-center gap-10"
        >
          <button
            onClick={handleSendMail}
            className="group relative flex items-center gap-6 bg-[#FFD000] text-black px-12 py-7 rounded-[8rem] font-black uppercase tracking-[0.2em] text-xs transition-transform hover:scale-[1.03] active:scale-95"
          >
            <span className="relative z-10">SEND A MESSAGE</span>
            <ArrowRight
              size={18}
              className="relative z-10 group-hover:translate-x-2 transition-transform"
            />
          </button>

          <div className="flex flex-col items-center md:items-start gap-2 border-l-2 border-white/5 pl-8">
            <div className="flex gap-1 text-[#FFD000]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
              &gt; SOFTWARE ENGINEER & AI SPECIALIST
            </p>
          </div>
        </motion.div>
      </div>

      {/* Corner Tech Stack */}
      <div className="absolute bottom-10 right-10 hidden xl:block text-right">
        <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[2rem] backdrop-blur-md">
          <p className="text-[#FFD000] text-[10px] font-black uppercase tracking-[0.4em] mb-2">
            Technical Core
          </p>
          <p className="text-white/40 text-[9px] font-mono leading-loose uppercase">
            React • Next.js • Node.js <br />
            Make.com • Zapier • OpenAI <br />
            AWS • Docker • Python
          </p>
        </div>
      </div>

      <style>{`
        .outline-title {
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Hero;
