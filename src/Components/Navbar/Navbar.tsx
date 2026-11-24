import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
];

const WHATSAPP = "https://wa.me/2349069527816";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement banner */}
      <div className="relative z-50 bg-ink py-2.5 text-center t-caption text-cream">
        Currently available for new work —{" "}
        <a
          href="mailto:ikennaibenemee@gmail.com"
          className="text-brand underline-offset-4 hover:underline"
        >
          say hello
        </a>
      </div>

      <nav
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-ink/90 backdrop-blur-md" : "bg-ink"
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between">
          <Link to="/" className="text-[24px] font-semibold tracking-[-0.02em] text-cream">
            ibeneme<span className="text-brand">.</span>
          </Link>

          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  aria-current={location.pathname === path ? "page" : undefined}
                  className="ghost-link py-2.5"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="pill pill-cta pill-sm">
              Let&apos;s talk
            </a>
          </div>

          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="grid h-10 w-10 place-items-center rounded-full text-cream md:hidden"
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
        <div className="hairline" />
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[113px] z-40 flex flex-col bg-ink md:hidden">
          <div className="container-x flex flex-1 flex-col justify-between py-10">
            <ul>
              {navItems.map(({ name, path }) => (
                <li key={name} className="border-b border-line">
                  <Link
                    to={path}
                    className={`block py-5 t-heading-sm ${
                      location.pathname === path ? "text-cream" : "text-muted"
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3">
              <span className="bracket text-muted">get in touch</span>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="pill pill-cta">
                WhatsApp
              </a>
              <a href="mailto:ikennaibenemee@gmail.com" className="pill">
                Email
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
