import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-serif text-center mb-12">Who We Are</h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 h-[400px] flex-shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}restaurant-interior.jpg`}
                alt="The Gurkha Elite Interior"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="w-full md:w-1/2">
              <p className="text-lg mb-6">
                <span className="font-bold">The Gurkha Elites</span> began as a passion project between three chefs with a dream to bring authentic Nepali flavors to the heart of the city, combined with Italian and Australian influences.
              </p>
              <p className="text-lg mb-6">
                Our pop-up concept by <span className="font-bold">THE GURKHA ELITES</span> features traditional recipes from Kathmandu, reimagined with modern techniques and local ingredients. We source ethically and sustainably, working closely with local farmers and suppliers.
              </p>
              <p className="text-lg">
                From our native Mo:mo: Cha dumplings to our fusion Nepali-inspired pizzas, every dish tells a story of cultural heritage and culinary innovation. Join us for a dining experience that bridges continents and traditions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
