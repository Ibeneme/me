import React, { useEffect, useRef } from "react";
import portrait from "../assets/images/portrait.webp";
import { Blob, Bracket, CategoryLabel } from "../components/ui";
import { ABOUT } from "../data/about";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import { useMotion } from "../hooks/useMotion";

const AboutDetails: React.FC = () => {
  const root = useRef<HTMLElement>(null);
  useMotion(root);

  useEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      // strengths pop in like bubbles
      gsap.from(".strength", {
        scale: 0,
        rotate: () => gsap.utils.random(-20, 20),
        opacity: 0,
        duration: 0.9,
        ease: "elastic.out(1, 0.5)",
        stagger: { each: 0.05, from: "random" },
        scrollTrigger: { trigger: ".strengths", start: "top 85%", toggleActions: "play none none none" },
      });
      // timeline rail draws itself as you read
      gsap.fromTo(
        ".rail",
        { scaleY: 0 },
        { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".timeline", start: "top 70%", end: "bottom 60%", scrub: true } }
      );
      gsap.utils.toArray<HTMLElement>(".tl-item").forEach((item) => {
        gsap.from(item.querySelector(".tl-dot"), {
          scale: 0,
          duration: 0.8,
          ease: "elastic.out(1,0.4)",
          scrollTrigger: { trigger: item, start: "top 70%", toggleActions: "play none none none" },
        });
        gsap.from(item.querySelectorAll(".tl-text > *"), {
          x: 80,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          stagger: 0.08,
          scrollTrigger: { trigger: item, start: "top 75%", toggleActions: "play none none none" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="bg-ink pb-20 md:pb-28">
      <div className="container-x">
        {/* Intro */}
        <div className="grid items-center gap-12 py-16 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16 md:py-20">
          <div className="relative mx-auto w-full max-w-[420px]">
            <Blob d="mobile" shape="pill" rotate={-30} className="-right-6 -top-6 z-10 h-[70px] w-[160px]" />
            <Blob d="backend" shape="orb" className="-bottom-5 -left-5 z-10 h-[80px] w-[80px]" />
            <div data-tilt>
              <div data-clip className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-panel">
                <img src={portrait} alt="Ikenna Ibeneme" className="h-full w-full object-cover grayscale transition-[filter] duration-700 hover:grayscale-0" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Bracket>About</Bracket>
            <h2 data-split className="t-heading-sm">
              I build smooth mobile apps and reactive web frontends.
            </h2>
            <p data-split="scrub" className="t-body-lg">
              A full-stack developer with a mobile &amp; frontend major and 5+ years crafting high-performance products
              people actually enjoy using — fluid navigation, responsive touch interactions and pixel-perfect design.
            </p>
            <p data-reveal className="t-body-lg text-muted">
              {ABOUT.intro}
            </p>
          </div>
        </div>

        <div className="hairline" />

        {/* Approach + stack */}
        <div className="grid gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-20">
          <div className="flex flex-col gap-5">
            <Bracket>How I build</Bracket>
            <p data-split="scrub" className="t-sub">
              {ABOUT.approach}
            </p>
          </div>

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-5">
              <Bracket>What I build with</Bracket>
              <ul className="flex flex-col">
                {ABOUT.stack.map((t) => (
                  <li key={t.name} data-reveal className="group flex items-baseline justify-between border-b border-line py-4">
                    <span className="text-[26px] font-medium tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-3">
                      {t.name}
                    </span>
                    <CategoryLabel d={t.d} className="!text-[16px]" />
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <Bracket>Core strengths</Bracket>
              <ul className="strengths flex flex-wrap gap-2">
                {ABOUT.strengths.map((s) => (
                  <li
                    key={s}
                    className="strength rounded-[100px] border border-line px-4 py-2 text-[15px] transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="hairline" />

        {/* Timeline */}
        <div className="py-16 md:py-20">
          <div className="mb-12 flex flex-col gap-6">
            <Bracket>Career</Bracket>
            <h2 data-split className="t-heading-lg">
              The journey so far
            </h2>
          </div>

          <ol className="timeline relative pl-8 md:pl-12">
            <span className="absolute left-[5px] top-0 h-full w-px bg-line md:left-[7px]" />
            <span className="rail absolute left-[5px] top-0 h-full w-px origin-top md:left-[7px]" style={{ background: "var(--brand-gradient)" }} />
            {ABOUT.timeline.map((item) => (
              <li key={item.role} className="tl-item relative grid gap-4 py-10 md:grid-cols-[180px_1fr_1.3fr] md:gap-10">
                <span
                  className={`tl-dot absolute -left-8 top-12 h-3 w-3 rounded-full md:-left-12 md:h-4 md:w-4 ${item.active ? "bg-brand" : "bg-white"}`}
                />
                <div className="tl-text contents">
                  <span className={`text-[18px] ${item.active ? "brand-text" : "text-muted"}`}>{item.period}</span>
                  <h3 className="t-sub font-medium">{item.role}</h3>
                  <p className="t-body-lg text-muted">{item.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
