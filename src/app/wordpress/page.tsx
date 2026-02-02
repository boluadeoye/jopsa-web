"use client";
import { motion } from "framer-motion";
import { ShieldAlert, Zap, Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function WpIntercept() {
  return (
    <div className="min-h-screen bg-[#020408] flex items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full bg-obsidian-900 border border-gold-500/30 rounded-3xl p-8 text-center shadow-2xl">
        <motion.div 
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          className="w-20 h-20 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <ShieldAlert size={40} className="text-gold-500" />
        </motion.div>
        
        <h1 className="text-white font-serif text-2xl mb-4">Legacy Protocol Blocked</h1>
        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
          This platform operates on a <span className="text-gold-400 font-bold">Next.js 15 Edge Engine</span>. 
          WordPress/PHP environments are disabled for maximum security and sub-second performance.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <Zap size={16} className="text-gold-500 mx-auto mb-2" />
            <p className="text-[10px] text-slate-500 uppercase font-bold">Speed</p>
            <p className="text-white font-bold">0.4s</p>
          </div>
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <Lock size={16} className="text-gold-500 mx-auto mb-2" />
            <p className="text-[10px] text-slate-500 uppercase font-bold">Security</p>
            <p className="text-white font-bold">Static</p>
          </div>
        </div>

        <Link href="/" className="inline-flex items-center gap-2 text-gold-500 font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
          <ArrowLeft size={14} /> Return to Secure Core
        </Link>
      </div>
    </div>
  );
}
