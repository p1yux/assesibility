import Link from "next/link";
import React from "react";
import Image from "next/image";

const ServiceCard = ({ number, title, description, learnMoreLink }) => {
    return (
      <div className="relative">
        {/* Number Badge */}
        <div className="absolute right-3 top-2 z-20">
          <div className="bg-[#D18A8C] w-10 h-10 rounded-2xl md:w-20 md:h-20 flex items-center justify-center text-white font-bold text-2xl shadow-md-inner">
            {number}
          </div>
        </div>
  
        {/* Card Content with background image */}
        <div className="relative rounded-2xl p-7 overflow-hidden">
  
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/updated/helpsucced/Subtract.png" 
              alt="Card background" 
              fill 
              className="object-cover rounded-2xl"
            />
          </div>
  
          {/* Text Content */}
          <div className="relative z-10 ">
            <h3 className="text-lg font-bold text-black mb-2 leading-snug">
              {title.split('|').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx !== title.split('|').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h3>
            <p className="text-sm text-gray-700 mb-4 leading-snug">
              {description}
            </p>
            <Link
              href={learnMoreLink}
              className="text-blue-600 text-sm flex items-center font-medium underline underline-offset-4"
            >
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 rotate-[-60deg] ml-1">
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
const HelpSucced = () => {
  const services = [
    {
      number: "1",
      title: "WCAG 2.1 AA|Compliance",
      description: "Achieve conformance with international accessibility standards to meet legal and user needs.",
      learnMoreLink: "/regulations"
    },
    {
      number: "2",
      title: "Inclusive Design|Support",
      description: "Create digital interfaces that serve everyone, regardless of ability, from the start.",
      learnMoreLink: "/regulations"
    },
    {
      number: "3",
      title: "Accessibility Audits |& Testing",
      description: "Thorough evaluations of your site with expert led testing and actionable fixes.",
      learnMoreLink: "/regulations"
    },
    {
      number: "4",
      title: "Remediation &|Fixes",
      description: "Hands-on support to correct accessibility issues and improve user experience fast.",
      learnMoreLink: "/regulations"
    },
    {
      number: "5",
      title: "Training & Capacity|Building",
      description: "Equip your team with the knowledge to maintain accessible and inclusive products.",
      learnMoreLink: "/regulations"
    },
    {
      number: "6",
      title: "Assistive|Technology Testing",
      description: "Ensure smooth access via screen readers, keyboard use, and assistive tech.",
      learnMoreLink: "/regulations"
    }
  ];

  return (
    <section className="py-16 bg-[#F2F2F2] pt-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-3 text-black">How We Help You Succeed</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We typically offer a portfolio of services and tools to help <br /> organizations make their digital content compliant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              number={service.number}
              title={service.title}
              description={service.description}
              learnMoreLink={service.learnMoreLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSucced;
