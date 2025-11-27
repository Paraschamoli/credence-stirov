const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      initials: "H",
      company: "Tech Solutions Pvt. Ltd.",
      shortText: "Credence Stirov has completely streamlined ou...",
      fullText: "Credence Stirov has completely streamlined our hiring process. Their verification services are fast, accurate, and extremely reliable. We now have the confidence that every candidate we bring on board is thoroughly verified.",
      author: "HR Manager"
    },
    {
      id: 2,
      initials: "C",
      company: "FinCore Enterprises", 
      shortText: "Professional, transparent, and dependable - that's h...",
      fullText: "Professional, transparent, and dependable - that's how I would describe Credence Stirov. Their team ensured all compliance checks were done smoothly, saving us both time and resources. Highly recommended for any growing organization.",
      author: "CHRO"
    },
    {
      id: 3,
      initials: "M",
      company: "Apps AIT",
      shortText: "The level of detail and confidentiality maintained...",
      fullText: "The level of detail and confidentiality maintained by Credence Stirov is impressive. They became more than just a service provider; they are a trusted partner in our workforce management.",
      author: "Monica-HR"
    }
  ];

  // Star rating component
  const StarRating = () => {
    return (
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Clients Speak for Us
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-800 hover:scale-105 min-h-[320px] flex flex-col"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col flex-1">
                {/* Initials Avatar with Gradient */}
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">
                    {testimonial.initials}
                  </span>
                </div>

                {/* Star Rating */}
                <StarRating />

                {/* Company - Fixed visibility */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white text-center mb-4">
                  {testimonial.company}
                </h3>

                {/* Short Text (Visible by default) */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="group-hover:opacity-0 group-hover:translate-y-4 opacity-100 translate-y-0 transition-all duration-500 text-center">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      {testimonial.shortText}
                    </p>
                  </div>
                </div>

                {/* Full Text (Visible on hover) */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 shadow-2xl opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-500 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg font-medium">
                      {testimonial.fullText}
                    </p>
                  </div>
                </div>

                {/* Author */}
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 group-hover:border-transparent transition-colors duration-500">
                  <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 text-center">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;