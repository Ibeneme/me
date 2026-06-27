import React, { useState, useEffect } from "react";


// Helper to define syntax structure
const tokens = [
  { text: "export ", color: "text-[#C678DD]" },
  { text: "const ", color: "text-[#C678DD]" },
  { text: "reconcileLedger ", color: "text-[#61AFEF]" },
  { text: "= ", color: "text-[#56B6C2]" },
  { text: "async ", color: "text-[#C678DD]" },
  { text: "(tx: ", color: "text-[#ABB2BF]" },
  { text: "Transaction", color: "text-[#E5C07B]" },
  { text: ") => {\n  ", color: "text-[#ABB2BF]" },
  {
    text: "// Atomic double-entry verification\n  ",
    color: "text-[#5C6370] italic",
  },
  { text: "const ", color: "text-[#C678DD]" },
  { text: "balance ", color: "text-[#ABB2BF]" },
  { text: "= ", color: "text-[#56B6C2]" },
  { text: "await ", color: "text-[#C678DD]" },
  {
    text: "db.ledger.findUnique({ where: { id: tx.id }});\n\n  ",
    color: "text-[#ABB2BF]",
  },
  { text: "if ", color: "text-[#C678DD]" },
  { text: "(tx.amount > balance.available) {\n    ", color: "text-[#ABB2BF]" },
  { text: "throw new ", color: "text-[#C678DD]" },
  { text: "InsufficientFundsError", color: "text-[#E5C07B]" },
  { text: '("Reconciliation failed");\n  ', color: "text-[#98C379]" },
  { text: "}\n\n  ", color: "text-[#ABB2BF]" },
  { text: "return ", color: "text-[#C678DD]" },
  { text: "await ", color: "text-[#C678DD]" },
  { text: "db.transaction.create({ data: tx });\n", color: "text-[#ABB2BF]" },
  { text: "};", color: "text-[#ABB2BF]" },
];

const TypewriterCode = ({
  tokens,
}: {
  tokens: { text: string; color: string }[];
}) => {
  const fullText = tokens.map((t) => t.text).join("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev >= fullText.length ? 0 : prev + 1));
    }, 20);
    return () => clearInterval(interval);
  }, [fullText.length]);

  // Logic to map typed index back to colored tokens
  let currentLength = 0;
  return (
    <pre className="p-6 md:p-8 text-[12px] md:text-sm font-mono leading-relaxed whitespace-pre-wrap">
      {tokens.map((token, i) => {
        const start = currentLength;
        currentLength += token.text.length;
        if (index <= start) return null;
        const visibleText = token.text.slice(0, Math.max(0, index - start));
        return (
          <span key={i} className={token.color}>
            {visibleText}
          </span>
        );
      })}
      <span className="animate-pulse">|</span>
    </pre>
  );
};

const CodePreview = ({
  title,
  filename,
  children,
}: {
  title: string;
  filename: string;
  children: React.ReactNode;
}) => (
  <div className="w-full flex flex-col group">
    <h3 className="text-white text-xl font-bold mb-6 tracking-tight flex items-center gap-4">
      {title}
      <span className="h-[1px] flex-1 bg-zinc-800"></span>
    </h3>
    <div className="bg-[#0D0E11] rounded-lg overflow-hidden border border-zinc-800 shadow-2xl min-h-[450px]">
      <div className="px-4 py-3 flex items-center gap-2 bg-[#16171D] border-b border-zinc-800/50">
        <div className="flex gap-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <span className="text-[11px] text-zinc-400 font-mono tracking-widest uppercase">
          {filename}
        </span>
      </div>
      {children}
    </div>
  </div>
);

const FeatureSection: React.FC = () => {
  return (
    <section className="bg-[#0C0D0E] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
            Building businesses with{" "}
            <span className="text-[#FFD000]">code.</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            I engineer production-ready environments. From core ledger logic to
            high-velocity UI engines, every line is crafted for performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <CodePreview title="Core Ledger Logic" filename="reconcile.ts">
            <TypewriterCode tokens={tokens} />
          </CodePreview>
          <CodePreview title="Reactive UI Engine" filename="dashboard.tsx">
            <TypewriterCode tokens={tokens} />
          </CodePreview>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
