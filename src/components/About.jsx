const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
              ABOUT CREDENCE-STIROV
            </h2>
            <div className="w-3 h-3 bg-primary-500 rounded-full ml-3"></div>
          </div>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            Building Trust Through Comprehensive Hiring & Verification Solutions
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900 dark:to-primary-800 rounded-2xl transform rotate-2"></div>
            <img
              src="/images/about/1.webp"
              alt="Our Mission"
              className="relative rounded-xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-6">
              <div className="w-8 h-0.5 bg-primary-500 mr-4"></div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Our Mission
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-800 p-6 rounded-xl">
                At <span className="font-semibold text-primary-600">Credence-STIROV</span>, our mission is to empower businesses with reliable hiring solutions. We strive to ensure that every organization can hire with confidence through our comprehensive background verification services.
              </p>
              <div className="bg-primary-50 dark:bg-primary-900/30 border-l-4 border-primary-500 p-6 rounded-r-xl">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  In today's fast-paced business environment, <span className="font-semibold">trust and reliability</span> are at the core of every successful organization. Hiring the right talent and ensuring workforce integrity has never been more critical.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-0.5 bg-primary-500 mr-4"></div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                What We Do
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We specialize in a comprehensive range of services designed to protect and empower businesses:
              </p>

              <div className="grid gap-4">
                {[
                  {
                    title: "Hiring Solutions",
                    description: "Helping organizations streamline recruitment with accuracy and efficiency.",
                    icon: "👥"
                  },
                  {
                    title: "Background Verification",
                    description: "Conducting detailed checks on education, employment history, identity, and criminal records.",
                    icon: "🔍"
                  },
                  {
                    title: "Compliance & Risk Management",
                    description: "Enabling businesses to stay aligned with legal and regulatory standards.",
                    icon: "🛡️"
                  },
                  {
                    title: "Workforce Trust Solutions",
                    description: "Building credibility within teams to strengthen organizational culture.",
                    icon: "🤝"
                  }
                ].map((service, index) => (
                  <div
                    key={index}
                    className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-600"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
                <p className="text-lg leading-relaxed text-center">
                  Every service we provide is backed by <span className="font-bold">strong data security measures</span>, confidentiality protocols, and a client-first approach.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl transform -rotate-2"></div>
            <img
              src="/images/about/2.webp"
              alt="Our Services"
              className="relative rounded-xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Technology & Expertise Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-bl from-primary-100 to-primary-50 dark:from-primary-900 dark:to-primary-800 rounded-2xl transform rotate-3"></div>
            <img
              src="/images/about/3.webp"
              alt="Technology and Expertise"
              className="relative rounded-xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <div className="space-y-6">
              <div className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Innovative Approach
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                At <span className="font-semibold text-primary-600">Credence Stirov</span>, we believe that every business decision begins with trust. Our services are designed to safeguard companies against the risks of misrepresentation, fraudulent backgrounds, and non-compliance.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border-2 border-dashed border-gray-200 dark:border-gray-700">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                  By combining <span className="font-semibold">cutting-edge technology</span> with human expertise, we deliver results that are accurate, confidential, and actionable.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg">
                  <span className="mr-3">🚀</span>
                  Verification to Vision (V2V)
                  <span className="ml-3">🎯</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm">
                  Our innovative philosophy that transforms verification into strategic vision
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-0.5 bg-primary-500 mr-4"></div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Our Vision
              </h3>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  We envision a future where organizations can hire fearlessly, confident in the authenticity and integrity of every employee. By building strong foundations of trust, we aim to be the leading choice for businesses seeking not just verification but a partner in their growth journey.
                </p>
              </div>
              <div className="text-center bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-8 border-2 border-primary-200 dark:border-primary-800">
                <p className="text-xl font-bold text-primary-700 dark:text-primary-300 leading-relaxed">
                  At Credence Stirov, we transform verification into a vision—helping you hire better, grow stronger, and build trust that lasts.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tl from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl transform -rotate-3"></div>
            <img
              src="/images/about/4.webp"
              alt="Our Vision"
              className="relative rounded-xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;