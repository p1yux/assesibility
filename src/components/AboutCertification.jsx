import Image from "next/image";

const AboutCertification = () => {
  const certifications = [
    "IAAP Certified Professional in Accessibility Core Competencies",
    "Web Accessibility Specialist (WAS) Certification",
    "Trusted Tester Certification Program"
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          
          <div className="flex flex-col md:flex-row">
            {/* Left side - Certifications */}
            <div className="md:w-7/12 p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Certified Accessibility Experts</h2>
              <p className="text-gray-300 mb-8">
                Our team holds certifications from leading accessibility organizations, ensuring our 
                recommendations and implementations meet the highest standards.
              </p>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right side - WCAG badge */}
            <div className="md:w-5/12 bg-white p-8 md:p-12 flex items-center relative">
              <div className="w-full relative z-10">
                <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                  <div className="bg-black text-white px-4 py-3 font-bold text-lg mb-4 md:mb-0 md:mr-6">
                    WCAG 2.1 AA Certified
                  </div>
                </div>
                <p className="text-gray-700">
                  Our accessibility solutions meet and exceed the Web Content Accessibility Guidelines (WCAG) 2.1 AA standards.
                </p>
              </div>
              <div className="absolute inset-0 opacity-20 z-0">
                <Image
                  src="/images/world-map.svg"
                  alt="World map background"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCertification; 