"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function PageHero({ title, subtitle, badge }: PageHeroProps) {
  return (
    <section className="relative pt-20 md:pt-28 pb-8 md:pb-14 overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] md:w-[600px] md:h-[400px] bg-[#e8735f]/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8735f]/10 border border-[#e8735f]/20 text-[#e8735f] text-sm font-medium mb-6"
          >
            {badge}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] dark:text-[#faf4f1] mb-6 leading-tight break-words"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#4b5563] dark:text-[#9ca3af] text-sm sm:text-base md:text-lg lg:text-xl max-w-xl md:max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
