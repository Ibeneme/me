import { RefObject, useEffect } from "react";
import { gsap, prefersReducedMotion } from "../../lib/gsap";

/**
 * Builds a looping explainer timeline scoped to an SVG and only plays it
 * while it's actually visible (IntersectionObserver also works inside the
 * pinned horizontal scroller). With reduced motion the static drawing shows.
 */
export const useExplainer = (
  ref: RefObject<SVGSVGElement | null>,
  build: (tl: gsap.core.Timeline, q: (sel: string) => Element[]) => void
) => {
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    let tl: gsap.core.Timeline | undefined;
    const ctx = gsap.context(() => {
      tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6, paused: true, defaults: { ease: "power3.out" } });
      build(tl, gsap.utils.selector(el));
    }, el);
    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? tl?.play() : tl?.pause()), {
      threshold: 0.25,
    });
    io.observe(el);
    return () => {
      io.disconnect();
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
