"use client";
import { motion } from "framer-motion";
import siteData from "../../data/siteContent.json";
import { Quote } from "lucide-react";

export default function DeanWelcome() {
  const { dean_welcome } = siteData.academy;

  return (
    <section className="relative py-32 px-4 md:px-8 bg-[#050a14] overflow-hidden flex justify-center">
      
      {/* === AMBIENT BACKGROUND === */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1a2333_0%,#020408_100%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        {/* Gold Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/5 blur-[120px] rounded-full"></div>
      </div>

      {/* === THE ROYAL CARD === */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl w-full bg-[#FDFBF7] text-obsidian-900 p-8 md:p-20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
      >
        {/* === ORNAMENTAL BORDER === */}
        <div className="absolute inset-4 border border-gold-500/30 pointer-events-none"></div>
        <div className="absolute inset-5 border border-dotted border-gold-500/20 pointer-events-none"></div>
        
        {/* Corner Flourishes (CSS Shapes) */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold-500"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold-500"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold-500"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold-500"></div>

        {/* === WATERMARK === */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.03] pointer-events-none">
           <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-obsidian-900">
             <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
             <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" fill="none" />
             <text x="50" y="55" textAnchor="middle" fontSize="20" fontFamily="serif" fontWeight="bold">JP</text>
           </svg>
        </div>

        {/* === CONTENT === */}
        <div className="relative z-10 text-center">
          
          {/* Icon */}
          <div className="inline-flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gold-500 blur-lg opacity-20"></div>
              <Quote size={40} className="text-gold-600 relative z-10 fill-gold-500/10" />
            </div>
          </div>

          {/* Title (Gold Foil Effect) */}
          <h2 className="font-serif text-4xl md:text-5xl mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-obsidian-900 via-slate-700 to-obsidian-900 bg-clip-text text-transparent font-medium">
              {dean_welcome.title}
            </span>
          </h2>

          {/* Divider */}
          <div className="flex justify-center items-center gap-4 mb-10 opacity-40">
            <div className="h-px w-12 bg-gold-600"></div>
            <div className="w-2 h-2 rotate-45 border border-gold-600"></div>
            <div className="h-px w-12 bg-gold-600"></div>
          </div>

          {/* Body Text */}
          <div className="text-left md:text-center">
            <p className="font-serif text-xl md:text-2xl text-slate-800 leading-[1.8] font-light">
              <span className="float-left text-6xl md:text-7xl font-serif text-gold-500 mr-4 mt-[-8px] leading-none drop-shadow-sm">
                {dean_welcome.content.charAt(0)}
              </span>
              {dean_welcome.content.slice(1)}
            </p>
          </div>

          {/* Signature Block */}
          <div className="mt-16 pt-10 flex flex-col items-center relative">
            {/* Wax Seal Graphic (CSS) */}
            <div className="absolute -top-6 right-10 md:right-32 w-24 h-24 rounded-full bg-red-900/10 blur-xl pointer-events-none"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="font-serif text-5xl md:text-6xl text-obsidian-900 mb-3 transform -rotate-2" style={{ fontFamily: 'cursive' }}>
                {dean_welcome.signature_name}
              </p>
            </motion.div>
            
            <div className="flex flex-col items-center gap-1">
              <div className="h-0.5 w-16 bg-gold-500"></div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                {dean_welcome.designation}
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
