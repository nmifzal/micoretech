import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Lock, ShieldCheck, Zap } from "lucide-react";
import Threads from "./ui/Threads";
const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden from-white via-mi-light/30 to-blue-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-mi-blue/20 bg-mi-blue/5 text-mi-blue font-semibold text-sm mb-8 backdrop-blur-sm"
          >
            <Zap size={15} className="mr-2" />
            PREMIUM REMOTE ASSISTANCE
          </motion.div>

          {/* Heading */}
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-mi-navy mb-8 leading-[1.1] reveal-up">
            Your Personal <br />
            <span className="text-mi-blue">Tech Concierge</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-mi-navy/70 mb-12 leading-relaxed max-w-3xl mx-auto reveal-up [animation-delay:150ms]">
            Reliable IT. Real Support. We fix your home and remote office
            tech issues instantly—so you can focus on what matters.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
          >
            <a 
              href="https://wa.me/919500091500?text=Hi%20Micore!%20I'd%20like%20to%20get%20started%20with%20a%20free%20tech%20diagnosis.%20How%20can%20you%20help%20me%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-mi-blue text-white font-bold text-lg hover:bg-mi-blue/90 transition-all shadow-2xl shadow-mi-blue/20 flex items-center justify-center group"
            >
              Start Free Diagnosis
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services"
              className="w-full sm:w-auto px-10 py-5 rounded-full border-2 border-mi-navy/5 text-mi-navy font-bold text-lg hover:bg-mi-navy/5 transition-all backdrop-blur-sm flex items-center justify-center"
            >
              View Services
            </a>
          </motion.div>

          {/* Trust Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 pt-10 border-t border-mi-navy/5"
          >
            {[
              { label: "100% Secure", icon: <ShieldCheck size={20} /> },
              { label: "100% Private", icon: <Lock size={20} /> },
              { label: "Certified Techs", icon: <CheckCircle2 size={20} /> },
            ].map((item, id) => (
              <div
                key={id}
                className="flex items-center gap-3 text-mi-navy/40 hover:text-mi-navy/80 transition-colors"
              >
                <span className="text-mi-blue">{item.icon}</span>
                <span className="text-xs font-bold uppercase tracking-widest">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Threads
          color={[0, 0.4823529411764706, 1]}
          amplitude={1}
          distance={0}
          enableMouseInteraction
        />
      </div>
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-mi-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-mi-yellow/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
