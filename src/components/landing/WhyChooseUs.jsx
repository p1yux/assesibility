'use client'
import { useState } from 'react';
import Image from 'next/image';

const WhyChooseUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      features: [
        {
          icon: "/images/wcag-icon.svg",
          title: "WCAG Compliance",
          description: "Our solutions adhere to Web Content Accessibility Guidelines, ensuring your digital presence meets international standards."
        },
        {
          icon: "/images/ada-icon.svg",
          title: "ADA & Section 508",
          description: "We ensure compliance with the Americans with Disabilities Act and Section 508 requirements for government and public sector organizations."
        },
        {
          icon: "/images/screen-reader-icon.svg",
          title: "Screen Reader Compatibility",
          description: "Our implementations are thoroughly tested with popular screen readers to ensure a seamless experience for visually impaired users."
        }
      ]
    },
    {
      id: 2,
      features: [
        {
          icon: "/images/testing-icon.svg",
          title: "Comprehensive Testing",
          description: "We perform thorough testing across multiple devices, browsers, and assistive technologies."
        },
        {
          icon: "/images/training-icon.svg",
          title: "Expert Training",
          description: "Our team provides specialized training to help your staff maintain accessibility standards long-term."
        },
        {
          icon: "/images/monitoring-icon.svg",
          title: "Ongoing Monitoring",
          description: "We offer continuous monitoring services to ensure your digital properties remain accessible as they evolve."
        }
      ]
    }
  ];

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Accessibility Solutions</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with a deep understanding of inclusive design to help businesses enhance usability and compliance.
          </p>
        </div>

        <div className="flex justify-end py-4 items-center">
            <button
              onClick={goToPrevSlide}
              className="bg-red-100 hover:bg-red-200 text-red-500 p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            
            <div className="mx-4">
              <span className="text-gray-700 font-medium">{currentSlide + 1}</span>
              <span className="text-gray-400 mx-1">/</span>
              <span className="text-gray-700 font-medium">{slides.length}</span>
            </div>
            
            <button
              onClick={goToNextSlide}
              className="bg-red-100 hover:bg-red-200 text-red-500 p-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, slideIndex) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {slide.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <div className="h-16 w-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
                          <Image 
                            src={feature.icon} 
                            alt="" 
                            width={32} 
                            height={32} 
                            className="text-red-500"
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 