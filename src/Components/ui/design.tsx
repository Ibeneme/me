import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────
   Discipline taxonomy — colour means category, never decoration.
   Brand = green · Mobile = pink · Web = blue · Backend = orange · AI = lilac
───────────────────────────────────────────── */
export type Discipline = "brand" | "mobile" | "web" | "backend" | "ai";

export const DISCIPLINES: Record<
  Discipline,
  { label: string; color: string; from: string; to: string }
> = {
  brand: { label: "Ibeneme", color: "#0ae448", from: "#0ae448", to: "#abff84" },
  mobile: { label: "Mobile", color: "#fec5fb", from: "#00bae2", to: "#fec5fb" },
  web: { label: "Web", color: "#00bae2", from: "#00bae2", to: "#abff84" },
  backend: { label: "Backend", color: "#ff8709", from: "#ff8709", to: "#ffc46b" },
  ai: { label: "AI", color: "#9d95ff", from: "#9d95ff", to: "#fec5fb" },
};

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* { Curly-bracket eyebrow } */
export const Bracket: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <span data-reveal className={`bracket ${className}`}>
    {children}
  </span>
);

/* Single-word discipline label in its own hue */
export const CategoryLabel: React.FC<{ d: Discipline; className?: string }> = ({
  d,
  className = "",
}) => (
  <span
    className={`text-[19px] md:text-[24px] font-normal ${className}`}
    style={{ color: DISCIPLINES[d].color }}
  >
    {DISCIPLINES[d].label}
  </span>
);

/* Soft 3D organic shape, lit from within via layered gradients */
export const Blob: React.FC<{
  d: Discipline;
  shape?: "pill" | "dome" | "liquid" | "orb";
  className?: string;
  style?: React.CSSProperties;
  rotate?: number;
}> = ({ d, shape = "liquid", className = "", style, rotate = 0 }) => {
  const { from, to } = DISCIPLINES[d];
  return (
    <div
      aria-hidden
      data-float
      className={`blob blob-shape-${shape} ${className}`}
      style={{
        background: `radial-gradient(circle at 30% 22%, rgba(255,252,225,0.75) 0%, rgba(255,252,225,0) 28%),
          radial-gradient(circle at 75% 85%, rgba(14,16,15,0.45) 0%, rgba(14,16,15,0) 55%),
          linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
    />
  );
};

/**
 * Scroll-driven reveals for any `[data-reveal]` descendant and gentle
 * floating for `[data-float]` shapes inside the given scope.
 */
export const useMotion = (scope: React.RefObject<HTMLElement | null>, deps: unknown[] = []) => {
  useEffect(() => {
    if (!scope.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-float]").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 ? 18 : -18,
          rotation: `+=${i % 2 ? 6 : -6}`,
          duration: 4 + (i % 3),
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }, scope);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
