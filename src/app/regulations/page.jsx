'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function RegulationsPage() {
  const [activeSection, setActiveSection] = useState('aca');

  return (
    <div className="min-h-screen bg-white">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Accessibility Regulations</h1>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="relative w-full h-[320px] rounded-3xl overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Image 
          src="/images/writing-in-page.png" 
          alt="Person signing document" 
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-start p-12 rounded-lg">
          <div className="text-white max-w-lg">
            <h2 className="text-3xl font-bold mb-2">Understanding the Laws That Shape</h2>
            <h3 className="text-3xl font-bold">a More Inclusive Digital World</h3>
          </div>
        </div>
      </section>

      {/* Regulations Content */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Regulations and Legal Framework in Canada</h2>
          
          <p className="text-gray-700 mb-4">
            Canadian laws and regulations have been a primary catalyst for the adoption of web accessibility practices. Unlike some countries that have a single nationwide law, Canada has a combination of federal and provincial legislation that address accessibility.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div>
                <p className="text-gray-700 mb-6">
                  This federal law aims to achieve a "barrier-free Canada" by 2040, requiring organizations under federal jurisdiction to identify, remove, and prevent barriers in areas including information and communication technologies. The ACA covers federal government departments, Crown corporations, and federally regulated industries (banks, telecom, transportation, etc.).
                </p>

                <p className="text-gray-700 mb-6">
                  Under the ACA, these entities must publish accessibility plans, involve people with disabilities in feedback processes, and report on progress. Web accessibility is explicitly part of the scope – the Government of Canada's own websites are required to meet WCAG 2.0 standards (and updated standards as they are adopted).
                </p>

                <p className="text-gray-700 mb-6">
                  In 2023, Canada adopted the European Standard EN 301 549 as a National Standard for ICT accessibility, which references WCAG 2.1 Level AA for websites. While EN 301 549 is currently voluntary, it provides a common benchmark that may influence future regulations and procurement requirements at the federal level.
                </p>

                <p className="text-gray-700 mb-6">
                  The ACA does not prescribe specific technical standards in the law itself, but the trend is that WCAG 2.1 AA (and eventually 2.2) will be expected compliance levels for federal organizations. Enforcement of the ACA is handled by bodies like the Canadian Transportation Agency and CRTC for their sectors, and organizations can face compliance orders or fines if they do not make adequate progress on accessibility.
                </p>
              </div>

              {activeSection === 'aca' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Accessible Canada Act (ACA), 2019</h3>
                  <p className="text-gray-700 mb-6">
                    The Accessible Canada Act (ACA) was passed in 2019 with the goal of creating a barrier-free Canada by 2040. This landmark legislation applies to organizations under federal jurisdiction, including government departments, Crown corporations, and federally regulated industries such as banking, telecommunications, and transportation.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Key provisions of the ACA include requirements for organizations to:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Develop and publish accessibility plans</li>
                    <li>Establish feedback processes that include people with disabilities</li>
                    <li>Provide progress reports on the implementation of their plans</li>
                    <li>Identify, remove, and prevent barriers in various areas, including information and communication technologies</li>
                  </ul>
                  <p className="text-gray-700">
                    The ACA established the Canadian Accessibility Standards Development Organization (CASDO) to develop accessibility standards. While the ACA doesn't specify technical standards directly in the legislation, it's expected that WCAG 2.1 AA will become the de facto standard for federal organizations.
                  </p>
                </div>
              )}

              {activeSection === 'aoda' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Accessibility for Ontarians with Disabilities Act (AODA), 2005</h3>
                  <p className="text-gray-700 mb-6">
                    Ontario was the first province to enact comprehensive accessibility legislation with the AODA in 2005. The act aims to achieve full accessibility in Ontario by 2025 through the development and enforcement of standards in key areas.
                  </p>
                  <p className="text-gray-700 mb-4">
                    For digital accessibility, the Information and Communications Standards require:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Public sector organizations and private/non-profit organizations with 50+ employees to make their websites and web content conform to WCAG 2.0 Level AA (excluding live captioning and audio description)</li>
                    <li>Compliance deadlines that were phased in, with the final deadline of January 1, 2021 for all web content published after January 1, 2012</li>
                    <li>Organizations to file accessibility compliance reports</li>
                  </ul>
                  <p className="text-gray-700">
                    Non-compliance with the AODA can result in significant penalties, with corporations facing fines of up to $100,000 per day for ongoing violations. The Ontario government has increased enforcement efforts in recent years.
                  </p>
                </div>
              )}

              {activeSection === 'provincial' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Provincial Accessibility Laws</h3>
                  <p className="text-gray-700 mb-6">
                    Following Ontario's lead, several other Canadian provinces have implemented their own accessibility legislation:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li><strong>Manitoba:</strong> The Accessibility for Manitobans Act (2013) includes an Information and Communications Standard that requires WCAG 2.1 AA compliance for websites</li>
                    <li><strong>Nova Scotia:</strong> The Accessibility Act (2017) aims to make Nova Scotia accessible by 2030 and is developing standards for information and communication</li>
                    <li><strong>British Columbia:</strong> The Accessible BC Act (2021) requires organizations to create accessibility plans and standards</li>
                    <li><strong>Newfoundland and Labrador:</strong> The Accessibility Act (2021) focuses on identifying and removing barriers</li>
                    <li><strong>Quebec:</strong> While lacking a comprehensive accessibility act, government ministries must meet the SGQRI 008 standard (similar to WCAG)</li>
                  </ul>
                  <p className="text-gray-700">
                    These provincial laws typically require public sector compliance first, followed by phased-in requirements for the private sector. Most align with WCAG standards for digital accessibility.
                  </p>
                </div>
              )}

              {activeSection === 'human' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Human Rights and Other Legal Considerations</h3>
                  <p className="text-gray-700 mb-6">
                    Even in jurisdictions without specific accessibility legislation, Canadians with disabilities can use human rights laws to address digital accessibility barriers:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>The Canadian Human Rights Act prohibits discrimination based on disability in services available to the public</li>
                    <li>Provincial human rights codes similarly protect against discrimination</li>
                    <li>Inaccessible websites and digital services can be considered a form of discrimination if they prevent people with disabilities from accessing services</li>
                  </ul>
                  <p className="text-gray-700">
                    Several successful human rights complaints have been filed regarding inaccessible digital services, establishing precedents that encourage organizations to proactively address accessibility rather than risk litigation or reputational damage.
                  </p>
                </div>
              )}

              {activeSection === 'impact' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Practical Impact</h3>
                  <p className="text-gray-700 mb-6">
                    Canada's accessibility laws have had significant practical impacts on organizations:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Many national companies adopt the highest standard across all operations to ensure compliance in all jurisdictions</li>
                    <li>Public sector websites are being steadily upgraded to meet accessibility requirements</li>
                    <li>Staggered compliance deadlines across provinces create ongoing demand for accessibility services</li>
                    <li>Organizations with international operations are also influenced by U.S. ADA requirements and European accessibility rules</li>
                  </ul>
                  <p className="text-gray-700">
                    As laws mature, there's an increasing emphasis on not just one-time compliance but ongoing accountability through required reporting, plans, and feedback mechanisms. This has contributed to a cultural shift where many organizations now view accessibility as an essential aspect of good digital service, similar to security or privacy.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar Navigation */}
            <div className="md:col-span-1">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div 
                    className={`mt-1 w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer ${activeSection === 'aca' ? 'border-red-800 bg-red-800' : 'border-gray-400'}`} 
                    onClick={() => setActiveSection('aca')}
                  >
                    {activeSection === 'aca' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                  <label className="ml-3 text-gray-800 cursor-pointer" onClick={() => setActiveSection('aca')}>
                    Accessible Canada Act (ACA), 2019
                  </label>
                </div>

                <div className="flex items-start">
                  <div 
                    className={`mt-1 w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer ${activeSection === 'aoda' ? 'border-red-800 bg-red-800' : 'border-gray-400'}`} 
                    onClick={() => setActiveSection('aoda')}
                  >
                    {activeSection === 'aoda' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                  <label className="ml-3 text-gray-800 cursor-pointer" onClick={() => setActiveSection('aoda')}>
                    Accessibility for Ontarians with Disabilities Act (AODA), 2005
                  </label>
                </div>

                <div className="flex items-start">
                  <div 
                    className={`mt-1 w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer ${activeSection === 'provincial' ? 'border-red-800 bg-red-800' : 'border-gray-400'}`} 
                    onClick={() => setActiveSection('provincial')}
                  >
                    {activeSection === 'provincial' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                  <label className="ml-3 text-gray-800 cursor-pointer" onClick={() => setActiveSection('provincial')}>
                    Provincial Accessibility Laws
                  </label>
                </div>

                <div className="flex items-start">
                  <div 
                    className={`mt-1 w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer ${activeSection === 'human' ? 'border-red-800 bg-red-800' : 'border-gray-400'}`} 
                    onClick={() => setActiveSection('human')}
                  >
                    {activeSection === 'human' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                  <label className="ml-3 text-gray-800 cursor-pointer" onClick={() => setActiveSection('human')}>
                    Human Rights and Other Legal Considerations
                  </label>
                </div>

                <div className="flex items-start">
                  <div 
                    className={`mt-1 w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer ${activeSection === 'impact' ? 'border-red-800 bg-red-800' : 'border-gray-400'}`} 
                    onClick={() => setActiveSection('impact')}
                  >
                    {activeSection === 'impact' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                  <label className="ml-3 text-gray-800 cursor-pointer" onClick={() => setActiveSection('impact')}>
                    Practical Impact
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

        </div>
  );
} 