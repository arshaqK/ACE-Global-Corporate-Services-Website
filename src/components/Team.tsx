import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Team = () => {
  const [ref, isVisible] = useScrollAnimation();

  const founders = [
    {
      name: 'Sarah Johnson',
      qualification: 'CPA, MBA Finance',
      experience: '15+ Years',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
      specialization: 'Corporate Finance & Strategy'
    },
    {
      name: 'Michael Chen',
      qualification: 'CFA, MS Accounting',
      experience: '18+ Years',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      specialization: 'Tax Strategy & Compliance'
    }
  ];

  return (
    <section 
      id="team" 
      ref={ref}
      className={`py-20 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced founders bring decades of expertise in finance, 
            accounting, and strategic consulting to serve your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className={`text-center group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${400 + index * 300}ms` : '0ms'
              }}
            >
              <div className="relative mb-6 inline-block">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-64 h-64 rounded-full object-cover shadow-xl mx-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-navy-900/20 to-transparent"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-navy-900 mb-2">
                {founder.name}
              </h3>
              
              <p className="text-gold-600 font-semibold mb-2">
                {founder.qualification}
              </p>
              
              <p className="text-gray-600 mb-3">
                <span className="font-medium">Experience:</span> {founder.experience}
              </p>
              
              <p className="text-navy-700 font-medium">
                {founder.specialization}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;