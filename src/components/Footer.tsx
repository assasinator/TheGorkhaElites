import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
  <footer className="w-full bg-royal-dark text-white py-8">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <div className="flex flex-col justify-center items-center mb-4">
        <img
          src={`${import.meta.env.BASE_URL}logo.svg`}
          alt="Logo"
          className="w-40 h-40 mb-2 filter invert"
        />
        <h3 className="text-xl font-serif">The Gurkha Elites</h3>
      </div>
      <p className="mb-2">123 Royal Street, Gourmet City</p>
      <p className="mb-4">Phone: (123) 456-7890</p>
      <div className="flex justify-center space-x-2 mb-6">
      
      <a href="#" className="text-white hover:text-royal-gold transition-colors">
        <FaFacebookF className="w-6 h-6" />
      </a>
      <a href="https://www.instagram.com/thegurkhaelites/?utm_source=qr#" className="text-white hover:text-royal-gold transition-colors">
        <FaInstagram className="w-6 h-6" />
      </a>
    </div>
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} The Gurkha Elites. All rights reserved.
      </p>
    </div>
  </footer>
  );
};

export default Footer;
