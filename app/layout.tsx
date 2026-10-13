import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import Navbar from "@/components/housen/Navbar";
import Footer from "@/components/housen/Footer";
import ChatBot from "@/components/ChatBot";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const serifIt = Playfair_Display({ variable: "--font-serif-it", subsets: ["latin"], style: ["italic", "normal"] });

export const metadata: Metadata = {
  title: "Prabhakar Tendulkar Plaza — Pandharpur | Spaces for Rent",
  description:
    "Commercial spaces for rent at Prabhakar Tendulkar Plaza, Nave Peth, Pandharpur. Jio, Equitas Bank, Gym, ATM. Rent on enquiry, direct from owner.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${serifIt.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ChatBot />
        </LanguageProvider>
      </body>
    </html>
  );
}
