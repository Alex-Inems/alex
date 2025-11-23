import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WebGLBackground from "@/components/WebGLBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alex Thompson ",
  description: "Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/* WebGL Interactive Background - Site Wide */}
        <div className="fixed inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <WebGLBackground />
        </div>
        
        {/* WebGL Badge - Site Wide */}
        <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-pulse">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z"/>
          </svg>
          <span className="font-bold text-sm">WebGL Interactive UI</span>
          <span className="text-xs opacity-75">Move your mouse!</span>
        </div>
        
        {/* Content */}
        <div className="relative" style={{ zIndex: 10 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
