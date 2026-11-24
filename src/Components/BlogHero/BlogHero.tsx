import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Blob, Discipline, prefersReducedMotion } from "../ui/design";

interface PageHeroProps {
  title: string;
  eyebrow?: string;
  accent?: Discipline;
}

/** Edge-bleeding page header used on inner pages. */
const PageHero: React.FC<PageHeroProps> = ({ title, eyebrow = "Ibeneme Ikenna", accent = "web" }) => {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .from(".ph-title > span", { yPercent: 110, duration: 1.1 })
        .from(".ph-eyebrow", { opacity: 0, y: 16, duration: 0.6 }, "-=0.7")
        .from(".blob", { scale: 0.4, opacity: 0, duration: 1, ease: "back.out(1.6)" }, "-=0.8");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-ink px-4 pt-20 pb-12 sm:px-8 md:pt-28 md:pb-16">
      <Blob d={accent} shape="liquid" className="right-[6%] top-[18%] h-[100px] w-[100px] md:h-[180px] md:w-[180px]" />
      <span className="ph-eyebrow bracket mb-6 block">{eyebrow}</span>
      <h1 className="ph-title t-display relative overflow-hidden pb-[0.04em] text-cream">
        <span className="block">{title}</span>
      </h1>
    </section>
  );
};

export default PageHero;
