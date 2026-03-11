import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import { Lightbulb, Eye, Heart, Shield, Star, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Softwave Innovation — our story, mission, values, and approach to building software.",
};

const values = [
  { icon: Lightbulb, title: "Innovation", description: "We embrace new technologies and approaches, constantly pushing boundaries to deliver solutions that give clients a competitive edge." },
  { icon: Eye, title: "Transparency", description: "Open communication throughout every project. No surprises — just honest updates, clear timelines, and direct conversations." },
  { icon: Star, title: "Quality", description: "We don't ship code we're not proud of. Quality is built in from the architecture phase, not bolted on at the end." },
  { icon: Users, title: "Collaboration", description: "The best solutions emerge from true partnership. We work closely with clients, treating their challenges as our own." },
  { icon: Heart, title: "Ownership", description: "We take full ownership of outcomes, not just deliverables. If something isn't working, we figure it out." },
  { icon: Shield, title: "Reliability", description: "Consistent delivery, responsive communication, and dependable support — we show up when it matters most." },
];

export default function AboutPage() {
  return (
    <div className="bg-[#faf4f1] dark:bg-[#0d0d0d]">
      <PageHero
        badge="About Softwave Innovation"
        title="Building Software with Purpose"
        subtitle="We're a software company that believes technology should solve real problems — not create new ones."
      />

      {/* Our Story */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <SectionHeader badge="Our Story" title="Where We Came From" align="left" />
              <div className="space-y-4 text-[#4b5563] dark:text-[#9ca3af] leading-relaxed">
                <p>
                  Softwave Innovation was founded with a clear conviction: businesses deserve software partners who genuinely care about outcomes, not just deliverables.
                </p>
                <p>
                  We&apos;ve built everything from consumer mobile apps to enterprise data platforms, and in every project, the pattern was the same — success comes from truly understanding the business, not just the requirements.
                </p>
                <p>
                  Today, we bring that philosophy to every engagement. Whether you&apos;re a startup launching your first product or an established company modernizing critical systems, we approach each project with the same rigor and commitment.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Services Offered", value: "5+" },
                { label: "Technologies Mastered", value: "10+" },
                { label: "Custom Solutions", value: "100%" },
                { label: "Client Satisfaction", value: "★★★★★" },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-[#e5ddd8] dark:border-[#3d3d3d]/50 text-center">
                  <div className="text-3xl font-bold text-[#e8735f] mb-2">{stat.value}</div>
                  <div className="text-[#4b5563] dark:text-[#9ca3af] text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#f5f0ec] dark:bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Direction" title="Mission & Vision" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white dark:bg-[#0d0d0d] border border-[#e5ddd8] dark:border-[#3d3d3d]/50">
              <div className="w-12 h-12 rounded-xl bg-[#e8735f]/10 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-[#e8735f]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] dark:text-[#faf4f1] mb-4">Our Mission</h3>
              <p className="text-[#4b5563] dark:text-[#9ca3af] leading-relaxed">
                To build software that creates genuine value — helping businesses solve hard problems, reach more customers, and operate more efficiently through technology that works.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-[#0d0d0d] border border-[#e5ddd8] dark:border-[#3d3d3d]/50">
              <div className="w-12 h-12 rounded-xl bg-[#e8735f]/10 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-[#e8735f]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] dark:text-[#faf4f1] mb-4">Our Vision</h3>
              <p className="text-[#4b5563] dark:text-[#9ca3af] leading-relaxed">
                A world where every business, regardless of size, has access to software engineering excellence — enabling them to compete with the largest companies in their industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What We Stand For" title="Our Values" subtitle="The principles that guide every decision we make." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="p-6 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-[#e5ddd8] dark:border-[#3d3d3d]/50 hover:border-[#e8735f]/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-[#e8735f]/10 flex items-center justify-center mb-4 group-hover:bg-[#e8735f]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#e8735f]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a1a] dark:text-[#faf4f1] mb-2">{value.title}</h3>
                  <p className="text-[#4b5563] dark:text-[#9ca3af] text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#f5f0ec] dark:bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] dark:text-[#faf4f1] mb-4">Ready to Work Together?</h2>
          <p className="text-[#4b5563] dark:text-[#9ca3af] text-sm sm:text-base md:text-lg mb-8">Let&apos;s discuss what we can build for you.</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-[#e8735f] text-white font-semibold hover:bg-[#d4654f] transition-all hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
