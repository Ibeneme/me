import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import me from "../../assets/images/image.png";

const STACK = ["REACT", "NEXT.JS", "NODE.JS", "AWS", "PYTHON", "AI AGENTS"];

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  // Reduce parallax effect on mobile to prevent layout instability
  const y1 = useTransform(scrollY, [0, 500], [0, -30]);

  return (
    <section className="relative min-h-[90vh] pt-[120px] pb-32 flex items-center justify-center bg-[#0C0D0E] overflow-hidden selection:bg-[#FFD000]/30">
      {/* Optimized Ambient Glows: Added clip-path to prevent overflow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden clip-path-inset">
        <div className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] bg-[#FFD000] opacity-[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] -left-[10%] w-[40vw] h-[40vw] bg-[#FFD000] opacity-[0.03] blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
        {/* Text Content */}
        <div className="flex-1 w-full space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            <span className="text-[10px] font-medium text-[#ffd000] uppercase tracking-[0.3em]">
              Software Developer & ML Engineer
            </span>
            <div className="hidden lg:block h-px w-12 bg-zinc-800" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            // Responsive font sizing adjusted for small mobile screens
            className="text-5xl sm:text-7xl lg:text-8xl uppercase font-black tracking-tight text-white leading-[0.85]"
          >
            Ibeneme
            <br />
            <span className="text-zinc-600">Ikenna</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-md mx-auto lg:mx-0 text-zinc-400 text-lg leading-relaxed font-light"
          >
            I build modern software and AI tools that are powerful yet effortless to use.</motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button
              onClick={() =>
                (window.location.href = "mailto:ikennaibenemee@gmail.com")
              }
              className="w-full sm:w-auto group flex items-center justify-center gap-3 text-white border border-white/10 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              <span className="text-xs uppercase tracking-widest">Email</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <button
              onClick={() =>
                window.open("https://wa.me/2348120710198", "_blank")
              }
              className="w-full sm:w-auto group flex items-center justify-center gap-3 text-white border border-white/10 px-8 py-3 rounded-full hover:bg-[#25D366] hover:border-[#25D366] hover:text-black transition-all duration-300"
            >
              <MessageCircle size={14} />
              <span className="text-xs uppercase tracking-widest">
                WhatsApp
              </span>
            </button>
          </motion.div>
        </div>

        {/* Portrait - Responsive Sizing */}
        <motion.div
          style={{ y: y1 }}
          className="relative w-64 h-72 sm:w-[350px] sm:h-[400px] lg:w-[450px] lg:h-[500px] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out shrink-0"
        >
          <img
            src={me}
            alt="Ibeneme Ikenna"
            className="w-full h-full object-cover rounded-2xl opacity-80"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
        </motion.div>
      </div>

      {/* Stack Footer - Improved alignment */}
      <div className="absolute bottom-8 w-full px-6 flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="flex flex-wrap justify-center gap-6">
          {STACK.map((tech) => (
            <span
              key={tech}
              className="text-[9px] text-zinc-600 tracking-[0.2em] uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
