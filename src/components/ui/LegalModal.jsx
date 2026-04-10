import { AnimatePresence, motion } from "framer-motion";
import { Scale, ShieldCheck, X } from "lucide-react";
import { useStore } from "@nanostores/react";
import { isLegalModalOpen, legalModalType, closeLegalModal } from "../../stores/legalStore";

const LegalModal = () => {
  const isOpen = useStore(isLegalModalOpen);
  const type = useStore(legalModalType);
  const onClose = closeLegalModal;
  const content = {
    privacy: {
      title: "Privacy Policy",
      icon: <ShieldCheck className="text-mi-blue" size={24} />,
      sections: [
        {
          title: "100% Private Support",
          text: "At Micore Technologies, your privacy is our primary concern. All remote sessions are encrypted and conducted through secure channels. We never access personal files without your explicit permission during a support session.",
        },
        {
          title: "Information We Collect",
          text: "We only collect information necessary to provide support: your name, contact details (phone/WhatsApp), and basic system diagnostic information. We do not store transcripts of remote sessions.",
        },
        {
          title: "No Data Sharing",
          text: "We will never sell, lease, or share your personal information with third parties for marketing purposes. Your data is used exclusively to facilitate your tech support requests.",
        },
        {
          title: "Session Control",
          text: "You remain in full control of every remote session. You can terminate the connection at any time with a single click, immediately ending our access to your system.",
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      icon: <Scale className="text-mi-blue" size={24} />,
      sections: [
        {
          title: "Service Scope",
          text: "Micore Technologies provides software troubleshooting, configuration, and optimization services via remote assistance. We do not provide physical hardware repairs or onsite visits.",
        },
        {
          title: "No Fix, No Fee Guarantee",
          text: "If we are unable to diagnose or propose a solution for your technical issue during a One-Time support session, you will not be charged. This guarantee applies to software issues within our supported service list.",
        },
        {
          title: "Liability Limitation",
          text: "While we take every precaution, Micore Technologies is not liable for data loss or hardware failure during or after a support session. We strongly recommend maintaining recent backups of your important data.",
        },
        {
          title: "Subscription Terms",
          text: "Monthly and Annual plans provide priority access to support. Subscriptions are billed in advance and can be canceled at any time, though previously billed amounts are non-refundable.",
        },
      ],
    },
  };

  const activeContent = content[type] || content.privacy;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-mi-navy/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-hidden shadow-2xl relative z-10 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-mi-light/30">
              <div className="flex items-center gap-3">
                {activeContent.icon}
                <h2 className="text-xl font-bold text-mi-navy">
                  {activeContent.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-mi-navy/40 hover:text-mi-navy"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-8 overflow-y-auto custom-scrollbar">
              <div className="mb-8">
                <p className="text-mi-navy/60 text-sm italic font-medium">
                  Last updated: April 2026. These terms apply to all services
                  provided by Micore Technologies.
                </p>
              </div>

              <div className="space-y-8">
                {activeContent.sections.map((section, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="font-bold text-mi-navy flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-mi-blue" />
                      {section.title}
                    </h3>
                    <p className="text-mi-navy/70 text-sm leading-relaxed font-medium">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-mi-blue/5 border border-mi-blue/10">
                <p className="text-mi-blue font-bold text-sm mb-2 uppercase tracking-widest">
                  Need Clarification?
                </p>
                <p className="text-mi-navy/60 text-xs font-semibold">
                  If you have questions about our legal policies, please reach
                  out to us at
                  <span className="text-mi-blue ml-1">
                    support@micoretech.in
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Footer Close */}
            <div className="p-6 border-t border-gray-100 flex justify-end bg-white">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-mi-navy text-white font-bold text-sm hover:bg-mi-navy/90 transition-all"
              >
                I Understand
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;
