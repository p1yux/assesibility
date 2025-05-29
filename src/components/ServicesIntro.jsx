import Link from "next/link";

const ServicesIntro = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          {/* Left column with heading */}
          <div className="md:w-1/2">
            <div className="inline-block bg-[#ECD0D1] text-[#1E1E1E] px-6 py-3 rounded-lg text-sm font-medium mb-4">
              Our Services
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Compliance, Inclusivity, and Opportunity in One Package
            </h2>
          </div>
          
          {/* Right column with description and CTA */}
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-6">
              Enable Canada offers expert services to make your digital content accessible, inclusive, 
              and compliant. Empower your business to reach new audiences and foster inclusivity for 
              all abilities.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-[#A21419] hover:bg-red-900 text-white px-7 py-3 rounded font-medium transition-colors text-sm"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesIntro; 