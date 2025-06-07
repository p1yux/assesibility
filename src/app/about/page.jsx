import AboutHero from "@/components/AboutHero";
import AboutMission from "@/components/AboutMission";
// import AboutCertification from "@/components/AboutCertification";
import AboutValues from "@/components/AboutValues";
import CTA from "@/components/landing/CTA";
export const metadata = {
  title: "About Us - Enable Canada",
  description: "Learn about Enable Canada's journey toward creating a barrier-free digital world for all Canadians.",
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      <AboutHero />
      <AboutMission />
      {/* <AboutCertification /> */}
      <AboutValues />
      <CTA />
    </div>
  );
} 