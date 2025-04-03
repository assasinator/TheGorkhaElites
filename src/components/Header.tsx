import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white bg-opacity-95 shadow-md py-3' : 'bg-transparent py-4'
        }`}
      >
      <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="icon" className="w-10 h-10" /> {/* Icon */}
        <div className="text-2xl font-serif font-bold">
          <a href="#" className={isScrolled ? 'text-royal-dark' : 'text-white'}>
            The Gurkha Elites
          </a>
        </div>
      </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['home', 'menu', 'about', 'contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item}`}
                    className={`${isScrolled ? 'text-royal-dark' : 'text-white'} hover:text-royal-gold transition-colors capitalize`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <button 
            className={`md:hidden text-2xl ${isScrolled ? 'text-royal-dark' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '×' : '☰'}
          </button>
        </div>
      </header>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-90 z-40 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button 
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            ×
          </button>
          <ul className="text-center space-y-6">
            {['home', 'menu', 'about', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="text-white text-2xl hover:text-royal-gold transition-colors capitalize block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Header;
