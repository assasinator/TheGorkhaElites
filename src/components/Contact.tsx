import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full py-20 bg-royal-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-serif text-center mb-12">Contact Us</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif mb-6">Find Us</h3>
              
              <div className="mb-8">
                <p className="mb-2">123 Royal Street</p>
                <p className="mb-2">Gourmet City, GC 12345</p>
                <p className="mb-2">Phone: (123) 456-7890</p>
                <p className="mb-2">Email: info@theroyalelite.com</p>
              </div>
              
              <div>
                <h4 className="text-xl font-serif mb-4">Hours</h4>
                <p className="mb-2">Sunday - Thursday: 11:30am - 11:00pm</p>
                <p className="mb-2">Friday - Saturday: 11:30am - 12:00am</p>
                <p className="italic mt-4">Happy Hour: Daily 4:00pm - 6:00pm</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif mb-6">Message Us</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-sm"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-sm"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-royal-gold text-royal-dark px-6 py-3 font-bold rounded-sm hover:bg-opacity-90 transition-all"
                >
                  Send Message
                </motion.button>
              </form>
              
              {/* <div className="mt-8">
                <h4 className="text-xl font-serif mb-4">Join Our Mailing List</h4>
                <p className="mb-4">Sign up for our newsletter and learn about special events and promotions!</p>
                <div className="flex">
                  <input
                    type="email"
                    className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-sm rounded-r-none"
                    placeholder="Your Email"
                  />
                  <button className="bg-royal-gold text-royal-dark px-4 py-2 font-bold rounded-sm rounded-l-none hover:bg-opacity-90 transition-all">
                    Subscribe
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
