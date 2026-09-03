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

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Detect scroll for subtle style change
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
        .body-font { font-family: 'Inter', system-ui, sans-serif; }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(0.8); }
        }
        .status-dot { animation: pulseDot 2.2s ease-in-out infinite; }

        @keyframes overlayIn {
          from { opacity: 0; clip-path: inset(0 0 100% 0); }
          to { opacity: 1; clip-path: inset(0 0 0 0); }
        }
        .overlay-in { animation: overlayIn 420ms cubic-bezier(0.16, 1, 0.3, 1) both; }

        @keyframes itemIn {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .item-in { animation: itemIn 500ms cubic-bezier(0.16, 1, 0.3, 1) both; }

        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 208, 0, 0.35); }
          50% { box-shadow: 0 0 0 10px rgba(255, 208, 0, 0); }
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
            {/* Top highlight line */}
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
            {/* Subtle grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: "radial-gradient(#FFD000 1px, transparent 1px)",
                backgroundSize: "26px 26px",
              }}
            />

            {/* Soft purple glow */}
            <div className="pointer-events-none absolute left-1/2 top-[38%] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#270668] opacity-50 blur-[130px]" />

            <div className="relative">
              {/* Terminal header */}
              <div className="ide-font mb-12 flex items-center gap-2.5 text-xs tracking-wide text-purple-300/55">
                <span className="status-dot h-2 w-2 rounded-full bg-[#FFD000] shadow-[0_0_14px_#FFD000]" />
                root@ibeneme ~ % menu
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-1">
                {navItems.map(({ name, path }, i) => {
                  const active = location.pathname === path;
                  return (
                    <Link
                      key={name}
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className="nav-focus item-in ide-font group flex items-baseline gap-3 rounded-xl py-3.5 text-[2.1rem] font-medium leading-none sm:text-[2.5rem]"
                      style={{ animationDelay: `${90 + i * 80}ms` }}
                    >
                      <span className="text-lg text-[#FFD000] opacity-80 transition-opacity group-hover:opacity-100">
                        $
                      </span>
                      <span
                        className={
                          active
                            ? "grad-text font-bold"
                            : "text-purple-100/70 transition-colors duration-300 group-hover:text-white"
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
                className="nav-focus item-in ide-font mt-14 inline-flex w-fit items-center gap-2.5 rounded-2xl bg-[#FFD000] px-7 py-3.5 text-sm font-bold text-[#0A0314] shadow-lg shadow-[#FFD000]/25 transition-all duration-300 active:scale-95"
                style={{ animationDelay: "340ms" }}
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