import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Bracket } from "../components/ui";
import { SITE } from "../data/site";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import { useMotion } from "../hooks/useMotion";

const METHODS = [
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, external: false },
  { label: "WhatsApp", value: SITE.whatsappDisplay, href: SITE.whatsapp, external: true },
];

/** Contact rows sweep in from alternating sides. */
const Contact: React.FC = () => {
  const root = useRef<HTMLElement>(null);
  useMotion(root);

  useEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
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


      <div className="container-x relative">
        <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-2 md:items-end">
          <div className="flex flex-col gap-6">
            <Bracket>Open to new projects</Bracket>
            <h2 data-split className="t-heading max-w-[14ch]">
              Let&apos;s build the future of your product.
            </h2>
          </div>
          <p data-split="scrub" className="t-body-lg max-w-[42ch]">
            Currently taking on new collaborations and engineering projects — happy to dig into your architecture, design
            goals and execution strategy.
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
