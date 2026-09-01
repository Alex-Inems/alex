import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // ── Primary SEO ──────────────────────────────────────────────────────────────
  title: "Alex Thompson | Full-Stack Developer",
  description:
    "Senior full-stack developer specialising in Next.js, React, SaaS platforms, admin dashboards, and custom web apps. I also build Shopify stores and n8n automations for clients who need end-to-end delivery. Available on Upwork.",

  keywords: [
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "SaaS Developer",
    "Web Application Developer",
    "Shopify Developer",
    "E-commerce Developer",
    "n8n Automation",
    "Workflow Automation",
    "Freelance Developer",
    "Upwork Developer",
    "Alex Thompson",
  ],

  // ── Open Graph (Facebook Ads, LinkedIn, WhatsApp, Slack previews) ─────────
  openGraph: {
    title: "Alex Thompson | Full-Stack Developer",
    description:
      "Full-stack web apps, SaaS platforms, Shopify stores, and n8n automations. Book a strategy call on Upwork.",
    url: "https://www.upwork.com/freelancers/~01d99779b36e05950f",
    siteName: "Alex Thompson Portfolio",
    images: [
      {
        url: "/images/alex.jpeg",
        width: 1200,
        height: 630,
        alt: "Alex Thompson, Full-Stack Developer",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Alex Thompson | Full-Stack Developer",
    description:
      "Full-stack web apps, SaaS platforms, Shopify stores, and n8n automations. Book a strategy call on Upwork.",
    images: ["/images/alex.jpeg"],
  },

  // ── Favicon & App Icons ───────────────────────────────────────────────────────
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },

  // ── Crawl Directives ─────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
