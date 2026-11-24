import React, { memo, useRef } from "react";
import ReactCountryFlag from "react-country-flag";
import { Bracket, useMotion } from "../../Components/ui/design";

const flags = [
  { code: "NG", name: "Nigeria" },
  { code: "CA", name: "Canada" },
  { code: "US", name: "United States" },
  { code: "GH", name: "Ghana" },
  { code: "KE", name: "Kenya" },
  { code: "NL", name: "Netherlands" },
  { code: "GB", name: "United Kingdom" },
];

const MarqueeRow = memo(({ items, reverse }: { items: typeof flags; reverse?: boolean }) => (
  <div className="overflow-hidden">
    <div className={`flex w-max items-center gap-12 md:gap-16 ${reverse ? "marquee-rev" : "marquee"}`}>
      {[...items, ...items, ...items, ...items].map(({ code, name }, i) => (
        <div key={`${code}-${i}`} className="flex shrink-0 items-center gap-3">
          <span className="h-[22px] w-[30px] overflow-hidden rounded-[4px] grayscale-[35%]">
            <ReactCountryFlag countryCode={code} svg style={{ width: 30, height: 22, display: "block" }} title={name} />
          </span>
          <span className="text-[19px] text-cream">{name}</span>
        </div>
      ))}
    </div>
  </div>
));

const FlagsRow: React.FC = () => {
  const root = useRef<HTMLElement>(null);
  useMotion(root);

  return (
    <section ref={root} className="bg-ink py-20 md:py-28">
      <div className="container-x mb-14 flex flex-col items-center gap-6 text-center">
        <Bracket>Across borders</Bracket>
        <h2 data-reveal className="t-heading max-w-[14ch] text-cream">
          Building for seven countries.
        </h2>
        <p data-reveal className="t-body-lg max-w-[40ch] text-muted">
          Shipping products for teams and users across Africa, Europe and North America.
        </p>
      </div>
      <div className="mask-x space-y-8">
        <MarqueeRow items={flags} />
        <MarqueeRow items={[...flags].reverse()} reverse />
      </div>
    </section>
  );
};

export default memo(FlagsRow);
