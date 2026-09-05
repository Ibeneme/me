import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import logo from "./assets/images/logo.png";

interface LoadingScreenProps {
  onComplete?: () => void;
  minDisplayTime?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onComplete,
  minDisplayTime = 10000,
}) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const screenRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLHeadingElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);
  const barFillRef = useRef<HTMLDivElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const loadingTextRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Initial hidden states
      tl.set([topBarRef.current, percentRef.current, loadingTextRef.current], {
        opacity: 0,
      })
        .set(logoRef.current, { scale: 0.6, opacity: 0, rotation: "blur(8px)" })

        // Logo pops in first
        .to(logoRef.current, {
          scale: 1,
          opacity: 0.95,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "back.out(1.8)",
        })

        // Domain text slides in from the right
        .fromTo(
          topBarRef.current?.children[1],
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.35"
        )

        // Wordmark rises + blur clear
        .fromTo(
          wordmarkRef.current,
          { y: 70, opacity: 0, filter: "blur(16px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.15,
            ease: "power4.out",
          },
          "-=0.4"
        )

        // Yellow dot punches in hard
        .fromTo(
          dotRef.current,
          { scale: 0, opacity: 0, y: 20 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "back.out(4)",
          },
          "-=0.55"
        )

        // Progress area fades up
        .to(
          [percentRef.current, loadingTextRef.current],
          { opacity: 1, duration: 0.55 },
          "-=0.35"
        )
        .fromTo(
          ".ls-bar-track",
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.75, ease: "power4.out" },
          "-=0.4"
        );

      // ──────────────────────────────────────────────
      // Continuous bouncy fullstop (the main request)
      // ──────────────────────────────────────────────
      gsap.to(dotRef.current, {
        y: -14,
        scale: 1.18,
        duration: 0.55,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        transformOrigin: "center bottom",
      });

      // Subtle secondary pulse on the dot color / glow feel
      gsap.to(dotRef.current, {
        filter: "drop-shadow(0 0 12px rgba(255, 208, 0, 0.65))",
        duration: 1.1,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Soft letter-spacing breathe on the wordmark
      gsap.to(wordmarkRef.current, {
        letterSpacing: "-0.015em",
        duration: 3.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Very subtle vertical float on the whole wordmark
      gsap.to(wordmarkRef.current, {
        y: -6,
        duration: 3.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Logo gentle rotate / scale idle
      gsap.to(logoRef.current, {
        rotation: 4,
        scale: 1.05,
        duration: 3.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Progress text subtle opacity pulse
      gsap.to(percentRef.current, {
        opacity: 0.45,
        duration: 1.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, screenRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(
        Math.floor((elapsed / minDisplayTime) * 100),
        100
      );

      setProgress(currentProgress);

      // Make the bar fill feel a bit more alive while progressing
      if (barFillRef.current) {
        gsap.to(barFillRef.current, {
          boxShadow: "0 0 14px rgba(255, 255, 255, 0.35)",
          duration: 0.4,
          yoyo: true,
          repeat: 1,
        });
      }

      if (currentProgress >= 100) {
        clearInterval(interval);

        const exitTl = gsap.timeline({
          onComplete: () => {
            setIsFinished(true);
            if (onComplete) onComplete();
          },
        });

        // Final dramatic sequence
        exitTl
          // Dot does one big excited bounce + flash
          .to(dotRef.current, {
            scale: 1.7,
            y: -28,
            duration: 0.28,
            ease: "power2.out",
          })
          .to(dotRef.current, {
            scale: 1,
            y: 0,
            duration: 0.35,
            ease: "bounce.out",
          })
          // Wordmark compresses slightly then content lifts + blurs
          .to(
            wordmarkRef.current,
            {
              scale: 0.97,
              duration: 0.25,
              ease: "power2.in",
            },
            "-=0.2"
          )
          .to(
            contentRef.current,
            {
              y: -50,
              opacity: 0,
              filter: "blur(12px)",
              duration: 0.6,
              ease: "power3.in",
            },
            "-=0.1"
          )
          // Panel wipes upward
          .to(
            panelRef.current,
            { yPercent: -100, duration: 0.9, ease: "expo.inOut" },
            "-=0.2"
          );
      }
    }, 40);

    return () => clearInterval(interval);
  }, [minDisplayTime, onComplete]);

  if (isFinished) return null;

  const progressStr = String(progress).padStart(2, "0");

  return (
    <div
      ref={screenRef}
      className="fixed inset-0 z-[999999] overflow-hidden select-none"
    >
      <div
        ref={panelRef}
        className="absolute inset-0"
        style={{ backgroundColor: "#07020F" }}
      >
        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div
          ref={contentRef}
          className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8 md:p-12"
        >
          {/* Top bar */}
          <div
            ref={topBarRef}
            className="flex justify-between items-center w-full font-mono"
          >
            <div className="flex items-center">
              <img
                ref={logoRef}
                src={logo}
                alt="Logo"
                className="w-8 h-8 md:w-9 md:h-9 object-contain opacity-90"
              />
            </div>
            <div className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#fff] uppercase">
              ibeneme.com
            </div>
          </div>

          {/* Hero wordmark */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative">
              <h2
                ref={wordmarkRef}
                className="text-[64px] sm:text-[100px] md:text-[160px] lg:text-[220px] xl:text-[250px] font-bold tracking-tighter leading-none select-none text-center"
                style={{ color: "#ffffff" }}
              >
                Ibeneme
                <span
                  ref={dotRef}
                  className="inline-block"
                  style={{ color: "#ffd000", willChange: "transform" }}
                >
                  .
                </span>
              </h2>
            </div>
          </div>

          {/* Bottom progress */}
          <div className="flex flex-col items-center justify-center w-full pb-4">
            <div className="w-full max-w-xs flex flex-col gap-3">
              <div
                ref={percentRef}
                className="text-xs md:text-sm tracking-[0.2em] text-[#ffffff]/60 uppercase text-center"
              >
                Loading — {progressStr}%
              </div>
              <div className="ls-bar-track w-full h-[3px] bg-[#ffffff]/10 relative overflow-hidden rounded-full">
                <div
                  ref={barFillRef}
                  className="absolute top-0 left-0 bottom-0 rounded-full"
                  style={{
                    width: `${progress}%`,
                    backgroundColor: "#ffffff",
                    transition: "width 0.08s linear",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
