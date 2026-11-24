import React, { useRef } from "react";
import { useExplainer } from "./useExplainer";

const ORANGE = "#ff8709";
const AMBER = "#ffc46b";

/**
 * Client → API → database. Request packets travel out, the server lights
 * up, data comes back and a 200 OK pops — then the client goes offline,
 * queues work locally, and syncs when it reconnects.
 */
const BackendExplainer: React.FC = () => {
  const svg = useRef<SVGSVGElement>(null);

  useExplainer(svg, (tl) => {
    tl.from(".b-node", { y: 30, opacity: 0, stagger: 0.12, duration: 0.6 })
      .from(".b-wire", { strokeDashoffset: 1, stagger: 0.15, duration: 0.6, ease: "power2.inOut" }, "-=0.2")
      // request out
      .fromTo(".b-req", { attr: { cx: 92 }, opacity: 1 }, { attr: { cx: 300 }, duration: 1, ease: "power1.inOut", stagger: 0.15 })
      .to(".b-led", { fill: ORANGE, stagger: 0.08, duration: 0.15, yoyo: true, repeat: 3 }, "-=0.6")
      // response back
      .fromTo(".b-res", { attr: { cx: 300 }, opacity: 1 }, { attr: { cx: 92 }, duration: 1, ease: "power1.inOut", stagger: 0.15 })
      .set([".b-req", ".b-res"], { opacity: 0 })
      .fromTo(".b-ok", { scale: 0, opacity: 0, transformOrigin: "50% 50%" }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2.5)" })
      .to(".b-ok", { opacity: 0, duration: 0.3 }, "+=0.8")
      // offline-first
      .to(".b-wire-1", { stroke: "#3a3a3a", duration: 0.3 })
      .fromTo(".b-off", { scale: 0, opacity: 0, transformOrigin: "50% 50%" }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" }, "<")
      .from(".b-queue", { y: -14, opacity: 0, stagger: 0.2, duration: 0.4, ease: "back.out(2)" })
      .to(".b-off", { scale: 0, opacity: 0, duration: 0.3 }, "+=0.4")
      .to(".b-wire-1", { stroke: ORANGE, duration: 0.3 }, "<")
      .to(".b-queue", { x: 110, opacity: 0, stagger: 0.12, duration: 0.6, ease: "power2.in" })
      .to(".b-sync", { rotate: 360, transformOrigin: "50% 50%", duration: 0.8, ease: "power2.inOut" }, "<")
      .set(".b-queue", { x: 0, opacity: 1 });
  });

  return (
    <svg ref={svg} viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label="Animated backend: a client calls an API that reads a database, and syncs after going offline">
      <circle cx="200" cy="200" r="175" fill="none" stroke="#1f1f1f" strokeDasharray="4 8" />

      {/* wires */}
      <path className="b-wire b-wire-1" pathLength={1} strokeDasharray="1" d="M108 200 H180" stroke={ORANGE} strokeWidth="2" />
      <path className="b-wire" pathLength={1} strokeDasharray="1" d="M220 200 H284" stroke={ORANGE} strokeWidth="2" />

      {/* client phone */}
      <g className="b-node">
        <rect x="62" y="150" width="46" height="88" rx="10" fill="#0a0a0a" stroke="#fff" strokeWidth="2" />
        <rect x="72" y="166" width="26" height="5" rx="2.5" fill="#fff" />
        <rect x="72" y="176" width="18" height="4" rx="2" fill="#555" />
        {[0, 1, 2].map((i) => (
          <rect key={i} className="b-queue" x="72" y={192 + i * 11} width="26" height="7" rx="3" fill={AMBER} />
        ))}
        <text x="85" y="262" textAnchor="middle" fill="#888" fontSize="10" fontFamily="Lufga">client</text>
      </g>

      {/* API server */}
      <g className="b-node">
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="170" y={160 + i * 28} width="60" height="22" rx="6" fill="#141414" stroke="#fff" strokeWidth="1.5" />
            <circle className="b-led" cx="182" cy={171 + i * 28} r="3.5" fill="#333" />
            <rect x="192" y={169 + i * 28} width="28" height="4" rx="2" fill="#444" />
          </g>
        ))}
        <path className="b-sync" d="M200 132 a10 10 0 1 1 -9 6" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" />
        <text x="200" y="262" textAnchor="middle" fill="#888" fontSize="10" fontFamily="Lufga">api</text>
      </g>

      {/* database */}
      <g className="b-node">
        <ellipse cx="315" cy="168" rx="30" ry="10" fill="#141414" stroke="#fff" strokeWidth="1.5" />
        <path d="M285 168 v62 a30 10 0 0 0 60 0 v-62" fill="#0a0a0a" stroke="#fff" strokeWidth="1.5" />
        <path d="M285 189 a30 10 0 0 0 60 0 M285 210 a30 10 0 0 0 60 0" fill="none" stroke="#444" strokeWidth="1.5" />
        <text x="315" y="262" textAnchor="middle" fill="#888" fontSize="10" fontFamily="Lufga">database</text>
      </g>

      {/* packets */}
      {[0, 1].map((i) => (
        <circle key={`q${i}`} className="b-req" cx="92" cy={196 + i * 8} r="4" fill={ORANGE} opacity="0" />
      ))}
      {[0, 1].map((i) => (
        <circle key={`s${i}`} className="b-res" cx="300" cy={196 + i * 8} r="4" fill={AMBER} opacity="0" />
      ))}

      {/* 200 OK */}
      <g className="b-ok" opacity="0">
        <rect x="52" y="104" width="66" height="26" rx="13" fill={ORANGE} />
        <text x="85" y="121" textAnchor="middle" fill="#000" fontSize="11" fontFamily="Lufga" fontWeight="700">200 OK</text>
      </g>

      {/* offline badge */}
      <g className="b-off" opacity="0">
        <circle cx="144" cy="200" r="13" fill="#000" stroke="#fff" strokeWidth="1.5" />
        <path d="M138 194 l12 12 M150 194 l-12 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
};

export default BackendExplainer;
