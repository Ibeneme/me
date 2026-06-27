import React from "react";

const CodePreview = ({
  title,
  filename,
  code,
}: {
  title: string;
  filename: string;
  code: string;
}) => (
  <div className="w-full flex flex-col">
    <h3 className="text-white text-lg font-medium mb-4 tracking-wide">
      {title} —
    </h3>
    {/* Added min-w-0 to prevent flex item overflow */}
    <div className="bg-[#111214] rounded-xl overflow-hidden border border-zinc-800 min-w-0">
      {/* Mac-style header */}
      <div className="px-4 py-3 flex items-center gap-2 bg-[#0C0D0E]">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <span className="ml-auto text-[9px] text-zinc-600 font-mono uppercase truncate pl-2">
          {filename}
        </span>
      </div>
      {/* Code Content - Responsive padding and font size */}
      <pre className="p-4 md:p-6 text-[11px] sm:text-[13px] md:text-sm font-mono text-zinc-400 overflow-x-auto leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  </div>
);

const FeatureSection: React.FC = () => {
  return (
    <section className="bg-[#0C0D0E] py-16 md:py-32 px-4 sm:px-6 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-16 md:mb-20 px-2">
          <span className="text-[#ffd000] text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
            — Building Businesses —
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
            Building Businesses with{" "}
            <span className="text-[#ffd000]">code</span>
          </h2>
          <p className="text-zinc-500 text-sm md:text-lg font-light max-w-lg mx-auto">
            Premium design. Butter-smooth interactions. Production-ready
            systems.
          </p>
        </div>

        {/* Code Grid - Optimized gaps for mobile/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <CodePreview
            title="We Write Clean Codes"
            filename="sendMoney.ts"
            code={`const sendMoney = async (data: TransferData) => {
  // Validate balance
  if (data.amount > currentBalance) 
    throw new Error("Insufficient funds");

  const res = await fetch("/api/transfer", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  });
};`}
          />
          <CodePreview
            title="We Build Clean UI"
            filename="addTask.tsx"
            code={`const addTask = (task: Task) => {
  setTasks(prev => [...prev, {
    id: Date.now(),
    title: task.title,
    priority: task.priority,
    completed: false
  }]);
  
  // Production ready. Clean. Fast.
};`}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
