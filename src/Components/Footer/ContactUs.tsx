import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Heart, ArrowRight, Sparkles } from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <section className="relative py-24 px-6 bg-[#FEFEFE] overflow-hidden font-sans">
      {/* Soft Yellow Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FFD000] opacity-10 blur-[100px] rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FFD000] opacity-10 blur-[100px] rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Friendly Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD000]/20 text-[#B89600] font-bold text-xs uppercase tracking-wider mb-6">
            <Sparkles size={14} /> Let's make something cool
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-tight mb-4">
            Say hello!
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Have an idea or just want to chat? I'm always open to new projects
            and interesting conversations. Drop a message!
          </p>
        </motion.div>

        {/* Friendly Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Email Button */}
          <motion.a
            href="mailto:ikennaibenemee@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-full sm:w-auto px-10 py-5 bg-[#FFD000] text-black font-bold rounded-2xl shadow-[0_15px_30px_-10px_rgba(255,208,0,0.4)] flex items-center justify-center gap-3 transition-all hover:shadow-[0_20px_40px_-10px_rgba(255,208,0,0.6)]"
          >
            <Mail
              size={20}
              className="group-hover:rotate-12 transition-transform"
            />
            <span>Send an Email</span>
            <ArrowRight
              size={18}
              className="opacity-40 group-hover:translate-x-1 transition-transform"
            />
          </motion.a>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/2348120710198"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-gray-100 text-gray-700 font-bold rounded-2xl flex items-center justify-center gap-3 transition-all hover:border-[#FFD000] hover:text-black"
          >
            <MessageCircle size={20} className="text-[#FFD000]" />
            <span>Text me on WhatsApp</span>
          </motion.a>
        </div>

        {/* Bottom Vibe */}
        <div className="mt-20 flex flex-col items-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-4 border-white bg-gray-200 overflow-hidden"
              >
                <img
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt="User"
                  className="w-full h-full object-cover grayscale opacity-80"
                />
              </div>
            ))}
          </div>
          <p className="text-sm font-medium text-gray-400 flex items-center gap-2">
            Joined by 50+ happy collaborators{" "}
            <Heart size={14} className="fill-[#FFD000] text-[#FFD000]" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
