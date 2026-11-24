import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import meVideo from "../assets/images/me.mp4";
import { Blob, VelocityMarquee } from "../components/ui";
import { SITE } from "../data/site";
import { DISCIPLINES, Discipline } from "../lib/disciplines";
import { gsap, isFinePointer, prefersReducedMotion } from "../lib/gsap";
import { onReady } from "../lib/ready";

const LINES = ["Ibeneme", "Ikenna"];
const MARQUEE: [Discipline, string][] = [
  ["mobile", "React Native"],
  ["web", "Frontend"],
  ["backend", "Node.js"],
  ["ai", "AI features"],
  ["brand", "60fps"],
];

const SpinBadge: React.FC = () => (
  <svg viewBox="0 0 200 200" className="spin-badge h-full w-full" aria-hidden>
    <defs>
      <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
    </defs>
    <text fill="#fff" fontSize="17" letterSpacing="5" fontFamily="Lufga">
      <textPath href="#badge-circle">AVAILABLE FOR WORK • OPEN TO RELOCATION • </textPath>
    </text>
  </svg>
);

const Hero: React.FC = () => {
  const root = useRef<HTMLElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const bubble = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;
    const cleanups: (() => void)[] = [];

    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray<HTMLElement>(".h-char");
      gsap.set(chars, { yPercent: 130, rotate: () => gsap.utils.random(-40, 40), opacity: 0 });
      gsap.set([".hero-shape", ".hero-fade", ".spin-wrap"], { opacity: 0 });

      // 1 ── Entrance (waits for the loader to clear)
      cleanups.push(
        onReady(() => {
          gsap
            .timeline({ defaults: { ease: "expo.out" } })
            .to(chars, { yPercent: 0, rotate: 0, opacity: 1, duration: 1.4, stagger: { each: 0.045, from: "random" } })
            .fromTo(".hero-shape", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.6, stagger: 0.12, ease: "elastic.out(1, 0.55)" }, 0.4)
            .fromTo(".hero-fade", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.1 }, 0.7)
            .fromTo(".spin-wrap", { scale: 0, rotate: -180, opacity: 0 }, { scale: 1, rotate: 0, opacity: 1, duration: 1.4 }, 0.8);
        })
      );

      // 2 ── Badge spins forever
      gsap.to(".spin-badge", { rotate: 360, duration: 14, ease: "none", repeat: -1, transformOrigin: "50% 50%" });

      // 3 ── Scroll away: letters scatter, shapes fly at different depths
      gsap
        .timeline({ scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: 1 } })
        .to(chars, {
          y: () => gsap.utils.random(-300, 200),
          x: () => gsap.utils.random(-120, 120),
          rotate: () => gsap.utils.random(-90, 90),
          opacity: 0,
          ease: "none",
          stagger: { each: 0.02, from: "center" },
        }, 0)
        .to(".hero-shape-a", { y: -400, rotate: 120, ease: "none" }, 0)
        .to(".hero-shape-b", { y: -250, x: 120, ease: "none" }, 0)
        .to(".hero-shape-c", { y: -600, ease: "none" }, 0);

      if (!isFinePointer()) return;

      // 4 ── Letters dodge the cursor
      const movers = chars.map((c) => ({
        el: c,
        x: gsap.quickTo(c, "x", { duration: 0.6, ease: "power3" }),
        y: gsap.quickTo(c, "y", { duration: 0.6, ease: "power3" }),
        r: gsap.quickTo(c, "rotation", { duration: 0.6, ease: "power3" }),
      }));
      // shapes drift toward the cursor at different depths
      const shapes = gsap.utils.toArray<HTMLElement>(".hero-shape").map((s, i) => ({
        x: gsap.quickTo(s, "x", { duration: 1.2, ease: "power3" }),
        y: gsap.quickTo(s, "y", { duration: 1.2, ease: "power3" }),
        depth: (i + 1) * 18,
      }));
      const bx = gsap.quickTo(bubble.current, "x", { duration: 0.6, ease: "power3" });
      const by = gsap.quickTo(bubble.current, "y", { duration: 0.6, ease: "power3" });

      const move = (e: PointerEvent) => {
        if (window.scrollY > el.offsetHeight * 0.3) return;
        const RADIUS = 180;
        movers.forEach((m) => {
          const r = m.el.getBoundingClientRect();
          const dx = r.left + r.width / 2 - e.clientX;
          const dy = r.top + r.height / 2 - e.clientY;
          const d = Math.hypot(dx, dy);
          const f = Math.max(0, 1 - d / RADIUS);
          m.x((dx / (d || 1)) * f * 60);
          m.y((dy / (d || 1)) * f * 60);
          m.r(f * (dx > 0 ? 18 : -18));
        });
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        shapes.forEach((s) => {
          s.x(nx * s.depth * 2);
          s.y(ny * s.depth * 2);
        });
        const hr = title.current!.getBoundingClientRect();
        bx(e.clientX - hr.left);
        by(e.clientY - hr.top);
      };
      const reset = () => movers.forEach((m) => (m.x(0), m.y(0), m.r(0)));

      // 5 ── Video bubble appears while hovering the name
      const video = bubble.current?.querySelector("video");
      const enterTitle = () => {
        video?.play().catch(() => {});
        gsap.to(bubble.current, { scale: 1, opacity: 1, duration: 0.6, ease: "expo.out" });
      };
      const leaveTitle = () => {
        gsap.to(bubble.current, { scale: 0, opacity: 0, duration: 0.4, ease: "expo.in", onComplete: () => video?.pause() });
        reset();
      };

      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", reset);
      title.current?.addEventListener("pointerenter", enterTitle);
      title.current?.addEventListener("pointerleave", leaveTitle);
      cleanups.push(() => {
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", reset);
        title.current?.removeEventListener("pointerenter", enterTitle);
        title.current?.removeEventListener("pointerleave", leaveTitle);
      });
    }, el);

    return () => {
      cleanups.forEach((fn) => fn());
      ctx.revert();
    };
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-ink">
      <div className="relative px-4 pt-32 sm:px-8 md:pt-40">
        <Blob d="mobile" shape="pill" rotate={-28} float={false} className="hero-shape hero-shape-a left-[44%] top-[16%] z-10 h-[80px] w-[190px] md:h-[150px] md:w-[350px]" />
        <Blob d="backend" shape="liquid" float={false} className="hero-shape hero-shape-b right-[3%] top-[46%] z-10 h-[100px] w-[100px] md:h-[210px] md:w-[210px]" />
        <Blob d="brand" shape="orb" float={false} className="hero-shape hero-shape-c left-[5%] top-[62%] z-0 h-[56px] w-[56px] md:h-[110px] md:w-[110px]" />
        <Blob d="ai" shape="dome" float={false} className="hero-shape left-[30%] top-[86%] z-0 hidden h-[60px] w-[80px] md:block" />

        <h1 ref={title} aria-label="Ibeneme Ikenna" className="t-display relative z-[5] select-none">
          {/* cursor-following video bubble */}
          <div
            ref={bubble}
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-[-1] -ml-[110px] -mt-[140px] hidden h-[280px] w-[220px] scale-0 overflow-hidden rounded-[110px] opacity-0 pointer-fine:block"
          >
            <video src={meVideo} muted loop playsInline preload="none" className="h-full w-full object-cover grayscale" />
          </div>
          {LINES.map((line, li) => (
            <span key={line} aria-hidden className="block whitespace-nowrap pb-[0.04em]">
              {line.split("").map((c, i) => (
                <span key={i} className="h-char inline-block">
                  {c}
                </span>
              ))}
              {li === LINES.length - 1 && <span className="h-char inline-block text-brand">.</span>}
            </span>
          ))}
        </h1>

        <div className="spin-wrap absolute right-8 top-28 z-20 hidden h-[160px] w-[160px] md:block">
          <SpinBadge />
          <span className="absolute inset-0 grid place-items-center text-[28px] md:text-[40px]">✦</span>
        </div>
      </div>

      <div className="container-x relative z-20 grid gap-10 pt-12 pb-20 md:grid-cols-2 md:items-end md:pt-16 md:pb-28">
        <div className="hero-fade flex flex-col gap-5">
          <span className="bracket">{SITE.role}</span>
          <p className="t-body-lg max-w-[34ch]">
            I build high-performance mobile apps and reactive web frontends that feel effortless —{" "}
            <em className="font-medium">smooth 60fps motion</em> on top of resilient architecture.
          </p>
        </div>

        <div className="hero-fade flex flex-col gap-6 md:items-end">
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${SITE.email}`} data-magnetic className="pill pill-cta">
              Email me <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden />
            </a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" data-magnetic className="pill">
              WhatsApp
            </a>
          </div>
          <p role="status" className="t-caption flex items-center gap-2 text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            based remotely — open to relocation
          </p>
        </div>
      </div>

      <div className="hairline" />
      <div aria-hidden className="py-6 md:py-8">
        <VelocityMarquee duration={28}>
          {MARQUEE.map(([d, text]) => (
            <span key={text} className="flex items-center gap-10 pr-10 text-[clamp(32px,5vw,64px)] font-semibold tracking-[-0.03em]">
              <span style={{ color: DISCIPLINES[d].color }}>{text}</span>
              <span className="text-white">✦</span>
            </span>
          ))}
        </VelocityMarquee>
      </div>
      <div className="hairline" />
    </section>
  );
};

export default Hero;
