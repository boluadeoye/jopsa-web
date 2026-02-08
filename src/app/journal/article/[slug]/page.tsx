"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Quote, Share2, Check, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import articleData from "@/data/journal/articles/farmers-herders.json";

export default function ArticleReader() {
  const params = useParams();
  const article = articleData; 

  const [copied, setCopied] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToWhatsapp = () => {
    const text = `Read this scholarly article from the Journal of Peace Service Academy: ${article.title} - ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#F9F8F4] text-obsidian-900 pb-24 scroll-smooth">
      
      {/* === SCHOLARLY ACTION DOCK (Floating) === */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 bg-obsidian-900/90 backdrop-blur-xl border border-gold-500/30 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all">
        <button 
          onClick={handleCopyLink}
          className="flex items-center gap-2 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white hover:bg-gold-500 hover:text-obsidian-900 transition-all"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Share2 size={14} className="text-gold-500" />}
          <span>{copied ? "Link Copied" : "Copy Link"}</span>
        </button>
        <div className="w-px h-4 bg-white/10"></div>
        <button 
          onClick={shareToWhatsapp}
          className="p-2.5 rounded-full text-white hover:bg-emerald-600 transition-all"
          title="Share to WhatsApp"
        >
          <MessageSquare size={18} />
        </button>
      </div>

      {/* === HEADER === */}
      <header className="bg-obsidian-950 text-white pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <Link href="/journal/current" className="inline-flex items-center gap-2 text-gold-500 text-xs font-bold uppercase tracking-widest mb-8 hover:text-white transition-colors">
            <ArrowLeft size={14} /> Back to Issue
          </Link>
          
          <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 mb-6">
            <span className="px-2 py-1 border border-white/10 rounded">{article.metadata.volume}, {article.metadata.number}</span>
            <span className="px-2 py-1 border border-white/10 rounded">{article.metadata.year}</span>
            <span className="px-2 py-1 border border-white/10 rounded">ISSN: {article.metadata.issn}</span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-8 text-white tracking-tight">
            {article.title}
          </h1>

          <div className="flex flex-col md:flex-row md:items-center gap-6 text-slate-300">
            {article.authors.map((author, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-gold-500/50 flex items-center justify-center font-serif font-bold text-gold-500 bg-white/5">
                  {author.name.charAt(0)}
                </div>
                <p className="font-bold text-sm text-white">{author.name} <span className="text-gold-500 font-serif italic text-xs ml-1">{author.title}</span></p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* === READER CONTENT === */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <article className="prose prose-lg prose-slate max-w-none">
          {/* Abstract Card */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200 mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gold-500"></div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gold-600 mb-6">Abstract</h3>
            <p className="text-slate-800 leading-[1.8] font-serif text-lg md:text-xl italic text-justify">
              {article.abstract}
            </p>
          </div>

          {/* Body Sections */}
          <div className="space-y-16">
            {article.sections.map((sec) => (
              <section key={sec.id} id={sec.id} className="scroll-mt-32">
                <h2 className="font-serif text-3xl text-obsidian-900 mb-8 flex items-center gap-4">
                  <span className="h-px flex-1 bg-slate-200"></span>
                  <span className="shrink-0">{sec.title}</span>
                  <span className="h-px flex-1 bg-slate-200"></span>
                </h2>
                <p className="font-sans text-slate-700 leading-[2.2] text-lg text-justify whitespace-pre-wrap">
                  {sec.content}
                </p>
              </section>
            ))}
          </div>

          {/* References */}
          <section id="references" className="mt-24 pt-12 border-t-2 border-obsidian-900">
            <h2 className="font-serif text-2xl text-obsidian-900 mb-8 uppercase tracking-widest">References</h2>
            <ul className="space-y-6">
              {article.references.map((ref, i) => (
                <li key={i} className="text-sm text-slate-500 leading-relaxed pl-6 border-l-2 border-gold-500/30">
                  {ref}
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}
