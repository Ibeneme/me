import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { SITE } from "../../data/site";
import { gsap, prefersReducedMotion } from "../../lib/gsap";
import { DISCIPLINES } from "../../lib/disciplines";
import { RollText } from "../ui";

const WORDMARK = "ibeneme".split("");
const HUES = [DISCIPLINES.mobile.color, DISCIPLINES.web.color, DISCIPLINES.backend.color, DISCIPLINES.ai.color, DISCIPLINES.brand.color];

const columns = [
  { title: "Navigation", links: SITE.nav.map((n) => ({ label: n.name, to: n.path })) },
  {
    title: "Connect",
    links: [
      { label: "Email", href: `mailto:${SITE.email}` },
      { label: "WhatsApp", href: SITE.whatsapp },
    ],
  },
  { title: "Socials", links: SITE.socials.map((s) => ({ label: s.label, href: s.href })) },
];

const Footer: React.FC = () => {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const cleanups: (() => void)[] = [];
    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray<HTMLElement>(".wm-char");
      // Letters bounce up one by one as the footer arrives
      gsap.from(letters, {
        yPercent: 110,
        rotate: () => gsap.utils.random(-30, 30),
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.06,
        scrollTrigger: { trigger: ".wordmark", start: "top 95%", toggleActions: "play none none none" },
      });
      // …and jump + flash a discipline colour when hovered
      letters.forEach((el, i) => {
        const jump = () =>
          gsap
            .timeline()
            .to(el, { yPercent: -22, scaleY: 1.1, color: HUES[i % HUES.length], duration: 0.25, ease: "power2.out" })
            .to(el, { yPercent: 0, scaleY: 1, color: "#fff", duration: 0.9, ease: "elastic.out(1, 0.3)" });
        el.addEventListener("pointerenter", jump);
        cleanups.push(() => el.removeEventListener("pointerenter", jump));
      });
    }, root);
    return () => {
      cleanups.forEach((fn) => fn());
      ctx.revert();
    };
  }, []);

  return (
    <footer ref={root} className="overflow-hidden border-t border-line bg-panel pt-16 pb-6 md:pt-20">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="flex flex-col gap-5 md:col-span-5">
            <Link to="/" className="text-[24px] font-semibold tracking-[-0.03em]">
              ibeneme<span className="text-brand">.</span>
            </Link>
            <p className="max-w-[32ch] text-[16px] font-light leading-[1.5] text-muted">
              Building thoughtful digital experiences and AI-driven workflows.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <span className="bracket mb-5 block text-muted">{col.title}</span>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {"to" in l ? (
                      <Link to={l.to} className="text-[16px] text-white">
                        <RollText>{l.label}</RollText>
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-[16px] text-white"
                      >
                        <RollText>{l.label}</RollText>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-line pt-8 md:flex-row md:items-center">
          <p className="t-caption text-muted">© {new Date().getFullYear()} Ibeneme Ikenna. All rights reserved.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} data-magnetic className="pill pill-sm">
            Back to top <ArrowUp size={16} strokeWidth={1.5} />
          </button>
        </div>

        <p aria-label="ibeneme" className="wordmark mt-10 flex select-none overflow-hidden whitespace-nowrap text-[clamp(64px,20vw,290px)] font-semibold leading-[0.9] tracking-[-0.05em]">
          {WORDMARK.map((c, i) => (
            <span key={i} aria-hidden className="wm-char inline-block">
              {c}
            </span>
          ))}
          <span aria-hidden className="wm-char inline-block text-brand">.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
