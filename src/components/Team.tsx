import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const Team = () => {
  const [ref, isVisible] = useScrollAnimation();

  const founders = [
    {
      name: 'JAVED MURTAZA',
      qualification: 'MBA (US), CPA (US), FCA (UK)',
      experience: '35+ Years',
      initials: 'JM',
      specialization: 'A professionally highly qualified former corporate executive with 35+ years of global experience in all facets of corporate operations, business modelling, financial planning & analysis, internal & external audits, international taxation, financial & managerial accounting, commercial operations and ERP implementation.'
    },
    {
      name: 'FAISAL HASNAIN',
      qualification: 'FCA (UK)',
      experience: '35+ Years',
      initials: 'FH',
      specialization: 'A senior finance and management professional with over 35 years\' experience in the field of management, accounting, finances, taxation and sports administration. He is a UK Chartered Accountant and has held senior positions in multinational organizations in the UK, Dubai and the USA.'
    }
  ];

  return (
    <section 
      id="team" 
      ref={ref}
      className={`py-20 bg-gradient-to-br from-gray-50 to-white transition-all duration-1000 ${
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${400 + index * 300}ms` : '0ms'
              }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 h-full">
                {/* Header with Initials */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy-900 to-navy-700 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-bold text-xl">
                      {founder.initials}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 leading-tight">
                      {founder.name}
                    </h3>
                  </div>
                </div>

                {/* Credentials Section */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <GraduationCap className="w-4 h-4 text-gold-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">Qualifications</h4>
                      <p className="text-gold-600 font-medium text-sm">
                        {founder.qualification}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Briefcase className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">Experience</h4>
                      <p className="text-blue-600 font-medium text-sm">
                        {founder.experience}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Specialization */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Award className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2">Expertise</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {founder.specialization}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;