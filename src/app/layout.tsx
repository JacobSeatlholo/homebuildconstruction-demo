import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { site } from "@/lib/site";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | Kitchen, Bathroom & Timber-Frame Renovations in Cape Town`,
  description: site.description,
  keywords: [
    "Cape Town builder",
    "kitchen renovations Cape Town",
    "bathroom renovations Cape Town",
    "timber frame construction South Africa",
    "home renovations South Peninsula",
    "building contractor Cape Town",
  ],
  openGraph: {
    title: `${site.name} — Workmanship you can trust`,
    description: site.description,
    url: site.website,
    siteName: site.name,
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#1c1917",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body
        className={`${archivo.variable} ${inter.variable} min-h-screen bg-stone-50 font-sans antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
