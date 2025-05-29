"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CTA from './landing/CTA';

const Help = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('General Information');

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = [
    "General Information",
    "Technical Support",
    "Partnerships & Sponsorships",
    "Careers & Internships",
    "Donations & Support"
  ];

  const faqItems = [
    {
      question: "What services does Enable Canada provide?",
      answer: "We offer comprehensive digital accessibility solutions, including audits, remediation, compliance monitoring, training, and assistive technology integration."
    },
    {
      question: "Who can benefit from your services?",
      answer: "Our services benefit organizations of all sizes, including businesses, government agencies, educational institutions, and non-profits looking to make their digital content accessible to all users."
    },
    {
      question: "How do I start working with Enable Canada?",
      answer: "Getting started is easy. Simply contact us through our website, email, or phone. We'll schedule an initial consultation to understand your needs and create a customized accessibility plan."
    },
    {
      question: "Do you offer customized solutions?",
      answer: "Yes, we tailor our accessibility solutions to meet your specific needs and budget. We understand that each organization has unique requirements and we work closely with you to develop the right approach."
    },
    {
      question: "Is there a cost for initial consultation?",
      answer: "No, we offer a free initial consultation to understand your accessibility needs and provide you with information about our services and how we can help."
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative w-[80%] h-[300px] left-[9%]">
      

        <Image 
        className='rounded-3xl'
          src="/images/freelance-young-asian-businesswoman-casual-wear-using-laptop-working-living-room-home.png" 
          alt="Person using laptop" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">Frequently Asked Questions</h1>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* FAQ Header */}
        <div className="mb-8">
          <div className="inline-block bg-[#ECD0D1] text-[#1E1E1E] px-8 py-2 rounded-lg text-sm font-medium mb-4">
            FAQs
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help? We're Here for You</h2>
          <p className="text-gray-700 max-w-3xl">
            Find answers to common questions about our programs, services, and accessibility. If anything's unclear, feel free to reach out—we're just a message away.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Categories Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-red-50 rounded-lg overflow-hidden">
              {categories.map((category, index) => (
                <div 
                  key={index} 
                  className={`${index === 0 ? 'bg-red-800 text-white' : 'hover:bg-red-100 text-gray-800'} p-4 cursor-pointer ${index !== categories.length - 1 ? 'border-b border-red-100' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  <p className={`${index === 0 ? 'font-medium' : ''}`}>{category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="md:col-span-3">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg mb-4 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left p-5 focus:outline-none"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-base font-medium text-gray-900">
                    {index + 1}. {item.question}
                  </span>
                  <span className="ml-6 flex-shrink-0">
                    <svg className={`h-5 w-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'block' : 'hidden'
                  }`}
                  aria-hidden={openIndex !== index}
                >
                  <p className="px-5 pb-5 text-gray-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gray-100 rounded-lg p-8 mt-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              If you didn't find the answer you're looking for, please reach out to us. We're here to help you create inclusive digital experiences.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full px-4 py-2 border bg-white text-gray-700 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border bg-white text-gray-700 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border bg-white text-gray-700 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
                >
                  <option value="">What's your question about?</option>
                  <option value="services">Services</option>
                  <option value="pricing">Pricing</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border bg-white text-gray-700 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
                  placeholder="Please share your questions or the support you're looking for..."
                ></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-red-800 text-white px-6 py-2 rounded-md hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2"
                >
                  Talk to an Expert
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      
    <CTA/>
    </main>
  );
};

export default Help; 