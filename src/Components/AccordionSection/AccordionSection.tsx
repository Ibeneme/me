import { useEffect, useRef } from "react";
import { Code2, Smartphone, Sparkles, Palette } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const serviceCategories = [
  {
    icon: Code2,
    title: "Websites & Web Apps",
    plain:
      "The engine behind your site or app — built to actually work, not just to look good.",
    items: [
      "Custom websites",
      "Web apps people log into",
      "Connecting your tools together",
    ],
    bgClass: "bg-[#E2FF44]",
    textClass: "text-[#0A0314]",
    accent: "#0A0314",
    iconBg: "bg-[#0A0314]/12",
    bgImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    plain: "The app people download — for iPhone and Android, from one build.",
    items: ["iOS & Android apps", "App Store setup", "Live chat & tracking"],
    bgClass: "bg-[#F3E8FF]",
    textClass: "text-[#5B21B6]",
    accent: "#7C3AED",
    iconBg: "bg-[#7C3AED]/12",
    bgImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Sparkles,
    title: "AI Tools & Automation",
    plain:
      "Smart features that do repetitive work automatically, so you don't have to.",
    items: [
      "AI chat assistants",
      "Automating manual tasks",
      "Apps that talk to each other",
    ],
    bgClass: "bg-[#C4F1FF]",
    textClass: "text-[#0A0314]",
    accent: "#0284C7",
    iconBg: "bg-[#0284C7]/12",
    bgImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Palette,
    title: "Design",
    plain:
      "How your product looks and feels — and how easy it actually is to use.",
    items: ["App & website design", "User testing", "Consistent branding"],
    bgClass: "bg-[#FFD000]",
    textClass: "text-[#0A0314]",
    accent: "#0A0314",
    iconBg: "bg-[#0A0314]/12",
    bgImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
  },
];

const ExpertiseSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean);
      if (!cards.length || !stackRef.current) return;

      cards.forEach((card) => {
        gsap.set(card, { transformOrigin: "50% 100%" });
      });

      gsap.set(cards[0], {
        yPercent: 0,
        scale: 1,
        rotate: 0,
        filter: "brightness(1)",
      });

      cards.slice(1).forEach((card) => {
        gsap.set(card, {
          yPercent: 100,
          scale: 1,
          rotate: 0,
          filter: "brightness(1)",
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stackRef.current,
          start: "top top",
          end: `+=${(cards.length - 1) * 100}%`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;
        const segment = i - 1;

        tl.to(
          cards[i - 1],
          {
            scale: 0.92,
            y: -28,
            rotate: -6,
            filter: "brightness(0.78)",
            duration: 1,
            ease: "none",
          },
          segment
        );

        tl.to(card, { yPercent: 0, duration: 1, ease: "none" }, segment);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0A0314] overflow-hidden"
    >
      <div className="relative z-10 w-full flex flex-col items-center px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center pt-20 md:pt-28 pb-12 md:pb-16 mb-[-60px] md:mb-[-80px]">
          <span className="inline-block text-[11px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#FFD000] mb-5">
            Capabilities
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#ECEFF3] leading-[1.05] max-w-4xl mx-auto">
            What I build for you.
          </h2>
        </div>

        {/* Stack */}
        <div ref={stackRef} className="relative w-full max-w-5xl h-screen">
          {serviceCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className="absolute inset-0 flex items-center justify-center will-change-transform"
                style={{ zIndex: idx + 1 }}
              >
                <div
                  className={`relative w-full rounded-[2rem] md:rounded-[2.5rem] p-7 sm:p-10 md:p-14 lg:p-16 min-h-[420px] md:min-h-[480px] max-h-[82vh] flex flex-col justify-between overflow-hidden border border-black/5 ${cat.bgClass}`}
                >
                  {/* Soft background image */}
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <img
                      src={cat.bgImage}
                      alt=""
                      className="w-full h-full object-cover opacity-[0.18] mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
                  </div>

                  {/* Top row: icon + index */}
                  <div className="relative z-10 flex items-start justify-between">
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center ${cat.iconBg}`}
                    >
                      <Icon
                        className={`w-6 h-6 md:w-7 md:h-7 ${cat.textClass}`}
                        strokeWidth={1.75}
                      />
                    </div>
                    <span
                      className={`text-sm font-medium opacity-50 ${cat.textClass}`}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mt-8 mb-6 ${cat.textClass}`}
                  >
                    {cat.title}
                  </h3>

                  {/* Description + tags */}
                  <div className="relative z-10 max-w-2xl">
                    <p
                      className={`text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-6 opacity-90 ${cat.textClass}`}
                    >
                      {cat.plain}
                    </p>

                    <ul className="flex flex-wrap gap-2.5">
                      {cat.items.map((item) => (
                        <li
                          key={item}
                          className={`text-xs sm:text-sm font-medium rounded-full px-3.5 py-1.5 bg-black/8 ${cat.textClass}`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
