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
  title: {
    template: '%s | PSA',
    default: 'Peace Service Academy | PSA',
  },
  description: "Affiliated to GAMIP. Committed to empowerment, capacity building, and scholarly publications.",
  openGraph: {
    title: 'Peace Service Academy',
    description: 'The global gateway for peace studies and professional mediation training.',
    url: 'https://peace-service-academy.org',
    siteName: 'Peace Service Academy',
    images: [
      {
        url: 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1769142511/blog_assets/dxbchgsoje3rjcwyq0zh.png',
        width: 800,
        height: 800,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peace Service Academy',
    description: 'Empowering the next generation of peace-builders.',
    images: ['https://res.cloudinary.com/dwbjb3svx/image/upload/v1769142511/blog_assets/dxbchgsoje3rjcwyq0zh.png'],
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
