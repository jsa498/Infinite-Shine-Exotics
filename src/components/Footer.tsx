// src/components/Footer.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Infinite Shine Exotics</h3>
            <p className="text-gray-400 mb-4">
              Premium auto detailing services for exotic and luxury vehicles.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Infinite-Shine-Exotics/61556925434582/"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/infiniteshineexotics/"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
              <a
                href="https://www.youtube.com/channel/UCze-WJhlqJVP8O8_Q3WHe9w"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-purple-500" />
                <a href="tel:+16047258010" className="text-gray-400 hover:text-purple-500 transition-colors">
                  (604) 725-8010
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-purple-500" />
                <a href="mailto:Ls14.jaskaran@gmail.com" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Ls14.jaskaran@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-purple-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  1806-18505 Laurensen Place,<br />Surrey BC V4N 6R7
                </span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-purple-500" />
                <span className="text-gray-400">24/7 Service Available</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="text-gray-400">
              <p className="mb-2">Available 24/7</p>
              <p>Book your appointment anytime</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Infinite Shine Exotics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}