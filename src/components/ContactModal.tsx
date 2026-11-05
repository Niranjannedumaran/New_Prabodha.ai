import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Student',
    subject: 'General Inquiry',
    message: '',
  });

  const shouldReduceMotion = useReducedMotion();

  // Instant Escape key dismissal per Emil's rule
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      role: 'Student',
      subject: 'General Inquiry',
      message: '',
    });
    onClose();
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
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

          {/* Modal Dialog Card with Materializing Blur & Scale */}
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
            className="relative bg-white/95 dark:bg-[#120F1D]/95 backdrop-blur-2xl text-[#17151D] dark:text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#E8E1F5] dark:border-[#302044] shadow-2xl z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#85818D] hover:text-[#17151D] dark:hover:text-white hover:bg-[#F7F4FC] dark:hover:bg-[#1B162B] active:scale-[0.92] transition-all duration-120"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#7652C8]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7652C8] dark:text-[#EDE7FA]">
                    Get In Touch
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-display tracking-tight mb-2">
                  Connect with Prabodha AI
                </h3>

                <p className="text-xs sm:text-sm text-[#4B5563] dark:text-white/70 mb-6 font-light leading-relaxed">
                  Have a question, proposal, or want early access to our learning sandbox? Send our team a note.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F7F4FC] dark:bg-[#1B162B] border border-[#E8E1F5] dark:border-[#302044] text-sm text-[#17151D] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7652C8] transition-shadow duration-150"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F7F4FC] dark:bg-[#1B162B] border border-[#E8E1F5] dark:border-[#302044] text-sm text-[#17151D] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7652C8] transition-shadow duration-150"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold mb-1">
                        I am a...
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#F7F4FC] dark:bg-[#1B162B] border border-[#E8E1F5] dark:border-[#302044] text-sm text-[#17151D] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7652C8] transition-shadow duration-150"
                      >
                        <option value="Student">Student</option>
                        <option value="Aspirant">Exam Aspirant</option>
                        <option value="Graduate">Recent Graduate</option>
                        <option value="Professional">Young Professional</option>
                        <option value="Educator">Educator / Mentor</option>
                        <option value="Partner">Academic / Tech Partner</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#F7F4FC] dark:bg-[#1B162B] border border-[#E8E1F5] dark:border-[#302044] text-sm text-[#17151D] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7652C8] transition-shadow duration-150"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Early Access">Early Testing Access</option>
                        <option value="Collaboration">Partnership / Collaboration</option>
                        <option value="Feedback">Feedback / Suggestions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us what you are curious about or looking forward to..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F7F4FC] dark:bg-[#1B162B] border border-[#E8E1F5] dark:border-[#302044] text-sm text-[#17151D] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7652C8] resize-none transition-shadow duration-150"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#7652C8] hover:bg-[#623cb8] active:scale-[0.98] text-white py-3 rounded-xl font-semibold text-sm shadow-soft hover:shadow-glow-purple transition-all duration-150"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EDE7FA] dark:bg-[#7652C8]/30 text-[#7652C8] dark:text-[#EDE7FA] flex items-center justify-center mx-auto shadow-soft">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold">
                  Message Received!
                </h3>

                <p className="text-sm text-[#4B5563] dark:text-white/70 max-w-xs mx-auto leading-relaxed">
                  Thank you for connecting with Prabodha AI. Our team reviews every message and will be in touch shortly.
                </p>

                <div className="w-24 h-24 mx-auto">
                  <img
                    src="/assets/mascots/student-peace.png"
                    alt="Cheering mascot"
                    className="w-full h-full object-contain filter drop-shadow-md"
                  />
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#7652C8] text-white text-xs font-semibold rounded-xl hover:bg-[#623cb8] active:scale-[0.97] transition-all duration-150"
                  >
                    Close & Return
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
