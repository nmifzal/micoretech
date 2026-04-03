import React from 'react';
import { ShieldCheck, Globe, Share2, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
           <span className="text-2xl font-bold text-mi-navy mb-4 inline-block">Micore<span className="text-mi-blue">tech</span></span>
           <p className="text-mi-navy/40 text-sm font-medium">© 2026 Micoretech B2C Tech Support. All rights reserved.</p>
        </div>

        {/* Security Badge */}
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-mi-light/50 border border-gray-100">
           <div className="w-10 h-10 rounded-full bg-mi-blue/10 flex items-center justify-center text-mi-blue">
              <ShieldCheck size={20} />
           </div>
           <div className="text-left">
              <p className="text-mi-navy font-bold text-xs uppercase tracking-widest">End-to-End Secure</p>
              <p className="text-mi-navy/40 text-[10px] font-bold">Industry Standard Remote Support</p>
           </div>
        </div>

        {/* Social Links (Generic) */}
        <div className="flex items-center gap-6">
           {[Globe, Share2, Mail, Phone].map((Icon, id) => (
              <a key={id} href="#" className="text-mi-navy/40 hover:text-mi-blue transition-colors">
                 <Icon size={20} />
              </a>
           ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
