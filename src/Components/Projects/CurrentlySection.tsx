import React, { useEffect, useRef, useState } from "react";

const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5.14v14l11-7-11-7z" />
  </svg>
);

type AppLink = { ios?: string; android?: string };

type Project = {
  label: string;
  title: string;
  description: string;
  status: string;
  statusColor: string;
  apps: AppLink[];
  labels?: string[];
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
        android: "https://play.google.com/store/apps/details?id=com.skypayafrica.app",
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
        ios: "https://apps.apple.com/us/app/pickars/id6746796884",
        android: "https://play.google.com/store/apps/details?id=com.pickars.app",
      },
      {
        ios: "https://apps.apple.com/us/app/pickars-riders/id6748903962",
        android: "https://play.google.com/store/apps/details?id=com.pickars.drivers&hl=en",
      },
    ],
    labels: ["Pickars — Rider App", "Pickars Riders — Driver App"],
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

const AppBadges: React.FC<{ apps: AppLink[]; labels?: string[] }> = ({
  apps,
  labels,
}) => (
  <div className="flex flex-col gap-5 mt-7">
    {apps.map((app, i) => (
      <div key={i}>
        {labels?.[i] && (
          <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-500 mb-2.5">
            {labels[i]}
          </p>
        )}
        <div className="flex flex-wrap gap-3">
          {app.ios && (
            <a
              href={app.ios}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-5 py-3 bg-zinc-900/80 hover:bg-white border border-white/10 hover:border-white/30 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="text-white/70 group-hover:text-black transition-colors">
                <AppleIcon />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-400 group-hover:text-zinc-600">
                  Download on the
                </div>
                <div className="font-medium text-sm text-white group-hover:text-black">
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
              className="group flex items-center gap-3 px-5 py-3 bg-zinc-900/80 hover:bg-white border border-white/10 hover:border-white/30 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="text-white/70 group-hover:text-black transition-colors">
                <PlayIcon />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-400 group-hover:text-zinc-600">
                  Get it on
                </div>
                <div className="font-medium text-sm text-white group-hover:text-black">
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
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full  bg-[#0A0314] max-w-5xl mx-auto px-4 md:px-6 py-20 md:py-28"
    >
      {/* Header */}
      <div
        className={`flex items-center gap-4 mb-14 md:mb-16 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span className="text-xs uppercase tracking-[0.15em] text-zinc-500 font-medium">
          Currently
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
        <div className="flex items-center gap-2 text-emerald-400">
          <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
          <span className="text-xs uppercase tracking-widest">Live</span>
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-14 md:space-y-16">
        {projects.map((project, i) => {
          const isLast = i === projects.length - 1;
          const isUpcoming = project.status === "Open";

          return (
            <div
              key={project.title}
              className={`group relative grid md:grid-cols-12 gap-x-10 lg:gap-x-14 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* Meta */}
              <div className="md:col-span-3 flex flex-col gap-3 md:sticky md:top-8 self-start">
                <span className="text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                  {project.label}
                </span>
                <div
                  className="inline-flex w-fit px-3.5 py-1.5 rounded-full text-xs font-medium border"
                  style={{
                    color: project.statusColor,
                    borderColor: `${project.statusColor}40`,
                    backgroundColor: `${project.statusColor}12`,
                  }}
                >
                  {project.status}
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-9 mt-5 md:mt-0">
                <h3
                  className={`text-2xl md:text-3xl lg:text-4xl font-light tracking-tighter mb-3 transition-colors ${
                    isUpcoming
                      ? "text-zinc-600"
                      : "text-white group-hover:text-zinc-100"
                  }`}
                >
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-[15px] leading-relaxed max-w-2xl">
                  {project.description}
                </p>

                {project.apps.length > 0 && (
                  <AppBadges apps={project.apps} labels={project.labels} />
                )}

                {isUpcoming && (
                  <button
                    onClick={() =>
                      window.open("mailto:ikennaibenemee@gmail.com", "_blank")
                    }
                    className="mt-8 group/btn inline-flex items-center gap-3 text-sm uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-all"
                  >
                    Let&apos;s build something
                    <span className="group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                )}
              </div>

              {!isLast && (
                <div className="md:col-span-12 h-px bg-white/5 mt-14 md:mt-16" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CurrentlySection;