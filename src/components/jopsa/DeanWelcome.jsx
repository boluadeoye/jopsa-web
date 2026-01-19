"use client";
import { motion } from "framer-motion";
import siteData from "../../data/siteContent.json";
import { Quote } from "lucide-react";

export default function DeanWelcome() {
  const { dean_welcome } = siteData.academy;

  return (
    <section className="relative py-32 px-4 bg-obsidian-950 overflow-hidden flex justify-center">
      
      {/* === AMBIENT ATMOSPHERE === */}
      <div className="absolute inset-0 z-0">
        {/* Deep Blue Base */}
        <div className="absolute inset-0 bg-[#020408]"></div>
        {/* Gold Ambient Light (Softness) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        {/* Texture */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* === THE PRESIDENTIAL CARD === */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-5xl w-full"
      >
        {/* The Paper Container */}
        <div className="relative bg-gradient-to-b from-[#fffefb] to-[#f2efe9] rounded-[3rem] p-8 md:p-20 shadow-2xl overflow-hidden">
          
          {/* Subtle Grain on Paper */}
          <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply pointer-events-none"></div>
          
          {/* Decorative Top Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gold-500 rounded-b-full shadow-lg shadow-gold-500/30"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center md:items-start">
            
            {/* LEFT: The Hook (Quote & Title) */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block p-4 rounded-full bg-gold-500/10 text-gold-600 mb-8">
                <Quote size={32} className="fill-gold-500/20" />
              </div>
              
              <h2 className="font-serif text-4xl md:text-6xl text-obsidian-900 mb-6 leading-tight tracking-tight">
                {dean_welcome.title}
              </h2>
              
              <div className="h-px w-24 bg-slate-300 md:mx-0 mx-auto mb-8"></div>

              {/* The "P" Drop Cap Paragraph */}
              <div className="prose prose-lg text-slate-700 font-serif leading-relaxed">
                <p className="text-lg md:text-xl font-light">
                  <span className="float-left text-7xl font-serif text-gold-500 mr-4 mt-[-12px] leading-none drop-shadow-sm">
                    {dean_welcome.content.charAt(0)}
                  </span>
                  {dean_welcome.content.slice(1)}
                </p>
              </div>
            </div>

            {/* RIGHT: The Authority (Signature & Profile) */}
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-slate-200 pt-10 md:pt-0 md:pl-12">
              
              {/* Profile Silhouette / Placeholder */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border-4 border-white shadow-xl flex items-center justify-center mb-8 overflow-hidden">
                <span className="font-serif text-4xl text-slate-300 font-bold">JP</span>
              </div>

              {/* Signature */}
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <p className="font-serif text-4xl md:text-5xl text-obsidian-900 mb-2 transform -rotate-3" style={{ fontFamily: 'cursive' }}>
                    {dean_welcome.signature_name}
                  </p>
                </motion.div>
                
                <div className="mt-4 px-4 py-1 border border-gold-500/30 rounded-full bg-gold-500/5 inline-block">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-obsidian-800">
                    {dean_welcome.designation}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        {/* Bottom Glow Effect */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-gold-500/20 blur-[60px] rounded-full -z-10"></div>

      </motion.div>
    </section>
  );
}
