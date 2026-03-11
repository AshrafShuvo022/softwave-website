"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";

const stats = [
  { value: 5, suffix: "+", label: "Core Services" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: 100, suffix: "%", label: "Custom Solutions" },
  { value: 24, suffix: "h", label: "Response Time" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress === 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-5xl font-bold text-[#e8735f]">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 bg-[#f5f0ec] dark:bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="By the Numbers"
          title="Quality You Can Measure"
          subtitle="Every project is an opportunity to raise the bar."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl bg-white dark:bg-[#0d0d0d] border border-[#e5ddd8] dark:border-[#3d3d3d]/50"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-[#4b5563] dark:text-[#9ca3af] text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
