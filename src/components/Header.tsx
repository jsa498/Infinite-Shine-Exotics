// src/components/Header.tsx

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

interface HeaderProps {
  setShowModal: (pkg: { name: string; price: number }) => void;
}

export function Header({ setShowModal }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookNow = () => {
    // For general booking without specific package
    setShowModal({ name: 'General Booking', price: 0 });
    setIsMenuOpen(false);
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <RouterLink
            to="/"
            onClick={handleHomeClick}
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
          >
            Infinite Shine Exotics
          </RouterLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <RouterLink
              to="/"
              onClick={handleHomeClick}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </RouterLink>
            <HashLink
              smooth
              to="/#services"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Services
            </HashLink>
            <RouterLink
              to="/contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </RouterLink>
            {/* Direct Call Link */}
            <a
              href="tel:+16047258010"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              <Phone size={18} />
              <span>(604) 725-8010</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black bg-opacity-95 rounded-lg shadow-lg">
              <a
                href="/"
                onClick={handleHomeClick}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-purple-700 hover:text-white transition-colors"
              >
                Home
              </a>
              <HashLink
                smooth
                to="/#services"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-purple-700 hover:text-white transition-colors"
              >
                Services
              </HashLink>
              <RouterLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-purple-700 hover:text-white transition-colors"
              >
                Contact
              </RouterLink>
              {/* Direct Call Link in Mobile Menu */}
              <a
                href="tel:+16047258010"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-purple-700 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>(604) 725-8010</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}