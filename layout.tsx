import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import { SITE } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.fullName} — ${SITE.role}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.mission,
  keywords: [
    "software engineer",
    "systems",
    "full-stack",
    "portfolio",
  ],
  authors: [{ name: SITE.fullName }],
  openGraph: {
    title: SITE.fullName,
    description: SITE.tagline,
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen font-sans">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
