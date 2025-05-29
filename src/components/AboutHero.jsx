import Image from "next/image";
import Link from "next/link";

const AboutHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 bg-gray-50">
      {/* Small About Us pill */}
      <div className="flex justify-center mb-6">
        <div className="bg-[#ECD0D1] text-[#1E1E1E] px-6 py-2 rounded-xl text-sm font-medium">
          About Us
        </div>
      </div>

      {/* Main heading */}
      <h1 className="text-3xl md:text-4xl text-[#1E1E1E] font-bold text-center mb-4 max-w-3xl mx-auto">
        Our Journey Toward a Barrier-Free Canada
      </h1>

      {/* Description text */}
      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
        At Enable Canada, we believe that accessibility is more than a requirement — it's a right. We're here to break down barriers, connect people to life-changing support, and create a more inclusive future for every Canadian.
      </p>

      {/* CTA Button */}
      <div className="flex justify-center mb-12">
        <Link 
          href="/contact" 
          className="bg-red-700 hover:bg-red-800 text-white px-12 py-3 rounded-xl font-medium transition-colors"
        >
          Get in Touch
        </Link>
      </div>

      {/* Image and Story Section */}
      <div className="bg-gray-900 text-white rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Text content - on top for mobile, left for desktop */}
          <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
            <div className="space-y-4">
              <p>
                At Enable Canada, we believe strength is born from adversity. As a disability collective, our team brings firsthand experience and a deep commitment to inclusion. We're proud advocates, and our lived experience makes us stronger and more agile.
              </p>
              <p>
                With 22% of Canadians having some form of disability, we're here to help you tap into a market that's often overlooked. We're not seeking charity — we're skilled designers, marketers, and strategists focused on making your business more accessible and inclusive. This is social enterprise in action.
              </p>
            </div>
          </div>
          
          {/* Image - on bottom for mobile, right for desktop */}
          <div className="md:w-1/2 h-64 md:h-auto relative">
            <Image 
              src="/images/about-us-section.jpg" 
              alt="Team members collaborating on accessibility solutions" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Quote section */}
      <div className="mt-16 text-center">
        <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 max-w-3xl mx-auto">
          <span className="text-5xl text-red-700 leading-none">
            
            </span> Inclusion is the bridge that connects abilities, and at Enable Canada, we're building that bridge.
        </blockquote>
      </div>
    </section>
  );
};

export default AboutHero; 