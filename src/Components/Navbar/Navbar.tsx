import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu, Terminal } from "lucide-react";
// Import your logo from assets
import logo from "../../assets/images/logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const handleContact = () =>
    window.open("https://wa.me/2348120710198", "_blank");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');

        .ide-font { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        .body-font { font-family: 'Inter', system-ui, sans-serif; }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }
        .status-dot { animation: pulseDot 2.2s ease-in-out infinite; }

        @keyframes overlayIn {
          from { opacity: 0; clip-path: inset(0 0 100% 0); }
          to { opacity: 1; clip-path: inset(0 0 0 0); }
        }
        .overlay-in { animation: overlayIn 420ms cubic-bezier(0.16, 1, 0.3, 1) both; }

        @keyframes itemIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .item-in { animation: itemIn 480ms cubic-bezier(0.16, 1, 0.3, 1) both; }

        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 208, 0, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(255, 208, 0, 0); }
        }
        .cta-glow:hover { animation: glowPulse 1.6s ease-in-out infinite; }

        .nav-focus:focus-visible {
          outline: 2px solid #FFD000;
          outline-offset: 3px;
          border-radius: 8px;
        }

        .grad-text {
          background: linear-gradient(110deg, #FFD000 0%, #E8D5FF 50%, #FFFFFF 100%);
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

      {/* Floating island navbar */}
      <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="relative flex h-14 items-center justify-between rounded-[120px] border border-[#270668]/60 bg-[#0A0314]/80 px-4 shadow-[0_8px_32px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:h-16 sm:px-6">
            {/* Ambient top highlight line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-[#270668] to-transparent" />

            {/* Brand Logo & Name */}
            <Link
              to="/"
              className="nav-focus flex items-center gap-2.5 transition-transform hover:scale-105"
            >
              <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
              <span className="ide-font text-sm font-bold tracking-tight text-white hover:text-[#FFD000] transition-colors hidden sm:inline-block">
                ibeneme.dev
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="ide-font hidden items-center gap-1 text-[13px] md:flex">
              {navItems.map(({ name, path }) => {
                const active = location.pathname === path;
                return (
                  <li key={name}>
                    <Link
                      to={path}
                      className={`nav-focus relative flex items-center gap-2 rounded-xl px-4 py-2 transition-all duration-200 ${
                        active
                          ? "bg-[#270668]/50 text-white font-medium border border-[#270668]"
                          : "text-purple-200/70 hover:bg-[#270668]/30 hover:text-white"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                          active
                            ? "bg-[#FFD000] shadow-[0_0_8px_#FFD000]"
                            : "bg-transparent"
                        }`}
                      />
                      {name.toLowerCase()}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop CTA Button */}
            <button
              onClick={handleContact}
              className="nav-focus cta-glow hidden items-center gap-2 rounded-[120px] bg-[#FFD000] px-4 py-2 text-[13px] font-bold text-[#0A0314] transition-all duration-300 hover:bg-[#ffe052] hover:shadow-[0_0_24px_rgba(255,208,0,0.45)] md:inline-flex"
            >
              <Terminal size={14} strokeWidth={2.5} />
              Send Message
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="nav-focus grid h-10 w-10 place-items-center rounded-xl border border-[#270668] bg-[#270668]/30 text-white transition-colors hover:bg-[#270668]/60 md:hidden"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-[#0A0314]/95 backdrop-blur-2xl md:hidden"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="overlay-in relative flex h-full flex-col justify-center px-8 pb-28 pt-24"
          >
            {/* Background Grid Pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "radial-gradient(#FFD000 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            {/* Purple Radial Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#270668] opacity-60 blur-[120px]" />

            <div className="relative">
              {/* Terminal Header Info */}
              <span className="ide-font mb-10 flex items-center gap-2.5 text-xs tracking-wide text-purple-300/60">
                <span className="status-dot h-2 w-2 rounded-full bg-[#FFD000] shadow-[0_0_12px_#FFD000]" />
                root@ibeneme ~ % menu
              </span>

              {/* Mobile Navigation */}
              <nav className="flex flex-col gap-2">
                {navItems.map(({ name, path }, i) => {
                  const active = location.pathname === path;
                  return (
                    <Link
                      key={name}
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className="nav-focus item-in ide-font group flex items-baseline gap-3 rounded-xl py-3 text-[2rem] font-medium leading-none sm:text-[2.4rem]"
                      style={{ animationDelay: `${80 + i * 70}ms` }}
                    >
                      <span className="text-lg text-[#FFD000] transition-colors group-hover:text-[#FFD000]">
                        $
                      </span>
                      <span
                        className={
                          active
                            ? "grad-text font-bold"
                            : "text-purple-100/70 transition-colors group-hover:text-white"
                        }
                      >
                        {name.toLowerCase()}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile CTA */}
              <button
                onClick={handleContact}
                className="nav-focus item-in ide-font mt-12 inline-flex w-fit items-center gap-2.5 rounded-2xl bg-[#FFD000] px-6 py-3.5 text-sm font-bold text-[#0A0314] shadow-lg shadow-[#FFD000]/20 transition-transform active:scale-95"
                style={{ animationDelay: "320ms" }}
              >
                <Terminal size={16} strokeWidth={2.5} />
                get in touch
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
