import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DISCIPLINES } from "../lib/disciplines";
import { gsap, prefersReducedMotion } from "../lib/gsap";

const DIGITS: [string, string][] = [
  ["4", DISCIPLINES.mobile.color],
  ["0", DISCIPLINES.web.color],
  ["4", DISCIPLINES.backend.color],
];

/** The digits fall from the sky, bounce, and wobble when hovered. */
const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const digits = gsap.utils.toArray<HTMLElement>(".nf-digit");
      gsap.set(digits, { y: "-120vh", rotate: () => gsap.utils.random(-90, 90) });
      gsap.to(digits, { y: 0, rotate: (i) => [-8, 6, -4][i], duration: 1.6, ease: "bounce.out", stagger: 0.18, delay: 0.35 });
      digits.forEach((d) =>
        d.addEventListener("pointerenter", () =>
          gsap.fromTo(d, { rotate: "+=0" }, { rotate: "+=25", duration: 1, ease: "elastic.out(1,0.3)", yoyo: true, repeat: 1 })
        )
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-ink px-4 pt-32 pb-20 sm:px-8">
      <span className="bracket mb-6">Error</span>
      <h1 aria-label="404" className="flex text-[clamp(140px,34vw,460px)] font-black leading-[0.85] tracking-[-0.06em]">
        {DIGITS.map(([d, c], i) => (
          <span key={i} aria-hidden className="nf-digit inline-block" style={{ color: c }}>
            {d}
          </span>
        ))}
      </h1>
      <p className="t-heading-sm mt-6">
        Lost in space<span className="text-brand">.</span>
      </p>
      <p className="t-body-lg mt-4 max-w-[36ch] text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/" data-magnetic className="pill pill-cta">
          Back home
        </Link>
        <button onClick={() => navigate(-1)} data-magnetic className="pill">
          Go back
        </button>
      </div>
    </main>
  );
};

export default NotFoundPage;
