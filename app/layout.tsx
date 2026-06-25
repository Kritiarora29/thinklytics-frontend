import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuroraBackground from "./components/AuroraBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://thinklytics.ai"),
  title: "Thinklytics AI | Build the Future with AI",
  description: "Design, build, and scale AI-powered products with speed and precision. Thinklytics AI helps you leverage cutting-edge technology to transform your business.",
  keywords: ["AI", "Artificial Intelligence", "Product Development", "Machine Learning", "Innovation"],
  authors: [{ name: "Thinklytics AI" }],
  openGraph: {
    title: "Thinklytics AI",
    description: "Build the Future with AI — Together.",
    url: "https://thinklytics.ai",
    siteName: "Thinklytics AI",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thinklytics AI",
    description: "Design, build, and scale AI-powered products with speed and precision.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        <AuroraBackground />
        {children}
        <Footer />
      </body>
    </html>
  );
}