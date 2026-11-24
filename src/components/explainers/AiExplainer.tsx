import React, { useRef } from "react";
import { useExplainer } from "./useExplainer";

const LILAC = "#9d95ff";
const PINK = "#fec5fb";

const LAYERS = [
  [140, 200, 260],
  [110, 160, 210, 260, 310],
  [140, 200, 260],
];
const LX = [70, 150, 230];

/**
 * A prompt enters a small neural net, signals pulse layer to layer,
 * and the answer streams out word by word in a chat bubble.
 */
const AiExplainer: React.FC = () => {
  const svg = useRef<SVGSVGElement>(null);

  useExplainer(svg, (tl) => {
    tl.from(".a-node", { scale: 0, transformOrigin: "50% 50%", stagger: { each: 0.03, from: "random" }, duration: 0.4, ease: "back.out(2)" })
      .from(".a-edge", { strokeDashoffset: 1, stagger: 0.008, duration: 0.5, ease: "power2.out" }, "-=0.2")
      .fromTo(".a-prompt", { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 })
      .to(".a-l0", { fill: LILAC, stagger: 0.06, duration: 0.2 })
      .to(".a-e0", { stroke: LILAC, stagger: 0.01, duration: 0.2 }, "<0.1")
      .to(".a-l1", { fill: PINK, stagger: 0.05, duration: 0.2 }, "<0.2")
      .to(".a-e1", { stroke: PINK, stagger: 0.01, duration: 0.2 }, "<0.1")
      .to(".a-l2", { fill: LILAC, stagger: 0.06, duration: 0.2 }, "<0.2")
      .fromTo(".a-bubble", { scale: 0, opacity: 0, transformOrigin: "0% 100%" }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.8)" })
      .fromTo(".a-dot", { y: 0 }, { y: -5, stagger: 0.1, duration: 0.2, yoyo: true, repeat: 3, ease: "sine.inOut" })
      .to(".a-dots", { opacity: 0, duration: 0.15 })
      .from(".a-word", { scaleX: 0, transformOrigin: "0% 50%", stagger: 0.12, duration: 0.25, ease: "power2.out" })
      .to({}, { duration: 1.2 })
      .to([".a-l0", ".a-l1", ".a-l2"], { fill: "#1a1a1a", duration: 0.4 })
      .to([".a-e0", ".a-e1"], { stroke: "#262626", duration: 0.4 }, "<")
      .to([".a-bubble", ".a-prompt"], { opacity: 0, duration: 0.4 }, "<")
      .set(".a-dots", { opacity: 1 });
  });

  return (
    <svg ref={svg} viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label="Animated AI model: a prompt flows through a neural network and an answer streams out">
      <circle cx="200" cy="200" r="175" fill="none" stroke="#1f1f1f" strokeDasharray="4 8" />

      {/* edges */}
      {LAYERS.slice(0, -1).map((layer, li) =>
        layer.map((y1) =>
          LAYERS[li + 1].map((y2) => (
            <line
              key={`${li}-${y1}-${y2}`}
              className={`a-edge a-e${li}`}
              pathLength={1}
              strokeDasharray="1"
              x1={LX[li]}
              y1={y1}
              x2={LX[li + 1]}
              y2={y2}
              stroke="#262626"
              strokeWidth="1.2"
            />
          ))
        )
      )}

      {/* nodes */}
      {LAYERS.map((layer, li) =>
        layer.map((y) => (
          <circle key={`${li}-${y}`} className={`a-node a-l${li}`} cx={LX[li]} cy={y} r="11" fill="#1a1a1a" stroke="#fff" strokeWidth="1.5" />
        ))
      )}

      {/* prompt chip */}
      <g className="a-prompt" opacity="0">
        <rect x="24" y="80" width="110" height="26" rx="13" fill="#141414" stroke={LILAC} />
        <text x="79" y="97" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="Lufga">Summarise this…</text>
      </g>

      {/* answer bubble */}
      <g className="a-bubble" opacity="0">
        <rect x="262" y="150" width="118" height="104" rx="14" fill="#fff" />
        <path d="M266 240 L262 272 L290 252 Z" fill="#fff" />
        <g className="a-dots">
          {[0, 1, 2].map((i) => (
            <circle key={i} className="a-dot" cx={292 + i * 14} cy="202" r="4" fill="#000" />
          ))}
        </g>
        {[
          [276, 170, 84],
          [276, 184, 66],
          [276, 198, 78],
          [276, 212, 52],
          [276, 226, 70],
        ].map(([x, y, w], i) => (
          <rect key={i} className="a-word" x={x} y={y} width={w} height="6" rx="3" fill={i === 0 ? LILAC : "#222"} />
        ))}
      </g>
    </svg>
  );
};

export default AiExplainer;
