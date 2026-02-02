"use client";
import { useEffect, useState } from "react";
import { Cpu } from "lucide-react";

export default function EngineStatus() {
  const [loadTime, setLoadTime] = useState("0.00");

  useEffect(() => {
    const time = (performance.now() / 1000).toFixed(2);
    setLoadTime(time);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 hidden md:flex items-center gap-3 px-3 py-1.5 rounded-full bg-obsidian-900/80 border border-white/10 backdrop-blur-md shadow-2xl">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Core v1.0</span>
      </div>
      <div className="h-3 w-px bg-white/10"></div>
      <div className="flex items-center gap-2 text-[9px] font-bold text-gold-500 uppercase tracking-widest">
        <Cpu size={10} />
        <span>{loadTime}s Latency</span>
      </div>
    </div>
  );
}
