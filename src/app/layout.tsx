import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sylmap.com"),
  title: "Sylmap — The Academic Universe is Taking Shape",
  description:
    "Sylmap is building a smarter way to explore courses, curricula, learning resources, and academic pathways.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Sylmap — The Academic Universe is Taking Shape",
    description:
      "Sylmap is building a smarter way to explore courses, curricula, learning resources, and academic pathways.",
    url: "https://sylmap.com/coming-soon",
    siteName: "Sylmap",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans antialiased h-full text-slate-100 bg-slate-950`}>
      <body
        suppressHydrationWarning
        className="h-full w-full bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200"
      >
        {children}
      </body>
    </html>
  );
}
