import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, ShieldCheck, Wifi, Cloud, Smartphone, HelpCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Windows Support',
      description: 'Slow PC? Random crashes? We optimize your Windows OS for peak performance.',
      icon: <Monitor className="text-mi-blue" size={32} />,
    },
    {
      title: 'Microsoft 365',
      description: 'Setup and troubleshooting for Word, Excel, Outlook, and OneDrive sync.',
      icon: <Cloud className="text-mi-blue" size={32} />,
    },
    {
      title: 'Wi-Fi & Internet',
      description: 'Eliminate dead zones and slow speeds. We optimize your home network setup.',
      icon: <Wifi className="text-mi-blue" size={32} />,
    },
    {
      title: 'Virus Removal',
      description: 'Deep malware scans and removal to keep your primary devices safe and secure.',
      icon: <ShieldCheck className="text-mi-blue" size={32} />,
    },
    {
      title: 'Device Setup',
      description: 'Printers, scanners, and smart home devices. We connect it all for you.',
      icon: <Smartphone className="text-mi-blue" size={32} />,
    },
    {
      title: 'General Support',
      description: 'Any other tech questions? We provide expert guidance for all home tech.',
      icon: <HelpCircle className="text-mi-blue" size={32} />,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-mi-blue font-bold tracking-wider mb-2">OUR SPECIALIZATIONS</h2>
          <p className="text-4xl md:text-5xl font-bold text-mi-navy">Technology Support That <span className="text-mi-blue">Feels Personal</span></p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="p-8 rounded-2xl glass border-white/20 shadow-sm hover:shadow-xl hover:border-mi-blue/20 hover:-translate-y-1 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-mi-blue/5 flex items-center justify-center mb-6 group-hover:bg-mi-blue/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-mi-navy mb-4">{service.title}</h3>
              <p className="text-mi-navy/60 leading-relaxed font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
