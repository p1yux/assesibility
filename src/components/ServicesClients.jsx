import Image from "next/image";
import Link from "next/link";
import CTA from "./landing/CTA";

const ServicesClients = () => {
  const industries = [
    {
      title: "Retail & E-commerce",
      description: "From local shops to global brands, we help retailers create accessible online shopping experiences for every customer."
    },
    {
      title: "Media & Entertainment",
      description: "Content creators and broadcasters work with us to make their digital media—videos, articles, games—accessible to a wider audience."
    },
    {
      title: "Travel & Hospitality",
      description: "Airlines, hotels, and travel platforms partner with us to ensure their booking systems and customer interfaces are user-friendly for all travelers."
    },
    {
      title: "Government & Public Sector",
      description: "Municipal, provincial, and federal agencies trust us to ensure their digital platforms meet accessibility standards, fostering inclusive public services."
    },
    {
      title: "General Enterprise",
      description: "Large organizations engage our services to implement accessibility best practices across their digital ecosystems, meeting global standards and enhancing user experience."
    },
    {
      title: "Education & Academia",
      description: "We assist schools, colleges, and universities in making online learning and resources accessible to all students and staff."
    },
    {
      title: "Financial Services & Healthcare",
      description: "Banks, insurers, hospitals, and clinics collaborate with us to enhance digital accessibility, ensuring equitable access to essential services."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          {/* Left column - Intro */}
          <div className="md:w-5/12">
            <h2 className="text-2xl font-bold text-[#1E1E1E] mb-4">Who We Serve</h2>
            <p className="text-gray-700 mb-6 text-sm">
              Enable Canada partners with organizations across diverse sectors to create inclusive digital experiences. Our clients range from public institutions to private enterprises, all committed to accessibility and compliance.
            </p>
            <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100">
              <Image 
                src="/images/latop.png" 
                alt="Person using keyboard with accessibility features" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          
          {/* Right column - Industry sectors */}
          <div className="md:w-7/12 grid grid-cols-1 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mr-3">
                 <img src="/images/connect.svg" alt="" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#1E1E1E] mb-1">{industry.title}</h3>
                  <p className="text-gray-600 text-sm">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <CTA/>
      </div>
    </section>
  );
};

export default ServicesClients; 