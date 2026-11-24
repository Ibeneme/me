import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { DISCIPLINES } from "../../lib/disciplines";
import { gsap, prefersReducedMotion, ScrollTrigger } from "../../lib/gsap";

const bars = [DISCIPLINES.brand.color, DISCIPLINES.mobile.color, DISCIPLINES.web.color, DISCIPLINES.backend.color, DISCIPLINES.ai.color];

/**
 * On every route change: jump to top, then five discipline-coloured bars
 * wipe up off the screen to reveal the new page.
 */
const PageTransition: React.FC = () => {
  const { pathname } = useLocation();
  const root = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 400);
    if (first.current) {
      first.current = false;
      return () => clearTimeout(t);
    }
    if (!root.current || prefersReducedMotion()) return () => clearTimeout(t);

    const els = root.current.children;
    const tl = gsap
      .timeline()
      .set(root.current, { autoAlpha: 1 })
      .set(els, { yPercent: 0 })
      .to(els, { yPercent: -100, duration: 0.9, ease: "expo.inOut", stagger: 0.06 })
      .set(root.current, { autoAlpha: 0 });
    return () => {
      clearTimeout(t);
      tl.progress(1).kill();
    };
  }, [pathname]);

  return (
    <div ref={root} aria-hidden className="pointer-events-none invisible fixed inset-0 z-[150] flex">
      {bars.map((c) => (
        <div key={c} className="h-full flex-1" style={{ background: c }} />
      ))}
    </div>
  );
};

export default PageTransition;
