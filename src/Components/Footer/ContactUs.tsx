import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Blob, Bracket, useMotion } from "../ui/design";

const methods = [
  { label: "Email", value: "ikennaibenemee@gmail.com", href: "mailto:ikennaibenemee@gmail.com", external: false },
  { label: "WhatsApp", value: "+234 812 071 0198", href: "https://wa.me/2349069527816", external: true },
];

const ContactUs: React.FC = () => {
  const root = useRef<HTMLElement>(null);
  useMotion(root);

  return (
    <section ref={root} className="relative overflow-hidden bg-ink py-20 md:py-28">
      <Blob d="brand" shape="liquid" className="-right-10 top-16 h-[140px] w-[140px] md:right-[6%] md:h-[220px] md:w-[220px]" />
      <Blob d="ai" shape="pill" rotate={24} className="left-[52%] top-[42%] hidden h-[60px] w-[150px] md:block" />

      <div className="container-x relative">
        <div className="mb-14 flex flex-col gap-6 md:mb-20">
          <Bracket>Open to new projects</Bracket>
          <h2 data-reveal className="t-heading-lg max-w-[13ch] text-cream">
            Let&apos;s build the future of your product.
          </h2>
          <p data-reveal className="t-body-lg max-w-[42ch] text-muted">
            Currently taking on new collaborations and engineering projects — let&apos;s talk through your
            architecture, design goals and execution strategy.
          </p>
        </div>

        <div className="hairline" />
        {methods.map((m, i) => (
          <React.Fragment key={m.label}>
            <a
              href={m.href}
              target={m.external ? "_blank" : undefined}
              rel={m.external ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between gap-6 py-8 md:py-10"
            >
              <div className="flex min-w-0 items-baseline gap-6 md:gap-10">
                <span className="t-caption shrink-0 text-muted">{String(i + 1).padStart(2, "0")}</span>
                <div className="min-w-0">
                  <span className="block t-heading-sm text-cream transition-colors group-hover:text-brand-light">
                    {m.label}
                  </span>
                  <span className="mt-1 block truncate text-[19px] text-muted">{m.value}</span>
                </div>
              </div>
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-cream text-cream transition-colors group-hover:border-brand-light group-hover:text-brand-light">
                <ArrowUpRight size={22} strokeWidth={1.5} />
              </span>
            </a>
            <div className="hairline" />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ContactUs;
