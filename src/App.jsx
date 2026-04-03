import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import PersonalSupport from './components/PersonalSupport';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { WhatsAppFAB } from './components/ui/WhatsAppFAB';
import Lenis from 'lenis';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    document.documentElement.classList.add('lenis');
    document.documentElement.classList.add('lenis-smooth');

    let request;
    function raf(time) {
      lenis.raf(time);
      request = requestAnimationFrame(raf);
    }

    request = requestAnimationFrame(raf);

    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash && target.hash.startsWith('#')) {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element, {
            offset: -80,
            duration: 1.5,
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(request);
      document.removeEventListener('click', handleAnchorClick);
      document.documentElement.classList.remove('lenis');
      document.documentElement.classList.remove('lenis-smooth');
    };
  }, []);

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
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

export default App;
