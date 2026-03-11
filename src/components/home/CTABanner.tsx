"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-10 md:py-14 bg-[#faf4f1] dark:bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#e8735f] to-[#c55a45] p-8 sm:p-12 md:p-16 text-center"
        >
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 break-words">
              Ready to Build Something Great?
            </h2>
            <p className="text-white/80 text-sm sm:text-base md:text-lg mb-8 max-w-xl mx-auto">
              Let&apos;s turn your idea into a product. Start the conversation today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#e8735f] font-bold hover:bg-[#faf4f1] transition-all hover:scale-105 shadow-xl"
            >
              Let&apos;s Talk
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
