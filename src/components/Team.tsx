import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Team = () => {
  const [ref, isVisible] = useScrollAnimation();

  const founders = [
    {
      name: 'JAVED MURTAZA',
      qualification: 'MBA (US), CPA (US), FCA (UK)',
      experience: '35+ Years',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
      specialization: 'A professionally highly qualified former corporate executive with 35+ years of global experience in all facets of corporate operations, business modelling, financial planning & analysis, internal & external audits, international taxation, financial & managerial accounting, commercial operations and ERP implementation.'
    },
    {
      name: 'FAISAL HASNAIN',
      qualification: 'FCA (UK)',
      experience: '35+ Years',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      specialization: 'A senior finance and management professional with over 35 years\' experience in the field of management, accounting, finances, taxation and sports administration. He is a UK Chartered Accountant and has held senior positions in multinational organizations in the UK, Dubai and the USA.'
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
                  className="w-48 h-48 rounded-full object-cover shadow-xl mx-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-navy-900/20 to-transparent"></div>
              </div>
              
              <h3 className="text-xl font-bold text-navy-900 mb-2">
                {founder.name}
              </h3>
              
              <p className="text-gold-600 font-semibold mb-2">
                {founder.qualification}
              </p>
              
              <p className="text-gray-600 mb-3">
                <span className="font-medium">Experience:</span> {founder.experience}
              </p>
              
              <p className="text-navy-700 text-sm leading-relaxed max-w-md mx-auto">
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