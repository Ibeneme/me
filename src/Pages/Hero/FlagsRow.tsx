import React from "react";
import ReactCountryFlag from "react-country-flag";

const flags = [
  { code: "NG", name: "Nigeria" },
  { code: "CA", name: "Canada" },
  { code: "US", name: "United States" },
  { code: "GH", name: "Ghana" },
  { code: "KE", name: "Kenya" },
  { code: "NL", name: "Netherlands" },
  { code: "GB", name: "United Kingdom" },
];

const flagsReversed = [...flags].reverse();

const MarqueeRow: React.FC<{
  items: typeof flags;
  direction: "left" | "right";
  speed: number;
}> = ({ items, direction, speed }) => {
  const doubled = [...items, ...items];
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex items-center gap-8 md:gap-16 w-max ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map(({ code, name }, i) => (
          <div
            key={`${code}-${i}`}
            className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-500 shrink-0"
          >
            <ReactCountryFlag
              countryCode={code}
              svg
              style={{ width: "32px", height: "20px" }} // Scaled down for mobile
              className="md:!w-[48px] md:!h-[32px] rounded-[2px]"
              title={name}
            />
            <span className="text-[12px] md:text-[14px] font-medium uppercase tracking-[0.2em] text-zinc-400">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const FlagsRow: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0C0D0E] py-16 md:py-24 overflow-hidden border-t border-zinc-900">
      <div className="relative z-10 max-w-4xl mx-auto px-6 mb-16 md:mb-20 text-center">
        <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight mb-6">
          Building across borders.
        </h2>
        <p className="text-zinc-500 text-sm md:text-base font-light max-w-sm mx-auto leading-relaxed">
          Operational reach across seven countries, delivering high-impact
          solutions from a unified stack.
        </p>
      </div>

      <div
        className="relative z-10 space-y-8 md:space-y-12"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <MarqueeRow items={flags} direction="left" speed={40} />
        <MarqueeRow items={flagsReversed} direction="right" speed={45} />
      </div>

      <style>{`
        @keyframes marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .animate-marquee-left { animation-name: marquee-left; animation-timing-function: linear; animation-iteration-count: infinite; }
        .animate-marquee-right { animation-name: marquee-right; animation-timing-function: linear; animation-iteration-count: infinite; }
      `}</style>
    </section>
  );
};

export default FlagsRow;
