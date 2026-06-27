import React, { memo } from "react";
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

// Memoize the MarqueeRow to prevent unnecessary re-renders
const MarqueeRow = memo(
  ({
    items,
    direction,
    speed,
  }: {
    items: any[];
    direction: "left" | "right";
    speed: number;
  }) => {
    const doubled = [...items, ...items];
    return (
      <div className="relative w-full overflow-hidden">
        <div
          className={`flex items-center gap-8 md:gap-16 w-max ${
            direction === "left"
              ? "animate-marquee-left"
              : "animate-marquee-right"
          }`}
          style={{ animationDuration: `${speed}s`, willChange: "transform" }}
        >
          {doubled.map(({ code, name }, i) => (
            <div
              key={`${code}-${i}`}
              className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-500 shrink-0"
            >
              {/* Added a stable container for the flag to prevent layout jump */}
              <div className="w-[40px] h-[30px] rounded-[2px] overflow-hidden bg-zinc-900 flex items-center justify-center">
                <ReactCountryFlag
                  countryCode={code}
                  svg
                  style={{ width: "40px", height: "30px" }}
                  title={name}
                />
              </div>
              <span className="text-[14px] font-medium uppercase tracking-[0.2em] text-zinc-400">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

const FlagsRow: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0C0D0E] py-16 md:py-24 overflow-hidden border-t border-zinc-900">
      {/* Text Section */}
      <div className="max-w-4xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
          Building across borders.
        </h2>
        <p className="text-zinc-500 text-lg md:text-xl font-light max-w-xl mx-auto">
          Operational reach across seven countries, delivering high-impact
          solutions.
        </p>
      </div>

      {/* Marquee Section */}
      <div className="space-y-12 mask-gradient">
        <MarqueeRow items={flags} direction="left" speed={40} />
        <MarqueeRow items={[...flags].reverse()} direction="right" speed={45} />
      </div>

      <style>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        @keyframes marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .animate-marquee-left { animation-name: marquee-left; animation-timing-function: linear; animation-iteration-count: infinite; }
        .animate-marquee-right { animation-name: marquee-right; animation-timing-function: linear; animation-iteration-count: infinite; }
      `}</style>
    </section>
  );
};

export default memo(FlagsRow);
