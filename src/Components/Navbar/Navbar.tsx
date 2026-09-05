import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu, Terminal, ArrowRight } from "lucide-react";
import logo from "../../assets/images/logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContact = () =>
    window.open("https://wa.me/2348120710198", "_blank");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
        .ide-font { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .status-dot { animation: pulseDot 2.4s ease-in-out infinite; }
        @keyframes overlayIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .overlay-in { animation: overlayIn 280ms ease both; }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(16px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .card-in { animation: cardIn 320ms cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 208, 0, 0.3); }
          50% { box-shadow: 0 0 0 8px rgba(255, 208, 0, 0); }
        }
        .cta-glow:hover { animation: glowPulse 1.6s ease-in-out infinite; }
        .nav-focus:focus-visible {
          outline: 2px solid #FFD000;
          outline-offset: 3px;
          border-radius: 10px;
        }
        @media (prefers-reduced-motion: reduce) {
          .status-dot, .overlay-in, .card-in, .cta-glow:hover {
            animation: none !important;
          }
        }
      `}</style>

      {/* Floating Navbar */}
      <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
        <div className="mx-auto max-w-5xl">
          <div
            className={`relative flex h-20 items-center justify-between rounded-full border px-3.5 transition-all duration-500 sm:h-16 sm:px-6 ${
              scrolled
                ? "border-[#270668]/80 bg-[#0A0314]/90 shadow-[0_12px_40px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
                : "border-[#270668]/50 bg-[#0A0314]/75 shadow-[0_8px_32px_rgba(0,0,0,0.55)] backdrop-blur-xl"
            }`}
          >
            <div className="pointer-events-none absolute inset-x-4 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-[#FFD000]/40 to-transparent" />

            {/* Brand */}
            <Link
              to="/"
              className="nav-focus group flex items-center gap-2 transition-transform duration-300 hover:scale-[1.03]"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-10 object-contain transition-transform duration-300 group-hover:rotate-6 sm:h-8 sm:w-8"
              />
              <span className="text-[20px] font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#FFD000]">
                ibeneme.com
              </span>
            </Link>

            {/* Desktop Links */}
            <ul className="hidden items-center gap-1 text-[13px] md:flex">
              {navItems.map(({ name, path }) => {
                const active = location.pathname === path;
                return (
                  <li key={name}>
                    <Link
                      to={path}
                      className={`nav-focus relative flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 ${
                        active
                          ? "bg-[#270668]/60 text-white font-medium border border-[#270668]"
                          : "text-purple-200/65 hover:bg-[#270668]/35 hover:text-white"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                          active
                            ? "bg-[#FFD000] shadow-[0_0_10px_#FFD000]"
                            : "bg-transparent scale-0"
                        }`}
                      />
                      {name.toLowerCase()}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop CTA */}
            <button
              onClick={handleContact}
              className="nav-focus cta-glow hidden items-center gap-2 rounded-full bg-[#FFD000] px-5 py-2.5 text-[13px] font-bold text-[#0A0314] transition-all duration-300 hover:bg-[#ffe052] hover:shadow-[0_0_28px_rgba(255,208,0,0.45)] md:inline-flex"
            >
              <Terminal size={14} strokeWidth={2.5} />
              Send Message
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="nav-focus grid h-12 w-12 place-items-center rounded-full border border-[#270668] bg-[#270668]/40 text-white transition-all duration-300 hover:bg-[#270668]/70 sm:h-10 sm:w-10 md:hidden"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Themed #0A0314 Card Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 flex items-start justify-center bg-[#0A0314]/80 backdrop-blur-md pt-20 px-4 sm:pt-24 sm:px-6 md:hidden overlay-in w-full"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="card-in w-full max-w-[500px] rounded-[24px] border border-[#27066845] bg-[#0A0314] shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden sm:max-w-[340px] sm:rounded-[28px]"
          >
            {/* Links */}
            <div className="px-5 pt-5 pb-2 sm:px-6 sm:pt-6">
              {navItems.map(({ name, path }) => {
                const active = location.pathname === path;
                return (
                  <Link
                    key={name}
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className="nav-focus flex items-center justify-between py-3.5 group border-b border-[#270668]/30 last:border-none"
                  >
                    <span
                      className={`text-[1.2rem] font-semibold tracking-tight transition-colors sm:text-[1.35rem] ${
                        active
                          ? "text-[#FFD000]"
                          : "text-white group-hover:text-[#FFD000]"
                      }`}
                    >
                      {name.toLowerCase()}
                    </span>
                    <ArrowRight
                      size={18}
                      className="text-[#FFD000] transition-transform duration-200 group-hover:translate-x-1"
                      strokeWidth={2.5}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Divider */}
            <div className="mx-5 border-t border-[#270668]/50 sm:mx-6" />

            {/* Bottom section */}
            <div className="px-5 pt-4 pb-5 sm:px-6 sm:pt-5 sm:pb-6">
              <p className="text-[10px] font-medium tracking-[0.1em] text-purple-200/50 uppercase mb-3 sm:mb-4">
                Get in touch
              </p>
              <div className="flex gap-2.5 sm:gap-3">
                <button
                  onClick={handleContact}
                  className="nav-focus flex-1 flex items-center justify-center gap-2 rounded-full bg-[#FFD000] py-2.5 text-xs font-bold text-[#0A0314] transition-transform active:scale-[0.97] sm:py-3 sm:text-sm"
                >
                  <Terminal size={14} strokeWidth={2.5} />
                  WhatsApp
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="nav-focus flex-1 flex items-center justify-center rounded-full border border-[#270668] bg-[#270668]/40 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#270668]/70 sm:py-3 sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
