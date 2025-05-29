import React from "react";
import Link from "next/link";
import Image from "next/image";

const AccessibilityStats = () => {
  const deviceUsageStats = [
    {
      id: "device-1",
      value: "86%",
      device: "Mobile or smartphones",
      icon: "/images/smartphone-icon.svg",
    },
    {
      id: "device-2",
      value: "53%",
      device: "Laptops or netbooks",
      icon: "/images/laptop-icon.svg",
    },
    {
      id: "device-3", 
      value: "41%",
      device: "Desktop computers",
      icon: "/images/desktop-icon.svg",
    },
  ];

  const challengeCategories = [
    {
      id: "challenge-1",
      title: "Mobile/Smartphone Accessibility Challenges",
      percentage: "29%",
      description: "Persons with disabilities or long-term conditions experience barriers",
      issues: [
        "Downloading or installing apps",
        "Touchscreen operation difficulties",
        "Manipulating controls like buttons or dials"
      ],
      imageSrc: "/images/mobile-challenges.svg",
      altText: "Person experiencing difficulties using a smartphone"
    },
    {
      id: "challenge-2",
      title: "Communication Tools Challenges",
      percentage: "25%",
      description: "face barriers while performing communication-related activities online",
      issues: [
        "Lack of adjustable settings",
        "Difficulty accessing support services",
        "Time limits to complete actions"
      ],
      imageSrc: "/images/communication-challenges.svg",
      altText: "Person struggling with online communication tools"
    },
    {
      id: "challenge-3",
      title: "Self-Service Technology Challenges",
      percentage: "30%",
      description: "encounter difficulties with self-service technologies like ATMs and self-checkouts",
      issues: [
        "Lack of human assistance",
        "Needing extra time to complete tasks",
        "Difficulty understanding visual prompts"
      ],
      imageSrc: "/images/self-service-challenges.svg",
      altText: "Person having trouble with a self-checkout kiosk"
    }
  ];

  return (
    <section 
      className="py-16 md:py-20 bg-gray-100" 
      id="accessibility-stats" 
      aria-labelledby="stats-heading"
    >
      {/* Header Section */}
      <div className="bg-blue-700 py-8 mb-10 rounded">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            id="stats-heading" 
            className="text-3xl font-bold text-white sm:text-4xl mb-4"
          >
            Technology Barriers Faced by Persons with Disabilities
          </h2>
          <p className="text-lg text-white md:text-xl" style={{ lineHeight: "1.8" }}>
            Based on the Canadian Survey on Disability (2022) and Survey Series on 
            Accessibility (2024)
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Device Usage Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="flex flex-col md:flex-row md:items-center mb-8">
            <div className="md:w-1/2 mb-6 md:mb-0 pr-0 md:pr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Most Commonly Used Technological Devices</h3>
              <p className="text-gray-700 mb-6" style={{ lineHeight: "1.8", fontSize: "1.15rem" }}>
                Percentage of persons with disabilities using these devices:
              </p>
              <div className="space-y-6">
                {deviceUsageStats.map((item) => (
                  <div key={item.id} className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-4">
                      <div className="text-blue-700 w-8 h-8">
                        <Image 
                          src={item.icon} 
                          alt={`${item.device} icon`}
                          width={32} 
                          height={32}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-blue-700">{item.value}</div>
                      <div className="text-gray-700" style={{ fontSize: "1.15rem" }}>{item.device}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto">
              {/* <div className="absolute top-0 right-0 bg-blue-100 text-blue-800 font-medium py-2 px-4 rounded-lg">
                <div className="text-lg mb-1">Gender Difference:</div>
                <div className="text-sm">Women (50%) are more likely than men (40%) to face difficulties with technology</div>
              </div> */}
              <div className="mt-14 flex justify-center">
                <div className="relative w-72 h-56 bg-gray-100 rounded-lg overflow-hidden">
                  <Image 
                    src="/images/laptop-icon.svg"
                    alt="Person using assistive technology"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="text-gray-700" style={{ lineHeight: "1.8", fontSize: "1.15rem" }}>
              <strong>46%</strong> of persons with disabilities had experienced difficulties while using technological devices 
              such as smartphones or laptops because of their condition.
            </p>
          </div>
        </div>

        {/* Challenges Section */}
        <h3 className="text-4xl font-bold text-center text-gray-900 mt-16 mb-8">Key Technology Accessibility Challenges</h3>
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {challengeCategories.map((category) => (
            <div key={category.id} className="bg-blue-50 rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 py-3 px-4">
                <h4 className="text-xl font-bold text-white">{category.title}</h4>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-5xl font-bold text-blue-700">{category.percentage}</div>
                  <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden relative">
                    <Image 
                      src={category.imageSrc}
                      alt={category.altText}
                      width={96}
                      height={96}
                    />
                  </div>
                </div>
                <p className="text-gray-700 mb-4" style={{ lineHeight: "1.6", fontSize: "1.05rem" }}>
                  {category.description}
                </p>
                <div className="bg-white p-3 rounded-md">
                  <p className="font-medium text-gray-900 mb-2">Common issues:</p>
                  <ul className="space-y-2">
                    {category.issues.map((issue, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700" style={{ fontSize: "0.95rem" }}>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Source Information */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Data Sources & Definitions</h3>
              <p className="text-gray-700 mb-4 md:mb-0" style={{ lineHeight: "1.6", fontSize: "1rem" }}>
                Data from the 2022 Canadian Survey on Disability and the 2024 Survey Series on Accessibility. 
                Self-service technologies include ATMs, kiosks, self-checkouts, and other automated systems.
              </p>
            </div>
            <Link
              href="https://www150.statcan.gc.ca/n1/daily-quotidien/250324/dq250324b-eng.htm"
              className="inline-flex items-center px-5 py-1 border border-blue-600 text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View full Statistics Canada report on barriers to accessibility (opens in new tab)"
            >
              View Full Report
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessibilityStats;