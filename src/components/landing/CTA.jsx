import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-8">
          Ready to make your digital services accessible?
        </h2>
        <p className="text-2xl text-gray-700 mb-10 leading-relaxed">
          Contact us today to discuss how we can help you create an inclusive digital experience that works for everyone.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-5 sm:space-y-0 sm:space-x-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-2 border-2 text-lg font-medium rounded-lg text-white bg-[#A21419] hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            aria-label="Get in touch to learn more about our accessibility services"
          >
            Talk to an Expert
          </Link>
          <Link
            href="/regulations"
            className="inline-flex items-center justify-center px-10 py-4  text-lg font-medium rounded-lg text-blue-600 underline"
            aria-label="Learn about accessibility regulations"
          >
            How It Works
          </Link>
        </div>
      </div>
    </div>
  </section>
  );
};

export default CTA; 