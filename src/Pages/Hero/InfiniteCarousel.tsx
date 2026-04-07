import React from "react";
import { motion } from "framer-motion";
import { Cpu, GraduationCap, Truck, Headset, ArrowUpRight } from "lucide-react";

const sectors = [
  {
    icon: <GraduationCap size={24} className="text-yellow-500" />,
    title: "Edutech",
    text: "Transforming education with technology. Smart learning solutions, e-learning platforms, and AI-driven tutoring systems.",
    tag: "Protocol // 01",
  },
  {
    icon: <Cpu size={24} className="text-yellow-500" />,
    title: "AI & Tech",
    text: "Driving innovation with artificial intelligence. From automation to machine learning, shaping the future of smart industries.",
    tag: "Protocol // 02",
  },
  {
    icon: <Truck size={24} className="text-yellow-500" />,
    title: "Logistics",
    text: "Optimizing supply chain efficiency. AI-powered tracking, route optimization, and seamless last-mile delivery solutions.",
    tag: "Protocol // 03",
  },
  {
    icon: <Headset size={24} className="text-yellow-500" />,
    title: "Customer Support",
    text: "Enhancing customer experiences with AI-driven chatbots, 24/7 support, and intelligent ticketing systems.",
    tag: "Protocol // 04",
  },
];

const InfiniteCarousel: React.FC = () => {
  return (
    <section className="bg-[#0B0A0F] py-32 overflow-hidden border-b border-white/5">
      {/* Header Info */}
      <div className="max-w-7xl mx-auto px-6 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="text-white text-5xl md:text-7xl font-black tracking-tightest uppercase leading-[0.8] mb-6">
            Core <br />
            <span className="text-white/20">Specializations.</span>
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-tighter text-sm md:text-lg">
            Engineering robust solutions across high-impact industries.
          </p>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center gap-4 text-yellow-500">
            <div className="w-12 h-[1px] bg-yellow-500/30" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">
              Sector Analysis v2.1
            </span>
          </div>
        </div>
      </div>

      {/* Infinite Track */}
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {[...sectors, ...sectors].map((item, index) => (
            <div
              key={index}
              className="w-[350px] md:w-[450px] flex-shrink-0 group"
            >
              <div className="relative h-full bg-white/5 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-xl transition-all duration-500 group-hover:border-yellow-500/40 group-hover:bg-white/[0.08]">
                {/* Sector Icon & Tag */}
                <div className="flex items-center justify-between mb-12">
                  <div className="p-4 bg-black/40 border border-white/10 rounded-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-gray-600 text-[10px] font-black uppercase tracking-widest group-hover:text-yellow-500 transition-colors">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <h3 className="text-white text-3xl font-black uppercase tracking-tighter">
                      {item.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="text-white/20 group-hover:text-yellow-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </div>

                  <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed tracking-tight group-hover:text-gray-300 transition-colors">
                    {item.text}
                  </p>
                </div>

                {/* Decorative Bottom Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-500 group-hover:w-1/2" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Background Accent */}
      <div className="absolute left-0 bottom-20 text-[15rem] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter leading-none uppercase">
        Specialist
      </div>
    </section>
  );
};

export default InfiniteCarousel;
