import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const columns = [
  {
    title: "Navigation",
    links: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Projects", to: "/projects" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Email", href: "mailto:ikennaibenemee@gmail.com" },
      { label: "WhatsApp", href: "https://wa.me/2349069527816" },
    ],
  },
  {
    title: "Socials",
    links: [
      { label: "GitHub", href: "https://github.com/ibeneme" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/ikennaibeneme" },
      { label: "Twitter / X", href: "https://twitter.com/ibeneme" },
    ],
  },
] as const;

const Footer: React.FC = () => (
  <footer className="overflow-hidden border-t border-line bg-panel pt-16 pb-10 md:pt-20">
    <div className="container-x">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="flex flex-col gap-5 md:col-span-5">
          <Link to="/" className="text-[24px] font-semibold tracking-[-0.02em] text-cream">
            ibeneme<span className="text-brand">.</span>
          </Link>
          <p className="max-w-[32ch] text-[16px] leading-[1.4] text-muted">
            Building thoughtful digital experiences and AI-driven workflows.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="md:col-span-2">
            <span className="bracket mb-5 block text-[16px] text-muted">{col.title}</span>
            <ul className="flex flex-col gap-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  {"to" in l ? (
                    <Link to={l.to} className="ghost-link !text-cream hover:!text-brand-light">
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="ghost-link !text-cream hover:!text-brand-light"
                    >
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-line pt-8 md:flex-row md:items-center">
        <p className="t-caption text-muted">© {new Date().getFullYear()} Ibeneme Ikenna. All rights reserved.</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="pill pill-sm"
        >
          Back to top <ArrowUp size={16} strokeWidth={1.5} />
        </button>
      </div>

      <p
        aria-hidden
        className="mt-12 select-none whitespace-nowrap text-[clamp(64px,19vw,260px)] font-semibold leading-[0.85] tracking-[-0.03em] text-cream"
      >
        ibeneme<span className="brand-text">.</span>
      </p>
    </div>
  </footer>
);

export default Footer;
