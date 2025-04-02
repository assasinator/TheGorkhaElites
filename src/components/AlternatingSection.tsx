import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AlternatingSectionProps {
  imagePosition: 'left' | 'right';
  imageSrc: string;
  imageAlt: string;
  title: string;
  titleExtra?: ReactNode;
  description: string;
  bgColor: string;
}

const AlternatingSection: React.FC<AlternatingSectionProps> = ({
  imagePosition,
  imageSrc,
  imageAlt,
  title,
  titleExtra,
  description,
  bgColor,
}) => {
  return (
    <section className={`w-full py-20 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`flex flex-col ${imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
        >
          <div className="w-full md:w-1/2 h-[400px] flex-shrink-0">
            <img 
              src={imageSrc} 
              alt={imageAlt} 
              className="w-full h-full object-cover rounded-lg shadow-md" 
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-serif mb-4">{title}</h2>
            {titleExtra}
            <p className="text-lg">{description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AlternatingSection;
