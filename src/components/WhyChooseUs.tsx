// src/components/WhyChooseUs.tsx

import React from 'react';
import { Shield, Award, Clock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'We use only the finest products and techniques to ensure your vehicle receives the best care possible.',
  },
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Our certified professionals have years of experience working with luxury and exotic vehicles.',
  },
  {
    icon: Clock,
    title: '24/7 Service',
    description: 'Available around the clock to accommodate your schedule and emergency detailing needs.',
  },
  {
    icon: Sparkles,
    title: 'Attention to Detail',
    description: 'Every corner of your vehicle receives meticulous attention for a perfect finish.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Why Choose Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the difference with our premium auto detailing services
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}