import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu } from "lucide-react"; // Added Menu icon for clarity
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-[120] px-4 pt-6 md:px-6 md:py-8 pointer-events-none">
        <div className="max-w-5xl mx-auto flex items-center justify-between bg-[#0C0D0E]/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 pointer-events-auto shadow-2xl shadow-black/20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="logo"
              className="w-6 h-6 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
            />
            <span className="hidden sm:block text-[10px] font-bold tracking-[0.2em] text-zinc-300 uppercase">
              Ibeneme
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className={`text-[10px] uppercase tracking-[0.3em] transition-all duration-300 ${
                    location.pathname === path
                      ? "text-white font-bold"
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <button
            onClick={() =>
              (window.location.href = "mailto:ikennaibenemee@gmail.com")
            }
            className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-500"
          >
            Connect
          </button>

          {/* Mobile Trigger */}
          <button
            className="md:hidden text-zinc-300 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay with Slide-down effect */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0C0D0E]/95 backdrop-blur-md z-[110] flex flex-col items-center justify-center gap-8"
          >
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className="text-4xl font-light text-zinc-400 hover:text-white transition-all duration-300 hover:tracking-[0.2em]"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            ))}
            <button
              onClick={() =>
                (window.location.href = "mailto:ikennaibenemee@gmail.com")
              }
              className="mt-8 text-sm uppercase tracking-[0.3em] text-[#ffd000]"
            >
              Get in touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
