"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#faf4f1] dark:bg-[#0d0d0d]">
      {/* Animated glow orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#e8735f]/8 dark:bg-[#e8735f]/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#e8735f]/5 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#e8735f 1px, transparent 1px), linear-gradient(90deg, #e8735f 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8735f]/10 border border-[#e8735f]/20 text-[#e8735f] text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          Software That Delivers Results
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-[#1a1a1a] dark:text-[#faf4f1] mb-6 leading-[1.1] tracking-tight"
        >
          We Build Software That
          <br />
          <span className="text-[#e8735f]">Moves the World Forward</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#4b5563] dark:text-[#9ca3af] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          From web applications to AI systems, we craft custom software solutions that help businesses grow, automate, and compete at the highest level.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#e8735f] text-white font-semibold hover:bg-[#d4654f] transition-all hover:scale-105 shadow-lg shadow-[#e8735f]/20"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white dark:bg-[#1a1a1a] text-[#1a1a1a] dark:text-[#faf4f1] font-semibold border border-[#e5ddd8] dark:border-[#3d3d3d] hover:border-[#e8735f]/50 transition-all hover:scale-105"
          >
            Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
