import React from "react";
import { motion } from "framer-motion";
import logo from "./assets/images/image-header.png";

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[200] min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden font-sans">
      {/* Ambient glow */}
      <div className="absolute -top-32 -right-24 w-[26rem] h-[26rem] rounded-full bg-[#FFD000] opacity-[0.07] blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 -left-24 w-[22rem] h-[22rem] rounded-full bg-white opacity-[0.04] blur-[110px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Logo with pulsing ring */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center mb-10">
          <motion.span
            className="absolute inset-0 rounded-full border border-[#FFD000]/40"
            animate={{ scale: [1, 1.6, 1.6], opacity: [0.6, 0, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.span
            className="absolute inset-0 rounded-full border border-white/20"
            animate={{ scale: [1, 1.6, 1.6], opacity: [0.5, 0, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.5,
            }}
          />
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/[0.03] border border-[#FFD000]/25 backdrop-blur-xl flex items-center justify-center"
          >
            <img
              src={logo}
              alt="Ibeneme Ikenna"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
          </motion.div>
        </div>

        {/* Status line */}
        <div
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.35em] text-white/50 mb-6"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD000] opacity-60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FFD000]" />
          </span>
          Initializing system
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.9, repeat: Infinity }}
          >
            _
          </motion.span>
        </div>

        {/* Indeterminate progress bar */}
        <div className="w-48 md:w-56 h-[3px] rounded-full bg-white/[0.08] overflow-hidden">
          <motion.div
            className="h-full w-1/3 rounded-full bg-gradient-to-r from-transparent via-[#FFD000] to-transparent"
            animate={{ x: ["-100%", "260%"] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;