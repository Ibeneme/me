import React from "react";
import { Link } from "react-router-dom";
import { IoArrowUpOutline } from "react-icons/io5";
import logo from "../../assets/images/logo.png";

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0A0314] pt-24 pb-12 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-16 mb-20">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <Link
                to="/"
                className="nav-focus group flex items-center gap-2 transition-transform duration-300 hover:scale-[1.03]"
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="h-7 w-7 object-contain transition-transform duration-300 group-hover:rotate-6 sm:h-8 sm:w-8"
                />
                <span className="text-xs font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#FFD000] sm:text-sm">
                  ibeneme.com
                </span>
              </Link>
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
        <div className="pt-10 border-t border-zinc-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <p className="text-zinc-600 text-xs tracking-widest">
              © {new Date().getFullYear()} All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-all duration-300 uppercase tracking-[0.125em] text-xs"
            >
              Back to top
              <div className="transition-transform duration-300 group-hover:-translate-y-0.5">
                <IoArrowUpOutline size={14} />
              </div>
            </button>
          </div>

          {/* Decorative lines + Big name */}
          <div className="relative">


            <h2 className="text-[64px] sm:text-[100px] md:text-[160px] lg:text-[220px] xl:text-[250px] font-bold text-[#ffffff] tracking-tighter leading-none select-none text-center">
              Ibeneme <span style={{ color: "#ffd000" }}>.</span>
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
