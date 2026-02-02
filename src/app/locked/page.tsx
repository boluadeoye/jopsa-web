"use client";
import { motion } from "framer-motion";
import { Lock, ShieldAlert, MessageSquare, User } from "lucide-react";

export default function LockedPage() {
  return (
    <div className="min-h-screen bg-[#020408] flex items-center justify-center p-6 font-sans overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#152036_0%,#020408_100%)] opacity-50"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 max-w-2xl w-full bg-obsidian-900/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl"
      >
        {/* Pulsing Lock Icon */}
        <motion.div 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-24 h-24 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold-500/20"
        >
          <Lock size={48} className="text-gold-500" />
        </motion.div>

        <h1 className="font-serif text-4xl md:text-5xl text-white mb-6 tracking-tight">
          Access Restricted
        </h1>
        
        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
          This platform is currently undergoing a <span className="text-gold-400 font-bold">Security Audit</span> and administrative synchronization. Public access is temporarily suspended.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Visitor Instructions */}
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 mb-3 text-gold-500">
              <MessageSquare size={20} />
              <span className="text-xs font-black uppercase tracking-widest">For Visitors</span>
            </div>
            <p className="text-sm text-slate-300">
              Please contact the institution directly for inquiries or updates.
            </p>
          </div>

          {/* Owner Instructions */}
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 mb-3 text-gold-500">
              <User size={20} />
              <span className="text-xs font-black uppercase tracking-widest">For the Owner</span>
            </div>
            <p className="text-sm text-slate-300">
              Please contact your <span className="text-white font-bold">Lead Technical Architect</span> to resolve pending deployment protocols.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">
            System Secured by BA Systems Engine
          </p>
        </div>
      </motion.div>
    </div>
  );
}
