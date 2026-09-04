import React from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import meVideo from "../../assets/videos/me.mp4";

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-[100dvh] pt-[48px] overflow-hidden bg-[#0A0314] text-[#ECEFF3]"
      style={{
        "--font-display": "'Space Grotesk', sans-serif",
        "--font-mono": "'JetBrains Mono', monospace",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#ECEFF3 1px, transparent 1px), linear-gradient(90deg, #ECEFF3 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="relative mx-auto grid min-h-[100dvh] max-w-6xl grid-cols-1 gap-14 px-6 pt-28 pb-16 lg:grid-cols-[1.15fr_auto_0.85fr] lg:items-center lg:gap-0 lg:px-10 lg:pt-16">
        <div className="max-w-4xl lg:pr-14">
          <p
            className="mb-6 flex uppercase font-bold items-center gap-2 text-[17px] tracking-wide text-[#FFD000]"
            style={{}}
          >
            Software developer &amp; AI Engineer
          </p>

          <h1 className="mb-6 overflow-hidden text-[clamp(2.6rem,6vw,4.2rem)] font-semibold leading-[1.02] tracking-tight">
            <span
              style={{ fontFamily: '"Parkinsans", sans-serif' }}
              className="block animate-reveal-up [animation-delay:120ms]"
            >
              Ibeneme Ikenna
            </span>
          </h1>

          <p className="mb-10 max-w-[38ch] text-[15px] leading-relaxed text-[#8891A0] sm:text-base">
            I build high-performance{" "}
            <span style={{ color: "#ffd000" }}>software</span> and intelligent{" "}
            <span style={{ color: "#ffd000" }}>systems</span> that feel
            effortless, and ML models that hold up in production.
          </p>

          <div className="mb-12  flex flex-wrap items-center gap-3">
            <a
              href="mailto:ikennaibenemee@gmail.com"
              className="group inline-flex items-center gap-2 rounded-[48px] bg-[#FFD000]  px-6 py-3 text-sm font-bold  text-[#08110F] transition-colors duration-200 hover:bg-[#6FE1D6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0314]"
            >
              Email me
              <ArrowUpRight
                size={15}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="https://wa.me/2348120710198"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message me on WhatsApp (opens in a new tab)"
              className="inline-flex items-center gap-2 rounded-[48px] border border-[#232830] px-6 py-3 text-sm font-bold  text-[#ECEFF3] transition-colors duration-200 hover:border-[#FFD000]/50 hover:text-[#FFD000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0314]"
            >
              <MessageCircle size={15} aria-hidden="true" />
              WhatsApp
            </a>
          </div>

          <div
            role="status"
            className="flex items-center gap-2.5 text-[13px] tracking-wide text-[#8891A0]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFD000] opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FFD000]" />
            </span>
            <span>
              status —{" "}
              <span className="text-[#ECEFF3]">available for new work</span>
            </span>
          </div>
        </div>

        {/* Divider, desktop only */}
        <div
          aria-hidden="true"
          className="hidden h-full w-px bg-gradient-to-b from-transparent via-[#1A1F26] to-transparent lg:block"
        />

        {/* Right: framed portrait video */}
        <div className="relative mx-auto w-full max-w-[340px] lg:mx-0 lg:ml-14 lg:max-w-none">
          {/* outer frame */}
          <div className="relative aspect-[4.5/5] w-full">
            {/* accent corner marks */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-3 -bottom-3 h-8 w-8 border-r-2 border-b-2 border-[#FFD000]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-3 -left-3 h-8 w-8 border-t-2 border-l-2 border-[#FFD000]"
            />

            {/* main video container */}
            <div className="relative h-full w-full overflow-hidden rounded-[clamp(28px,7vw,52px)] border border-[#FFD000]/40 bg-[#0F0A1A] shadow-[0_0_0_1px_rgba(255,208,0,0.08),0_24px_48px_-12px_rgba(0,0,0,0.55)]">
              <video
                src={meVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label="Ibeneme Ikenna"
                className="h-full grayscale w-full object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.03]"
              />

              {/* bottom gradient fade */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0A0314]/80 to-transparent"
              />
            </div>
          </div>

          <p
            className="mt-5 flex items-center gap-2 text-[12px] tracking-wide text-[#FFD000]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="text-[#FFD000]">↳</span>
            based remotely — open to relocation
          </p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="relative z-10 -rotate-1 -translate-y-4 border-y-2 border-black bg-[#D4FF3F] py-6"
      >
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap text-xl font-black uppercase tracking-tight text-[#0B0014]">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8">
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
        @keyframes reveal-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-reveal-up {
          animation: reveal-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-reveal-up { animation: none; }
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
