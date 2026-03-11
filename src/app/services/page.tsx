import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import { services } from "@/lib/services";
import { Globe, Smartphone, Brain, BarChart3, Cloud, ArrowRight } from "lucide-react";
import type { ElementType } from "react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Softwave Innovation's full range of services: web development, mobile apps, AI/ML solutions, data analytics, and cloud infrastructure.",
  openGraph: {
    title: "Our Services — Softwave Innovation",
    description: "Web, mobile, AI/ML, data analytics, and cloud solutions.",
    url: "https://softwaveinnovation.com/services",
  },
};

const iconMap: Record<string, ElementType> = {
  Globe, Smartphone, Brain, BarChart3, Cloud,
};

export default function ServicesPage() {
  return (
    <div className="bg-[#faf4f1] dark:bg-[#0d0d0d]">
      <PageHero
        badge="What We Do"
        title="Our Services"
        subtitle="End-to-end software solutions across every major technology discipline."
      />
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div
                  key={service.slug}
                  className="p-8 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-[#e5ddd8] dark:border-[#3d3d3d]/50 hover:border-[#e8735f]/40 transition-all group flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#e8735f]/10 flex items-center justify-center mb-6 group-hover:bg-[#e8735f]/20 transition-colors">
                    {Icon && <Icon className="w-7 h-7 text-[#e8735f]" />}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] dark:text-[#faf4f1] mb-3">{service.name}</h3>
                  <p className="text-[#4b5563] dark:text-[#9ca3af] text-sm leading-relaxed mb-4 flex-1">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-[#e8735f] text-sm font-medium hover:text-[#d4654f] transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
