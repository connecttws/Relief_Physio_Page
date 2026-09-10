import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dr. Rahul | Physiotherapy for Spine, Knee & Neck Pain — Mayur Vihar, Delhi & Online",
  description:
    "Get a personalised physiotherapy assessment from Dr. Rahul — 12+ years, 10,000+ patients treated. In-clinic in Mayur Vihar, Delhi or online Pan-India. Real diagnosis, no guesswork.",
  keywords: [
    "physiotherapist Mayur Vihar",
    "physiotherapy Delhi",
    "spine pain treatment",
    "knee pain physiotherapy",
    "neck pain relief",
    "online physiotherapy India",
    "Dr Rahul physiotherapist",
    "back pain specialist Delhi",
  ],
  openGraph: {
    title: "Dr. Rahul | Physiotherapy — Spine, Knee & Neck Pain",
    description:
      "Personalised physiotherapy in Mayur Vihar, Delhi & online. 10,000+ patients treated. Book your consultation today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
