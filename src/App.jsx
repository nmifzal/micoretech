import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import PersonalSupport from './components/PersonalSupport';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-inter selection:bg-mi-blue/20 selection:text-mi-blue overflow-x-hidden">
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
    </div>
  );
}

export default App;
