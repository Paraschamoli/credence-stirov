const Hero = () => {
  return (
    <section id="home" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Hire with confidence
              <span className="text-primary-600 dark:text-primary-400 block text-3xl md:text-4xl lg:text-5xl mt-2">
                @Credence
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-bold">
              We bridge the gap between companies and employees
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Comprehensive hiring and verification solutions for businesses seeking trusted talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#services" className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-center">
                Get Started
              </a>
              <a href="#services" className="border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-primary-600 hover:text-white text-center">
                Our Services
              </a>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative">
            <div className="bg-primary-100 dark:bg-primary-900 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg transform hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                      {['Sourcing', 'Screening', 'Verification', 'Onboarding'][item - 1]}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      End-to-end solutions
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero