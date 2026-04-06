import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PersonalSupport from "./components/PersonalSupport";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import { WhatsAppFAB } from "./components/ui/WhatsAppFAB";

function App() {
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
