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

/* Soft 3D organic shape, lit from within via layered gradients — never a drop shadow */
export const Blob: React.FC<{
  d: Discipline;
  shape?: "pill" | "dome" | "liquid" | "orb";
  className?: string;
  rotate?: number;
  float?: boolean;
  parallax?: number;
}> = ({ d, shape = "liquid", className = "", rotate = 0, float = true, parallax }) => {
  const { from, to } = DISCIPLINES[d];
  const blob = (
    <div
      aria-hidden
      data-float={float ? "" : undefined}
      className={`blob blob-shape-${shape} ${parallax === undefined ? className : "inset-0"}`}
      style={{
        background: `radial-gradient(circle at 30% 22%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 28%),
          radial-gradient(circle at 75% 85%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 55%),
          linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
        rotate: `${rotate}deg`,
      }}
    />
  );
  if (parallax === undefined) return blob;
  return (
    <div aria-hidden data-parallax={parallax} className={`pointer-events-none absolute ${className}`}>
      {blob}
    </div>
  );
};

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
