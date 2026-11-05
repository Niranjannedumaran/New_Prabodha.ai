import React, { useEffect } from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const shouldReduceMotion = useReducedMotion();

  // Instant Escape key dismissal per Emil's rule
  useEffect(() => {
    if (!type) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [type, onClose]);

  const isPrivacy = type === 'privacy';

  return (
    <AnimatePresence mode="wait">
      {type && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.05 : 0.2, ease: 'easeOut' }}
            className="fixed inset-0 bg-[#0C0A12]/65 dark:bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Card with Materializing Blur & Scale */}
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.96, y: 12, filter: 'blur(4px)' }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }
            }
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.98, y: 6, filter: 'blur(2px)' }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0.1 }
                : { duration: 0.24, ease: [0.16, 1, 0.3, 1] }
            }
            className="relative bg-white/95 dark:bg-[#120F1D]/95 backdrop-blur-2xl text-[#17151D] dark:text-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 border border-[#E8E1F5] dark:border-[#241C35] shadow-2xl z-10 max-h-[85vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#85818D] hover:text-[#17151D] dark:hover:text-white hover:bg-[#F7F4FC] dark:hover:bg-[#1B162B] active:scale-[0.92] transition-all duration-120"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#EDE7FA] dark:bg-[#7652C8]/25 text-[#7652C8] dark:text-[#EDE7FA] flex items-center justify-center">
                {isPrivacy ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-[#17151D] dark:text-white">
                  {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
                </h3>
                <p className="text-xs text-[#85818D] dark:text-white/60">Last updated: November 2026</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#4B5563] dark:text-white/80 leading-relaxed font-light">
              {isPrivacy ? (
                <>
                  <p>
                    At Prabodha AI, we prioritize learner privacy and responsible data stewardship. This Privacy Policy outlines our principles regarding user information during our research and development phase.
                  </p>
                  <h4 className="font-bold text-[#17151D] dark:text-white pt-2">1. Information We Collect</h4>
                  <p>
                    We only collect information voluntarily submitted through our contact and inquiry forms (such as your name, email, and stated interests). We do not sell, rent, or trade your personal information to third parties.
                  </p>
                  <h4 className="font-bold text-[#17151D] dark:text-white pt-2">2. How We Use Information</h4>
                  <p>
                    Information provided is utilized solely to respond to inquiries, facilitate research cohorts, and notify interested learners of platform milestones.
                  </p>
                  <h4 className="font-bold text-[#17151D] dark:text-white pt-2">3. Responsible AI Principles</h4>
                  <p>
                    We design with safety, transparency, and cognitive agency at the core. We do not use private student inquiries to train public generative models without explicit, transparent authorization.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Welcome to Prabodha AI. By visiting this website and exploring our research disclosures, you agree to these Terms and Conditions.
                  </p>
                  <h4 className="font-bold text-[#17151D] dark:text-white pt-2">1. Intellectual Property</h4>
                  <p>
                    All brand marks, logos, mascot illustrations (including student and AI robot characters), editorial copy, and visual designs are the proprietary property of Prabodha AI.
                  </p>
                  <h4 className="font-bold text-[#17151D] dark:text-white pt-2">2. Nature of Platform & Vision</h4>
                  <p>
                    Prabodha AI is an emerging initiative in active development. Conceptual presentations, product visualizers, and developmental frameworks are presented for exploration and do not constitute warranties of finished software functionality or guaranteed career outcomes.
                  </p>
                  <h4 className="font-bold text-[#17151D] dark:text-white pt-2">3. Contact</h4>
                  <p>
                    For official correspondence, reach out through the official contact section on this website.
                  </p>
                </>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-[#E8E1F5] dark:border-[#241C35] flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-[#7652C8] hover:bg-[#623cb8] active:scale-[0.97] text-white text-xs font-semibold rounded-xl transition-all duration-150"
              >
                Understood
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
