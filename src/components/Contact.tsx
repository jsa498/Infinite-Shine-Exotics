// src/components/Contact.tsx

import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

interface ContactProps {
  setShowModal: (value: boolean) => void;
}

export function Contact({ setShowModal }: ContactProps) {
  const handleCallNow = () => {
    window.location.href = 'tel:+16047258010';
  };

  const handleMessageNow = () => {
    window.location.href = 'sms:+16047258010';
  };

  const handleGetQuote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Replace the following with your actual EmailJS service details
    const serviceID = 'service_rek86mh';
    const templateID = 'template_ixgti93';
    const userID = 'fy7dreJoC_NUuJ6G3';

    emailjs.sendForm(serviceID, templateID, e.currentTarget, userID)
      .then((result) => {
          console.log(result.text);
          alert('Your quote has been sent successfully!');
          setShowModal(false);
      }, (error) => {
          console.log(error.text);
          alert('An error occurred while sending your quote. Please try again.');
      });

    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Contact Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get in touch with us to book your detailing service or request a quote.
          </p>
        </motion.div>

        {/* Contact Information and Actions */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          {/* Contact Info */}
          <div className="md:w-1/2">
            <div className="mb-6 flex items-center">
              <Phone className="w-6 h-6 text-purple-500 mr-2" />
              <span className="text-lg">Phone: (604) 725-8010</span>
            </div>
            <div className="mb-6 flex items-center">
              <Mail className="w-6 h-6 text-purple-500 mr-2" />
              <span className="text-lg">Email: Ls14.jaskaran@gmail.com</span>
            </div>
            <div className="mb-6 flex items-center">
              <MapPin className="w-6 h-6 text-purple-500 mr-2" />
              <span className="text-lg">Address: 1806-18505 Laurensen Place, Surrey BC V4N 6R7</span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleCallNow}
                className="flex items-center bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 rounded-full hover:from-purple-700 hover:to-blue-600 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </button>
              <button
                onClick={handleMessageNow}
                className="flex items-center bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 rounded-full hover:from-purple-700 hover:to-blue-600 transition-colors"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Message Now
              </button>
            </div>
          </div>

          {/* Get a Quote Form */}
          <div className="md:w-1/2">
            <form onSubmit={handleGetQuote} className="space-y-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="Your Phone Number"
                required
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="text"
                name="user_carInfo"
                placeholder="Your Car Information"
                required
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <select
                name="user_detailType"
                required
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                <option value="">Select Detail Type</option>
                <option value="exterior">Exterior Detailing</option>
                <option value="interior">Interior Detailing</option>
                <option value="full">Full Detailing</option>
              </select>
              <textarea
                name="user_message"
                placeholder="Additional Requests or Information"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              ></textarea>
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 rounded-full hover:from-purple-700 hover:to-blue-600 transition-colors"
              >
                Get a Quote
              </button>
            </form>
          </div>
        </div>

        {/* Map Integration */}
        <motion.div
          className="w-full h-96"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.809850308416!2d-122.71131462393646!3d49.12824638167848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d1671ecb0e25%3A0x60511939bfa076df!2s18505%20Laurensen%20Pl%20%231806%2C%20Surrey%2C%20BC%20V4N%206R7!5e0!3m2!1sen!2sca!4v1732328472450!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Infinite Shine Exotics Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}