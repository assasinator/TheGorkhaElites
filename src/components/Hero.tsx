import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="w-full h-screen relative">
      {/* Full-width background with overlay */}
      <div className="absolute inset-0">
        <img 
          src="/chef-image.jpg" 
          alt="Chef with pizza" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Content with proper spacing */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">The Gurkha Elites</h1>
          <p className="text-xl font-bold text-white mb-2">
            Pop-up by <span className="text-royal-gold">"THE GURKHA ELITES"</span>
          </p>
          <p className="text-xl text-white mb-6">The Flavors of Kathmandu</p>
          <p className="text-lg text-white mb-8">
            Experience the perfect fusion of Nepali, Italian, and Modern Australian cuisine in an elegant setting. Our chefs blend traditional techniques with contemporary flair to create unforgettable culinary experiences.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#menu"
            className="inline-block bg-royal-gold text-royal-dark px-8 py-3 text-lg font-bold hover:bg-opacity-90 transition-all"
          >
            View Our Menu
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
