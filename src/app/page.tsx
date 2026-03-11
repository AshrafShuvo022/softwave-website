import Hero from "@/components/home/Hero";
import ServicesStrip from "@/components/home/ServicesStrip";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowWeWork from "@/components/home/HowWeWork";
import TechMarquee from "@/components/home/TechMarquee";
import Stats from "@/components/home/Stats";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesStrip />
      <WhyChooseUs />
      <HowWeWork />
      <TechMarquee />
      <Stats />
      <CTABanner />
    </>
  );
}
