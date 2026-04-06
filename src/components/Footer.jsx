import { ShieldCheck, Globe, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contactInfo';
import { WhatsAppLogo } from './ui/WhatsAppFAB';

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
              <p className="text-mi-navy font-bold text-xs uppercase tracking-widest">100% Privacy Protected</p>
              <p className="text-mi-navy/40 text-[10px] font-bold">Industry Standard Remote Support</p>
           </div>
        </div>

        {/* Social Links (Generic) */}
        <div className="flex items-center gap-6">
          <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-mi-navy/40 hover:text-[#25D366] transition-colors">
            <WhatsAppLogo className="w-5 h-5" />
          </a>
          <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-mi-navy/40 hover:text-mi-blue transition-colors">
            <Phone size={20} />
          </a>
          <a href={`mailto:${CONTACT_INFO.email}`} className="text-mi-navy/40 hover:text-mi-blue transition-colors">
            <Mail size={20} />
          </a>
          <a href="#" className="text-mi-navy/40 hover:text-mi-blue transition-colors">
            <Globe size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
