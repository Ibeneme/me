import React, { useEffect, useRef } from "react";
import { gsap, isFinePointer, prefersReducedMotion } from "../../lib/gsap";

/**
 * Blend-mode cursor + magnetic controls.
 *  - Any link/button grows the ring.
 *  - `data-cursor="View"` swaps the ring for a labelled bubble.
 *  - `data-magnetic` pulls the element toward the pointer.
 */
const Cursor: React.FC = () => {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isFinePointer() || prefersReducedMotion()) return;
    document.body.classList.add("has-cursor");

    const dx = gsap.quickTo(dot.current, "x", { duration: 0.1, ease: "power3" });
    const dy = gsap.quickTo(dot.current, "y", { duration: 0.1, ease: "power3" });
    const rx = gsap.quickTo(ring.current, "x", { duration: 0.5, ease: "power3" });
    const ry = gsap.quickTo(ring.current, "y", { duration: 0.5, ease: "power3" });
    const lx = gsap.quickTo(label.current, "x", { duration: 0.5, ease: "power3" });
    const ly = gsap.quickTo(label.current, "y", { duration: 0.5, ease: "power3" });

    let magnet: HTMLElement | null = null;
    let mode: "idle" | "hover" | "label" = "idle";

    const setMode = (next: typeof mode, text = "") => {
      if (next === mode && next !== "label") return;
      mode = next;
      if (label.current) label.current.textContent = text;
      gsap.to(ring.current, {
        scale: next === "label" ? 2.6 : next === "hover" ? 1.8 : 1,
        duration: 0.5,
        ease: "expo.out",
      });
      gsap.to(label.current, { opacity: next === "label" ? 1 : 0, duration: 0.2 });
      gsap.to(dot.current, { scale: next === "idle" ? 1 : 0, duration: 0.3 });
    };

    let shown = false;
    gsap.set([dot.current, ring.current], { opacity: 0 });
    const move = (e: PointerEvent) => {
      if (!shown) {
        shown = true;
        gsap.set([dot.current, ring.current, label.current], { x: e.clientX, y: e.clientY });
        gsap.to([dot.current, ring.current], { opacity: 1, duration: 0.3 });
      }
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
      lx(e.clientX);
      ly(e.clientY);

      const target = e.target as Element | null;
      const labelled = target?.closest<HTMLElement>("[data-cursor]");
      if (labelled) setMode("label", labelled.dataset.cursor);
      else if (target?.closest("a, button")) setMode("hover");
      else setMode("idle");

      const m = target?.closest<HTMLElement>("[data-magnetic]") ?? null;
      if (m !== magnet) {
        if (magnet) gsap.to(magnet, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.35)" });
        magnet = m;
      }
      if (magnet) {
        const r = magnet.getBoundingClientRect();
        gsap.to(magnet, {
          x: (e.clientX - (r.left + r.width / 2)) * 0.35,
          y: (e.clientY - (r.top + r.height / 2)) * 0.35,
          duration: 0.4,
          ease: "power3.out",
        });
      }
    };

    const down = () => gsap.to(ring.current, { scale: "*=0.75", duration: 0.15 });
    const up = () => setMode(mode, label.current?.textContent ?? "");
    const leave = () => gsap.to([dot.current, ring.current], { opacity: 0, duration: 0.2 });
    const enter = () => gsap.to([dot.current, ring.current], { opacity: 1, duration: 0.2 });

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.documentElement.addEventListener("pointerleave", leave);
    document.documentElement.addEventListener("pointerenter", enter);
    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.documentElement.removeEventListener("pointerleave", leave);
      document.documentElement.removeEventListener("pointerenter", enter);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[200] hidden pointer-fine:block">
      <div
        ref={ring}
        className="fixed left-0 top-0 -ml-5 -mt-5 grid h-10 w-10 place-items-center rounded-full bg-white mix-blend-difference"
      />
      <span
        ref={label}
        className="fixed left-0 top-0 -ml-12 -mt-2 w-24 text-center text-[12px] font-semibold uppercase leading-4 tracking-wider text-black opacity-0"
      />
      <div ref={dot} className="fixed left-0 top-0 -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-white mix-blend-difference" />
    </div>
  );
};

export default Cursor;
