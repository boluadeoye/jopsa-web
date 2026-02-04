"use client";
import { motion } from "framer-motion";
import { Lock, ShieldAlert, Activity, Terminal, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";

export default function LockedPage() {
  const [attempts, setAttempts] = useState(14951);
  const [logs, setLogs] = useState([
    "SYSTEM: Security Protocol Alpha-9 Active",
    "MONITOR: Tracking unauthorized IP signatures...",
  ]);

  // Simulate live counter increasing
  useEffect(() => {
    const interval = setInterval(() => {
      setAttempts(prev => prev + Math.floor(Math.random() * 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Simulate live logs
  useEffect(() => {
    const possibleLogs = [
      "BLOCKED: GET /wp-admin/setup-config.php",
      "BLOCKED: POST /xmlrpc.php",
      "WARN: Unauthorized Admin Access Attempt",
      "FIREWALL: IP Address Flagged",
      "BLOCKED: GET /wordpress/wp-login.php"
    ];

    const interval = setInterval(() => {
      const newLog = possibleLogs[Math.floor(Math.random() * possibleLogs.length)];
      const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
      setLogs(prev => [`[${timestamp}] ${newLog}`, ...prev.slice(0, 4)]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#020408] flex items-center justify-center p-6 font-mono overflow-hidden relative">
      
      {/* Red Alert Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3f0a0a_0%,#020408_80%)] opacity-40 animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 max-w-2xl w-full bg-black/80 backdrop-blur-xl border border-red-900/50 rounded-3xl p-8 md:p-12 shadow-2xl shadow-red-900/20"
      >
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
            <ShieldAlert size={40} className="text-red-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight uppercase">
            Security Lockdown
          </h1>
          <p className="text-red-400 text-sm font-bold tracking-[0.2em] uppercase">
            Administrative Access Revoked
          </p>
        </div>

        {/* The Live Counter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-950/30 border border-red-900/30 p-6 rounded-2xl flex flex-col items-center justify-center">
            <div className="flex items-center gap-2 text-red-400 mb-2">
              <Activity size={16} className="animate-pulse" />
              <span className="text-xs font-bold uppercase">Threat Level</span>
            </div>
            <span className="text-3xl font-black text-white">CRITICAL</span>
          </div>

          <div className="bg-red-950/30 border border-red-900/30 p-6 rounded-2xl flex flex-col items-center justify-center">
            <div className="flex items-center gap-2 text-red-400 mb-2">
              <Lock size={16} />
              <span className="text-xs font-bold uppercase">Blocked Attempts</span>
            </div>
            <span className="text-3xl font-black text-white tabular-nums">
              {attempts.toLocaleString()}
            </span>
          </div>
        </div>

        {/* The Live Terminal */}
        <div className="bg-black border border-slate-800 rounded-xl p-4 font-mono text-xs h-40 overflow-hidden relative">
          <div className="absolute top-2 right-3 flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <div className="text-slate-500 mb-2 border-b border-slate-800 pb-2 flex items-center gap-2">
            <Terminal size={12} /> SYSTEM LOGS (LIVE)
          </div>
          <div className="space-y-2">
            {logs.map((log, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`${log.includes("BLOCKED") ? "text-red-400" : "text-emerald-400"}`}
              >
                {log}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Message (Updated) */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <div className="inline-flex items-center gap-2 text-slate-400 text-xs bg-white/5 px-4 py-2 rounded-full">
            <AlertTriangle size={14} className="text-yellow-500" />
            <span>Contact Lead Architect to initiate manual security override.</span>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
