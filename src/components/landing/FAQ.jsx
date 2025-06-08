'use client'
import { useState } from 'react';
import Link from 'next/link';
import BookNowModal from '@/components/BookNowModal';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex w-full justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 pr-12">
          <p className="text-base text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [isBookNowOpen, setIsBookNowOpen] = useState(false);

  const faqItems = [
    {
      question: "What is digital accessibility?",
      answer: "Digital accessibility ensures websites and online tools can be used by everyone, including people with disabilities using assistive technologies."
    },
    {
      question: "Who needs to comply with accessibility standards in Canada?",
      answer: "Federal departments, agencies, and many organizations in provinces with accessibility legislation like Ontario (AODA) and Manitoba (AMA) must comply. Private sector organizations above certain sizes also have compliance requirements."
    },
    {
      question: "What standards do you follow?",
      answer: "We follow WCAG 2.1 Level AA guidelines, which are recognized internationally and referenced by most accessibility laws and regulations including the AODA in Ontario."
    },
    {
      question: "Can you audit our current website?",
      answer: "Yes, we offer comprehensive accessibility audits that evaluate your website against WCAG guidelines and provide detailed reports with remediation recommendations."
    },
    {
      question: "Do you work with non-technical teams?",
      answer: "Absolutely. We work with teams of all technical levels and provide training and support tailored to your team's expertise and needs."
    },
    {
      question: "How long does it take to make a website accessible?",
      answer: "The timeline varies based on your website's complexity, current accessibility status, and scope of work. Simple sites might take weeks, while complex applications could take several months."
    },
    {
      question: "Can you help during the design and development phase?",
      answer: "Yes, incorporating accessibility from the beginning is the most efficient approach. We offer design reviews, developer training, and code reviews throughout your project lifecycle."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        
        {/* Side by side layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Questions - Left side (2/3 width) */}
          <div className="lg:col-span-2">
            <div className="divide-y divide-gray-200">
              {faqItems.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={index === openIndex}
                  onClick={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </div>

          {/* Contact Cards - Right side (1/3 width) */}
          <div className="lg:col-span-1">
            <div className="space-y-[-10px]">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Chat on WhatsApp</h3>
                <p className="text-gray-600 mb-4">Have quick questions? Start a conversation with our team now.</p>
                <Link href="https://wa.me/16473351369" className="text-blue-600 hover:text-blue-800 flex items-center font-medium underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                  Start a WhatsApp Chat ↗
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Schedule a Call</h3>
                <p className="text-gray-600 mb-4">Book a free consultation to discuss your accessibility needs.</p>
                <Link href="https://cal.com/enabledtalent" className="text-blue-600 hover:text-blue-800 flex items-center font-medium underline underline-offset-4">
                  Schedule a Call ↗
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Submit an Enquiry</h3>
                <p className="text-gray-600 mb-4">Not sure where to start? Tell us your needs and we'll guide you.</p>
                <button 
                  onClick={() => setIsBookNowOpen(true)}
                  className="text-blue-600 hover:text-blue-800 flex items-center font-medium underline underline-offset-4"
                >
                  Submit an Inquiry Form ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookNowModal isOpen={isBookNowOpen} onClose={() => setIsBookNowOpen(false)} />
    </section>
  );
};

export default FAQ; 