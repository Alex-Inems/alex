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
  title: "Alex Thompson | Shopify Developer & Full-Stack Engineer",
  description:
    "Shopify developer specialising in custom DTC storefronts, theme development, and conversion-focused e-commerce. I also build full-stack web apps and n8n automations for merchants who want to scale beyond launch. Available on Upwork.",

  keywords: [
    "Shopify Developer",
    "Shopify Store Setup",
    "Shopify Theme Developer",
    "E-commerce Developer",
    "DTC Store Developer",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "n8n Automation",
    "Workflow Automation",
    "Freelance Developer",
    "Upwork Developer",
    "Alex Thompson",
  ],

  // ── Open Graph (Facebook Ads, LinkedIn, WhatsApp, Slack previews) ─────────
  openGraph: {
    title: "Alex Thompson | Shopify Developer & Full-Stack Engineer",
    description:
      "Custom Shopify stores, full-stack web apps, and post-launch n8n automations. Book a strategy call on Upwork.",
    url: "https://www.upwork.com/freelancers/~01d99779b36e05950f",
    siteName: "Alex Thompson Portfolio",
    images: [
      {
        url: "/images/alex.jpeg",
        width: 1200,
        height: 630,
        alt: "Alex Thompson — Shopify Developer & Full-Stack Engineer",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Alex Thompson | Shopify Developer & Full-Stack Engineer",
    description:
      "Custom Shopify stores, full-stack web apps, and post-launch n8n automations. Book a strategy call on Upwork.",
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
