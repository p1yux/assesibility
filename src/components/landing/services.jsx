import Link from "next/link";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      title: "Accessibility Audits & Assessments",
      description: "Detailed evaluations of websites and applications against standards like WCAG 2.1/2.2. Audits combine automated scanning with expert manual testing to catalog accessibility issues.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
      href: "/services#audits",
      color: "bg-red-50",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      borderColor: "border-red-200",
    },
    {
      title: "Remediation and Development Support",
      description: "Services to fix identified issues or guide development teams in making necessary code changes. We provide hands-on remediation and developer support to achieve WCAG Level AA conformance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      ),
      href: "/services#remediation",
      color: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      title: "Ongoing Compliance Monitoring & Testing",
      description: "Subscription-based tools that continuously scan websites for new accessibility regressions, with dashboards and reports that flag issues in real time or on a schedule.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      ),
      href: "/services#monitoring",
      color: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      title: "Accessibility Training & Consulting",
      description: "Educating client teams (developers, designers, content authors) on inclusive design practices through training workshops, e-learning, and strategic consulting.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      ),
      href: "/services#training",
      color: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
    },
    {
      title: "Assistive Technology & Alternate Formats",
      description: "Services for captioning/transcription for media, sign language interpretation for web content, and conversion of documents into alternate accessible formats.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 .75h2.083c.749 0 1.458.3 1.984.825l3.98 3.98A2.25 2.25 0 0116.5 7.5h-2.083c-.749 0-1.458-.3-1.984-.825l-3.98-3.98A2.25 2.25 0 008.25 2.75h-2.083c-.749 0-1.458.3-1.984.825l-3.98 3.98A2.25 2.25 0 000 7.5h2.083c.749 0 1.458.3 1.984.825l3.98 3.98a2.25 2.25 0 001.984.825H12V12.75z" />
        </svg>
      ),
      href: "/services#assistive",
      color: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200",
    },
    {
      title: "Automated Accessibility Solutions",
      description: "Software toolkits and integrations including browser plugins, API integrations, and AI-based solutions that accelerate the remediation process.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
      href: "/services#automated",
      color: "bg-teal-50",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
      borderColor: "border-teal-200",
    },
  ];

  return (
    <div>

    </div>
    // <section className="py-20 md:py-28 bg-gray-900" id="services" aria-labelledby="services-heading">
      /* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:max-w-2xl mb-10 md:mb-0">
            <h2 id="services-heading" className="text-4xl font-bold text-white sm:text-5xl mb-6">
              Primary Service Offerings
            </h2>
            <p className="text-xl text-gray-200" style={{ lineHeight: "1.8", fontSize: "1.3rem" }}>
              We typically offer a portfolio of services and tools to help organizations make their digital content compliant.
            </p>
          </div>
          
          <div className="relative w-full md:w-64 h-32">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 text-black" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-16 h-16 bg-gray-200 rounded-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gray-200 rounded-full opacity-50"></div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`group relative overflow-hidden ${service.color} rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900`}
              aria-labelledby={`service-heading-${index}`}
            >
              <div className="relative z-10 p-8">
                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${service.iconBg} ${service.iconColor} mb-5 group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
                  {service.icon}
                </div>
                <h3 id={`service-heading-${index}`} className="text-2xl font-bold text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4" style={{ lineHeight: "1.8", fontSize: "1.175rem" }}>
                  {service.description}
                </p>
                <div className="inline-flex items-center font-medium text-black group-hover:translate-x-2 transition-transform duration-300" style={{ fontSize: "1.125rem" }}>
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 ml-1"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
              <div className={`absolute top-0 right-0 h-full w-2 ${service.borderColor}`}></div>
              <div className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full bg-black opacity-5"></div>
            </Link>
          ))}
        </div>

        <div className="mt-16 p-6 bg-gray-800 rounded-lg border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Major Customer Segments</h3>
          <p className="text-gray-200 mb-4" style={{ lineHeight: "1.8", fontSize: "1.175rem" }}>
            Web accessibility services are in demand across virtually all industries, with government, education, financial services, healthcare, retail, media, and travel sectors leading adoption. Organizations operating across multiple regions engage our services to meet varying international standards in all markets.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white mt-1 flex-shrink-0 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-200" style={{ fontSize: "1.125rem", lineHeight: "1.6" }}>Government and Public Sector</span>
            </div>
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white mt-1 flex-shrink-0 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-200" style={{ fontSize: "1.125rem", lineHeight: "1.6" }}>Education and Academia</span>
            </div>
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white mt-1 flex-shrink-0 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-200" style={{ fontSize: "1.125rem", lineHeight: "1.6" }}>Financial Services and Healthcare</span>
            </div>
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white mt-1 flex-shrink-0 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-200" style={{ fontSize: "1.125rem", lineHeight: "1.6" }}>Retail and E-commerce</span>
            </div>
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white mt-1 flex-shrink-0 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-200" style={{ fontSize: "1.125rem", lineHeight: "1.6" }}>Media and Entertainment</span>
            </div>
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white mt-1 flex-shrink-0 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-200" style={{ fontSize: "1.125rem", lineHeight: "1.6" }}>Travel and Hospitality</span>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white bg-black hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Explore all our accessibility services"
          >
            View All Services
          </Link>
        </div>
      </div> */
    /* </section> */
  );
};

export default Services;
