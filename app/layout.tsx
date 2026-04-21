import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "InVista | Pubblicità reale vista da persone vere",
  description:
    "Sito promozionale per spazi pubblicitari su schermo in un locale ad alta affluenza, con stime basate su scontrini reali.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} bg-hero-radial font-sans text-white antialiased`}>
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-gold/10 blur-[120px]" />
          <div className="absolute right-0 top-80 h-72 w-72 rounded-full bg-mint/10 blur-[120px]" />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}
