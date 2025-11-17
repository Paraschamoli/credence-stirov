const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Credence~Stirov
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Credence Stirov is a dynamic people-centric company providing comprehensive hiring 
              and verification solutions for businesses seeking trusted talent. We bridge the gap 
              between recruitment and background verification, ensuring that organizations hire 
              with confidence and credibility.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              We specialize in end-to-end employment solutions — from sourcing, screening, and 
              onboarding candidates to conducting thorough verification checks that validate 
              identity, employment history, education, and compliance credentials.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With a focus on accuracy, integrity, and efficiency, Credence~Stirov leverages 
              modern technology and human expertise to streamline the entire hiring lifecycle 
              for both employers and candidates.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { title: 'Accuracy', desc: 'Precise verification processes' },
              { title: 'Integrity', desc: 'Ethical and transparent operations' },
              { title: 'Efficiency', desc: 'Streamlined hiring lifecycle' },
              { title: 'Technology', desc: 'Modern tech-driven solutions' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About