import Image from "next/image";

const AboutValues = () => {
  const values = [
    {
      title: "Inclusion",
      description: "We believe that digital experiences should be accessible to everyone, regardless of ability, age, or technology. We design with the full spectrum of human diversity in mind."
    },
    {
      title: "Innovation",
      description: "We continuously explore new technologies and methodologies to create more effective accessibility solutions that go beyond minimum compliance."
    },
    {
      title: "Empowerment",
      description: "We empower organizations with the knowledge and tools to maintain accessibility as an ongoing priority throughout their digital ecosystem."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide our work and shape our approach to digital accessibility.
          </p>
        </div>

        {/* Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm relative"
            >
              <div className="relative">
                {/* Pink background header */}
                <div className="bg-[#E3B9BA] h-30 flex items-center justify-center relative rounded-t-lg">
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                </div>
                
                {/* Circular icon positioned at top center, overlapping header */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-red-900 flex items-center justify-center border-4 border-white z-10">
                  {index === 0 ? (
                    // Inclusion icon - group of people
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                      <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                      <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                    </svg>
                  ) : index === 1 ? (
                    // Innovation icon - lightbulb
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                      <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.015 1.008 1.034 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.75 6.75 0 01-.937-.171.75.75 0 11.374-1.453 5.25 5.25 0 002.626 0 .75.75 0 11.374 1.452 6.75 6.75 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
                      <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    // Empowerment icon - hand with star
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                
                {/* Content */}
                <div className="pt-12 px-6 pb-6 text-center">
                  <p className="text-gray-700">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-30 relative flex justify-center">
        {/* Background blackbox image */}
        <div className="relative">
          <Image 
            src="/images/about-us-blackbox.png" 
            alt="About Values Background"
            width={1200}
            height={600}
            className="rounded-lg"
          />
          
          {/* Overlaid world map */}
          <div className="absolute inset-0 flex justify-end mb-30 mr-20 items-center">
            <Image 
              src="/images/worldmap.svg" 
              alt="World Map"
              width={400}
              height={400}
              className="opacity-70"
            />
          </div>
          <div className="flex items-center space-x-6 justify-end mt-[-130px]">
            <div className="bg-black text-white px-4 py-5 rounded-lg">
              <span className="text-xl font-bold">WCAG 2.1 AA Certified</span>
            </div>
            <div className="max-w-sm">
              <p className="text-gray-800">
                Our accessibility solutions meet and exceed the Web Content Accessibility Guidelines (WCAG) 2.1 AA standards.
              </p>
            </div>
          </div>

          {/* Text Content Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="text-white p-12 max-w-3xl">
              <h3 className="text-2xl font-bold mb-4">Certified Accessibility Experts</h3>
              <p className="text-md mb-8 text-gray-200">
                Our team holds certifications from leading accessibility organizations, ensuring our 
                recommendations and implementations meet the highest standards.
              </p>
              
              {/* Certification List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">IAAP Certified Professional in Accessibility Core Competencies</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Web Accessibility Specialist (WAS) Certification</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Trusted Tester Certification Program</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default AboutValues; 