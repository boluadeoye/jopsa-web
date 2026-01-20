import "./globals.css";
import { Playfair_Display, Lato } from "next/font/google";
import InstitutionalMasthead from "@/components/layout/InstitutionalMasthead";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

// === FIXED METADATA: PSA IDENTITY ===
export const metadata = {
  title: {
    template: '%s | PSA',
    default: 'Peace Service Academy | PSA',
  },
  description: "A distinguished institution committed to excellence in mediation, negotiation, and leadership training.",
  openGraph: {
    title: 'Peace Service Academy',
    description: 'Empowering the next generation of peace-builders through rigorous academic inquiry and practical service.',
    siteName: 'Peace Service Academy',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans antialiased">
        <InstitutionalMasthead />
        {children}
      </body>
    </html>
  );
}
