import React, { useRef } from "react";
import ReactCountryFlag from "react-country-flag";
import { Bracket, VelocityMarquee } from "../components/ui";
import { SITE } from "../data/site";
import { useMotion } from "../hooks/useMotion";

const Row: React.FC<{ reverse?: boolean; outline?: boolean }> = ({ reverse, outline }) => {
  const items = reverse ? [...SITE.countries].reverse() : SITE.countries;
  return (
    <VelocityMarquee reverse={reverse} duration={38}>
      {items.map(({ code, name }) => (
        <span key={code} className="flex shrink-0 items-center gap-5 pr-14">
          <span className="h-[34px] w-[46px] shrink-0 overflow-hidden rounded-[6px]">
            <ReactCountryFlag countryCode={code} svg style={{ width: 46, height: 34, display: "block", objectFit: "cover" }} title={name} />
          </span>
          <span
            className="text-[clamp(32px,5vw,64px)] font-semibold tracking-[-0.03em]"
            style={outline ? { color: "transparent", WebkitTextStroke: "1px #fff" } : undefined}
          >
            {name}
          </span>
        </span>
      ))}
    </VelocityMarquee>
  );
};

const Countries: React.FC = () => {
  const root = useRef<HTMLElement>(null);
  useMotion(root);

  return (
    <section ref={root} className="overflow-hidden bg-ink py-20 md:py-28">
      <div className="container-x mb-14 flex flex-col items-center gap-6 text-center">
        <Bracket>Across borders</Bracket>
        <h2 data-split className="t-heading-lg max-w-[12ch]">
          Building for seven countries.
        </h2>
        <p data-reveal className="t-body-lg max-w-[40ch] text-muted">
          Shipping products for teams and users across Africa, Europe and North America.
        </p>
      </div>
      <div className="mask-x flex -rotate-2 flex-col gap-6">
        <Row />
        <Row reverse outline />
      </div>
    </section>
  );
};

export default Countries;
