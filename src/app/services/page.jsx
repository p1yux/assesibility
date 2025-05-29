import ServicesHero from "@/components/ServicesHero";
import ServicesIntro from "@/components/ServicesIntro";
import ServicesQuote from "@/components/ServicesQuote";
import ServicesCards from "@/components/ServicesCards";
import ServicesClients from "@/components/ServicesClients";

export const metadata = {
  title: "Our Services - Enable Canada",
  description: "Explore Enable Canada's comprehensive accessibility services including audits, remediation, training, and ongoing compliance monitoring.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <ServicesHero />
       <ServicesIntro />
      <ServicesCards />
      <ServicesQuote />
      <ServicesClients />
    </div>
  );
} 