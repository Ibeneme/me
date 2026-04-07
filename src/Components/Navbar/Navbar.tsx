import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Mail, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Projects", path: "/projects" },
  ];

  const handleMailMe = () => {
    window.location.href = "mailto:ikennaibenemee@gmail.com";
  };

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-[120] px-4 md:px-10 py-6 md:py-10 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-[2.5rem] px-5 md:px-10 py-3 md:py-4 shadow-2xl pointer-events-auto">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="ibeneme"
              className="w-8 h-6 md:w-10 md:h-8 object-contain"
            />
            <div className="hidden lg:block h-4 w-px bg-white/10" />
            <span className="hidden lg:block text-white text-[10px] font-black uppercase tracking-[0.4em] opacity-40">
              IBENEME IKENNA
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10">
            {navItems.map(({ name, path }) => {
              const isActive = location.pathname === path;
              return (
                <li key={name}>
                  <Link
                    to={path}
                    className={`text-[10px] font-black uppercase tracking-[0.5em] transition-all relative group ${
                      isActive
                        ? "text-yellow-500"
                        : "text-white/40 hover:text-white"
                    }`}
                  >
                    {name}
                    <span
                      className={`absolute -bottom-1 left-0 h-[1px] bg-yellow-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Action Button (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={handleMailMe}
              className="px-6 py-3 bg-white hover:bg-yellow-500 text-black rounded-xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center gap-3 group"
            >
              Contact
              <Mail
                size={14}
                className="group-hover:rotate-12 transition-transform"
              />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            className="md:hidden flex items-center justify-center p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={24} className="text-yellow-500" />
            ) : (
              <div className="flex flex-col gap-1.5 items-end">
                <div className="w-6 h-[2px] bg-white" />
                <div className="w-4 h-[2px] bg-yellow-500" />
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#0B0A0F] z-[110] flex flex-col p-10 pt-32"
          >
            {/* Background Accent */}
            <div className="absolute top-20 left-10 text-[12rem] font-black text-white/[0.02] leading-none select-none pointer-events-none">
              MENU
            </div>

            <div className="flex flex-col justify-between h-full relative z-10">
              <ul className="space-y-8">
                {navItems.map(({ name, path }, index) => {
                  const isActive = location.pathname === path;
                  return (
                    <motion.li
                      key={name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={path}
                        className={`text-5xl font-black uppercase tracking-tighter flex items-center gap-4 ${
                          isActive ? "text-yellow-500" : "text-white/20"
                        }`}
                      >
                        {name}
                        {isActive && <ArrowUpRight size={32} />}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Bottom Mobile Content */}
              <div className="space-y-10">
                <div className="h-px w-full bg-white/5" />

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleMailMe}
                  className="w-full py-5 bg-yellow-500 text-black rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4"
                >
                  Start a Project
                  <Mail size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
