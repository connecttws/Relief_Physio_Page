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
  title: "Relief Physiotherapy | Clinic for Spine, Knee & Neck Pain — Mayur Vihar Phase 1, Delhi",
  description:
    "Evidence-based physiotherapy at Relief Physiotherapy. In-clinic at B-4, Acharya Niketan, Mayur Vihar Phase 1, Behind Bansal Sweets, Delhi - 110091 & online pan-India. Call 9675967575.",
  keywords: [
    "Relief Physiotherapy",
    "physiotherapist Mayur Vihar Phase 1",
    "Acharya Niketan physiotherapy",
    "physiotherapy Delhi 110091",
    "spine pain treatment Delhi",
    "knee pain physiotherapy",
    "neck pain relief Mayur Vihar",
    "online physiotherapy India",
    "back pain specialist Delhi",
  ],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Relief Physiotherapy — Spine, Knee & Neck Pain Clinic",
    description:
      "Evidence-based physiotherapy at B-4, Acharya Niketan, Mayur Vihar Phase 1, Delhi & online. Call +91 96759 67575.",
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
      <body className="min-h-[100dvh] w-full max-w-[100vw] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
