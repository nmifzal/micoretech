import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contactInfo';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('one-time');

  const pricingData = {
    'one-time': [
      { name: 'Basic', price: '₹499', coverage: 'Single issue', features: ['Remote support', 'Same-day resolution', 'Basic diagnosis'], highlight: false },
      { name: 'Standard', price: '₹999', coverage: 'Up to 2 issues', features: ['Remote support', 'Same-day resolution', 'Full optimization'], highlight: true },
      { name: 'Advanced', price: '₹1,499', coverage: 'Multiple issues', features: ['Remote support', 'Same-day resolution', 'Security audit'], highlight: false },
    ],
    'monthly': [
      { name: 'Standard', price: '₹1,499', period: '/mo', coverage: 'single device', features: ['Unlimited support', 'Priority assistance', 'WhatsApp access'], highlight: true },
      { name: 'Advanced', price: '₹2,499', period: '/mo', coverage: 'for 3 devices', features: ['Unlimited support', 'Priority assistance', 'Multi-device'], highlight: false },
    ],
    'annual': [
      { name: 'Individual', price: '₹4,999', period: '/year', coverage: 'single device', features: ['Unlimited single device support', 'Annual tune-up', 'Privacy audit'], highlight: false },
      { name: 'Family', price: '₹9,999', period: '/year', coverage: '3 Devices Coverage', features: ['Support for 3 devices', 'Full family security', 'Priority weekend help'], highlight: true },
    ]
  };

  const tabs = [
    { id: 'one-time', label: 'One-Time Support' },
    { id: 'monthly', label: 'Monthly Plans' },
    { id: 'annual', label: 'Annual Plans' },
  ];

  const getWhatsAppUrl = (plan) => {
    const phoneNumber = CONTACT_INFO.phoneRaw.replace('+', '');
    let message = `Hi Micore! I'm interested in the `;
    
    if (activeTab === 'one-time') {
      message += `One-Time ${plan.name} Fix (${plan.price}).`;
    } else if (activeTab === 'monthly') {
      message += `Monthly ${plan.name} Plan (${plan.price}/mo).`;
    } else {
      message += `Annual ${plan.name} Plan (${plan.price}/year).`;
    }
    
    message += ` Can you help me get started?`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="pricing" className="py-24 bg-mi-light/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-mi-blue/10 text-mi-blue font-bold text-xs uppercase tracking-widest mb-6">
            Flexible Support Models
          </div>
          <h2 className="text-mi-navy font-bold text-4xl md:text-5xl mb-6 tracking-tight">Simple, Honest <span className="text-mi-blue">Pricing</span></h2>
          
          {/* Tab Toggle */}
          <div className="flex justify-center mt-8">
            <div 
              className="bg-white/50 backdrop-blur-md p-1.5 rounded-full border border-mi-navy/5 shadow-inner flex gap-1"
              role="tablist"
              aria-label="Pricing billing cycle"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all relative ${
                    activeTab === tab.id ? 'text-white' : 'text-mi-navy/60 hover:text-mi-navy'
                  }`}
                  aria-label={`View ${tab.label}`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="active-tab"
                      className="absolute inset-0 bg-mi-navy rounded-full"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          layout
          className={`grid gap-8 ${
            pricingData[activeTab].length === 2 
              ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' 
              : 'grid-cols-1 md:grid-cols-3'
          }`}
        >
          <AnimatePresence mode="wait">
            {pricingData[activeTab].map((plan, index) => (
              <motion.div
                key={`${activeTab}-${plan.name}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`p-10 rounded-3xl relative transition-all duration-500 flex flex-col h-full ${
                  plan.highlight
                    ? 'bg-mi-navy text-white shadow-2xl scale-105 z-10 border border-white/10'
                    : 'glass border-white/40 shadow-sm hover:shadow-xl'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-mi-yellow text-mi-navy text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-lg flex items-center gap-1">
                    <Sparkles size={12} /> Recommended
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-mi-navy'}`}>{plan.name}</h3>
                  <div className="items-baseline flex mb-2">
                    <span className={`text-5xl font-black ${plan.highlight ? 'text-white' : 'text-mi-navy'}`}>{plan.price}</span>
                    <span className={`ml-2 text-sm font-bold ${plan.highlight ? 'text-white/50' : 'text-mi-navy/40'}`}>{plan.period || ''}</span>
                  </div>
                  <p className={`text-sm font-bold uppercase tracking-widest ${plan.highlight ? 'text-mi-yellow' : 'text-mi-blue'}`}>
                    {activeTab === 'one-time' ? `Coverage: ${plan.coverage}` : plan.coverage}
                  </p>
                </div>

                <div className="space-y-4 mb-10 grow">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                        plan.highlight ? 'bg-mi-yellow/20 text-mi-yellow' : 'bg-mi-blue/10 text-mi-blue'
                      }`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className={`font-semibold text-sm ${plan.highlight ? 'text-white/80' : 'text-mi-navy/70'}`}>{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={getWhatsAppUrl(plan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center group ${
                    plan.highlight
                      ? 'bg-mi-yellow text-mi-navy hover:bg-mi-yellow/90 shadow-xl shadow-mi-yellow/20'
                      : 'bg-mi-navy text-white hover:bg-mi-navy/95'
                  }`}
                >
                  Get Started
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Global Features Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 bg-white/40 backdrop-blur-sm border border-white/40 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        >
          <div className="flex items-center gap-3 text-mi-navy/60 font-bold uppercase tracking-widest text-xs">
            <ShieldCheck size={20} className="text-mi-blue" /> Remote Support Included
          </div>
          <div className="flex items-center gap-3 text-mi-navy/60 font-bold uppercase tracking-widest text-xs">
            <Sparkles size={20} className="text-mi-blue" /> Same-Day Resolution
          </div>
          {activeTab === 'monthly' && (
            <div className="flex items-center gap-3 text-mi-navy/60 font-bold uppercase tracking-widest text-xs">
              <Sparkles size={20} className="text-mi-blue" /> Priority Assistance
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
