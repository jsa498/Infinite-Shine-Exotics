// src/components/Services.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Star } from 'lucide-react';

interface ServicesProps {
  setShowModal: (pkg: { name: string; price: number }) => void;
}

interface Service {
  title: string;
  price: number;
  description: string;
  features: string[];
  highlight: boolean;
}

const services: Service[] = [
  {
    title: 'Delight Shine Wash',
    price: 80,
    description: 'Give your car a fast and budget-friendly clean to make it look good as new',
    features: [
      'Hand wash and dry the exterior',
      'Clean the wheels and tires',
      'Vacuum the interior',
      'Wipe down of dashboard, console, and door panels',
    ],
    highlight: false,
  },
  {
    title: 'Premium Shine Wash',
    price: 150,
    description: 'Give your car a luxurious clean that will leave it shining both inside and out',
    features: [
      'All Delight Shine features, plus:',
      'Carpet shampooing',
      'Thorough cleaning of interior surfaces',
      'Window cleaning',
      'Leather cleaning and conditioning',
      'Door jamb cleaning',
    ],
    highlight: false,
  },
  {
    title: 'Diamond Shine Wash',
    price: 350,
    description: 'Indulge in a detailing service that will give your car the shine of a diamond',
    features: [
      'All Premium Shine features, plus:',
      'Steam cleaning',
      'Air vent cleaning',
      'Bug and tar removal',
      'Undercarriage wash',
      'Headlight polishing',
      'Engine bay detailing',
      'Wax application',
    ],
    highlight: true,
  },
  {
    title: 'Infinite Shine Wash',
    price: 900,
    description: 'Immerse yourself in an exceptional detailing experience that goes beyond infinite',
    features: [
      'All Diamond Shine features, plus:',
      'Clay bar treatment',
      'Paint decontamination',
      'Stage I Paint correction',
      'Application of CERAMIC Sealant',
    ],
    highlight: false,
  },
];

export function Services({ setShowModal }: ServicesProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleBookNow = (service: Service) => {
    setShowModal({ name: service.title, price: service.price });
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from our range of premium detailing services, each designed to give your vehicle the care it deserves
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-2xl p-6 ${
                service.highlight
                  ? 'bg-gradient-to-br from-purple-900 to-blue-900 border border-purple-500'
                  : 'bg-gray-900'
              }`}
            >
              {service.highlight && (
                <div className="flex justify-center mb-4">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <Star className="w-4 h-4 mr-1" /> Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
              <div className="text-3xl font-bold mb-4 gradient-text">${service.price}</div>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleBookNow(service)}
                className="w-full mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:from-purple-700 hover:to-blue-600 transition-all duration-200"
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}