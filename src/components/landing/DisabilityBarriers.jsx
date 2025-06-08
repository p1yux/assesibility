import React from 'react';
import Image from 'next/image';

const DisabilityBarriers = () => {
  return (
    <section 
      className="py-16 bg-white"
      style={{
        backgroundImage: "url('/images/updated/landing/bg2nd.svg')",
        backgroundSize: '50% 100%',
        backgroundPosition: 'right top',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-3 text-black">The Reality of Disability Barriers</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Why inclusive technology is not optional anymore
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Card */}
          <div className="bg-[#F6E8E8] text-[#1E1E1E] rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Technology isn't equal for everyone.</h3>
            <p className="text-gray-700">
              Nearly half of Canadians with disabilities face everyday challenges when using essential tech like smartphones, laptops, and self-checkouts.
            </p>
          </div>

          {/* Middle Card */}
          <div className="bg-[#ECD0D1] text-[#1E1E1E] rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Why This Matters</h3>
            <p className="text-gray-700 mb-4">
              These challenges aren't just statistics, they're daily barriers for millions.
            </p>
            <p className="text-gray-700">
              We're committed to breaking them and ensuring technology works for all.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full h-[300px] md:h-full">
              <Image
                src="/images/mobile.png"
                alt="Accessibility checklist on a smartphone"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-white-opacity-50 rounded-lg p-8 border border-gray-100 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Stat 1 */}
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-800">86%</h3>
              <p className="text-gray-600">of people with disabilities use smartphones</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-800">29%</h3>
              <p className="text-gray-600">struggle with basic tasks like tapping buttons or installing apps</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-800">30%</h3>
              <p className="text-gray-600">have trouble using self-service kiosks due to time limits or lack of support</p>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-800">25%</h3>
              <p className="text-gray-600">find it difficult to adjust settings or access support when using digital tools</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-between items-center bg-[#E9E9E9] rounded-lg p-4">
            <p className="text-sm text-gray-800 mb-4 md:mb-0">
              Data from the 2022 Canadian Survey on Disability and the 2024 Survey Series on Accessibility.
            </p>
            <a 
              href="/contact" 
              className="bg-white text-red-600 border border-red-600 px-6 py-2 rounded-lg hover:bg-red-50 transition-colors"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisabilityBarriers; 