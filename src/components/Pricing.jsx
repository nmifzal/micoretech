import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Single Fix',
      price: '₹499',
      features: [
        'Single device troubleshooting',
        '30-min premium remote session',
        'Email resolution report',
        'Basic system check-up'
      ],
      highlight: false,
    },
    {
      name: 'Home Care',
      price: '₹999',
      features: [
        'Full System Optimization',
        'Virus & Malware Removal',
        '60-min priority assistance',
        'Home network security check',
        '30-day follow-up support'
      ],
      highlight: true,
    },
    {
      name: 'Concierge',
      price: '₹1,499',
      features: [
        'Multi-device ecosystem setup',
        'M365 & Cloud Sync Support',
        '2-hour deep-dive support',
        'Security & Privacy hardening',
        'Direct 24/7 WhatsApp access'
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-mi-light/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-mi-blue/10 text-mi-blue font-bold text-xs uppercase tracking-widest mb-6">
            100% Satisfaction Guaranteed
          </div>
          <h2 className="text-mi-navy font-bold text-4xl md:text-5xl mb-4 tracking-tight">Simple, Honest <span className="text-mi-blue">Pricing</span></h2>
          <p className="text-mi-navy/60 font-medium text-lg">Transparent pricing with no hidden costs. Expert help at a fair price.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-3xl relative transition-all duration-500 ${
                plan.highlight
                  ? 'bg-mi-navy text-white shadow-2xl shadow-mi-navy/20 scale-105 z-10 border border-white/10'
                  : 'glass border-white/40 shadow-sm hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 -translate-y-1/2 -translate-x-1/2 bg-mi-yellow text-mi-navy text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Most Popular
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-mi-navy'}`}>{plan.name}</h3>
              <div className="mb-8 items-baseline flex">
                <span className={`text-5xl font-bold ${plan.highlight ? 'text-white' : 'text-mi-navy'}`}>{plan.price}</span>
                <span className={`ml-2 text-sm font-medium ${plan.highlight ? 'text-white/60' : 'text-mi-navy/50'}`}>/ session</span>
              </div>

              <div className="space-y-4 mb-10 min-h-[200px]">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center">
                    <Check size={18} className={`mr-3 ${plan.highlight ? 'text-mi-yellow' : 'text-mi-blue'}`} />
                    <span className={`font-medium ${plan.highlight ? 'text-white/80' : 'text-mi-navy/70'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-full font-bold transition-all flex items-center justify-center group ${
                  plan.highlight
                    ? 'bg-mi-yellow text-mi-navy hover:bg-mi-yellow/90'
                    : 'bg-mi-navy text-white hover:bg-mi-navy/95'
                }`}
              >
                Get Started
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
