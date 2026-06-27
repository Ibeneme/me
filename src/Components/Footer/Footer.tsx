import React from "react";
import { Link } from "react-router-dom";
import { IoArrowUpOutline } from "react-icons/io5";

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0C0D0E] pt-24 pb-16 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-16 mb-20">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xl font-semibold text-white tracking-tight">
                Ibeneme Ikenna
              </span>
            </div>
            <p className="text-zinc-400 leading-relaxed max-w-md text-[15px]">
              Building thoughtful digital experiences and AI-driven workflows.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.125em] text-zinc-500 mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["Home", "About", "Projects"].map((item) => (
                <li key={item}>
                  <Link
                    to={
                      item.toLowerCase() === "home"
                        ? "/"
                        : `/${item.toLowerCase()}`
                    }
                    className="text-zinc-400 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.125em] text-zinc-500 mb-6">
              Connect
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:ikennaibenemee@gmail.com"
                  className="text-zinc-400 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2348120710198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.125em] text-zinc-500 mb-6">
              Socials
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Twitter / X
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-zinc-900 text-xs">
          <p className="text-zinc-600 tracking-widest">
            © {new Date().getFullYear()} Ibeneme Ikenna. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-all duration-300 uppercase tracking-[0.125em]"
          >
            Back to top
            <div className="transition-transform duration-300 group-hover:-translate-y-0.5">
              <IoArrowUpOutline size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
