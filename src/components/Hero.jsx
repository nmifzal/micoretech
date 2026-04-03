import { motion } from "framer-motion";
import { ShieldCheck, Zap } from "lucide-react";
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
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-mi-blue/20 bg-mi-blue/5 text-mi-blue font-semibold text-sm mb-8"
          >
            <Zap size={15} className="mr-2" />
            EXPERT REMOTE SUPPORT
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-mi-navy mb-8"
          >
            Fast, Friendly Tech Support for{" "}
            <span className="text-mi-blue">Home Users</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-mi-navy/70 mb-12 leading-relaxed"
          >
            Resolution of your everyday tech headaches—from slow computers to
            Wi-Fi woes—all from the comfort of your home.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <button className="w-full sm:w-auto px-10 py-5 rounded-full bg-mi-navy text-white font-bold text-lg hover:bg-mi-navy/95 transition-all shadow-xl shadow-mi-navy/10 transform hover:-translate-y-1">
              Start Free Diagnosis
            </button>
            <div className="flex items-center text-mi-navy/60 font-medium">
              <ShieldCheck className="text-mi-blue mr-2" size={24} />
              End-to-End Secure Support
            </div>
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
