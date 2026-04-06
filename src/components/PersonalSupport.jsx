import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Settings, ShieldCheck, HeartPulse } from 'lucide-react';

const PersonalSupport = () => {
  return (
    <section id="how-it-works" className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-square bg-mi-light/50 rounded-3xl overflow-hidden shadow-2xl relative border border-gray-100 group">
              {/* Custom Generated Illustration */}
              <img 
                src="/tech-expert.png" 
                alt="Expert Technical Support" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mi-navy/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                 <h3 className="text-2xl font-bold mb-2">Remote Support In Action</h3>
                 <p className="text-white/80 text-sm font-medium leading-relaxed">Safe, secure, and completely transparent remote desktop assistance.</p>
              </div>
            </div>
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-mi-green/10 flex items-center justify-center text-mi-green">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-mi-navy font-bold text-sm">Secure Connection</p>
                <p className="text-mi-navy/40 text-xs font-semibold">100% Privacy Protected</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-mi-blue font-bold text-sm tracking-widest uppercase mb-4">The Solution</h2>
            <h2 className="text-4xl md:text-5xl font-bold text-mi-navy mb-8 leading-tight">One Call. Total Resolution <span className="text-mi-blue">In Minutes.</span></h2>
            <p className="text-mi-navy/60 text-lg font-medium leading-relaxed mb-8">
              Whether it's a slow PC, WiFi dead zones, or software glitches—one call to Micore fixed it all. No long waits, no complex jargon. Just expert help when you need it most.
            </p>

            <div className="space-y-6">
              {[
                { title: 'Safe & Secure', icon: <ShieldCheck size={20} className="text-mi-blue" />, desc: 'Fully private support sessions requiring your permission at every step.' },
                { title: 'Friendly Experts', icon: <HeartPulse size={20} className="text-mi-blue" />, desc: 'Human beings who speak plain English, not technical jargon.' },
                { title: 'Instant Help', icon: <Settings size={20} className="text-mi-blue" />, desc: 'No appointments needed for emergency troubleshooting.' },
              ].map((item, id) => (
                <div key={id} className="flex items-start gap-4 p-4 rounded-xl hover:bg-mi-light transition-colors">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-mi-navy font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-mi-navy/60 font-medium text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSupport;
