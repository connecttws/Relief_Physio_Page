import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
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
      <head>
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1550752906733150');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className="min-h-[100dvh] w-full max-w-[100vw] overflow-x-hidden">
        {/* Meta Pixel noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1550752906733150&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
