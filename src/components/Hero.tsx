// src/components/Hero.tsx

import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

interface HeroProps {
  setShowModal: (pkg: { name: string; price: number }) => void;
}

export function Hero({ setShowModal }: HeroProps) {
  const handleBookNow = () => {
    setShowModal({ name: 'General Booking', price: 0 });
  };

  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/353849684.hd.mp4?s=1b4c4c50f6fb7929af51ad84f4dd5e2c6a4ec589&profile_id=175"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4 sm:px-6 lg:px-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            <span className="block">Premium Auto Detailing</span>
            <span className="block mt-2 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              For Exotic Cars
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Experience the ultimate in automotive care with our professional detailing services
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <HashLink
              smooth
              to="/#services"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-200"
            >
              Our Services
              <ChevronRight className="ml-2 h-5 w-5" />
            </HashLink>
            <button
              onClick={handleBookNow}
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-black transition-all duration-200"
            >
              Book Now
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="animate-bounce">
          <div className="w-1 h-16 rounded-full bg-gradient-to-b from-purple-500 to-blue-500" />
        </div>
      </motion.div>
    </div>
  );
}