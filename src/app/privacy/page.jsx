'use client';

import Image from 'next/image';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-[80%] top-14 left-[10%] h-[300px]">
        <Image 
        className='rounded-3xl'
          src="/images/Network.png" 
          alt="Person looking at city skyline" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-opacity-70 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl font-bold mb-4">We Care About Your Privacy</h1>
            <p className="text-base max-w-2xl mx-auto">
              Your Privacy is important to us at Enable Canada. We respect your privacy regarding any information we may collect from you across our website.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-22 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h2>
          
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Introduction</h3>
              <p className="text-gray-700 text-base">
                Your privacy is important to us. It is Accessibility's policy to respect your privacy regarding any information we may collect from you across our website, accessibility.com, and other sites we own and operate.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Information We Collect</h3>
              <p className="text-gray-700 text-base">
                We only ask for personal information when we truly need it to provide a service to you. We collect information by fair and lawful means, with your knowledge and consent. When collecting personal data, we will let you know why we're collecting it and how it will be used.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Data Retention & Protection</h3>
              <p className="text-gray-700 text-base">
                We only retain collected information for as long as necessary to provide you with your requested services. Any data we store will be protected using commercially acceptable security measures to prevent loss, theft, unauthorized access, disclosure, copying, use, or modification.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">4. Information Sharing</h3>
              <p className="text-gray-700 text-base">
                We do not share any personally identifying information publicly or with third parties, except when required by law.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">5. External Links</h3>
              <p className="text-gray-700 text-base">
                Our website may contain links to external sites that are not operated by us. Please be aware that we have no control over the content and privacy practices of these external sites and cannot accept responsibility or liability for their respective privacy policies.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">6. Your Rights & Choices</h3>
              <p className="text-gray-700 text-base">
                You are free to decline our request for personal information, understanding that we may be unable to provide some of your desired services as a result.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">7. Consent & Updates</h3>
              <p className="text-gray-700 text-base">
                Your continued use of our website will be regarded as acceptance of our privacy practices. We reserve the right to update this policy at any time. Any changes will be reflected on this page.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">8. Contact Us</h3>
              <p className="text-gray-700 text-base">
                If you have any questions about how we handle user data and personal information, feel free to contact us.
              </p>
              <p className="mt-2">
                <a href="mailto:privacy@enablecanada.ca" className="text-gray-700 hover:underline">
                  Email us at privacy@enablecanada.ca
                </a>
              </p>
            </div>

            <div className="text-sm text-gray-500 pt-4">
              <p>Last Updated: March 21, 2024</p>
            </div>
          </div>
        </div>
      </section>

      

         </div>
  );
};

export default PrivacyPolicy;
