import React from 'react';
import { Building2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Building2 className="h-6 w-6" />
            <span className="text-lg font-bold">FinanceCore</span>
          </div>
          
          <p className="text-gray-300 text-sm">
            © 2025 FinanceCore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;