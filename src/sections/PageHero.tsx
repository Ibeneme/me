import React, { useEffect, useRef } from "react";
import { Blob } from "../components/ui";
import { Discipline } from "../lib/disciplines";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import { onReady } from "../lib/ready";

/** Edge-bleeding page title for inner pages — letters drop in like dominoes. */
const PageHero: React.FC<{ title: string; eyebrow: string; accent?: Discipline }> = ({ title, eyebrow, accent = "web" }) => {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    let off = () => {};
    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray<HTMLElement>(".ph-char");
      gsap.set(chars, { yPercent: -130, rotate: -30, opacity: 0 });
      gsap.set([".ph-eyebrow", ".ph-blob"], { opacity: 0 });
      off = onReady(() => {
        gsap
          .timeline()
          .to(chars, { yPercent: 0, rotate: 0, opacity: 1, duration: 1.2, ease: "bounce.out", stagger: 0.05 })
          .to(".ph-eyebrow", { opacity: 1, duration: 0.6 }, 0.3)
          .fromTo(".ph-blob", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.4, ease: "elastic.out(1,0.5)" }, 0.5);
      });
      gsap.to(chars, {
        yPercent: (i) => (i % 2 ? -40 : 40),
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);
    return () => {
      off();
      ctx.revert();
    };
  }, [title]);

  return (
    <section ref={root} className="relative overflow-hidden bg-ink px-4 pt-36 pb-12 sm:px-8 md:pt-44 md:pb-16">
      <div className="ph-blob absolute right-[6%] top-[22%] h-[100px] w-[100px] md:h-[200px] md:w-[200px]">
        <Blob d={accent} shape="liquid" className="inset-0" />
      </div>
      <span className="ph-eyebrow bracket mb-6 block">{eyebrow}</span>
      <h1 aria-label={title} className="t-display relative whitespace-nowrap">
        {title.split("").map((c, i) => (
          <span key={i} aria-hidden className="ph-char inline-block">
            {c === " " ? " " : c}
          </span>
        ))}
        <span aria-hidden className="ph-char inline-block text-brand">.</span>
      </h1>
    </section>
  );
};

export default PageHero;
