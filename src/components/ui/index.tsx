import React, { useEffect, useRef } from "react";
import { DISCIPLINES, Discipline } from "../../lib/disciplines";
import { gsap, prefersReducedMotion, ScrollTrigger } from "../../lib/gsap";

/* { Curly-bracket eyebrow } — the text decodes in on scroll */
export const Bracket: React.FC<{ children: string; className?: string }> = ({ children, className = "" }) => (
  <span className={`bracket ${className}`}>
    <span data-scramble>{children}</span>
  </span>
);

/* Single-word discipline label in its own hue */
export const CategoryLabel: React.FC<{ d: Discipline; className?: string }> = ({ d, className = "" }) => (
  <span className={`text-[19px] font-normal md:text-[24px] ${className}`} style={{ color: DISCIPLINES[d].color }}>
    {DISCIPLINES[d].label}
  </span>
);

/**
 * Infinite marquee whose speed and skew react to scroll velocity —
 * scroll hard and it whips past, reverse and it runs backwards.
 */
export const VelocityMarquee: React.FC<{ children: React.ReactNode; reverse?: boolean; duration?: number }> = ({
  children,
  reverse = false,
  duration = 30,
}) => {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el || prefersReducedMotion()) return;
    const loop = gsap.fromTo(
      el,
      { xPercent: reverse ? -50 : 0 },
      { xPercent: reverse ? 0 : -50, duration, ease: "none", repeat: -1 }
    );
    // headroom so the loop can also run backwards indefinitely
    loop.totalTime(duration * 1000);

    const skew = gsap.quickTo(el, "skewX", { duration: 0.5, ease: "power3" });
    let speedTl: gsap.core.Timeline | null = null;
    const st = ScrollTrigger.create({
      onUpdate: (self) => {
        const v = self.getVelocity();
        const base = self.direction; // scrolling up flips the marquee
        const burst = base * (1 + gsap.utils.clamp(0, 8, Math.abs(v) / 250));
        speedTl?.kill();
        speedTl = gsap
          .timeline()
          .to(loop, { timeScale: burst, duration: 0.15, ease: "power2.out" })
          .to(loop, { timeScale: base, duration: 1.2, ease: "power2.out" });
        skew(gsap.utils.clamp(-10, 10, v / -250));
        gsap.delayedCall(0.15, () => skew(0));
      },
    });
    return () => {
      st.kill();
      speedTl?.kill();
      loop.kill();
    };
  }, [reverse, duration]);

  return (
    <div className="overflow-hidden">
      <div ref={track} className="flex w-max will-change-transform">
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
};

/* Text that rolls up to a duplicate of itself when its link is hovered */
export const RollText: React.FC<{ children: string; className?: string }> = ({ children, className = "" }) => (
  <span className={`roll ${className}`}>
    <span className="roll-inner">
      <span>{children}</span>
      <span aria-hidden>{children}</span>
    </span>
  </span>
);
