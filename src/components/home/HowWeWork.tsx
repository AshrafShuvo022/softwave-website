"use client";

import { motion } from "framer-motion";
import { Search, Palette, Code2, Rocket } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description: "We dive deep into your goals, users, and constraints to understand exactly what needs to be built and why.",
  },
  {
    icon: Palette,
    step: "02",
    title: "Design",
    description: "Architecture, UX wireframes, and technical planning — getting the foundation right before writing code.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Build",
    description: "Iterative development with regular demos, code reviews, and continuous integration throughout.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Deliver",
    description: "Seamless deployment, handover, documentation, and post-launch support to ensure long-term success.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Process"
          title="How We Work"
          subtitle="A structured approach that delivers consistent results — every time."
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%-1rem)] w-full h-px bg-gradient-to-r from-[#3d3d3d] to-transparent z-0" />
                )}
                <div className="relative z-10 p-6 rounded-2xl bg-[#1a1a1a] border border-[#3d3d3d]/50">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#e8735f]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#e8735f]" />
                    </div>
                    <span className="text-4xl font-bold text-[#3d3d3d] leading-none mt-1">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#faf4f1] mb-2">{step.title}</h3>
                  <p className="text-[#9ca3af] text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
