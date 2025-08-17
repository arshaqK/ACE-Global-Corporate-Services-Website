import React from 'react';
import { Calculator, FileText, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const [ref, isVisible] = useScrollAnimation();

  const services = [
    {
      icon: Calculator,
      title: 'Taxation',
      description: 'Comprehensive tax planning and compliance services for individuals and businesses.'
    },
    {
      icon: FileText,
      title: 'Audit',
      description: 'Professional audit services ensuring accuracy and compliance with regulations.'
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Strategic financial consulting to optimize your business operations and growth.'
    }
  ];

  return (
    <section 
      id="services" 
      ref={ref}
      className={`py-20 bg-gray-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of financial services designed to meet 
            your unique business requirements and drive success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-all duration-700 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${400 + index * 200}ms` : '0ms'
              }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-6">
                <service.icon className="w-8 h-8 text-gold-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-navy-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;