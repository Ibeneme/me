import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu } from "lucide-react";
import logo from "../../assets/images/image-header.png";

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
    window.open("mailto:ikennaibenemee@gmail.com", "_blank");

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-[120] px-4 pt-5 md:px-6 md:pt-6 pointer-events-none">
        <div className="max-w-5xl mx-auto flex items-center justify-between bg-[#0C0D0E]/70 backdrop-blur-xl border border-white/[0.08] rounded-full px-5 py-2.5 pointer-events-auto shadow-2xl shadow-black/30 transition-all duration-300">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
              <img
                src={logo}
                alt="Ibeneme"
                className="relative w-6 h-6 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <span className="hidden sm:block text-[9px] font-bold tracking-[0.25em] text-zinc-400 uppercase group-hover:text-zinc-200 transition-colors duration-300">
              Ibeneme
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map(({ name, path }) => {
              const isActive = location.pathname === path;
              return (
                <li
                  key={name}
                  className="relative flex flex-col items-center gap-1"
                >
                  <Link
                    to={path}
                    className={`text-[9px] uppercase tracking-[0.3em] transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-zinc-500 hover:text-zinc-200"
                    }`}
                  >
                    {name}
                  </Link>
                  <span
                    className={`block h-px rounded-full bg-white transition-all duration-300 ${
                      isActive ? "w-3 opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </li>
              );
            })}
          </ul>

          {/* Connect Button */}
          <button
            onClick={handleContact}
            className="hidden md:flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-zinc-300 border border-white/15 px-5 py-2 rounded-full hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            Connect
          </button>

          {/* Mobile Trigger */}
          <button
            className="md:hidden text-zinc-400 hover:text-white transition-colors duration-200 p-1.5 -mr-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[110] flex flex-col items-center justify-center transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(12, 13, 14, 0.97)",
          backdropFilter: "blur(20px)",
        }}
        onClick={() => setIsOpen(false)}
      >
        <div
          className="flex flex-col items-center gap-6"
          onClick={(e) => e.stopPropagation()}
        >
          {navItems.map(({ name, path }, i) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={name}
                to={path}
                onClick={() => setIsOpen(false)}
                style={{
                  transitionDelay: isOpen ? `${i * 60}ms` : "0ms",
                  transform: isOpen ? "translateY(0)" : "translateY(12px)",
                  opacity: isOpen ? 1 : 0,
                  transition: "transform 0.4s ease, opacity 0.4s ease",
                }}
                className={`text-4xl font-light tracking-tight transition-colors duration-200 ${
                  isActive ? "text-white" : "text-zinc-500 hover:text-zinc-100"
                }`}
              >
                {name}
              </Link>
            );
          })}

          <button
            onClick={handleContact}
            style={{
              transitionDelay: isOpen
                ? `${navItems.length * 60 + 40}ms`
                : "0ms",
              transform: isOpen ? "translateY(0)" : "translateY(12px)",
              opacity: isOpen ? 1 : 0,
              transition: "transform 0.4s ease, opacity 0.4s ease",
            }}
            className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#ffd000] hover:gap-3 transition-all duration-300"
          >
            Get in touch <span>→</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
