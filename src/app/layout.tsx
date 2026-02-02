import EngineStatus from "@/components/ui/EngineStatus";
import "./globals.css";
import EngineStatus from "@/components/ui/EngineStatus";
import { Playfair_Display, Lato } from "next/font/google";
import EngineStatus from "@/components/ui/EngineStatus";
import InstitutionalMasthead from "@/components/layout/InstitutionalMasthead";
import EngineStatus from "@/components/ui/EngineStatus";

import EngineStatus from "@/components/ui/EngineStatus";
const playfair = Playfair_Display({
import EngineStatus from "@/components/ui/EngineStatus";
  subsets: ["latin"],
import EngineStatus from "@/components/ui/EngineStatus";
  variable: "--font-playfair",
import EngineStatus from "@/components/ui/EngineStatus";
  display: "swap",
import EngineStatus from "@/components/ui/EngineStatus";
});
import EngineStatus from "@/components/ui/EngineStatus";

import EngineStatus from "@/components/ui/EngineStatus";
const lato = Lato({
import EngineStatus from "@/components/ui/EngineStatus";
  subsets: ["latin"],
import EngineStatus from "@/components/ui/EngineStatus";
  weight: ["300", "400", "700"],
import EngineStatus from "@/components/ui/EngineStatus";
  variable: "--font-lato",
import EngineStatus from "@/components/ui/EngineStatus";
  display: "swap",
import EngineStatus from "@/components/ui/EngineStatus";
});
import EngineStatus from "@/components/ui/EngineStatus";

import EngineStatus from "@/components/ui/EngineStatus";
// === FIXED METADATA: PSA IDENTITY ===
import EngineStatus from "@/components/ui/EngineStatus";
export const metadata = {
import EngineStatus from "@/components/ui/EngineStatus";
  title: {
import EngineStatus from "@/components/ui/EngineStatus";
    template: '%s | PSA',
import EngineStatus from "@/components/ui/EngineStatus";
    default: 'Peace Service Academy | PSA',
import EngineStatus from "@/components/ui/EngineStatus";
  },
import EngineStatus from "@/components/ui/EngineStatus";
  description: "A distinguished institution committed to excellence in mediation, negotiation, and leadership training.",
import EngineStatus from "@/components/ui/EngineStatus";
  openGraph: {
import EngineStatus from "@/components/ui/EngineStatus";
    title: 'Peace Service Academy',
import EngineStatus from "@/components/ui/EngineStatus";
    description: 'Empowering the next generation of peace-builders through rigorous academic inquiry and practical service.',
import EngineStatus from "@/components/ui/EngineStatus";
    siteName: 'Peace Service Academy',
import EngineStatus from "@/components/ui/EngineStatus";
    locale: 'en_US',
import EngineStatus from "@/components/ui/EngineStatus";
    type: 'website',
import EngineStatus from "@/components/ui/EngineStatus";
  },
import EngineStatus from "@/components/ui/EngineStatus";
};
import EngineStatus from "@/components/ui/EngineStatus";

import EngineStatus from "@/components/ui/EngineStatus";
export default function RootLayout({
import EngineStatus from "@/components/ui/EngineStatus";
  children,
import EngineStatus from "@/components/ui/EngineStatus";
}: {
import EngineStatus from "@/components/ui/EngineStatus";
  children: React.ReactNode;
import EngineStatus from "@/components/ui/EngineStatus";
}) {
import EngineStatus from "@/components/ui/EngineStatus";
  return (
import EngineStatus from "@/components/ui/EngineStatus";
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
import EngineStatus from "@/components/ui/EngineStatus";
      <body className="font-sans antialiased">
import EngineStatus from "@/components/ui/EngineStatus";
        <InstitutionalMasthead />
import EngineStatus from "@/components/ui/EngineStatus";
        <EngineStatus />
        {children}
import EngineStatus from "@/components/ui/EngineStatus";
      </body>
import EngineStatus from "@/components/ui/EngineStatus";
    </html>
import EngineStatus from "@/components/ui/EngineStatus";
  );
import EngineStatus from "@/components/ui/EngineStatus";
}
