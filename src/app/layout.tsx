import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Rahul's Relief Physiotherapy | Permanent Root-Cause Spine, Knee & Neck Pain Relief",
  description: "End recurring spine, knee, and neck pain without surgery or lifelong painkillers. Dr. Rahul's proven 4-step personalised treatment approach has helped 10,000+ patients regain active, pain-free mobility.",
  keywords: [
    "physiotherapy",
    "spine pain treatment",
    "knee pain relief",
    "neck pain physiotherapist",
    "Dr Rahul physiotherapist",
    "Relief Physiotherapy",
    "root cause pain treatment",
    "manual therapy"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="min-h-[100dvh] overflow-x-hidden bg-[#F8FAFC] text-slate-900 antialiased selection:bg-[#0D9488] selection:text-white">
        {children}
      </body>
    </html>
  );
}
