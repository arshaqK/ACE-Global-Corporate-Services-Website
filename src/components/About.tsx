import React from 'react';
import { Award, Users, TrendingUp, Shield, Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation();

  const stats = [
    {
      icon: Award,
      number: '75+',
      label: 'Years of Combined Excellence'
    },
    {
      icon: Users,
      number: '15+',
      label: 'Industries Served'
    },
    {
      icon: Briefcase,
      number: '10+',
      label: 'Core Services'
    },
    {
      icon: TrendingUp,
      number: '100%',
      label: 'Compliance Record'
    }
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-20 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
              About Us
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At ACE Global Corporate Services, we bring together over 75 years of
              combined expertise in bookkeeping, accounting, taxation, management
              consulting, corporate governance, payroll, and complete back-office support.
            </p>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded by two seasoned professionals with blue-chip organizational experience,
              we exist to give businesses the confidence, clarity, and compliance they need to
              succeed.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We understand that running a business is demanding. That's why we take care of
              the numbers, compliance, and governance—so you can focus on growth,
              innovation, and strategy. Whether you're a startup, a growing enterprise, or an
              established corporation, we provide tailored solutions designed to reduce risk,
              increase efficiency, and unlock long-term value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-navy-900 hover:bg-navy-800 transition-all duration-200 transform hover:scale-105">
                Learn More About Us
              </button>
            
            </div>
          </div>

          {/* Right Stats */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`bg-gray-50 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-500 hover:shadow-lg ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: isVisible ? `${600 + index * 150}ms` : '0ms'
                  }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-100 rounded-full mb-4">
                    <stat.icon className="w-6 h-6 text-gold-600" />
                  </div>
                  
                  <div className="text-3xl font-bold text-navy-900 mb-2">
                    {stat.number}
                  </div>
                  
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;