import React from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <section className="bg-[#FFD000] py-20 md:py-32 px-5 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Status */}
        <div className="flex items-center gap-2.5 mb-8 md:mb-12">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/50" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
          </span>
          <span className="text-black/60 text-sm font-medium tracking-wide">
            Open to new projects
          </span>
        </div>

        {/* Heading + Description */}
        <div className="grid md:grid-cols-[1.35fr_1fr] gap-8 md:gap-16 items-end mb-14 md:mb-20">
          <h2 className="text-[clamp(2.4rem,6.5vw,5rem)] font-black text-black tracking-tighter leading-[0.95]">
            Let’s build the future of your product.
          </h2>

          <p className="text-black/65 text-lg md:text-xl font-light leading-relaxed max-w-md md:pb-1.5">
            Currently taking on new collaborations and engineering projects —
            let’s talk through your architecture, design goals, and execution
            strategy.
          </p>
        </div>

        {/* Contact methods */}
        <div className="border-t border-black/15">
          {/* Email */}
          <a
            href="mailto:ikennaibenemee@gmail.com"
            className="group flex items-center justify-between gap-6 py-8 md:py-10 border-b border-black/15 transition-colors hover:bg-black/[0.03] -mx-5 md:-mx-10 px-5 md:px-10"
          >
            <div className="flex items-start md:items-baseline gap-5 md:gap-8 min-w-0">
              <span className="text-black/35 text-sm font-mono pt-1.5 md:pt-0 shrink-0">
                01
              </span>
              <div className="min-w-0">
                <span className="block text-black font-black uppercase text-2xl md:text-4xl tracking-tight">
                  Email
                </span>
                <span className="block mt-1 text-black/55 text-base font-light truncate">
                  ikennaibenemee@gmail.com
                </span>
              </div>
            </div>
            <ArrowUpRight
              size={26}
              strokeWidth={2}
              className="text-black shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/2349069527816"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-6 py-8 md:py-10 border-b border-black/15 transition-colors hover:bg-black/[0.03] -mx-5 md:-mx-10 px-5 md:px-10"
          >
            <div className="flex items-start md:items-baseline gap-5 md:gap-8 min-w-0">
              <span className="text-black/35 text-sm font-mono pt-1.5 md:pt-0 shrink-0">
                02
              </span>
              <div className="min-w-0">
                <span className="block text-black font-black uppercase text-2xl md:text-4xl tracking-tight">
                  WhatsApp
                </span>
                <span className="block mt-1 text-black/55 text-base font-light">
                  +234 812 071 0198
                </span>
              </div>
            </div>
            <MessageCircle
              size={24}
              strokeWidth={2}
              className="text-black shrink-0 transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
