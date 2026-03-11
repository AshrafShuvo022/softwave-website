import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import { services, getServiceBySlug } from "@/lib/services";
import { Globe, Smartphone, Brain, BarChart3, Cloud, CheckCircle2, ArrowRight } from "lucide-react";
import type { ElementType } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

const iconMap: Record<string, ElementType> = {
  Globe, Smartphone, Brain, BarChart3, Cloud,
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon];

  return (
    <div className="bg-[#faf4f1] dark:bg-[#0d0d0d]">
      <PageHero
        badge={service.name}
        title={service.tagline}
        subtitle={service.overview}
      />

      {/* What We Offer */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader badge="Capabilities" title="What We Offer" align="left" />
              <ul className="space-y-4">
                {service.offerings.map((offering) => (
                  <li key={offering} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#e8735f] mt-0.5 flex-shrink-0" />
                    <span className="text-[#4b5563] dark:text-[#9ca3af]">{offering}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <SectionHeader badge="Technologies" title="Tech Stack" align="left" />
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#1a1a1a] border border-[#e5ddd8] dark:border-[#3d3d3d]/50 text-[#4b5563] dark:text-[#9ca3af] text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#f5f0ec] dark:bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Methodology" title="Our Process" subtitle="How we approach every engagement." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((p, i) => (
              <div key={p.step} className="p-6 rounded-2xl bg-white dark:bg-[#0d0d0d] border border-[#e5ddd8] dark:border-[#3d3d3d]/50">
                <div className="text-4xl font-bold text-[#e8735f]/20 mb-4">0{i + 1}</div>
                <h3 className="text-lg font-bold text-[#1a1a1a] dark:text-[#faf4f1] mb-2">{p.step}</h3>
                <p className="text-[#4b5563] dark:text-[#9ca3af] text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#1a1a1a] dark:text-[#faf4f1] mb-4">Ready to Start a Project?</h2>
          <p className="text-[#4b5563] dark:text-[#9ca3af] text-lg mb-8">Let&apos;s talk about what we can build together.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#e8735f] text-white font-semibold hover:bg-[#d4654f] transition-all hover:scale-105"
          >
            Start a Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
