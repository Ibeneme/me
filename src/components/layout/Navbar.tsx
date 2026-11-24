import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap, prefersReducedMotion, ScrollTrigger } from "../../lib/gsap";
import { SITE } from "../../data/site";
import { RollText } from "../ui";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const bar = useRef<HTMLElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  // Hide on scroll down, reveal on scroll up
  useEffect(() => {
    if (!bar.current) return;
    const show = gsap.quickTo(bar.current, "yPercent", { duration: 0.45, ease: "power3.out" });
    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => show(self.direction === 1 && self.scroll() > 160 ? -110 : 0),
    });
    return () => st.kill();
  }, []);

  // Full-screen menu bursts out of the button as a circle
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const el = menu.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      gsap.set(el, { autoAlpha: open ? 1 : 0 });
      return;
    }
    if (open) {
      gsap
        .timeline()
        .set(el, { autoAlpha: 1 })
        .fromTo(el, { clipPath: "circle(0% at calc(100% - 36px) 36px)" }, { clipPath: "circle(150% at calc(100% - 36px) 36px)", duration: 0.9, ease: "expo.inOut" })
        .from(el.querySelectorAll(".menu-link"), { yPercent: 120, rotate: 6, duration: 0.8, ease: "expo.out", stagger: 0.07 }, 0.35)
        .from(el.querySelectorAll(".menu-foot"), { opacity: 0, y: 20, duration: 0.5, stagger: 0.05 }, 0.6);
    } else {
      gsap.to(el, { clipPath: "circle(0% at calc(100% - 36px) 36px)", duration: 0.6, ease: "expo.inOut", onComplete: () => void gsap.set(el, { autoAlpha: 0 }) });
    }
  }, [open]);

  return (
    <>
      <nav ref={bar} className="fixed inset-x-0 top-0 z-[120] mix-blend-difference">
        <div className="container-x flex h-[76px] items-center justify-between">
          <Link to="/" data-magnetic className="text-[24px] font-semibold tracking-[-0.03em] text-white">
            ibeneme<span className="text-brand">.</span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {SITE.nav.map(({ name, path }) => (
              <li key={name}>
                <Link to={path} aria-current={pathname === path ? "page" : undefined} className="ghost-link block py-2.5">
                  <RollText>{name}</RollText>
                </Link>
              </li>
            ))}
          </ul>

          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" data-magnetic className="pill pill-sm hidden md:inline-flex">
            Get in touch
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative grid h-11 w-11 place-items-center md:hidden"
          >
            <span className={`absolute h-[1.5px] w-6 bg-white transition-transform duration-500 ${open ? "rotate-45" : "-translate-y-[4px]"}`} />
            <span className={`absolute h-[1.5px] w-6 bg-white transition-transform duration-500 ${open ? "-rotate-45" : "translate-y-[4px]"}`} />
          </button>
        </div>
      </nav>

      <div ref={menu} className="invisible fixed inset-0 z-[110] flex flex-col bg-ink md:hidden" style={{ clipPath: "circle(0% at calc(100% - 36px) 36px)" }}>
        <div className="container-x flex flex-1 flex-col justify-between pt-28 pb-10">
          <ul>
            {SITE.nav.map(({ name, path }, i) => (
              <li key={name} className="overflow-hidden border-b border-line">
                <Link to={path} className={`menu-link flex items-baseline gap-4 py-4 ${pathname === path ? "text-white" : "text-muted"}`}>
                  <span className="t-caption text-brand">0{i + 1}</span>
                  <span className="t-heading">{name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            <span className="menu-foot bracket text-muted">get in touch</span>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="menu-foot pill pill-cta">
              WhatsApp
            </a>
            <a href={`mailto:${SITE.email}`} className="menu-foot pill">
              Email
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
