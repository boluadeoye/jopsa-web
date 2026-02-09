"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Quote, Calendar, BookOpen, Check } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import articleData from "@/data/journal/articles/farmers-herders.json";

export default function ArticleReader() {
  const params = useParams();
  const article = articleData; 

  const [copied, setCopied] = useState(false);

  const handleCite = () => {
    const citation = `${article.authors[0].name} & ${article.authors[1].name} (${article.metadata.year}). ${article.title}. ${article.metadata.journal}, ${article.metadata.volume}(${article.metadata.number}), ${article.metadata.pages}.`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#F9F8F4] text-obsidian-900 pb-24 overflow-x-hidden">
      
      {/* === HEADER === */}
      <header className="bg-obsidian-950 text-white pt-20 pb-12 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <Link href="/journal" className="inline-flex items-center gap-2 text-gold-500 text-[10px] font-bold uppercase tracking-widest mb-6 hover:text-white transition-colors">
            <ArrowLeft size={12} /> Back to Journal
          </Link>
          
          <div className="flex flex-wrap gap-3 text-[10px] font-mono text-slate-400 mb-4 uppercase tracking-wider">
            <span className="px-2 py-0.5 border border-white/10 rounded">{article.metadata.volume}</span>
            <span className="px-2 py-0.5 border border-white/10 rounded">{article.metadata.year}</span>
            <span className="px-2 py-0.5 border border-white/10 rounded">ISSN: {article.metadata.issn}</span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-8 text-white tracking-tight">
            {article.title}
          </h1>

          <div className="flex flex-col gap-4 text-slate-300">
            {article.authors.map((author, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-500 text-obsidian-900 flex items-center justify-center font-serif font-bold text-sm shrink-0">
                  {author.name.charAt(0)}
                </div>
                <p className="font-bold text-sm text-white">{author.name} <span className="text-gold-500 text-xs font-normal">{author.title}</span></p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* === READER LAYOUT === */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* SIDEBAR (Desktop Only) */}
        <aside className="lg:col-span-3 hidden lg:block">
          <div className="sticky top-32 space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-2">Navigation</p>
            <nav className="space-y-2">
              <a href="#abstract" className="block text-sm text-slate-600 hover:text-gold-600 transition-colors">Abstract</a>
              {article.sections.map((sec) => (
                <a key={sec.id} href={`#${sec.id}`} className="block text-sm text-slate-600 hover:text-gold-600 transition-colors line-clamp-1">
                  {sec.title}
                </a>
              ))}
              <a href="#references" className="block text-sm text-slate-600 hover:text-gold-600 transition-colors">References</a>
            </nav>

            <button 
              onClick={handleCite}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-obsidian-900 text-white text-[10px] font-bold uppercase tracking-widest rounded hover:bg-gold-500 hover:text-obsidian-900 transition-all shadow-lg"
            >
              {copied ? <Check size={14} /> : <Quote size={14} />}
              {copied ? "Copied APA" : "Cite Article"}
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT (Centered & Responsive) */}
        <div className="lg:col-span-8 xl:col-span-7">
          
          {/* Abstract Card */}
          <div id="abstract" className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-slate-100 mb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gold-500"></div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-4">Abstract</h3>
            <p className="text-slate-700 leading-relaxed font-sans text-base md:text-lg text-justify">
              {article.abstract}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {article.keywords.map((kw, i) => (
                <span key={i} className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase rounded-md border border-slate-200">
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Article Body */}
          <div className="space-y-12">
            {article.sections.map((sec) => (
              <section key={sec.id} id={sec.id} className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-4xl text-obsidian-900 mb-6 tracking-tight leading-tight">
                  {sec.title}
                </h2>
                <p className="font-sans text-slate-800 leading-[1.8] text-lg md:text-xl text-justify whitespace-pre-wrap">
                  {sec.content}
                </p>
              </section>
            ))}
          </div>

          {/* References */}
          <section id="references" className="mt-20 pt-10 border-t-2 border-slate-200">
            <h2 className="font-serif text-2xl text-obsidian-900 mb-8 uppercase tracking-widest">References</h2>
            <ul className="space-y-6">
              {article.references.map((ref, i) => (
                <li key={i} className="flex gap-4 text-sm text-slate-600 leading-relaxed">
                  <span className="text-gold-600 font-bold">{i + 1}.</span>
                  <span>{ref}</span>
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* MOBILE FLOATING ACTION */}
        <div className="lg:hidden fixed bottom-6 right-6 z-50">
          <button 
            onClick={handleCite}
            className="p-4 bg-gold-500 text-obsidian-900 rounded-full shadow-2xl border-2 border-white active:scale-90 transition-transform"
          >
            {copied ? <Check size={24} /> : <Quote size={24} />}
          </button>
        </div>

      </div>
    </main>
  );
}
