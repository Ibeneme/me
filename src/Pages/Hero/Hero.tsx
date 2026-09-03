import React from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import me from "../../assets/images/ikenna.png";

/**
 * Fonts used: Space Grotesk (display), Inter (body), JetBrains Mono (labels).
 * Add these to your index.html <head> if not already present:
 *
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
 */

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-[100dvh] pt-[48px] overflow-hidden bg-[#0A0314] text-[#ECEFF3]"
      style={{
        // @ts-expect-error -- custom CSS vars
        "--font-display": "'Space Grotesk', sans-serif",
        "--font-mono": "'JetBrains Mono', monospace",
      }}
    >
      {/* decorative grid */}
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
        {/* Left: content */}
        <div className="max-w-4xl lg:pr-14">
          <p
            className="mb-6 flex font-bold items-center gap-2 text-[15px] tracking-wide text-[#FFD000]"
            style={{}}
          >
            Software developer &amp; ML Engineer
          </p>

          <h1
            className="mb-6 overflow-hidden text-[clamp(2.6rem,6vw,4.2rem)] font-semibold leading-[1.02] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="block animate-reveal-up [animation-delay:120ms]">
              Ibeneme Ikenna
            </span>
          </h1>

          <p className="mb-10 max-w-[38ch] text-[15px] leading-relaxed text-[#8891A0] sm:text-base">
            I build high-performance software and intelligent systems —
            interfaces that feel effortless, and models that hold up in
            production.
          </p>

          <div className="mb-12 flex flex-wrap items-center gap-3">
            <a
              href="mailto:ikennaibenemee@gmail.com"
              className="group inline-flex items-center gap-2 rounded-[48px] bg-[#FFD000] px-6 py-3 text-sm font-medium text-[#08110F] transition-colors duration-200 hover:bg-[#6FE1D6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0314]"
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
              className="inline-flex items-center gap-2 rounded-[48px] border border-[#232830] px-6 py-3 text-sm font-medium text-[#ECEFF3] transition-colors duration-200 hover:border-[#FFD000]/50 hover:text-[#FFD000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0314]"
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

        {/* Right: framed portrait */}
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

            {/* main image container */}
            <div className="relative h-full w-full overflow-hidden rounded-[clamp(28px,7vw,52px)] border border-[#FFD000]/40 bg-[#0F0A1A] shadow-[0_0_0_1px_rgba(255,208,0,0.08),0_24px_48px_-12px_rgba(0,0,0,0.55)]">
              <img
                src={me}
                alt="Ibeneme Ikenna"
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.03]"
                loading="eager"
                fetchPriority="high"
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
      `}</style>
    </section>
  );
};

export default Hero;
