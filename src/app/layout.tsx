import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://softwaveinnovation.com"),
  title: {
    default: "Softwave Innovation — Software That Moves the World Forward",
    template: "%s | Softwave Innovation",
  },
  description:
    "Softwave Innovation builds custom software solutions across web development, mobile apps, AI/ML, data analytics, and cloud infrastructure. Based globally, delivering excellence.",
  keywords: [
    "software development company",
    "web development",
    "mobile app development",
    "AI ML solutions",
    "data analytics",
    "cloud solutions",
    "custom software",
    "Next.js development",
    "React development",
  ],
  authors: [{ name: "Softwave Innovation" }],
  creator: "Softwave Innovation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://softwaveinnovation.com",
    siteName: "Softwave Innovation",
    title: "Softwave Innovation — Software That Moves the World Forward",
    description:
      "Custom software solutions across web, mobile, AI/ML, data analytics, and cloud. We build software that delivers results.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Softwave Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Softwave Innovation — Software That Moves the World Forward",
    description:
      "Custom software solutions across web, mobile, AI/ML, data analytics, and cloud.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} font-sans bg-[#faf4f1] dark:bg-[#0d0d0d] text-[#1a1a1a] dark:text-[#faf4f1] antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
