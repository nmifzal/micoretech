import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contactInfo';
import { WhatsAppLogo } from './ui/WhatsAppFAB';
import DiagnosticWizard from './ui/DiagnosticWizard';

const Contact = () => {
  return (
    <section id="contact" className="md:h-screen py-24 bg-mi-navy text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-mi-yellow font-bold uppercase text-sm mb-4 tracking-widest">Need Immediate Help?</h2>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Fix Your <span className="text-mi-blue">Tech Headache</span> Today</h2>
            <p className="text-white/60 text-lg mb-12 font-medium">Ready to get your devices back in shape? Contact our friendly experts for immediate remote assistance.</p>
            
            <div className="space-y-8">
              {[
                { title: 'Call Us Now', icon: <Phone size={24} />, content: CONTACT_INFO.phone, link: `tel:${CONTACT_INFO.phoneRaw}` },
                { title: 'WhatsApp Now', icon: <WhatsAppLogo className="w-6 h-6" />, content: CONTACT_INFO.phone, link: CONTACT_INFO.whatsappLink, isWhatsApp: true },
                { title: 'Email Support', icon: <Mail size={24} />, content: CONTACT_INFO.email, link: `mailto:${CONTACT_INFO.email}` },
              ].map((item, id) => (
                <a key={id} href={item.link} className="flex items-center gap-6 group cursor-pointer" target={item.link.startsWith('http') ? "_blank" : undefined} rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${item.isWhatsApp ? 'bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white' : 'bg-white/5 text-mi-blue group-hover:bg-mi-blue group-hover:text-white'}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">{item.title}</p>
                    <p className="text-xl font-bold">{item.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Interactive Assistant */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <DiagnosticWizard />
          </motion.div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-mi-blue/10 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-mi-yellow/5 rounded-full blur-[100px] -z-0"></div>
    </section>
  );
};

export default Contact;
