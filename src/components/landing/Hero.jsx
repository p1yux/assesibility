import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-white text-gray-900 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-600 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 w-full mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
              Build Inclusive &<br />
              Accessible Websites<br />
              The Right Way
            </h1>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="bg-red-700 text-white hover:bg-red-800 transition-colors px-8 py-3 rounded-lg text-lg font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                aria-label="Talk to an Expert"
                tabIndex={0}
              >
                Talk to an Expert
              </Link>
              <Link 
                href="/services" 
                className="text-blue-700 underline hover:underline transition-colors flex items-center gap-2 underline-offset-4"
                aria-label="How It Works"
                tabIndex={0}
              >
                How It Works
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 rotate-[-60deg] underline-offset-4 underline">
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl max-w-2xl mx-auto">
                <div className="relative">
                  <Image 
                    src="/images/updated/landing/herosec.png" 
                    alt="image contains group of people with disabilities and long-term conditions"
                    width={900}
                    height={900}
                    className="w-full h-auto object-cover rounded-xl"
                    priority
                  />
                  
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl max-w-2xl mx-auto">
                <div className="relative">
                  <img src="/images/updated/landing/herotxt.svg" alt="Trusted by businesses across Canada and the USA to create accessible digital solutions" /> 
                </div>
              </div>

              {/* <div className="absolute right-0 bottom-8 bg-white text-black p-4 rounded-lg shadow-lg w-64">
                <div className="space-y-2">
                  <p className="text-sm font-medium">WCAG 2.1 AA Compliance</p>
                  <p className="text-sm font-medium">Inclusive Design Support</p>
                  <p className="text-sm font-medium">Expert Audits & Testing</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        
        {/* <div className="mt-8 flex flex-col items-end lg:col-span-12">
          <p className="text-sm text-gray-700">
            Trusted by businesses across Canada and the USA to create accessible <br /> digital solutions
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Hero; 