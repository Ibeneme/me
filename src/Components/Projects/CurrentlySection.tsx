import React, { useEffect, useRef, useState } from "react";

const AppleIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M8 5.14v14l11-7-11-7z" />
  </svg>
);

type AppLink = {
  name?: string; // Replaces the parallel labels array
  ios?: string;
  android?: string;
};

type Project = {
  label: string;
  title: string;
  description: string;
  status: string;
  statusColor: string;
  apps: AppLink[];
};

const projects: Project[] = [
  {
    label: "Active project",
    title: "Skypay Africa",
    description:
      "A cross-border fintech app making payments seamless across Africa — built with React Native and TypeScript for iOS and Android.",
    status: "Live",
    statusColor: "#4ade80",
    apps: [
      {
        ios: "https://apps.apple.com/us/app/skypay-africa/id6758510766",
        android:
          "https://play.google.com/store/apps/details?id=com.skypayafrica.app",
      },
    ],
  },
  {
    label: "Just shipped",
    title: "Pickars",
    description:
      "A two-sided logistics platform — the rider app and the driver app, both live. Connecting pickups to drivers across Nigeria.",
    status: "Shipped",
    statusColor: "#818cf8",
    apps: [
      {
        name: "Pickars — Rider App",
        ios: "https://apps.apple.com/us/app/pickars/id6746796884",
        android:
          "https://play.google.com/store/apps/details?id=com.pickars.app",
      },
      {
        name: "Pickars Riders — Driver App",
        ios: "https://apps.apple.com/us/app/pickars-riders/id6748903962",
        android:
          "https://play.google.com/store/apps/details?id=com.pickars.drivers&hl=en",
      },
    ],
  },
  {
    label: "Upcoming",
    title: "Could be you",
    description:
      "Got an app idea, a product to ship, or a team that needs a mobile engineer? Let's build something together.",
    status: "Open",
    statusColor: "#ffd000",
    apps: [],
  },
];

const AppBadges: React.FC<{ apps: AppLink[] }> = ({ apps }) => (
  <div className="flex flex-col gap-4 mt-6">
    {apps.map((app, i) => (
      <div
        key={i}
        className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] transition-all duration-300 group-hover:border-white/10"
      >
        {app.name && (
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 mb-2.5">
            {app.name}
          </p>
        )}
        <div className="flex flex-wrap gap-2.5">
          {app.ios && (
            <a
              href={app.ios}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Download ${app.name || "App"} on the App Store`}
              className="group/btn flex items-center gap-3 px-3.5 py-2.5 bg-white/[0.03] hover:bg-[#ffd000] border border-white/[0.07] hover:border-[#ffd000] rounded-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-[0_0_20px_rgba(255,208,0,0.25)]"
            >
              <div className="text-white/60 group-hover/btn:text-black transition-colors duration-300">
                <AppleIcon />
              </div>
              <div className="leading-tight">
                <div className="text-[8px] uppercase tracking-[0.16em] text-zinc-500 group-hover/btn:text-zinc-800 transition-colors">
                  Download on the
                </div>
                <div className="font-semibold text-[13px] text-white group-hover/btn:text-black transition-colors">
                  App Store
                </div>
              </div>
            </a>
          )}
          {app.android && (
            <a
              href={app.android}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get ${app.name || "App"} on Google Play`}
              className="group/btn flex items-center gap-3 px-3.5 py-2.5 bg-white/[0.03] hover:bg-[#ffd000] border border-white/[0.07] hover:border-[#ffd000] rounded-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-[0_0_20px_rgba(255,208,0,0.25)]"
            >
              <div className="text-white/60 group-hover/btn:text-black transition-colors duration-300">
                <PlayIcon />
              </div>
              <div className="leading-tight">
                <div className="text-[8px] uppercase tracking-[0.16em] text-zinc-500 group-hover/btn:text-zinc-800 transition-colors">
                  Get it on
                </div>
                <div className="font-semibold text-[13px] text-white group-hover/btn:text-black transition-colors">
                  Google Play
                </div>
              </div>
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
);

const CurrentlySection: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#0A0314] max-w-7xl mx-auto px-5 sm:px-8 py-24 md:py-32 overflow-hidden"
    >
      {/* Header */}
      <div
        className={`flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-16 md:mb-20 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h2 className="text-[32px] text-white font-bold m-0">
          Recent Mobile Apps
        </h2>
        <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 self-start sm:self-auto">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[11px] uppercase tracking-[0.18em] font-medium">
            Live Portfolio
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
        {projects.map((project, i) => {
          const isUpcoming = project.status === "Open";
          const number = String(i + 1).padStart(2, "0");

          return (
            <div
              key={project.title}
              className={`
                group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl
                bg-white/[0.02] border border-white/[0.07]
                transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:border-[#ffd000]/50 hover:-translate-y-2
                hover:shadow-[0_20px_40px_-12px_rgba(255,208,0,0.12)]
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }
              `}
              style={{
                transitionDelay: visible ? `${i * 120}ms` : "0ms",
              }}
            >
              {/* Soft gradient overlay */}
              <div
                className={`absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-500 ${
                  isUpcoming
                    ? "bg-gradient-to-br from-[#ffd000]/[0.04] to-transparent opacity-100"
                    : "bg-gradient-to-br from-[#ffd000]/[0.03] to-transparent opacity-0 group-hover:opacity-100"
                }`}
              />

              <div className="relative z-10">
                {/* Top meta */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-xs font-mono tracking-tight px-2.5 py-1 rounded-md bg-white/[0.04] transition-all duration-300 group-hover:bg-[#ffd000] group-hover:text-black"
                    style={{ color: project.statusColor }}
                  >
                    {number}
                  </span>

                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium border transition-all duration-300"
                    style={{
                      color: project.statusColor,
                      borderColor: `${project.statusColor}40`,
                      backgroundColor: `${project.statusColor}14`,
                    }}
                  >
                    {project.status}
                  </div>
                </div>

                <span className="text-[11px] uppercase tracking-[0.16em] text-zinc-500 block mb-2">
                  {project.label}
                </span>

                <h3 className="text-2xl font-light tracking-tight text-white mb-3 transition-colors duration-300 group-hover:text-[#ffd000]">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Bottom actions */}
              <div className="relative z-10 mt-6">
                {isUpcoming ? (
                  <button
                    onClick={() =>
                      window.open("mailto:ikennaibenemee@gmail.com", "_blank")
                    }
                    className="group/btn inline-flex items-center gap-2.5 text-[12px] uppercase tracking-[0.16em] text-amber-400 hover:text-[#ffd000] transition-colors duration-300 cursor-pointer"
                  >
                    Let&apos;s build something
                    <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1.5">
                      →
                    </span>
                  </button>
                ) : (
                  project.apps.length > 0 && <AppBadges apps={project.apps} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CurrentlySection;
