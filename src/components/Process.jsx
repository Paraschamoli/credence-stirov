import React from 'react'

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Requirement Analysis',
      description: 'Understand your hiring needs and organizational requirements'
    },
    {
      number: '02',
      title: 'Talent Sourcing',
      description: 'Strategic sourcing to identify qualified candidates'
    },
    {
      number: '03',
      title: 'Screening & Assessment',
      description: 'Comprehensive evaluation of candidate qualifications'
    },
    {
      number: '04',
      title: 'Background Verification',
      description: 'Thorough checks on identity, history, and credentials'
    },
    {
      number: '05',
      title: 'Final Selection',
      description: 'Presenting verified, qualified candidates for your review'
    },
    {
      number: '06',
      title: 'Onboarding Support',
      description: 'Seamless integration of new hires into your organization'
    }
  ]

  return (
    <section id="process" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Streamlined workflow ensuring efficient and reliable hiring solutions
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center group"
            >
              <div className="relative z-10">
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
              
              {/* Connecting line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-3/4 w-1/2 h-0.5 bg-primary-200 dark:bg-primary-800 z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process