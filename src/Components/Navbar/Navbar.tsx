import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, } from "lucide-react";
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
      <nav className="fixed top-0 inset-x-0 z-[120] px-6 py-8 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between bg-[#0C0D0E]/80 backdrop-blur-md border border-white/5 rounded-full px-6 py-3 pointer-events-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="w-6 h-6 object-contain opacity-80"
            />
            <span className="text-[10px] font-medium tracking-[0.2em] text-zinc-400 uppercase">
              Ibeneme
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className={`text-[10px] uppercase tracking-[0.3em] transition-colors ${
                    location.pathname === path
                      ? "text-white"
                      : "text-zinc-500 hover:text-zinc-300"
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
            className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-zinc-300 border border-white/10 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-500"
          >
            Connect
          </button>

          {/* Mobile Trigger */}
          <button
            className="md:hidden text-zinc-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={20} />
            ) : (
              <div className="space-y-1.5">
                <div className="w-5 h-[1px] bg-zinc-400" />
                <div className="w-3 h-[1px] bg-zinc-400" />
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0C0D0E] z-[110] flex flex-col items-center justify-center gap-8"
          >
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className="text-3xl font-light text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
