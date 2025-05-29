import Link from "next/link";

const AccessibilityRules = () => {
  const guidelines = [
    {
      id: "perceivable",
      name: "Perceivable",
      description: "Information and user interface components must be presentable to users in ways they can perceive.",
      principles: [
        "Provide text alternatives for non-text content",
        "Provide alternatives for time-based media",
        "Create content that can be presented in different ways",
        "Make it easier for users to see and hear content"
      ]
    },
    {
      id: "operable",
      name: "Operable",
      description: "User interface components and navigation must be operable.",
      principles: [
        "Make all functionality available from a keyboard",
        "Give users enough time to read and use content",
        "Do not design content in a way that is known to cause seizures",
        "Provide ways to help users navigate and find content"
      ]
    },
    {
      id: "understandable",
      name: "Understandable",
      description: "Information and the operation of user interface must be understandable.",
      principles: [
        "Make text readable and understandable",
        "Make web pages appear and operate in predictable ways",
        "Help users avoid and correct mistakes"
      ]
    },
    {
      id: "robust",
      name: "Robust",
      description: "Content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive technologies.",
      principles: [
        "Maximize compatibility with current and future user tools",
        "Support assistive technologies and ensure content remains accessible"
      ]
    }
  ];

  const regulations = [
    {
      name: "WCAG 2.1",
      description: "Current Web Content Accessibility Guidelines that define how to make web content more accessible to people with disabilities.",
      link: "/regulations#wcag"
    },
    {
      name: "ADA",
      description: "Americans with Disabilities Act prohibits discrimination against individuals with disabilities, including on the web.",
      link: "/regulations#ada"
    },
    {
      name: "Section 508",
      description: "Requires federal agencies to make their electronic and information technology accessible to people with disabilities.",
      link: "/regulations#section508"
    },
    {
      name: "AODA",
      description: "Accessibility for Ontarians with Disabilities Act requires accessibility standards for organizations in Ontario.",
      link: "/regulations#aoda"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white" id="accessibility-rules" aria-labelledby="accessibility-rules-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="accessibility-rules-heading" className="text-4xl font-bold text-black mb-6">
            Accessibility Guidelines & Regulations
          </h2>
          <p className="text-lg text-gray-700" style={{ lineHeight: "1.8", fontSize: "1.3rem" }}>
            Digital accessibility is guided by international standards and enforced by various regulations. 
            Understanding these standards is essential for creating inclusive digital experiences.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-black mb-8 border-b border-gray-200 pb-4">
            WCAG 2.1 Core Principles
          </h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {guidelines.map((guideline) => (
              <div 
                key={guideline.id}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md"
                id={guideline.id}
              >
                <h4 className="text-xl font-bold text-black mb-3">
                  {guideline.name}
                </h4>
                <p className="text-gray-700 mb-4" style={{ lineHeight: "1.8", fontSize: "1.2rem" }}>
                  {guideline.description}
                </p>
                <ul className="space-y-3">
                  {guideline.principles.map((principle, idx) => (
                    <li key={idx} className="flex items-start" style={{ lineHeight: "1.8", fontSize: "1.125rem" }}>
                      <svg className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">
                        {principle}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-black mb-8 border-b border-gray-200 pb-4">
            Key Accessibility Regulations
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {regulations.map((regulation, idx) => (
              <div key={idx} className="flex">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-black text-white">
                  <span className="text-xl font-bold">{regulation.name.substring(0, 1)}</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-black mb-2">
                    {regulation.name}
                  </h4>
                  <p className="text-gray-700" style={{ lineHeight: "1.8", fontSize: "1.2rem" }}>
                    {regulation.description}
                  </p>
                  <Link 
                    href={regulation.link}
                    className="inline-flex items-center mt-3 text-black font-medium hover:underline transition-colors"
                    aria-label={`Learn more about ${regulation.name}`}
                    style={{ fontSize: "1.125rem" }}
                  >
                    Learn more
                    <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 p-8 bg-gray-100 rounded-lg border border-gray-200">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="flex items-center justify-center w-16 h-16 bg-black text-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">
                Need Help with Compliance?
              </h3>
              <p className="text-gray-700 mb-5" style={{ lineHeight: "1.8", fontSize: "1.2rem" }}>
                Our accessibility experts can help you navigate the complex landscape of digital accessibility regulations and ensure your website or application meets all relevant standards, including Canadian-specific requirements under AODA.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-black text-base font-medium rounded-lg text-white bg-black hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                aria-label="Get in touch with our accessibility compliance experts"
              >
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessibilityRules; 