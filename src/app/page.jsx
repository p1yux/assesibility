import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Services from "@/components/landing/services";
import Testimonials from "@/components/landing/Testimonials";
import AccessibilityStats from "@/components/landing/AccessibilityStats";
import Link from "next/link";
import AccessibilityRules from "@/components/landing/AccessibilityRules";
import HelpSucced from "@/components/landing/HelpSucced";
import FAQ from "@/components/landing/FAQ";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import WhoWeHelp from "@/components/landing/WhoWeHelp";
import CTA from "@/components/landing/CTA";
import DisabilityBarriers from "@/components/landing/DisabilityBarriers";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <AccessibilityStats /> */}
      <DisabilityBarriers />
      <HelpSucced />
      <WhoWeHelp />
      <WhyChooseUs />
      <Services />
      <Features />
      <FAQ />
      {/* <Testimonials /> */}
      <CTA/>
    </div>
  );
}
