import { motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CONTACT_INFO } from "../constants/contactInfo";
import { WhatsAppLogo } from "./ui/WhatsAppFAB";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "top-4 px-4 sm:px-6 lg:px-8" : "top-0"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 ${
          scrolled
            ? "glass rounded-full px-6 shadow-xl border-white/40"
            : "bg-white/80 backdrop-blur-md border-b border-gray-100"
        }`}
      >
        {/* Scroll Progress Bar
        <div 
          className="absolute bottom-0 left-0 h-0.5 bg-mi-blue transition-all duration-150 "
          style={{ width: `${scrollProgress}%` }}
        /> */}

        <div
          className={` flex justify-between items-center transition-all duration-500 ${
            scrolled ? "h-16" : "mx-2 h-20"
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/logo-full.png"
              alt="Micore Technologies - Your Personal Tech Concierge"
              className="h-12 w-auto"
              fetchpriority="high"
            />
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
              href="https://wa.me/919500091500?text=Hi%20Micore!%20I'm%20on%20your%20website%20and%20looking%20for%20some%20instant%20tech%20help."
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
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
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
              href="https://wa.me/919500091500?text=Hi%20Micore!%20I'm%20on%20your%20website%20and%20looking%20for%20some%20instant%20tech%20help."
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
