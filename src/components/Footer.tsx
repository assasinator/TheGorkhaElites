import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-royal-dark text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-xl font-serif mb-4">The Royal Elite</h3>
        <p className="mb-2">123 Royal Street, Gourmet City</p>
        <p className="mb-4">Phone: (123) 456-7890</p>
        <div className="flex justify-center space-x-6 mb-6">
          {/* Social Media Icons - replace with actual icons */}
          <a href="#" className="text-white hover:text-royal-gold transition-colors">FB</a>
          <a href="#" className="text-white hover:text-royal-gold transition-colors">IG</a>
          <a href="#" className="text-white hover:text-royal-gold transition-colors">TW</a>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} The Royal Elite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
