import actionVideo from "../../assets/videos/actions.mp4";
import React, { memo, useEffect, useRef } from "react";
import ReactCountryFlag from "react-country-flag";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const territories = [
  { code: "NG", name: "Nigeria", coords: "09.08°N 07.40°E" },
  { code: "CA", name: "Canada", coords: "45.42°N 75.70°W" },
  { code: "US", name: "United States", coords: "38.90°N 77.04°W" },
  { code: "DE", name: "Germany", coords: "52.52°N 13.40°E" },
  { code: "GB", name: "United Kingdom", coords: "51.51°N 00.13°W" },
  { code: "JP", name: "Japan", coords: "35.67°N 139.65°E" },
  { code: "GH", name: "Ghana", coords: "05.60°N 00.19°W" },
  { code: "KE", name: "Kenya", coords: "01.29°S 36.82°E" },
  { code: "NL", name: "Netherlands", coords: "52.37°N 04.90°E" },
  { code: "FR", name: "France", coords: "48.85°N 02.35°E" },
  { code: "AU", name: "Australia", coords: "33.86°S 151.20°E" },
  { code: "BR", name: "Brazil", coords: "15.78°S 47.92°W" },
];

// Vertically-scrolling manifest panel — one continuous, deliberate motion
const ManifestPanel = memo(() => {
  const doubled = [...territories, ...territories];

  return (
    <div className="relative w-full md:w-[450px] shrink-0">
      <div className="rounded-sm border border-white/10 bg-[#120620]/80 backdrop-blur-sm">
        {/* Panel header */}
        <div className="flex items-baseline justify-between px-6 py-4 border-b border-white/10">
          <span className="text-[13px] font-semibold text-zinc-200 tracking-wide">
            Global reach
          </span>
          <span className="font-[var(--font-mono)] text-[12px] font-bold text-[#FFD000]">
            12
          </span>
        </div>

        {/* Scrolling manifest */}
        <div className="relative h-[320px] overflow-hidden manifest-mask">
          <div className="absolute inset-x-0 top-0 animate-manifest-scroll">
            {doubled.map(({ code, name, coords }, i) => (
              <div
                key={`${code}-${i}`}
                className="flex items-center gap-4 px-6 py-4 border-b border-white/[0.06]"
              >
                <div className="w-[28px] h-[20px] rounded-[2px] overflow-hidden shrink-0">
                  <ReactCountryFlag
                    countryCode={code}
                    svg
                    style={{ width: "28px", height: "20px" }}
                    title={name}
                  />
                </div>
                {/* Bolder country names */}
                <span className="text-[14px] font-semibold text-white flex-1">
                  {name}
                </span>
                {/* Bolder coordinates/items */}
                <span className="font-[var(--font-mono)] text-[11px] font-medium text-zinc-400 whitespace-nowrap">
                  {coords}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

const FlagsRow: React.FC = () => {
  const videoSectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal: scales down slightly, fades in, and settles into its
      // final (darker, sharper) grayscale grade as it enters the viewport
      gsap.fromTo(
        videoRef.current,
        {
          scale: 1.12,
          opacity: 0,
          filter: "grayscale(0.71) brightness(0.62) contrast(1.05)",
        },
        {
          scale: 1,
          opacity: 1,
          filter: "grayscale(0.71) brightness(0.62) contrast(1.05)",
          ease: "none",
          scrollTrigger: {
            trigger: videoSectionRef.current,
            start: "top 90%",
            end: "top 25%",
            scrub: 1,
          },
        }
      );

      // Subtle parallax while it's in frame
      gsap.to(videoRef.current, {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: videoSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, videoSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      style={{
        // @ts-expect-error -- custom CSS vars
        "--font-display": "'Space Grotesk', sans-serif",
        "--font-mono": "'JetBrains Mono', monospace",
      }}
      className="relative w-full bg-[#0A0314] pt-20 md:pt-28 overflow-hidden border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Left content stays left, right panel stays right */}
        <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-16 items-center">
          {/* Copy block — left aligned */}
          <div className="w-full max-w-md">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Building across{" "}
              <span className="relative inline-block mt-4">
                <span
                  className="absolute -inset-x-2 -inset-y-1 border border-dashed rounded-sm -rotate-2"
                  style={{ borderColor: "#FFD000" }}
                  aria-hidden="true"
                />
                <span className="relative text-[#ffd000]">Borders.</span>
              </span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed">
              Twelve countries, one developer shipping high-impact,
              production-grade systems for global clients, regardless of time
              zone.
            </p>
          </div>

          {/* Manifest panel — right aligned */}
          <ManifestPanel />
        </div>
      </div>

      {/* Full-width bottom section with autoplay video, zero max-width constraints */}
      <div
        ref={videoSectionRef}
        className="w-full mt-20 md:mt-28 overflow-hidden max-h-[550px]"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto block object-cover"
          style={{
            filter: " brightness(0.22) contrast(1.05)",
            willChange: "transform, filter, opacity",
          }}
        >
          <source src={actionVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <style>{`
        .manifest-mask {
          mask-image: linear-gradient(to bottom, transparent, black 12%, black 88%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 12%, black 88%, transparent);
        }
        @keyframes manifest-scroll {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        .animate-manifest-scroll {
          animation: manifest-scroll 32s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-manifest-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default memo(FlagsRow);
