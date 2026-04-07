import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { IoArrowUpOutline, IoCodeSlash } from "react-icons/io5";
import ContactUs from "./ContactUs";
import We from "../We/We";
// import SlidingPage from "./SlidingPage";

interface FooterProps {
  hideContactUs?: boolean;
  showContactUs?: boolean;
}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-[#050505] font-sans antialiased text-white overflow-hidden">
      <ContactUs />
      <We />
      {/* <SlidingPage /> */}
      <footer className="relative pt-24 pb-12 px-6">
        {/* Subtle Gradient Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFD000] opacity-[0.03] blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            {/* Left: Bio & Brand */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FFD000] flex items-center justify-center rounded-xl">
                  <IoCodeSlash size={22} className="text-black" />
                </div>
                <span className="text-2xl font-black tracking-tighter uppercase">
                  Ibeneme<span className="text-[#FFD000]">.</span>
                </span>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                I’m{" "}
                <strong className="text-white font-bold">Ikenna Ibeneme</strong>
                . Building high-performance digital solutions with a focus on
                scalability, clean architecture, and exceptional user
                experience.
              </p>

              <div className="flex gap-4">
                {[
                  { Icon: FaGithub, link: "#" },
                  { Icon: FaTwitter, link: "#" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#FFD000] hover:text-black hover:border-[#FFD000] transition-all duration-300"
                  >
                    <social.Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Middle: Navigation */}
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFD000]">
                Explore
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/projects"
                    className="text-gray-400 hover:text-white font-bold transition-colors"
                  >
                    My Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    The Story
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right: Contact Grid */}
            <div className="lg:col-span-5 space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFD000]">
                Connect
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {/* Email Item */}
                <a
                  href="mailto:ikennaibenemee@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#FFD000]/30 transition-all"
                >
                  <div className="w-12 h-12 bg-[#FFD000]/10 rounded-xl flex items-center justify-center text-[#FFD000] group-hover:bg-[#FFD000] group-hover:text-black transition-all">
                    <FaEnvelope size={18} />
                  </div>
                  <span className="text-sm font-bold text-gray-300 group-hover:text-white">
                    ikennaibenemee@gmail.com
                  </span>
                </a>

                {/* WhatsApp Item */}
                <a
                  href="https://wa.me/2348120710198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#25D366]/30 transition-all"
                >
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                    <FaWhatsapp size={20} />
                  </div>
                  <span className="text-sm font-bold text-gray-300 group-hover:text-white">
                    Chat on WhatsApp
                  </span>
                </a>

                {/* Phone Item */}
                <a
                  href="tel:+2348120710198"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#FFD000]/30 transition-all"
                >
                  <div className="w-12 h-12 bg-[#FFD000]/10 rounded-xl flex items-center justify-center text-[#FFD000] group-hover:bg-[#FFD000] group-hover:text-black transition-all">
                    <FaPhone size={16} />
                  </div>
                  <span className="text-sm font-bold text-gray-300 group-hover:text-white">
                    (+234) 812 071 0198
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-xs text-gray-500 font-medium">
              © {currentYear}{" "}
              <span className="text-white font-black tracking-tight uppercase">
                Ibeneme
              </span>
              . All Rights Reserved.
            </p>

            <div className="flex items-center gap-10">
              <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.4em] hidden sm:block">
                IBENEME IKENNA KENNETH
              </span>
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#FFD000] hover:text-white transition-colors"
              >
                Jump to Top
                <div className="p-2 rounded-full border border-[#FFD000] group-hover:bg-[#FFD000] group-hover:text-black transition-all">
                  <IoArrowUpOutline size={14} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
