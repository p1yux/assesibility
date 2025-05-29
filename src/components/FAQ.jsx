"use client";

import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is digital accessibility?",
      answer: "Digital accessibility ensures websites and online tools can be used by everyone, including people with disabilities using assistive technologies."
    },
    {
      question: "Who needs to comply with accessibility standards in Canada?",
      answer: "In Canada, organizations must comply with accessibility standards based on provincial legislation like the AODA in Ontario and the ACA federally. Public sector organizations, large private businesses, and those providing services to the public are typically required to meet these standards."
    },
    {
      question: "What standards do you follow?",
      answer: "We follow WCAG 2.1 Level AA guidelines, which are internationally recognized standards for web accessibility. These guidelines ensure content is perceivable, operable, understandable, and robust for all users."
    },
    {
      question: "Can you audit our current website?",
      answer: "Yes, we offer comprehensive accessibility audits that evaluate your website against WCAG standards. Our audits include automated testing, manual testing, and recommendations for remediation."
    },
    {
      question: "Do you work with non-technical teams?",
      answer: "Absolutely! We work with teams of all technical levels. Our experts can translate complex accessibility requirements into understandable action items and provide training tailored to your team's knowledge level."
    },
    {
      question: "How long does it take to make a website accessible?",
      answer: "The timeline varies based on your website's complexity, current accessibility level, and scope of work. Simple websites might take a few weeks, while complex platforms could take several months. We'll provide a detailed timeline after our initial assessment."
    },
    {
      question: "Can you help during the design and development phase?",
      answer: "Yes, incorporating accessibility from the beginning is the most efficient approach. We offer design reviews, developer guidance, and can integrate with your team throughout the process to ensure accessibility is built-in from the start."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 pr-0 md:pr-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-10">Frequently Asked Questions</h1>

          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-medium text-gray-900">
                  {index + 1}. {item.question}
                </span>
                <span className="ml-6 flex-shrink-0">
                  {openIndex === index ? (
                    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
                aria-hidden={openIndex !== index}
              >
                <p className="py-4 text-gray-600">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:w-1/3 mt-12 md:mt-0">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-2">Chat on WhatsApp</h2>
              <p className="text-gray-600 mb-4">Have quick questions? Start a conversation with our team now.</p>
              <a 
                href="https://wa.me/yourphonenumber" 
                className="text-blue-600 hover:underline flex items-center font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start a WhatsApp Chat
                <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-2">Schedule a Call</h2>
              <p className="text-gray-600 mb-4">Book a free consultation to discuss your accessibility needs.</p>
              <a 
                href="/contact" 
                className="text-blue-600 hover:underline flex items-center font-medium"
              >
                Schedule a Call
                <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-2">Submit an Enquiry</h2>
              <p className="text-gray-600 mb-4">Not sure where to start? Tell us your needs and we'll guide you.</p>
              <a 
                href="/contact#inquiry-form" 
                className="text-blue-600 hover:underline flex items-center font-medium"
              >
                Submit an Inquiry Form
                <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 