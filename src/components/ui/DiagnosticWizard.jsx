import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wifi, Printer, Monitor, ShieldAlert, Database, HelpCircle, 
  ChevronRight, ChevronLeft, Zap, Clock, MessageSquare, Send 
} from 'lucide-react';
import { CONTACT_INFO } from '../../constants/contactInfo';

const DiagnosticWizard = () => {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState({
    issue: '',
    urgency: '',
    name: '',
    phone: ''
  });

  const issues = [
    { id: 'wifi', title: 'WiFi & Network', icon: <Wifi size={24} /> },
    { id: 'printer', title: 'Printer & Scanner', icon: <Printer size={24} /> },
    { id: 'computer', title: 'PC/Mac Troubleshooting', icon: <Monitor size={24} /> },
    { id: 'security', title: 'Virus & Security', icon: <ShieldAlert size={24} /> },
    { id: 'data', title: 'Data & Cloud', icon: <Database size={24} /> },
    { id: 'other', title: 'Other Tech Issue', icon: <HelpCircle size={24} /> },
  ];

  const urgencies = [
    { id: 'immediate', title: 'Immediate Fix', subtitle: 'Need help right now', icon: <Zap size={20} className="text-mi-blue" /> },
    { id: 'same-day', title: 'Same Day Support', subtitle: 'Within 24 hours', icon: <Clock size={20} className="text-mi-blue" /> },
    { id: 'query', title: 'General Advice', subtitle: 'Consultation request', icon: <MessageSquare size={20} className="text-mi-blue" /> },
  ];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const getWhatsAppLink = () => {
    const selectedIssue = issues.find(i => i.id === selection.issue)?.title || 'Tech Issue';
    const selectedUrgency = urgencies.find(u => u.id === selection.urgency)?.title || 'Standard';
    
    const message = `Hi Micore! My name is ${selection.name}. I need help with my ${selectedIssue} (${selectedUrgency}). Can we start a diagnosis?`;
    return `https://wa.me/${CONTACT_INFO.phoneRaw.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="w-full bg-white rounded-[2.5rem] shadow-2xl shadow-mi-navy/10 min-h-[500px] flex flex-col relative overflow-hidden transition-all duration-500">
      
      {/* Progress Bar */}
      <div className="h-1.5 w-full bg-mi-light flex">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${(step / 3) * 100}%` }}
          className="h-full bg-mi-blue"
        />
      </div>

      <div className="p-8 md:p-10 flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: ISSUE SELECTION */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-mi-navy mb-2">What can we help you with?</h3>
                <p className="text-mi-navy/50 text-sm font-medium">Select the category that matches your issue.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {issues.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { setSelection({ ...selection, issue: item.id }); handleNext(); }}
                    className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all group ${
                      selection.issue === item.id 
                        ? 'border-mi-blue bg-mi-blue/5 text-mi-blue' 
                        : 'border-mi-light hover:border-mi-blue/20 bg-white text-mi-navy'
                    }`}
                  >
                    <div className={`mb-3 transition-colors ${selection.issue === item.id ? 'text-mi-blue' : 'text-mi-navy/30 group-hover:text-mi-blue'}`}>
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-tight">{item.title}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2: URGENCY SELECTION */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <button onClick={handleBack} className="flex items-center text-mi-navy/40 hover:text-mi-blue transition-colors text-xs font-bold uppercase tracking-widest mb-4">
                  <ChevronLeft size={14} className="mr-1" /> Back
                </button>
                <h3 className="text-2xl font-bold text-mi-navy mb-2">How urgent is this?</h3>
                <p className="text-mi-navy/50 text-sm font-medium">Help us prioritize your troubleshooting.</p>
              </div>

              <div className="space-y-4">
                {urgencies.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { setSelection({ ...selection, urgency: item.id }); handleNext(); }}
                    className={`w-full flex items-center p-5 rounded-2xl border-2 transition-all ${
                      selection.urgency === item.id 
                        ? 'border-mi-blue bg-mi-blue/5' 
                        : 'border-mi-light hover:border-mi-blue/10'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-mi-blue/10 flex items-center justify-center mr-4">
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-mi-navy">{item.title}</p>
                      <p className="text-xs text-mi-navy/40 font-medium">{item.subtitle}</p>
                    </div>
                    <ChevronRight size={18} className="ml-auto text-mi-navy/20" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 3: CONTACT DETAILS */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <button onClick={handleBack} className="flex items-center text-mi-navy/40 hover:text-mi-blue transition-colors text-xs font-bold uppercase tracking-widest mb-4">
                  <ChevronLeft size={14} className="mr-1" /> Back
                </button>
                <h3 className="text-2xl font-bold text-mi-navy mb-2">Almost there!</h3>
                <p className="text-mi-navy/50 text-sm font-medium">Where should our experts reach you?</p>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-mi-navy/40 mb-2 ml-1">Your Full Name</label>
                  <input 
                    type="text" 
                    value={selection.name}
                    onChange={(e) => setSelection({ ...selection, name: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl bg-mi-light/50 border-2 border-transparent focus:border-mi-blue focus:bg-white transition-all outline-none font-bold text-mi-navy"
                    placeholder="Enter your name" 
                  />
                </div>
                
                <a 
                  href={selection.name ? getWhatsAppLink() : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-5 rounded-full flex items-center justify-center font-bold text-lg transition-all shadow-xl ${
                    selection.name 
                      ? 'bg-mi-blue text-white shadow-mi-blue/20 hover:scale-[1.02]' 
                      : 'bg-mi-navy/5 text-mi-navy/20 pointer-events-none'
                  }`}
                >
                  Start Professional Diagnosis
                  <Send size={18} className="ml-2" />
                </a>

                <p className="text-[10px] text-center text-mi-navy/30 font-bold uppercase tracking-widest">
                  Secure Connection via WhatsApp
                </p>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      <div className="p-8 pt-0 flex items-center justify-center">
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${i === step ? 'w-4 bg-mi-blue' : 'bg-mi-light'}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticWizard;
