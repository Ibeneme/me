import React, { useEffect, useRef, useState } from "react";
import { DISCIPLINES, Discipline } from "../../lib/disciplines";
import { gsap, prefersReducedMotion } from "../../lib/gsap";
import { markReady } from "../../lib/ready";

const NAME = "Ibeneme".split("");
const WORDS: Discipline[] = ["mobile", "web", "backend", "ai"];
const COLORS = WORDS.map((d) => DISCIPLINES[d].color);

/**
 * Letters scatter in from random points, a counter runs to 100,
 * then the whole screen collapses into a circle to reveal the site.
 */
const LoadingScreen: React.FC<{ duration?: number }> = ({ duration = 2.8 }) => {
  const root = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    document.body.style.overflow = "hidden";
    const finish = () => {
      document.body.style.overflow = "";
      setDone(true);
      markReady();
    };

    if (prefersReducedMotion()) {
      const t = setTimeout(finish, 600);
      return () => clearTimeout(t);
    }

    const counter = { v: 0 };
    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray<HTMLElement>(".ld-char");
      gsap
        .timeline({ onComplete: finish })
        .from(chars, {
          x: () => gsap.utils.random(-window.innerWidth / 2, window.innerWidth / 2),
          y: () => gsap.utils.random(-window.innerHeight / 2, window.innerHeight / 2),
          rotate: () => gsap.utils.random(-180, 180),
          scale: () => gsap.utils.random(0.2, 2.5),
          opacity: 0,
          duration: 1.3,
          ease: "expo.out",
          stagger: 0.05,
        })
        .to(chars, { color: (i) => COLORS[i % COLORS.length], duration: 0.2, stagger: 0.04 }, 0.6)
        .to(chars, { color: "#fff", duration: 0.3, stagger: 0.04 }, 1.2)
        .to(counter, { v: 100, duration: duration - 0.8, ease: "power2.inOut", onUpdate: () => setCount(Math.round(counter.v)) }, 0)
        .to(".ld-word", { yPercent: (-100 * (WORDS.length - 1)) / WORDS.length, duration: duration - 1, ease: "steps(" + (WORDS.length - 1) + ")" }, 0.2)
        .to(chars, { yPercent: -120, rotate: 8, duration: 0.6, ease: "expo.in", stagger: 0.03 }, duration - 0.6)
        .to(el, { clipPath: "circle(0% at 50% 50%)", duration: 0.9, ease: "expo.inOut" }, duration - 0.2);
    }, root);
    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [duration]);

  if (done) return null;

  return (
    <div
      ref={root}
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-[180] flex flex-col justify-between bg-ink px-4 py-8 sm:px-8"
      style={{ clipPath: "circle(150% at 50% 50%)" }}
    >
      <div className="flex items-center justify-between">
        <span className="bracket">ibeneme.com</span>
        <span className="t-caption text-muted">Portfolio — {new Date().getFullYear()}</span>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="h-[28px] overflow-hidden text-[22px]">
          <div className="ld-word flex flex-col">
            {WORDS.map((d) => (
              <span key={d} className="h-[28px] text-center leading-[28px]" style={{ color: DISCIPLINES[d].color }}>
                {DISCIPLINES[d].label}
              </span>
            ))}
          </div>
        </div>
        <h1 className="t-display flex overflow-visible">
          {NAME.map((c, i) => (
            <span key={i} className="ld-char inline-block">
              {c}
            </span>
          ))}
          <span className="ld-char inline-block text-brand">.</span>
        </h1>
      </div>

      <div className="flex items-end justify-between">
        <span className="t-caption text-muted">Mobile &amp; Frontend Engineer</span>
        <span className="text-[56px] font-semibold leading-none tabular-nums md:text-[88px]">{count}</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
