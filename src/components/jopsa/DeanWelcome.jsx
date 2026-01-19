"use client";
import { motion } from "framer-motion";
import siteData from "../../data/siteContent.json";
import { Quote } from "lucide-react";

export default function DeanWelcome() {
  const { dean_welcome } = siteData.academy;

  return (
    <section className="relative py-24 px-4 md:px-8 bg-obsidian-950 overflow-hidden flex justify-center">
      
      {/* === AMBIENT ATMOSPHERE === */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#020408]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* === THE PRESIDENTIAL CARD === */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-4xl w-full"
      >
        <div className="relative bg-[#FDFBF7] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden">
          
          {/* Paper Texture */}
          <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply pointer-events-none"></div>
          
          {/* Top Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gold-500 shadow-lg shadow-gold-500/30"></div>

          <div className="relative z-10 flex flex-col gap-10">
            
            {/* HEADER (Centered) */}
            <div className="text-center">
              <div className="inline-block p-3 rounded-full bg-gold-500/10 text-gold-600 mb-6">
                <Quote size={24} className="fill-gold-500/20" />
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-obsidian-900 mb-4 leading-tight">
                {dean_welcome.title}
              </h2>
              <div className="h-px w-16 bg-slate-300 mx-auto"></div>
            </div>

            {/* BODY (Left Aligned for Drop Cap) */}
            <div className="prose prose-lg max-w-none text-slate-800 font-serif leading-relaxed text-left">
              <p className="text-lg md:text-xl font-light">
                <span className="float-left text-7xl md:text-8xl font-serif text-gold-500 mr-4 mt-[-10px] md:mt-[-18px] leading-none drop-shadow-sm">
                  {dean_welcome.content.charAt(0)}
                </span>
                {dean_welcome.content.slice(1)}
              </p>
            </div>

            {/* SIGNATURE (Right Aligned for Balance) */}
            <div className="flex flex-col items-end mt-8 pt-8 border-t border-slate-100">
              <div className="text-right">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <p className="font-serif text-3xl md:text-5xl text-obsidian-900 mb-2 transform -rotate-2" style={{ fontFamily: 'cursive' }}>
                    {dean_welcome.signature_name}
                  </p>
                </motion.div>
                
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-600 mt-2">
                  {dean_welcome.designation}
                </p>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
