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

export const metadata = {
  title: "Journal of Peace Service Academy | JOPSA",
  description: "A distinguished digital platform for academic inquiry and peace-building.",
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
