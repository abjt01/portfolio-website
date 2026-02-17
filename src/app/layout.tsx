import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import GlobalLoader from "@/components/GlobalLoader"

export const metadata: Metadata = {
  title: "Abhijeet Yadav",
  description:
    "curious what Abhijeet is up to?",
  icons: { 
    icon: "/pfp.png" 
  },
  openGraph: {
    title: "Abhijeet Yadav",
    url: "https://linktr.ee/abjt01",
    siteName: "Abhijeet Yadav",
    images: [
      {
        url: "/pfp.png",
        width: 1200,
        height: 630,
        alt: "Abhijeet Yadav"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhijeet Yadav",
    description:
      "curious what Abhijeet is up to?",
    images: ["/pfp.png"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@300,400,500,700&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=lora@400,401,500,501&display=swap" rel="stylesheet" /> 
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="scroll-smooth bg-[#0a0a0a] text-gray-100 antialiased">
        <GlobalLoader />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
