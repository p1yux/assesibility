const ServicesCards = () => {
  const services = [
    {
      
      title: "Accessibility Audits & Assessments",
      description:
        "Comprehensive evaluations of websites and apps against WCAG 2.1/2.2 standards, combining automated scans and expert manual testing including assistive tech users.",
      features: [
        "In-depth WCAG 2.1 AA compliance audit",
        "Manual testing with assistive technologies",
        "Automated scans for technical issues",
        "Clear, prioritized fix recommendations",
        "Executive summary + detailed technical report",
      ],
    },
    {
      title: "Remediation & Development Support",
      description:
        "Hands-on support to fix accessibility issues or guide your team in implementing inclusive code practices — all aimed at achieving WCAG Level AA compliance.",
      features: [
        "Code-level fixes (HTML, CSS, JavaScript)",
        "Structuring content for accessibility",
        "ARIA labels and attributes integration",
        "Enhanced keyboard navigation",
        "Support to meet WCAG Level AA standards",
      ],
    },
    {
      title: "Ongoing Compliance Monitoring & Testing",
      description:
        "Continuous accessibility tracking through subscription-based tools to catch issues early, ensure updates stay compliant, and validate real-world usability with expert oversight.",
      features: [
        "Real-time dashboards and issue reports",
        "Automated scans with alerts",
        "Regression testing for new content",
        "User testing with people with disabilities",
        "Compliance certifications and accessibility badges",
      ],
    },
    {
      title: "Accessibility Training & Consulting",
      description:
        "Empowering teams with the knowledge and strategies to build inclusive digital experiences through hands-on training and expert consulting support.",
      features: [
        "Training for developers, designers & content creators",
        "Guidelines for accessible content creation",
        "Accessibility policy & program development",
        "Strategic consulting for long-term success",
        "Academy programs to advance accessibility maturity",
      ],
    },
    {
      title: "Assistive Technology & Alternate Formats",
      description:
        "Support for inclusive, accessible communication through accessible media, document conversion, and assistive tech compatibility testing and validation.",
      features: [
        "PDF document remediation",
        "Captioning and transcription for audio/video",
        "Sign language interpretation for web content",
        "Conversion to Braille and large print",
        "Compatibility testing with assistive technologies",
      ],
    },
    {
      title: "Automated Accessibility Solutions",
      description:
        "Accelerate accessibility with smart, scalable tools like browser plugins, API integrations, and AI-driven solutions that streamline testing and remediation.",
      features: [
        "Browser plugins for development",
        "API integration for CI/CD pipelines",
        "AI-based automated fixes",
        "Code analysis and intelligent suggestions",
        "Accessibility overlays and smart widgets",
      ],
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div id="serve" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const isLeft = index % 2 === 0;
            const row = Math.floor(index / 2);
            const isEvenRow = row % 2 === 0;

            // Assign background based on row-wise logic
            const bgColor =
              isEvenRow
                ? isLeft
                  ? "bg-gray-100"
                  : "bg-red-100"
                : isLeft
                  ? "bg-red-100"
                  : "bg-gray-100";

            return (
              <div
                key={index}
                className={`p-6 rounded-xl shadow-md transition-all duration-300 ${bgColor}`}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1 text-sm text-gray-800">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-red-600 mr-2 mt-1 text-sm">►</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
