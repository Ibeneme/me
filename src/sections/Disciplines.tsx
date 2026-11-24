import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Blob, Bracket, CategoryLabel } from "../components/ui";
import { DISCIPLINE_BLOCKS } from "../data/about";
import { DISCIPLINES } from "../lib/disciplines";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import { useMotion } from "../hooks/useMotion";

/**
 * Desktop: the section pins and the four disciplines slide past horizontally,
 * each shape spinning as it crosses the screen. Mobile: a vertical stack.
 */
const Disciplines: React.FC = () => {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  useMotion(root);

  useEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const panels = gsap.utils.toArray<HTMLElement>(".d-panel", root.current);
      const distance = () => track.current!.scrollWidth - window.innerWidth;

      const scroll = gsap.to(track.current, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: ".d-pin",
          start: "top top",
          end: () => "+=" + distance(),
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.to(".d-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: ".d-pin", start: "top top", end: () => "+=" + distance(), scrub: true },
      });

      panels.forEach((p) => {
        const shape = p.querySelector(".d-shape");
        const text = p.querySelectorAll(".d-text > *");
        gsap.fromTo(
          shape,
          { rotate: -90, scale: 0.6 },
          {
            rotate: 90,
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: p, containerAnimation: scroll, start: "left right", end: "right left", scrub: true },
          }
        );
        gsap.from(text, {
          y: 80,
          opacity: 0,
          stagger: 0.08,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: p, containerAnimation: scroll, start: "left 70%", toggleActions: "play none none reverse" },
        });
      });
    });
    mm.add("(max-width: 1023px)", () => {
      gsap.utils.toArray<HTMLElement>(".d-panel", root.current).forEach((p) => {
        gsap.from(p.querySelectorAll(".d-text > *"), {
          y: 50,
          opacity: 0,
          stagger: 0.08,
          duration: 0.9,
          ease: "expo.out",
          scrollTrigger: { trigger: p, start: "top 75%", toggleActions: "play none none none" },
        });
        gsap.fromTo(p.querySelector(".d-shape"), { rotate: -60, scale: 0.7 }, {
          rotate: 30,
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: p, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} className="bg-ink">
      <div className="container-x pt-20 pb-10 md:pt-28">
        <div className="flex flex-col gap-6">
          <Bracket>What I do</Bracket>
          <h2 data-split className="t-heading-lg max-w-[14ch]">
            Four disciplines, one obsession with motion.
          </h2>
        </div>
      </div>

      <div className="d-pin relative overflow-hidden lg:h-screen">
        <div ref={track} className="flex flex-col lg:h-full lg:w-max lg:flex-row lg:items-center">
          {DISCIPLINE_BLOCKS.map((b, i) => (
            <article
              key={b.d}
              className="d-panel container-x grid items-center gap-10 border-t border-line py-14 lg:h-full lg:w-[85vw] lg:max-w-none lg:grid-cols-2 lg:gap-16 lg:border-t-0 lg:border-l lg:px-16 lg:py-0"
            >
              <div className="relative mx-auto aspect-square w-full max-w-[460px]">
                <span className="absolute -left-2 -top-6 text-[120px] font-black leading-none text-white/[0.06] lg:text-[200px]">
                  0{i + 1}
                </span>
                <div className="d-shape absolute inset-0">
                  <Blob
                    d={b.d}
                    shape={b.shape}
                    rotate={b.shape === "pill" ? -32 : 0}
                    className={
                      b.shape === "pill"
                        ? "inset-x-[4%] top-[30%] h-[40%]"
                        : b.shape === "dome"
                          ? "inset-x-[12%] top-[18%] bottom-[18%]"
                          : "inset-[14%]"
                    }
                  />
                </div>
              </div>
              <div className="d-text flex flex-col items-start gap-5">
                <CategoryLabel d={b.d} />
                <h3 className="t-heading-sm max-w-[18ch]">{b.title}</h3>
                <p className="t-body-lg max-w-[40ch] text-muted">{b.body}</p>
                <Link to={b.cta.to} data-magnetic className="pill mt-2">
                  {b.cta.label}
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* progress rail, coloured by discipline */}
        <div className="absolute inset-x-8 bottom-8 hidden h-[3px] overflow-hidden rounded-full bg-line lg:block">
          <div
            className="d-progress h-full origin-left scale-x-0"
            style={{
              background: `linear-gradient(90deg, ${DISCIPLINE_BLOCKS.map((b) => DISCIPLINES[b.d].color).join(", ")})`,
            }}
          />
        </div>
      </div>
      <div className="hairline" />
    </section>
  );
};

export default Disciplines;
