import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Blob, Bracket } from "../components/ui";
import { SITE } from "../data/site";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import { useMotion } from "../hooks/useMotion";

const METHODS = [
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, external: false },
  { label: "WhatsApp", value: SITE.whatsappDisplay, href: SITE.whatsapp, external: true },
];

/** A giant "Let's talk" zooms through the screen, then the contact rows. */
const Contact: React.FC = () => {
  const root = useRef<HTMLElement>(null);
  useMotion(root);

  useEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".talk",
        { scale: 0.35, rotate: -8, opacity: 0.2 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: { trigger: ".talk-wrap", start: "top bottom", end: "center center", scrub: 1 },
        }
      );
      gsap.from(".contact-row", {
        xPercent: (i) => (i % 2 ? 40 : -40),
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".contact-rows", start: "top 85%", toggleActions: "play none none none" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-ink py-20 md:py-28">
      <Blob d="brand" shape="liquid" parallax={0.6} className="-right-10 top-24 h-[140px] w-[140px] md:right-[6%] md:h-[240px] md:w-[240px]" />
      <Blob d="ai" shape="pill" rotate={24} parallax={1.1} className="left-[55%] top-[40%] hidden h-[60px] w-[150px] md:block" />
      <Blob d="mobile" shape="orb" parallax={0.3} className="left-[4%] top-[8%] h-[50px] w-[50px] md:h-[80px] md:w-[80px]" />

      <div className="talk-wrap container-x relative mb-20 text-center md:mb-28">
        <p className="talk inline-block text-[clamp(80px,22vw,320px)] font-semibold leading-[0.85] tracking-[-0.05em]">
          Let&apos;s <em className="font-medium">talk</em>
          <span className="text-brand">.</span>
        </p>
      </div>

      <div className="container-x relative">
        <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-2 md:items-end">
          <div className="flex flex-col gap-6">
            <Bracket>Open to new projects</Bracket>
            <h2 data-split className="t-heading max-w-[14ch]">
              Let&apos;s build the future of your product.
            </h2>
          </div>
          <p data-split="scrub" className="t-body-lg max-w-[42ch]">
            Currently taking on new collaborations and engineering projects — let&apos;s talk through your architecture,
            design goals and execution strategy.
          </p>
        </div>

        <div className="contact-rows">
          <div className="hairline" />
          {METHODS.map((m, i) => (
            <React.Fragment key={m.label}>
              <a
                href={m.href}
                target={m.external ? "_blank" : undefined}
                rel={m.external ? "noopener noreferrer" : undefined}
                className="contact-row group relative flex items-center justify-between gap-6 overflow-hidden py-8 md:py-10"
              >
                {/* white wash slides in on hover */}
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:scale-y-100" />
                <div className="relative flex min-w-0 items-baseline gap-6 md:gap-10 md:pl-4">
                  <span className="t-caption shrink-0 text-muted transition-colors group-hover:text-black/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <span className="block t-heading transition-colors duration-300 group-hover:text-black">{m.label}</span>
                    <span className="mt-1 block truncate text-[18px] font-light text-muted transition-colors group-hover:text-black/60">
                      {m.value}
                    </span>
                  </div>
                </div>
                <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full border border-white transition-all duration-500 group-hover:rotate-45 group-hover:border-black group-hover:text-black md:mr-4 md:h-20 md:w-20">
                  <ArrowUpRight size={26} strokeWidth={1.5} />
                </span>
              </a>
              <div className="hairline" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
