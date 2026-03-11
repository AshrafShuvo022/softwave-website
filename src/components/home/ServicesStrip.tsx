"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Smartphone, Brain, BarChart3, Cloud } from "lucide-react";

const services = [
  { icon: Globe, name: "Web Development", href: "/services/web-development" },
  { icon: Smartphone, name: "Mobile Development", href: "/services/mobile-development" },
  { icon: Brain, name: "AI/ML Solutions", href: "/services/ai-ml" },
  { icon: BarChart3, name: "Data Analytics", href: "/services/data-analytics" },
  { icon: Cloud, name: "Cloud Solutions", href: "/services/cloud" },
];

export default function ServicesStrip() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#faf4f1] dark:bg-[#0d0d0d] border-y border-[#e5ddd8]/50 dark:border-[#3d3d3d]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[#6b7280] text-sm font-medium uppercase tracking-widest mb-12">
          What We Do
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="group flex flex-col items-center gap-3 p-4 md:p-6 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-[#e5ddd8] dark:border-[#3d3d3d]/50 hover:border-[#e8735f]/40 hover:bg-white/80 dark:hover:bg-[#1a1a1a]/80 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#e8735f]/10 flex items-center justify-center group-hover:bg-[#e8735f]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#e8735f]" />
                  </div>
                  <span className="text-[#1a1a1a] dark:text-[#faf4f1] text-sm font-medium text-center leading-tight">{service.name}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
