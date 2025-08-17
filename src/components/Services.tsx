import React from 'react';
import { Building, DollarSign, TrendingUp, BarChart3, FileText, PieChart, Banknote, Shield, Users, Calculator, LineChart, ClipboardList } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const [ref, isVisible] = useScrollAnimation();

  const services = [
    {
      icon: Building,
      title: 'Corporate Governance',
      description: 'Comprehensive governance frameworks to ensure regulatory compliance and best practices.'
    },
    {
      icon: DollarSign,
      title: 'Financial Management',
      description: 'Strategic financial oversight and management solutions for sustainable growth.'
    },
    {
      icon: TrendingUp,
      title: 'Budgeting & Forecasting',
      description: 'Accurate budget planning and financial forecasting for informed decision-making.'
    },
    {
      icon: BarChart3,
      title: 'Financial Planning & Analysis',
      description: 'In-depth financial analysis and strategic planning to optimize performance.'
    },
    {
      icon: FileText,
      title: 'Bookkeeping and Invoicing',
      description: 'Accurate record-keeping and efficient invoicing systems for your business.'
    },
    {
      icon: PieChart,
      title: 'Management Accounts',
      description: 'Detailed management accounts preparation for better business insights.'
    },
    {
      icon: Banknote,
      title: 'Cash Flow Forecasts',
      description: 'Comprehensive cash flow analysis and forecasting for liquidity management.'
    },
    {
      icon: Shield,
      title: 'Internal Control Assessment',
      description: 'Risk assessment and internal control evaluation for operational security.'
    },
    {
      icon: Users,
      title: 'Payroll Processing',
      description: 'Efficient payroll management and processing services for your workforce.'
    },
    {
      icon: Calculator,
      title: 'Personal & Corporate Taxation',
      description: 'Expert tax planning and compliance for individuals and corporations.'
    },
    {
      icon: LineChart,
      title: 'Business Modelling',
      description: 'Strategic business models and financial projections for growth planning.'
    },
    {
      icon: ClipboardList,
      title: 'Reports and Recommendations',
      description: 'Detailed financial reports and strategic recommendations for improvement.'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-700 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${400 + index * 100}ms` : '0ms'
              }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gold-100 rounded-full mb-4">
                <service.icon className="w-7 h-7 text-gold-600" />
              </div>
              
              <h3 className="text-lg font-semibold text-navy-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed">
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