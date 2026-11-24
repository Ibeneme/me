import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { DISCIPLINES, Discipline, prefersReducedMotion } from "./Components/ui/design";

interface LoadingScreenProps {
  onComplete?: () => void;
  minDisplayTime?: number;
}

const words: Discipline[] = ["mobile", "web", "backend", "ai"];

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete, minDisplayTime = 3000 }) => {
  const root = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const total = minDisplayTime / 1000;
    const counter = { v: 0 };

    const ctx = gsap.context(() => {
      const reduced = prefersReducedMotion();
      const tl = gsap.timeline({
        onComplete: () => {
          setDone(true);
          onComplete?.();
        },
      });

      tl.to(counter, {
        v: 100,
        duration: total - 0.6,
        ease: "power2.inOut",
        onUpdate: () => setProgress(Math.round(counter.v)),
      });

      if (!reduced) {
        tl.from(".ld-name > span", { yPercent: 110, duration: 0.9, ease: "power4.out" }, 0)
          .from(".ld-word", { opacity: 0, y: 20, stagger: 0.18, duration: 0.5, ease: "power3.out" }, 0.3)
          .to(el, { yPercent: -100, duration: 0.6, ease: "power4.inOut" });
      } else {
        tl.to(el, { opacity: 0, duration: 0.3 });
      }
    }, root);

    return () => ctx.revert();
  }, [minDisplayTime, onComplete]);

  if (done) return null;

  return (
    <div
      ref={root}
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink px-4 py-8 sm:px-8"
    >
      <div className="flex items-center justify-between">
        <span className="bracket">ibeneme.com</span>
        <span className="t-caption text-muted">Portfolio — 2026</span>
      </div>

      <div>
        <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2">
          {words.map((d) => (
            <span key={d} className="ld-word text-[19px] md:text-[24px]" style={{ color: DISCIPLINES[d].color }}>
              {DISCIPLINES[d].label}
            </span>
          ))}
        </div>
        <h1 className="ld-name t-display overflow-hidden pb-[0.04em] text-cream">
          <span className="block">
            Ibeneme<span className="brand-text">.</span>
          </span>
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="h-px w-full bg-line">
          <div className="h-px" style={{ width: `${progress}%`, background: "var(--brand-gradient)" }} />
        </div>
        <div className="flex justify-between t-caption text-muted">
          <span>Loading</span>
          <span className="tabular-nums text-cream">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
