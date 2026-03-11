"use client";

import { motion } from "framer-motion";
import { Users, Zap, Package } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

const reasons = [
  {
    icon: Users,
    title: "Client-First Approach",
    description: "We treat your business goals as our own. Every decision is made with your success in mind — not what's easiest for us.",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Technology",
    description: "We stay current with the latest frameworks, tools, and best practices so your solutions are built on modern, maintainable foundations.",
  },
  {
    icon: Package,
    title: "End-to-End Delivery",
    description: "From strategy and design through development and deployment, we handle the full lifecycle — no handoffs, no gaps.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#faf4f1] dark:bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Softwave"
          title="Built Different, Delivered Better"
          subtitle="We combine technical excellence with a genuine commitment to your outcomes."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="p-8 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-[#e5ddd8] dark:border-[#3d3d3d]/50 hover:border-[#e8735f]/30 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#e8735f]/10 flex items-center justify-center mb-6 group-hover:bg-[#e8735f]/20 transition-colors">
                  <Icon className="w-7 h-7 text-[#e8735f]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] dark:text-[#faf4f1] mb-3">{reason.title}</h3>
                <p className="text-[#4b5563] dark:text-[#9ca3af] leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
