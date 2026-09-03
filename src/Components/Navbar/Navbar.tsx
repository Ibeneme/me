import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu, Terminal } from "lucide-react";
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

        @keyframes itemIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .item-in { animation: itemIn 400ms cubic-bezier(0.16, 1, 0.3, 1) both; }

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

        .grad-text {
          background: linear-gradient(110deg, #FFD000 0%, #E8D5FF 55%, #FFFFFF 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        @media (prefers-reduced-motion: reduce) {
          .status-dot, .overlay-in, .item-in, .cta-glow:hover {
            animation: none !important;
          }
        }
      `}</style>

      {/* Floating Navbar */}
      <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div
            className={`relative flex h-14 items-center justify-between rounded-full border px-4 transition-all duration-500 sm:h-16 sm:px-6 ${
              scrolled
                ? "border-[#270668]/80 bg-[#0A0314]/90 shadow-[0_12px_40px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
                : "border-[#270668]/50 bg-[#0A0314]/75 shadow-[0_8px_32px_rgba(0,0,0,0.55)] backdrop-blur-xl"
            }`}
          >
            <div className="pointer-events-none absolute inset-x-4 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-[#FFD000]/40 to-transparent" />

            {/* Brand */}
            <Link
              to="/"
              className="nav-focus group flex items-center gap-2.5 transition-transform duration-300 hover:scale-[1.03]"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-8 w-8 object-contain transition-transform duration-300 group-hover:rotate-6"
              />
              <span className="ide-font hidden text-sm font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#FFD000] sm:inline-block">
                ibeneme.dev
              </span>
            </Link>

            {/* Desktop Links */}
            <ul className="ide-font hidden items-center gap-1 text-[13px] md:flex">
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
              className="nav-focus grid h-10 w-10 place-items-center rounded-full border border-[#270668] bg-[#270668]/40 text-white transition-all duration-300 hover:bg-[#270668]/70 md:hidden"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Clean & Professional */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-[#0A0314]/97 backdrop-blur-xl md:hidden"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="overlay-in flex h-full flex-col"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 pt-6">
              <div className="ide-font flex items-center gap-2 text-xs text-purple-300/50">
                <span className="status-dot h-1.5 w-1.5 rounded-full bg-[#FFD000]" />
                menu
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="nav-focus grid h-9 w-9 place-items-center rounded-full border border-[#270668]/60 text-white/70 transition-colors hover:bg-[#270668]/40 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-center px-8">
              <nav className="flex flex-col gap-1">
                {navItems.map(({ name, path }, i) => {
                  const active = location.pathname === path;
                  return (
                    <Link
                      key={name}
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className="nav-focus item-in ide-font group flex items-center gap-3 py-4 text-[1.75rem] font-medium leading-none tracking-tight"
                      style={{ animationDelay: `${60 + i * 60}ms` }}
                    >
                      <span
                        className={`text-sm transition-colors ${
                          active
                            ? "text-[#FFD000]"
                            : "text-purple-400/40 group-hover:text-[#FFD000]"
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className={
                          active
                            ? "grad-text font-semibold"
                            : "text-white/80 transition-colors duration-200 group-hover:text-white"
                        }
                      >
                        {name}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              {/* CTA */}
              <div
                className="item-in mt-12"
                style={{ animationDelay: "280ms" }}
              >
                <button
                  onClick={handleContact}
                  className="nav-focus ide-font inline-flex items-center gap-2.5 rounded-full bg-[#FFD000] px-6 py-3 text-sm font-semibold text-[#0A0314] transition-all duration-300 active:scale-[0.97]"
                >
                  <Terminal size={15} strokeWidth={2.5} />
                  Get in touch
                </button>
              </div>
            </div>

            {/* Bottom subtle line */}
            <div className="px-8 pb-10">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#ffffff15] to-transparent" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
