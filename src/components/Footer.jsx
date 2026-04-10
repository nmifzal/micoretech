import { ShieldCheck, Globe, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contactInfo';
import { WhatsAppLogo } from './ui/WhatsAppFAB';
import { openLegalModal } from '../stores/legalStore';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
           <img src="/logo-full.png" alt="Micore Technologies - Remote IT Support Services" className="h-10 w-auto" />
           <p className="text-mi-navy/40 text-[10px] font-bold uppercase tracking-widest">Reliable IT. Real Support.</p>
           
           <div className="flex items-center gap-4 text-xs font-bold text-mi-blue/40 mt-1">
              <button 
                onClick={() => openLegalModal('privacy')}
                className="hover:text-mi-blue transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => openLegalModal('terms')}
                className="hover:text-mi-blue transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
           </div>
           
           <p className="text-mi-navy/40 text-[10px] font-medium mt-2">© 2026 Micore Technologies. All rights reserved.</p>
        </div>

        {/* Security Badge */}
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-mi-light/50 border border-gray-100">
           <div className="w-10 h-10 rounded-full bg-mi-blue/10 flex items-center justify-center text-mi-blue">
              <ShieldCheck size={20} />
           </div>
           <div className="text-left">
              <p className="text-mi-navy font-bold text-xs uppercase tracking-widest">100% Privacy Protected</p>
              <p className="text-mi-navy/40 text-[10px] font-bold">Industry Standard Remote Support</p>
           </div>
        </div>

        {/* Social Links (Generic) */}
        <div className="flex items-center gap-6">
          <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-mi-navy/40 hover:text-[#25D366] transition-colors" aria-label="Contact us on WhatsApp">
            <WhatsAppLogo className="w-5 h-5" />
          </a>
          <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-mi-navy/40 hover:text-mi-blue transition-colors" aria-label="Call Micore Technologies">
            <Phone size={20} />
          </a>
          <a href={`mailto:${CONTACT_INFO.email}`} className="text-mi-navy/40 hover:text-mi-blue transition-colors" aria-label="Email our support team">
            <Mail size={20} />
          </a>
          <a href="/" className="text-mi-navy/40 hover:text-mi-blue transition-colors" aria-label="Visit Micore Technologies home page">
            <Globe size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
