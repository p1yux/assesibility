import React from 'react';

const IndustryButton = ({ text }) => {
  return (
    <div className="bg-white border border-[#E3B9BA] rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300 flex items-center justify-center min-h-[80px]">
      <span className="font-medium text-gray-800">{text}</span>
    </div>
  );
};

const WhoWeHelp = () => {
  const industries = [
    "Government and Public Sector",
    "Education and Academia",
    "Retail and E-commerce",
    "Financial Services and Healthcare",
    "Media and Entertainment",
    "Travel and Hospitality"
  ];

  return (
    <section className="py-16 bg-[#F2F2F2]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-black">Who We Help</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We work with organizations that prioritize accessibility and inclusion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-black">
          {industries.map((industry, index) => (
            <IndustryButton key={index} text={industry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp; 