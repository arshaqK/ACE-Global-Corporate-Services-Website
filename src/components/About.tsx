import React from 'react';
import { Award, Users, TrendingUp, Shield, Briefcase, CheckCircle } from 'lucide-react';
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

        {/* Why Choose ACE Section */}
        <div
          className={`mt-20 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white-50 rounded-2xl p-8 lg:p-12 text-navy-900 shadow-lt">
            <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
              Why Choose ACE?
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: 'Proven Expertise',
                  description: '75+ years of combined leadership in finance and consulting.'
                },
                {
                  title: 'Trusted by Blue-Chip Organizations',
                  description: "We've operated at the highest levels of industry."
                },
                {
                  title: 'Technology-Driven',
                  description: 'Leveraging the latest tools for accuracy, speed, and security.'
                },
                {
                  title: 'End-to-End Services',
                  description: "From bookkeeping to boardroom advice, we've got you covered."
                },
                {
                  title: 'Client-Centric',
                  description: 'We treat your business like our own, ensuring personalized, responsive service.'
                }
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`flex items-start space-x-4 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${1000 + index * 150}ms` : '0ms'
                  }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`text-center lg:text-left transition-all duration-700 delay-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="text-lg text-gray-700 leading-relaxed border-t border-gold-200 pt-8">
                At ACE Global Corporate Services, we're not just service providers—we're your partners in growth. 
                With accuracy, credibility, and efficiency at the core of everything we do, we empower businesses 
                to thrive in today's complex and competitive environment.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;