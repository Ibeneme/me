import React, { useRef } from "react";
import { useExplainer } from "./useExplainer";

const PINK = "#fec5fb";
const BLUE = "#00bae2";

/**
 * A phone running an app: cards slide in, a finger taps one, the screen
 * swipes to a detail view whose chart grows, then a push notification lands.
 */
const MobileExplainer: React.FC = () => {
  const svg = useRef<SVGSVGElement>(null);

  useExplainer(svg, (tl) => {
    tl.from(".m-phone", { y: 30, opacity: 0, duration: 0.8 })
      .from(".m-card", { y: 40, opacity: 0, stagger: 0.12, duration: 0.6 }, "-=0.3")
      .from(".m-finger", { x: 80, y: 120, opacity: 0, duration: 0.7, ease: "power2.inOut" }, "+=0.2")
      .to(".m-finger", { scale: 0.85, transformOrigin: "50% 50%", duration: 0.12, yoyo: true, repeat: 1 })
      .fromTo(".m-ripple", { scale: 0, opacity: 0.9, transformOrigin: "50% 50%" }, { scale: 3, opacity: 0, duration: 0.6 }, "<")
      .to(".m-card-2", { fill: "#1f1a22", duration: 0.2 }, "<")
      .to(".m-finger", { opacity: 0, duration: 0.3 })
      .to(".m-screen-a", { x: -170, duration: 0.6, ease: "expo.inOut" }, "<")
      .fromTo(".m-screen-b", { x: 170 }, { x: 0, duration: 0.6, ease: "expo.inOut" }, "<")
      .from(".m-bar", { scaleY: 0, transformOrigin: "50% 100%", stagger: 0.08, duration: 0.6, ease: "back.out(2)" })
      .from(".m-line", { strokeDashoffset: 1, duration: 0.9, ease: "power2.inOut" }, "<0.1")
      .fromTo(".m-notif", { y: -70, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.6)" }, "+=0.2")
      .to(".m-notif", { y: -70, opacity: 0, duration: 0.5, ease: "power2.in" }, "+=1.2")
      .to(".m-screen-b", { x: 170, duration: 0.6, ease: "expo.inOut" })
      .to(".m-screen-a", { x: 0, duration: 0.6, ease: "expo.inOut" }, "<")
      .to(".m-card-2", { fill: "#141414", duration: 0.2 }, "<");
  });

  return (
    <svg ref={svg} viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label="Animated mobile app: tapping a card opens a chart and a notification arrives">
      <defs>
        <linearGradient id="m-grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor={BLUE} />
          <stop offset="1" stopColor={PINK} />
        </linearGradient>
        <clipPath id="m-clip">
          <rect x="120" y="58" width="160" height="290" rx="20" />
        </clipPath>
      </defs>

      {/* orbit rings */}
      <circle cx="200" cy="200" r="175" fill="none" stroke="#1f1f1f" strokeDasharray="4 8" />
      <circle cx="200" cy="200" r="140" fill="none" stroke="#161616" />

      <g className="m-phone">
        <rect x="110" y="40" width="180" height="320" rx="32" fill="#0a0a0a" stroke="#fff" strokeWidth="2" />
        <rect x="170" y="48" width="60" height="8" rx="4" fill="#262626" />

        <g clipPath="url(#m-clip)">
          {/* screen A: list */}
          <g className="m-screen-a">
            <text x="134" y="88" fill="#fff" fontSize="13" fontFamily="Lufga" fontWeight="600">Wallet</text>
            <rect x="134" y="98" width="132" height="54" rx="12" fill="url(#m-grad)" className="m-card" />
            <text x="146" y="122" fill="#000" fontSize="9" fontFamily="Lufga">Balance</text>
            <text x="146" y="140" fill="#000" fontSize="15" fontFamily="Lufga" fontWeight="700">₦248,900</text>
            {[0, 1, 2].map((i) => (
              <g key={i} className={`m-card ${i === 0 ? "" : ""}`}>
                <rect x="134" y={164 + i * 52} width="132" height="42" rx="10" fill="#141414" className={i === 0 ? "m-card-2" : ""} />
                <circle cx="152" cy={185 + i * 52} r="9" fill={i === 0 ? PINK : i === 1 ? BLUE : "#333"} />
                <rect x="168" y={179 + i * 52} width="56" height="5" rx="2.5" fill="#fff" />
                <rect x="168" y={189 + i * 52} width="34" height="4" rx="2" fill="#555" />
              </g>
            ))}
          </g>

          {/* screen B: detail with chart */}
          <g className="m-screen-b" transform="translate(170 0)">
            <text x="134" y="88" fill="#fff" fontSize="13" fontFamily="Lufga" fontWeight="600">Transfers</text>
            <text x="134" y="112" fill={PINK} fontSize="20" fontFamily="Lufga" fontWeight="700">+32%</text>
            {[38, 62, 44, 80, 58, 96].map((h, i) => (
              <rect key={i} className="m-bar" x={138 + i * 21} y={250 - h} width="13" height={h} rx="4" fill={i === 5 ? PINK : "#2a2a2a"} />
            ))}
            <path className="m-line" pathLength={1} strokeDasharray="1" d="M144 220 L165 196 L186 214 L207 176 L228 192 L249 150" fill="none" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" />
            <rect x="134" y="270" width="132" height="34" rx="17" fill="#fff" />
            <text x="200" y="291" textAnchor="middle" fill="#000" fontSize="11" fontFamily="Lufga" fontWeight="600">Send money</text>
          </g>
        </g>

        <rect x="170" y="340" width="60" height="4" rx="2" fill="#fff" opacity="0.6" />
      </g>

      {/* push notification */}
      <g className="m-notif" opacity="0">
        <rect x="128" y="64" width="144" height="40" rx="12" fill="#fff" />
        <circle cx="146" cy="84" r="8" fill={PINK} />
        <rect x="160" y="76" width="70" height="5" rx="2.5" fill="#000" />
        <rect x="160" y="86" width="96" height="4" rx="2" fill="#888" />
      </g>

      {/* finger + ripple */}
      <circle className="m-ripple" cx="200" cy="185" r="12" fill="none" stroke={PINK} strokeWidth="2" opacity="0" />
      <g className="m-finger">
        <circle cx="200" cy="185" r="16" fill="#fff" opacity="0.9" />
        <circle cx="200" cy="185" r="6" fill="#000" />
      </g>
    </svg>
  );
};

export default MobileExplainer;
