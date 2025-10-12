import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenn | Developer Portfolio",
  description:
    "Hi, I’m Kenn — a software engineer who loves building mobile apps and games.",
  openGraph: {
    title: "Kenn | Developer Portfolio",
    description:
      "Hi, I’m Kenn — a software engineer who loves building mobile apps and games",
    url: "https://kenn-mujar.vercel.app/",
    siteName: "Kenn Portfolio",
    images: [
      {
        url: "/thumbnail.png", // replace this with your image path
        width: 1200,
        height: 630,
        alt: "Kenn Developer Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenn | Developer Portfolio",
    description: "Software engineer crafting apps, games, and experiences.",
    images: ["/thumbnail.png"], // replace this with your image path
    creator: "@yourtwitterhandle", // replace this with your Twitter handle
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
