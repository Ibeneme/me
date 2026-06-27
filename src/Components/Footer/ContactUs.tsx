import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <section className="bg-[#FFD000] py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter mb-10 leading-[0.9]">
          Let’s build the future of your product.
        </h2>

        <p className="text-black/80 text-xl font-light leading-relaxed mb-16 max-w-lg mx-auto">
          Currently accepting new collaborations and engineering projects. 
          Let’s discuss your architecture, design goals, and execution strategy.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Email Button */}
          <a
            href="mailto:ikennaibenemee@gmail.com"
            className="group flex items-center gap-4 bg-black text-[#FFD000] px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-zinc-900 transition-all duration-300"
          >
            <span>Email me</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-2 transition-transform duration-300"
            />
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/2348120710198"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-transparent border border-black/20 text-black px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-black/5 transition-all duration-300"
          >
            <MessageCircle size={18} />
            <span>Whatspp Chat</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;