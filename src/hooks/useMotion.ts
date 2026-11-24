import { RefObject, useEffect } from "react";
import { gsap, prefersReducedMotion, SplitText } from "../lib/gsap";

/**
 * Declarative scroll motion. Add data attributes to any element inside `scope`:
 *
 *  data-reveal            fade + rise when scrolled into view
 *  data-split             headline chars fly up, rotate and settle
 *  data-split="scrub"     words light up from grey to white as you scroll
 *  data-scramble          text decodes from random glyphs when it enters
 *  data-float             endless bob + drift (decorative shapes)
 *  data-parallax="0.3"    moves at a different speed while scrolling
 *  data-clip              image wipes open from the bottom with a zoom-out
 *  data-tilt              follows the pointer in 3D on hover
 */
export const useMotion = (scope: RefObject<HTMLElement | null>, deps: unknown[] = []) => {
  useEffect(() => {
    const root = scope.current;
    if (!root || prefersReducedMotion()) return;

    const cleanups: (() => void)[] = [];
    const splits: SplitText[] = [];

    const ctx = gsap.context(() => {
      const q = <T extends HTMLElement>(sel: string) => gsap.utils.toArray<T>(sel, root);

      q("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 92%", toggleActions: "play none none none" },
        });
      });

      q("[data-split]:not([data-split='scrub'])").forEach((el) => {
        splits.push(
          SplitText.create(el, {
            type: "lines,chars",
            mask: "lines",
            linesClass: "split-line",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.chars, {
                yPercent: 120,
                rotate: () => gsap.utils.random(-25, 25),
                opacity: 0,
                duration: 1.1,
                ease: "expo.out",
                stagger: { each: 0.025, from: "start" },
                scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
              }),
          })
        );
      });

      q("[data-split='scrub']").forEach((el) => {
        splits.push(
          SplitText.create(el, {
            type: "words",
            autoSplit: true,
            onSplit: (self) =>
              gsap.fromTo(
                self.words,
                { opacity: 0.15 },
                {
                  opacity: 1,
                  stagger: 0.08,
                  ease: "none",
                  scrollTrigger: { trigger: el, start: "top 85%", end: "bottom 45%", scrub: true },
                }
              ),
          })
        );
      });

      q("[data-scramble]").forEach((el) => {
        const text = el.textContent ?? "";
        gsap.to(el, {
          duration: 1.2,
          scrambleText: { text, chars: "!<>-_\\/[]{}—=+*^?#01", speed: 0.6 },
          scrollTrigger: { trigger: el, start: "top 95%", toggleActions: "play none none none" },
        });
      });

      q("[data-float]").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 ? 26 : -26,
          x: i % 3 ? 10 : -10,
          rotation: `+=${i % 2 ? 10 : -10}`,
          duration: 3.5 + (i % 3),
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      q("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.2");
        gsap.to(el, {
          yPercent: -100 * speed,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      q("[data-clip]").forEach((el) => {
        const img = el.querySelector("img, video");
        const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" } });
        tl.from(el, { clipPath: "inset(100% 0% 0% 0% round 8px)", duration: 1.3, ease: "expo.inOut" });
        if (img) tl.from(img, { scale: 1.4, duration: 1.6, ease: "expo.out" }, 0.2);
      });

      q("[data-tilt]").forEach((el) => {
        gsap.set(el, { transformPerspective: 900 });
        const rx = gsap.quickTo(el, "rotationX", { duration: 0.6, ease: "power3" });
        const ry = gsap.quickTo(el, "rotationY", { duration: 0.6, ease: "power3" });
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          ry(((e.clientX - r.left) / r.width - 0.5) * 12);
          rx(-((e.clientY - r.top) / r.height - 0.5) * 12);
        };
        const leave = () => {
          rx(0);
          ry(0);
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        });
      });
    }, root);

    return () => {
      cleanups.forEach((fn) => fn());
      splits.forEach((s) => s.revert());
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
