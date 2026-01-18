import AcademyHero from "@/components/jopsa/AcademyHero";
import DeanWelcome from "@/components/jopsa/DeanWelcome";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F8F4]">
      <AcademyHero />
      <DeanWelcome />
      
      {/* Simple Footer for now */}
      <footer className="py-12 border-t border-slate-200 text-center bg-white">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          © 2026 Journal of Peace Service Academy
        </p>
      </footer>
    </main>
  );
}
