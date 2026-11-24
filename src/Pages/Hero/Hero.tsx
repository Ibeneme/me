import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import { Blob, DISCIPLINES, Discipline, prefersReducedMotion, useMotion } from "../../Components/ui/design";

const marqueeWords: Discipline[] = ["mobile", "web", "backend", "ai"];
const marqueeCopy: Record<Discipline, string> = {
  brand: "Ibeneme",
  mobile: "React Native",
  web: "Frontend",
  backend: "Node.js",
  ai: "AI features",
};

const Hero: React.FC = () => {
  const root = useRef<HTMLElement>(null);
  useMotion(root);

  useEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .from(".hero-line > span", { yPercent: 110, duration: 1.1, stagger: 0.12 })
        .from(".hero-shape", { scale: 0.4, opacity: 0, duration: 1.2, stagger: 0.1, ease: "back.out(1.6)" }, "-=0.8")
        .from(".hero-fade", { y: 24, opacity: 0, duration: 0.8, stagger: 0.08 }, "-=0.9");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-ink">
      {/* Display headline — bleeds to the edge, shapes overlap the type */}
      <div className="relative px-4 pt-16 sm:px-8 md:pt-24">
        <Blob d="mobile" shape="pill" rotate={-28} className="hero-shape left-[46%] top-[6%] z-10 h-[90px] w-[200px] md:h-[150px] md:w-[340px]" />
        <Blob d="backend" shape="liquid" className="hero-shape right-[4%] top-[42%] z-10 h-[110px] w-[110px] md:h-[200px] md:w-[200px]" />
        <Blob d="brand" shape="orb" className="hero-shape left-[6%] top-[58%] z-0 h-[60px] w-[60px] md:h-[110px] md:w-[110px]" />

        <h1 className="t-display relative z-[5] text-cream">
          <span className="hero-line block overflow-hidden pb-[0.04em]">
            <span className="block">Ibeneme</span>
          </span>
          <span className="hero-line block overflow-hidden pb-[0.04em]">
            <span className="block">Ikenna<span className="brand-text">.</span></span>
          </span>
        </h1>
      </div>

      {/* Lower third: annotation, intro and CTAs */}
      <div className="container-x relative z-20 grid gap-10 pt-12 pb-20 md:grid-cols-[1fr_1fr] md:items-end md:pt-16 md:pb-28">
        <div className="hero-fade flex flex-col gap-5">
          <span className="bracket">Mobile &amp; Frontend Engineer</span>
          <p className="t-body-lg max-w-[34ch] text-cream">
            I build high-performance mobile apps and reactive web frontends that feel effortless — smooth 60fps
            motion on top of resilient architecture.
          </p>
        </div>

        <div className="hero-fade flex flex-col gap-6 md:items-end">
          <div className="flex flex-wrap gap-3">
            <a href="mailto:ikennaibenemee@gmail.com" className="pill pill-cta">
              Email me <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden />
            </a>
            <a
              href="https://wa.me/2348120710198"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message me on WhatsApp (opens in a new tab)"
              className="pill"
            >
              WhatsApp
            </a>
          </div>
          <p role="status" className="t-caption flex items-center gap-2 text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            based remotely — open to relocation
          </p>
        </div>
      </div>

      {/* Discipline marquee */}
      <div className="hairline" />
      <div aria-hidden className="mask-x overflow-hidden py-6">
        <div className="marquee flex w-max gap-12 whitespace-nowrap">
          {Array.from({ length: 4 }).flatMap((_, i) =>
            marqueeWords.map((d) => (
              <span key={`${i}-${d}`} className="flex items-center gap-12 t-sub">
                <span style={{ color: DISCIPLINES[d].color }}>{marqueeCopy[d]}</span>
                <span className="text-line">/</span>
              </span>
            ))
          )}
        </div>
      </div>
      <div className="hairline" />
    </section>
  );
};

export default Hero;
