import React from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <section className="bg-[#FFD000] py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Status line */}
        <div className="flex items-center gap-2.5 mb-10 md:mb-14">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
          </span>
          <span className="text-black/70 text-sm font-medium">
            Open to new projects starting Q1 2027
          </span>
        </div>

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-8 items-end">
          {/* Heading */}
          <h2 className="text-[clamp(2.6rem,7vw,5.5rem)] font-black text-black tracking-tighter leading-[0.92]">
            Let's build the future of your product.
          </h2>

          {/* Description, aligned to baseline of heading on desktop */}
          <p className="text-black/70 text-lg font-light leading-relaxed md:pb-2">
            Currently taking on new collaborations and engineering projects —
            let's talk through your architecture, design goals, and execution
            strategy.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/15 my-12 md:my-16" />

        {/* Contact methods — list rows, not centered buttons */}
        <div className="flex flex-col divide-y divide-black/15 border-y border-black/15">
          <a
            href="mailto:ikennaibenemee@gmail.com"
            className="group flex items-center justify-between py-7 md:py-9"
          >
            <div className="flex items-baseline gap-4 md:gap-8 min-w-0">
              <span className="text-black/40 text-sm font-mono shrink-0">
                01
              </span>
              <span className="text-black font-black uppercase text-2xl md:text-4xl tracking-tight truncate">
                Email
              </span>
              <span className="hidden md:inline text-black/50 text-base font-light truncate">
                ikennaibenemee@gmail.com
              </span>
            </div>
            <ArrowUpRight
              size={28}
              className="text-black shrink-0 ml-4 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
            />
          </a>

          <a
            href="https://wa.me/2348120710198"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between py-7 md:py-9"
          >
            <div className="flex items-baseline gap-4 md:gap-8 min-w-0">
              <span className="text-black/40 text-sm font-mono shrink-0">
                02
              </span>
              <span className="text-black font-black uppercase text-2xl md:text-4xl tracking-tight truncate">
                WhatsApp
              </span>
              <span className="hidden md:inline text-black/50 text-base font-light truncate">
                +234 812 071 0198
              </span>
            </div>
            <MessageCircle
              size={26}
              className="text-black shrink-0 ml-4 transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;