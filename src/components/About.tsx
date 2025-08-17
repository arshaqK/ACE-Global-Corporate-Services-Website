import React from 'react';
import { Award, Users, TrendingUp, Shield } from 'lucide-react';
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
              Founded with a vision to provide exceptional financial services, ACE Global Corporate Services 
              has been a trusted partner for businesses across various industries for over two decades. 
              Our commitment to excellence and innovation has made us a leading name in financial consulting.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We specialize in delivering comprehensive solutions that help businesses navigate complex 
              financial landscapes, ensure regulatory compliance, and achieve sustainable growth. Our 
              team of certified professionals brings deep expertise and personalized attention to every client.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-navy-900 hover:bg-navy-800 transition-all duration-200 transform hover:scale-105">
                Learn More About Us
              </button>
              
              <button className="inline-flex items-center px-6 py-3 border border-navy-900 text-base font-medium rounded-lg text-navy-900 hover:bg-navy-900 hover:text-white transition-all duration-200">
                Download Brochure
              </button>
            </div>
          </div>

          {/* Right Stats */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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