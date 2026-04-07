import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ShieldAlert, ArrowLeft } from "lucide-react";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#0B0A0F] overflow-hidden px-6 font-sans">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] md:text-[40rem] font-black text-white/[0.01] select-none pointer-events-none tracking-tighter leading-none uppercase">
        LOST
      </div>

      {/* Amethyst Glow to differentiate the 404 space */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#6518BC] opacity-[0.08] blur-[150px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-yellow-500 opacity-[0.05] blur-[150px] rounded-full" />

      <div className="max-w-4xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Alert Identity */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/5 border border-white/10 rounded-[2.5rem] mb-12 relative group backdrop-blur-xl">
            <ShieldAlert
              size={48}
              className="text-yellow-500 group-hover:rotate-12 transition-transform"
            />
            <div className="absolute inset-0 bg-yellow-500/5 blur-3xl rounded-full" />
          </div>

          <h1 className="text-white text-6xl md:text-9xl font-black tracking-tightest leading-[0.8] mb-10 uppercase">
            ESTATE <br />
            <span className="text-white/10">LOST IN SPACE.</span>
          </h1>

          <p className="text-gray-500 text-lg md:text-2xl font-bold max-w-xl mx-auto mb-16 uppercase tracking-tighter leading-tight opacity-70">
            The coordinate you are attempting to ping is currently offline or
            protected by security protocols.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={() => navigate("/")}
              className="w-full sm:w-auto px-12 py-5 bg-white hover:bg-yellow-500 text-black rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-3 group shadow-2xl"
            >
              <Home size={16} />
              Reset Terminal
            </button>

            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto px-12 py-5 bg-transparent border border-white/10 hover:border-yellow-500/50 hover:text-yellow-500 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-3"
            >
              <ArrowLeft size={16} />
              Return to Previous
            </button>
          </div>
        </motion.div>

        {/* Footer Data */}
        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <p className="text-gray-500 text-[9px] font-black uppercase tracking-[0.4em]">
              Connection Timeout // Node_404
            </p>
          </div>

          <div className="text-gray-600 text-[9px] font-black uppercase tracking-widest">
            Ibeneme Ikenna // Cloud Systems
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
    </main>
  );
};

export default NotFound;
