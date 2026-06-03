import { useState } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PersonalSupport from "./components/PersonalSupport";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

import { WhatsAppFAB } from "./components/ui/WhatsAppFAB";
import LegalModal from "./components/ui/LegalModal";

function App() {
  const [legalModal, setLegalModal] = useState({ isOpen: false, type: 'privacy' });

  const openLegalModal = (type) => {
    setLegalModal({ isOpen: true, type });
  };

  const closeLegalModal = () => {
    setLegalModal({ ...legalModal, isOpen: false });
  };

  return (
    <div className="min-h-screen bg-white font-inter selection:bg-mi-blue/20 selection:text-mi-blue overflow-x-hidden grainy-overlay">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <PersonalSupport />
        <Testimonials />
        <Contact />
      </main>
      <Footer openModal={openLegalModal} />
      <WhatsAppFAB />

      
      <LegalModal 
        isOpen={legalModal.isOpen} 
        type={legalModal.type} 
        onClose={closeLegalModal} 
      />
    </div>
  );
}

export default App;
