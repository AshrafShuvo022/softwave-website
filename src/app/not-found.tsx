import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#faf4f1] dark:bg-[#0d0d0d] flex items-center justify-center px-4">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#e8735f]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative text-center max-w-lg mx-auto">
        {/* 404 number */}
        <div className="text-[180px] font-bold leading-none text-[#e8735f]/10 dark:text-[#e8735f]/10 select-none mb-0">
          404
        </div>

        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-[#e8735f]/10 flex items-center justify-center mx-auto -mt-8 mb-6">
          <Search className="w-8 h-8 text-[#e8735f]" />
        </div>

        {/* Text */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] dark:text-[#faf4f1] mb-4">
          Page Not Found
        </h1>
        <p className="text-[#4b5563] dark:text-[#9ca3af] text-base md:text-lg mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#e8735f] text-white font-semibold hover:bg-[#d4654f] transition-all hover:scale-105 w-full sm:w-auto justify-center"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-[#1a1a1a] text-[#1a1a1a] dark:text-[#faf4f1] font-semibold border border-[#e5ddd8] dark:border-[#3d3d3d] hover:border-[#e8735f]/50 transition-all hover:scale-105 w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
            Contact Us
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-[#e5ddd8] dark:border-[#3d3d3d]/50">
          <p className="text-[#6b7280] text-sm mb-4">Or try one of these pages:</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { href: "/services", label: "Services" },
              { href: "/about", label: "About" },
              { href: "/blog", label: "Blog" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg bg-white dark:bg-[#1a1a1a] border border-[#e5ddd8] dark:border-[#3d3d3d]/50 text-[#4b5563] dark:text-[#9ca3af] text-sm hover:text-[#e8735f] hover:border-[#e8735f]/40 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
