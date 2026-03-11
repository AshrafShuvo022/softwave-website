"use client";

import { motion } from "framer-motion";

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "TensorFlow", "PyTorch", "AWS", "Google Cloud", "Azure",
  "Kubernetes", "Docker", "PostgreSQL", "MongoDB", "Redis",
  "React Native", "Flutter", "FastAPI", "GraphQL", "Terraform",
];

export default function TechMarquee() {
  return (
    <section className="py-16 bg-[#faf4f1] dark:bg-[#0d0d0d] overflow-hidden border-y border-[#e5ddd8]/50 dark:border-[#3d3d3d]/30">
      <p className="text-center text-[#6b7280] text-sm font-medium uppercase tracking-widest mb-8">
        Technologies We Work With
      </p>
      <div className="relative">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...technologies, ...technologies].map((tech, i) => (
            <span
              key={i}
              className="inline-flex items-center px-4 py-2 rounded-lg bg-white dark:bg-[#1a1a1a] border border-[#e5ddd8] dark:border-[#3d3d3d]/50 text-[#4b5563] dark:text-[#9ca3af] text-sm font-medium whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
