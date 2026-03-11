import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

const serviceLinks = [
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/mobile-development", label: "Mobile Development" },
  { href: "/services/ai-ml", label: "AI/ML Solutions" },
  { href: "/services/data-analytics", label: "Data Analytics" },
  { href: "/services/cloud", label: "Cloud Solutions" },
];

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#faf4f1] dark:bg-[#0d0d0d] border-t border-[#e5ddd8] dark:border-[#3d3d3d]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Softwave Innovation"
                width={2500}
                height={928}
                className="h-10 md:h-12 w-auto"
              />
            </Link>
            <p className="text-[#4b5563] dark:text-[#9ca3af] text-sm leading-relaxed mb-6">
              Building software that moves businesses forward. Custom solutions across web, mobile, AI, data, and cloud.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4b5563] dark:text-[#9ca3af] hover:text-[#e8735f] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4b5563] dark:text-[#9ca3af] hover:text-[#e8735f] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@softwaveinnovation.com"
                className="text-[#4b5563] dark:text-[#9ca3af] hover:text-[#e8735f] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#1a1a1a] dark:text-[#faf4f1] font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#4b5563] dark:text-[#9ca3af] hover:text-[#e8735f] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#1a1a1a] dark:text-[#faf4f1] font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#4b5563] dark:text-[#9ca3af] hover:text-[#e8735f] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#1a1a1a] dark:text-[#faf4f1] font-semibold text-sm uppercase tracking-wider mb-4">Get In Touch</h4>
            <p className="text-[#4b5563] dark:text-[#9ca3af] text-sm mb-4">Ready to start your next project? Let&apos;s talk.</p>
            <a
              href="mailto:hello@softwaveinnovation.com"
              className="text-[#e8735f] text-sm hover:text-[#d4654f] transition-colors"
            >
              hello@softwaveinnovation.com
            </a>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-[#e8735f] text-white text-sm font-medium hover:bg-[#d4654f] transition-colors"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#e5ddd8] dark:border-[#3d3d3d]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6b7280] text-sm">
            &copy; {new Date().getFullYear()} Softwave Innovation. All rights reserved.
          </p>
          <p className="text-[#6b7280] text-sm">
            Built with Next.js &amp; TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
