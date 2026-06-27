import React from "react";
import { Link } from "react-router-dom";
import { IoArrowUpOutline } from "react-icons/io5";

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0C0D0E] pt-24 pb-12 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-sm font-medium text-white">
              Ibeneme Ikenna
            </span>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-[200px]">
              Building thoughtful digital experiences and AI-driven workflows.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Projects"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${
                      item.toLowerCase() === "home" ? "" : item.toLowerCase()
                    }`}
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:ikennaibenemee@gmail.com"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2348120710198"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
              Socials
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-zinc-900">
          <p className="text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
            © 2026 Ibeneme Ikenna. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors"
          >
            Back to top <IoArrowUpOutline size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
