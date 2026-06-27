import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <section className="bg-[#ffd000] py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-6xl font-black text-black tracking-tight mb-8">
          Let’s build your startup software or products.
        </h2>

        <p className="text-black/70 text-lg font-light leading-relaxed mb-16 max-w-md mx-auto">
          I am currently open to new collaborations and projects. Feel free to
          reach out to start a conversation.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Email Button */}
          <a
            href="mailto:ikennaibenemee@gmail.com"
            className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-black/80 transition-all active:scale-95"
          >
            <span>Email me</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/2348120710198"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-black/5 text-black px-8 py-4 rounded-full font-medium hover:bg-black/10 transition-all active:scale-95"
          >
            <MessageCircle size={18} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
