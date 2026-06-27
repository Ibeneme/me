import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import me from "../../assets/images/image.webp";

//const STACK = ["REACT", "NEXT.JS", "NODE.JS", "AWS", "PYTHON", "AI AGENTS"];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] md:pt-[120px] pb-32 flex items-center justify-center bg-[#0C0D0E] overflow-hidden selection:bg-[#FFD000]/30">
      {/* Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] bg-[#FFD000] opacity-[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] -left-[10%] w-[40vw] h-[40vw] bg-[#FFD000] opacity-[0.03] blur-[120px] rounded-full" />
      </div>

      {/* ── MOBILE LAYOUT ── */}
      <div className="lg:hidden relative w-full">
        <div className="relative w-full h-[100svh] min-h-[560px] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out bg-zinc-900">
          <img
            src={me}
            alt="Ibeneme Ikenna"
            className="w-full h-full object-cover opacity-60"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0E] via-[#0C0D0E]/60 to-transparent" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-16 space-y-6 text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="text-[10px] font-medium text-[#ffd000] uppercase tracking-[0.3em]">
                Software Developer & ML Engineer
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl uppercase font-black tracking-tight text-white leading-[0.85]">
              Ibeneme <br />
              <span className="text-[#ffd000]">Ikenna</span>
            </h1>
            <p className="max-w-md mx-auto text-zinc-300 text-base leading-relaxed font-light">
              I engineer powerful software and AI applications that prioritize
              seamless usability.
            </p>
            <div className="flex flex-row items-center justify-center gap-3">
              <button
                onClick={() =>
                  (window.location.href = "mailto:ikennaibenemee@gmail.com")
                }
                className="group flex items-center justify-center gap-2 text-white border border-white/20 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full active:scale-95 hover:bg-white hover:text-black transition-all duration-300"
              >
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
                <span className="text-[11px] font-medium uppercase tracking-widest">
                  Email
                </span>
              </button>
              <button
                onClick={() =>
                  window.open("https://wa.me/2348120710198", "_blank")
                }
                className="group flex items-center justify-center gap-2 text-white border border-white/20 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full active:scale-95 hover:bg-[#25D366] hover:border-[#25D366] hover:text-black transition-all duration-300"
              >
                <MessageCircle size={13} />
                <span className="text-[11px] font-medium uppercase tracking-widest">
                  WhatsApp
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden lg:flex relative z-10 max-w-6xl mx-auto px-6 w-full flex-row items-center gap-24">
        <div className="flex-1 w-full space-y-8 text-left">
          <div className="flex items-center justify-start gap-4">
            <span className="text-[10px] font-medium text-[#ffd000] uppercase tracking-[0.3em]">
              Software Developer & ML Engineer
            </span>
            <div className="h-px w-12 bg-zinc-800" />
          </div>
          <h1 className="text-8xl uppercase font-black tracking-tight text-white leading-[0.85]">
            Ibeneme <br />
            <span className="text-zinc-600">Ikenna</span>
          </h1>
          <p className="max-w-md text-zinc-400 text-lg leading-relaxed font-light">
            I engineer powerful software and AI applications that prioritize
            seamless usability.
          </p>
          <div className="flex flex-row items-center justify-start gap-4">
            <button
              onClick={() =>
                (window.location.href = "mailto:ikennaibenemee@gmail.com")
              }
              className="group flex items-center justify-center gap-3 text-white border border-white/10 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              <span className="text-xs uppercase tracking-widest">Email</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>

        <div className="relative w-[450px] h-[500px] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out shrink-0 bg-zinc-900 rounded-2xl">
          <img
            src={me}
            alt="Ibeneme Ikenna"
            className="w-full h-full object-cover rounded-2xl opacity-80"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
