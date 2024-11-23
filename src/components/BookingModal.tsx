// src/components/BookingModal.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface BookingModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  packageName: string;
  packagePrice: number;
}

export function BookingModal({ showModal, setShowModal, packageName, packagePrice }: BookingModalProps) {
  const handleClose = () => setShowModal(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = 'service_rek86mh'; // Replace with your actual EmailJS Service ID
    const templateID = 'template_xy4fazz'; // New EmailJS Template ID for Book Now
    const userID = 'fy7dreJoC_NUuJ6G3'; // Replace with your actual EmailJS User ID/Public Key

    emailjs.sendForm(serviceID, templateID, e.currentTarget, userID)
      .then((result) => {
          console.log(result.text);
          alert('Your booking has been sent successfully!');
          setShowModal(false);
      }, (error) => {
          console.log(error.text);
          alert('An error occurred while sending your booking. Please try again.');
      });

    e.currentTarget.reset();
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        className="bg-gray-800 rounded-lg shadow-lg w-full max-w-md p-6 relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-white">Book Your Service</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 bg-gray-700 text-white rounded"
          />
          <input
            type="tel"
            name="user_phone"
            placeholder="Your Phone Number"
            required
            className="w-full px-4 py-2 bg-gray-700 text-white rounded"
          />
          <input
            type="text"
            name="user_carInfo"
            placeholder="Your Car Information"
            required
            className="w-full px-4 py-2 bg-gray-700 text-white rounded"
          />
          {/* Package Details as Hidden Fields */}
          <input
            type="hidden"
            name="package_name"
            value={packageName}
          />
          <input
            type="hidden"
            name="package_price"
            value={packagePrice}
          />
          {/* Date and Time Selection */}
          <input
            type="date"
            name="booking_date"
            required
            className="w-full px-4 py-2 bg-gray-700 text-white rounded"
          />
          <input
            type="time"
            name="booking_time"
            required
            className="w-full px-4 py-2 bg-gray-700 text-white rounded"
          />
          <textarea
            name="user_message"
            placeholder="Additional Requests or Information"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded"
          ></textarea>
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 rounded-full hover:from-purple-700 hover:to-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
}