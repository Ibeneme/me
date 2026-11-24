import React, { useEffect, useRef } from "react";
import { Bracket } from "../components/ui";
import { LIVE_APPS, AppLink } from "../data/projects";
import { SITE } from "../data/site";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import { useMotion } from "../hooks/useMotion";

const AppleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5.14v14l11-7-11-7z" />
  </svg>
);

const StoreLinks: React.FC<{ apps: AppLink[] }> = ({ apps }) => (
  <div className="flex flex-col gap-5">
    {apps.map((app, i) => (
      <div key={i} className="flex flex-col gap-3">
        {app.name && <p className="t-caption text-muted">{app.name}</p>}
        <div className="flex flex-wrap gap-2">
          {app.ios && (
            <a href={app.ios} target="_blank" rel="noopener noreferrer" aria-label={`Download ${app.name || "app"} on the App Store`} className="pill pill-sm">
              <AppleIcon /> App Store
            </a>
          )}
          {app.android && (
            <a href={app.android} target="_blank" rel="noopener noreferrer" aria-label={`Get ${app.name || "app"} on Google Play`} className="pill pill-sm">
              <PlayIcon /> Google Play
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
);

/** Cards flip up in 3D like a dealt hand of cards. */
const LiveApps: React.FC = () => {
  const root = useRef<HTMLElement>(null);
  useMotion(root);

  useEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(".app-card", {
        rotationX: -80,
        rotationZ: (i) => (i % 2 ? 6 : -6),
        y: 120,
        opacity: 0,
        transformPerspective: 1000,
        transformOrigin: "50% 100%",
        duration: 1.4,
        ease: "expo.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".app-grid", start: "top 80%", toggleActions: "play none none none" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="bg-ink py-20 md:py-28">
      <div className="container-x">
        <div className="mb-14 flex flex-col gap-6">
          <Bracket>Live in the stores</Bracket>
          <h2 data-split className="t-heading max-w-[14ch]">
            Recent mobile apps
          </h2>
        </div>

        <div className="app-grid grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {LIVE_APPS.map((p, i) => {
            const open = p.status === "Open";
            return (
              <article
                key={p.title}
                data-tilt
                className={`app-card flex flex-col gap-6 rounded-[8px] p-6 ${open ? "border border-dashed border-brand/60 bg-ink" : "bg-panel"}`}
              >
                <div className="flex items-center justify-between">
                  <span className="t-caption text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span className={`t-caption ${open ? "brand-text" : "text-pinky"}`}>{p.status}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="t-caption text-muted">{p.label}</span>
                  <h3 className="text-[28px] font-semibold leading-[1.05] tracking-[-0.025em]">{p.title}</h3>
                  <p className="text-[16px] font-light leading-[1.5] text-white/75">{p.description}</p>
                </div>
                <div className="mt-auto">
                  {open ? (
                    <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" data-magnetic className="pill pill-cta pill-sm">
                      Let&apos;s build something
                    </a>
                  ) : (
                    <StoreLinks apps={p.apps} />
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LiveApps;
