import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contactInfo';
import { WhatsAppLogo } from './ui/WhatsAppFAB';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-mi-navy">Micore<span className="text-mi-blue">tech</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-mi-navy/80 hover:text-mi-blue font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex items-center px-6 py-2.5 rounded-full border-2 border-mi-navy/10 text-mi-navy font-semibold hover:bg-mi-navy/5 transition-all"
            >
              <Phone size={18} className="mr-2" />
              Call Now
            </a>
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-2.5 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#25D366]/90 transition-all shadow-lg shadow-[#25D366]/20"
            >
              <WhatsAppLogo className="mr-2 w-5 h-5" />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-mi-navy p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white border-b border-gray-100"
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-3 rounded-lg text-base font-medium text-mi-navy hover:bg-mi-light"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col space-y-3">
            <a 
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex items-center justify-center w-full px-6 py-3 rounded-full border-2 border-mi-navy/10 text-mi-navy font-semibold"
            >
              <Phone size={18} className="mr-2" />
              Call Now
            </a>
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold"
            >
              <WhatsAppLogo className="mr-2 w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
