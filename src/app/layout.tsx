import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Softwave Innovation — Software That Moves the World Forward",
    template: "%s | Softwave Innovation",
  },
  description: "Custom software development company specializing in web, mobile, AI/ML, data analytics, and cloud solutions.",
  keywords: ["software development", "web development", "mobile app", "AI ML", "data analytics", "cloud solutions"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans bg-[#0d0d0d] text-[#faf4f1] antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
