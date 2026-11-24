import React, { useRef } from "react";
import { useExplainer } from "./useExplainer";

const BLUE = "#00bae2";
const GREEN = "#abff84";
const URL_TEXT = "yourproduct.com";

/**
 * A browser types a URL, the page assembles block by block, a cursor clicks
 * the CTA, then the window collapses to a phone width and the grid reflows.
 */
const WebExplainer: React.FC = () => {
  const svg = useRef<SVGSVGElement>(null);

  useExplainer(svg, (tl, q) => {
    const url = q(".w-url")[0] as SVGTextElement;
    const typed = { n: 0 };
    tl.from(".w-window", { y: 30, opacity: 0, duration: 0.7 })
      .fromTo(
        typed,
        { n: 0 },
        {
          n: URL_TEXT.length,
          duration: 0.9,
          ease: "none",
          onUpdate: () => {
            url.textContent = URL_TEXT.slice(0, Math.round(typed.n));
          },
        }
      )
      .from(".w-block", { scaleX: 0, transformOrigin: "0% 50%", stagger: 0.08, duration: 0.5, ease: "expo.out" })
      .from(".w-card", { scale: 0, transformOrigin: "50% 50%", stagger: 0.08, duration: 0.5, ease: "back.out(2)" }, "-=0.2")
      .from(".w-fill", { opacity: 0, stagger: 0.05, duration: 0.4 })
      .fromTo(".w-cursor", { x: 120, y: 120, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.8, ease: "power2.inOut" })
      .to(".w-cta", { scale: 0.92, transformOrigin: "50% 50%", duration: 0.1, yoyo: true, repeat: 1 })
      .to(".w-cta", { fill: GREEN, duration: 0.2 }, "<")
      .to(".w-cursor", { opacity: 0, duration: 0.3 }, "+=0.3")
      // responsive: shrink to a phone frame
      .to(".w-frame", { attr: { x: 140, width: 120 }, duration: 0.8, ease: "expo.inOut" }, "+=0.3")
      .to(".w-bar", { attr: { x: 140, width: 120 }, duration: 0.8, ease: "expo.inOut" }, "<")
      .to(".w-content", { x: 92, scale: 0.42, transformOrigin: "0% 0%", duration: 0.8, ease: "expo.inOut" }, "<")
      .to(".w-url-group", { opacity: 0, duration: 0.3 }, "<")
      .to({}, { duration: 1 })
      .to(".w-frame", { attr: { x: 50, width: 300 }, duration: 0.8, ease: "expo.inOut" })
      .to(".w-bar", { attr: { x: 50, width: 300 }, duration: 0.8, ease: "expo.inOut" }, "<")
      .to(".w-content", { x: 0, scale: 1, duration: 0.8, ease: "expo.inOut" }, "<")
      .to(".w-url-group", { opacity: 1, duration: 0.3 }, "<0.5")
      .to(".w-cta", { fill: "#fff", duration: 0.2 }, "<");
  });

  return (
    <svg ref={svg} viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label="Animated website: a page builds itself and adapts from desktop to mobile">
      <circle cx="200" cy="200" r="175" fill="none" stroke="#1f1f1f" strokeDasharray="4 8" />

      <g className="w-window">
        <rect className="w-frame" x="50" y="70" width="300" height="250" rx="14" fill="#0a0a0a" stroke="#fff" strokeWidth="2" />
        <rect className="w-bar" x="50" y="70" width="300" height="30" rx="14" fill="#141414" />
        <circle cx="68" cy="85" r="4" fill="#ff5f57" />
        <circle cx="82" cy="85" r="4" fill="#febc2e" />
        <circle cx="96" cy="85" r="4" fill="#28c840" />
        <g className="w-url-group">
          <rect x="120" y="77" width="180" height="16" rx="8" fill="#000" />
          <text className="w-url" x="132" y="89" fill="#aaa" fontSize="9" fontFamily="Lufga">
            {URL_TEXT}
          </text>
        </g>

        <g className="w-content">
          {/* nav */}
          <rect className="w-block" x="66" y="112" width="40" height="8" rx="4" fill="#fff" />
          <rect className="w-block" x="250" y="112" width="84" height="8" rx="4" fill="#333" />
          {/* hero */}
          <rect className="w-block" x="66" y="134" width="190" height="16" rx="5" fill="#fff" />
          <rect className="w-block" x="66" y="156" width="140" height="16" rx="5" fill={BLUE} />
          <rect className="w-block" x="66" y="180" width="170" height="6" rx="3" fill="#444" />
          <rect className="w-cta" x="66" y="194" width="62" height="18" rx="9" fill="#fff" />
          <text className="w-fill" x="97" y="206" textAnchor="middle" fontSize="8" fontFamily="Lufga" fontWeight="600" fill="#000">
            Get started
          </text>
          {/* grid */}
          {[0, 1, 2].map((i) => (
            <g key={i} className="w-card">
              <rect x={66 + i * 92} y="226" width="84" height="80" rx="8" fill="#141414" stroke="#262626" />
              <rect className="w-fill" x={74 + i * 92} y="234" width="68" height="36" rx="5" fill={[BLUE, GREEN, "#fec5fb"][i]} opacity="0.85" />
              <rect className="w-fill" x={74 + i * 92} y="278" width="50" height="5" rx="2.5" fill="#fff" />
              <rect className="w-fill" x={74 + i * 92} y="289" width="34" height="4" rx="2" fill="#555" />
            </g>
          ))}
        </g>
      </g>

      {/* cursor */}
      <g className="w-cursor" transform="translate(0 0)">
        <path d="M110 206 l0 22 l6 -6 l5 11 l5 -2 l-5 -11 l8 0 z" fill="#fff" stroke="#000" strokeWidth="1.5" strokeLinejoin="round" />
      </g>
    </svg>
  );
};

export default WebExplainer;
