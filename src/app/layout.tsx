import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Anoop K | AI/ML Engineer",
  description: "AI/ML Engineer based in Bangalore, India. Building intelligent systems — Computer Vision, NLP, RAG pipelines, and production-ready GenAI applications.",
  openGraph: {
    title: "Anoop K — AI/ML Engineer",
    description: "Building intelligent systems — Computer Vision, NLP, RAG pipelines, and production-ready GenAI applications.",
    url: "https://anoopk.vercel.app",
    siteName: "Anoop K Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 400,
        height: 400,
        alt: "Anoop K — AI/ML Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Anoop K — AI/ML Engineer",
    description: "Building intelligent systems — Computer Vision, NLP, RAG pipelines, and production-ready GenAI applications.",
    images: ["/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}