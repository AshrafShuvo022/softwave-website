"use client";

import { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import { Mail, Linkedin, Github, Clock, CheckCircle2 } from "lucide-react";

const serviceOptions = [
  "Web Development",
  "Mobile Development",
  "AI/ML Solutions",
  "Data Analytics",
  "Cloud Solutions",
  "Other / Not Sure",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-[#0d0d0d]">
      <PageHero
        badge="Let's Talk"
        title="Let's Build Something Together"
        subtitle="Tell us about your project. We'll get back to you within 24 hours."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-2xl bg-[#1a1a1a] border border-[#e8735f]/20">
                  <div className="w-16 h-16 rounded-full bg-[#e8735f]/10 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#e8735f]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#faf4f1] mb-3">Message Sent!</h2>
                  <p className="text-[#9ca3af]">Thanks for reaching out. We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#faf4f1] mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#3d3d3d]/50 text-[#faf4f1] placeholder:text-[#6b7280] focus:outline-none focus:border-[#e8735f]/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#faf4f1] mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#3d3d3d]/50 text-[#faf4f1] placeholder:text-[#6b7280] focus:outline-none focus:border-[#e8735f]/50 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#faf4f1] mb-2">Company</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#3d3d3d]/50 text-[#faf4f1] placeholder:text-[#6b7280] focus:outline-none focus:border-[#e8735f]/50 transition-colors"
                        placeholder="Your company (optional)"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#faf4f1] mb-2">Service Interest</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#3d3d3d]/50 text-[#faf4f1] focus:outline-none focus:border-[#e8735f]/50 transition-colors"
                      >
                        <option value="" className="bg-[#1a1a1a]">Select a service</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s} className="bg-[#1a1a1a]">{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#faf4f1] mb-2">Message *</label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#3d3d3d]/50 text-[#faf4f1] placeholder:text-[#6b7280] focus:outline-none focus:border-[#e8735f]/50 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 rounded-xl bg-[#e8735f] text-white font-semibold hover:bg-[#d4654f] transition-all hover:scale-[1.02] shadow-lg shadow-[#e8735f]/20"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-6 rounded-2xl bg-[#1a1a1a] border border-[#3d3d3d]/50">
                <div className="w-10 h-10 rounded-xl bg-[#e8735f]/10 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-[#e8735f]" />
                </div>
                <h3 className="text-[#faf4f1] font-bold mb-1">Quick Response</h3>
                <p className="text-[#9ca3af] text-sm">We respond to all inquiries within 24 hours, typically much faster.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#1a1a1a] border border-[#3d3d3d]/50">
                <h3 className="text-[#faf4f1] font-bold mb-4">Contact Us Directly</h3>
                <a
                  href="mailto:hello@softwaveinnovation.com"
                  className="flex items-center gap-3 text-[#9ca3af] hover:text-[#e8735f] transition-colors mb-3"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">hello@softwaveinnovation.com</span>
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-[#1a1a1a] border border-[#3d3d3d]/50">
                <h3 className="text-[#faf4f1] font-bold mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#9ca3af] hover:text-[#e8735f] transition-colors text-sm"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#9ca3af] hover:text-[#e8735f] transition-colors text-sm"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
