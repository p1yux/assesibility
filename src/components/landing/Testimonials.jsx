const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with the Accessibility team transformed how we approach our digital products. Their expertise in WCAG compliance was invaluable.",
      author: "Sarah Johnson",
      position: "Digital Director, Tech Solutions Inc.",
      company: "Tech Solutions Inc.",
    },
    {
      quote: "The training provided by Accessibility has empowered our development team to create inclusive experiences from the start of every project.",
      author: "Michael Chen",
      position: "CTO, Innovate Digital",
      company: "Innovate Digital",
    },
    {
      quote: "Their audit identified accessibility issues we'd never even considered. The remediation work has significantly improved our user experience for everyone.",
      author: "Jennifer Williams",
      position: "Product Manager, Financial Services Co.",
      company: "Financial Services Co.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We've helped organizations of all sizes make their digital experiences more accessible.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-amber-400"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>

              <blockquote className="text-gray-700 mt-4">
                <p>"{testimonial.quote}"</p>
              </blockquote>

              <div className="mt-6 flex items-center">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="inline-flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === 0 ? "bg-indigo-600" : "bg-gray-300"
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 