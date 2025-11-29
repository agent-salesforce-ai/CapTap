import Hero from "@/components/sections/Hero";
import { StatsSection } from "@/components/sections/Stats";
import Timeline from "@/components/sections/Timeline";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <Timeline />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
}
