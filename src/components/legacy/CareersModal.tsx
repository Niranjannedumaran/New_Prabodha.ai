import React, { useState } from 'react';
import { X, Briefcase, Sparkles, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CareersModal: React.FC<CareersModalProps> = ({ isOpen, onClose }) => {
  const [selectedRole, setSelectedRole] = useState('Curriculum Fellow - AI & Systems');
  const [submitted, setSubmitted] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantNote, setApplicantNote] = useState('');

  const openRoles = [
    {
      title: 'Curriculum Fellow - AI & Neural Mechanics',
      type: 'Fellowship • Remote',
      location: 'Global',
      desc: 'Design first-principles mental models, visual interactive intuition playgrounds, and analogical inquiry prompts for modern neural network architectures.',
    },
    {
      title: 'Pedagogy Researcher - Socratic Scaffolding',
      type: 'Part-Time / Full-Time',
      location: 'Global / Remote',
      desc: 'Research how Socratic question-generation reduces cognitive overwhelm and accelerates deep conceptual retention in complex STEM domains.',
    },
    {
      title: 'Student Community Ambassador Lead',
      type: 'Campus Fellowship',
      location: 'Universities Worldwide',
      desc: 'Facilitate curious student study circles, organize first-principles hack sessions, and foster autonomous learning habits among peer cohorts.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#14101F] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E8E1F5] dark:border-[#2A203E] z-10 my-8 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-[#85818D] hover:text-[#17151D] dark:hover:text-white hover:bg-[#F7F4FC] dark:hover:bg-[#201B30] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] text-[#552AA8] dark:text-[#DDD2F7] text-xs font-semibold w-fit mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#7652C8] dark:text-[#B395F7]" />
            <span>FELLOWSHIPS & CAREERS</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#17151D] dark:text-white mb-2">
            Build the future of learning with us.
          </h3>
          <p className="text-xs sm:text-sm text-[#4B5563] dark:text-white/70 font-light leading-relaxed mb-6">
            We are looking for curious minds, passionate educators, and frontier builders who believe human potential has no syllabus.
          </p>

          {submitted ? (
            <div className="py-12 text-center space-y-3 bg-[#FAF8FE] dark:bg-[#1A1428] rounded-2xl border border-emerald-200 dark:border-emerald-900/40">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#17151D] dark:text-white">
                Application Received!
              </h4>
              <p className="text-xs text-[#4B5563] dark:text-white/70 max-w-sm mx-auto">
                Thank you, {applicantName || 'fellow traveler'}. Our founding team will review your background and reach out within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#17151D] dark:text-white block mb-1.5">
                  Select Role of Interest
                </label>
                <div className="space-y-2">
                  {openRoles.map((role) => (
                    <div
                      key={role.title}
                      onClick={() => setSelectedRole(role.title)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        selectedRole === role.title
                          ? 'border-[#7652C8] bg-[#EDE7FA]/50 dark:bg-[#251A3A]/60'
                          : 'border-[#E8E1F5] dark:border-[#2A203E] hover:border-[#DDD2F7]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#17151D] dark:text-white">
                          {role.title}
                        </span>
                        <span className="text-[10px] text-[#7652C8] dark:text-[#B395F7] font-medium">
                          {role.type}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#4B5563] dark:text-white/70 mt-1">
                        {role.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="text-xs font-semibold text-[#17151D] dark:text-white block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ada Lovelace"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8FE] dark:bg-[#1A1428] border border-[#E8E1F5] dark:border-[#2A203E] text-xs text-[#17151D] dark:text-white focus:outline-none focus:border-[#7652C8]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#17151D] dark:text-white block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ada@curiosity.org"
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8FE] dark:bg-[#1A1428] border border-[#E8E1F5] dark:border-[#2A203E] text-xs text-[#17151D] dark:text-white focus:outline-none focus:border-[#7652C8]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#17151D] dark:text-white block mb-1">
                  Why does first-principles learning excite you?
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Share a concept you love deconstructing or what you'd love to research with us..."
                  value={applicantNote}
                  onChange={(e) => setApplicantNote(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8FE] dark:bg-[#1A1428] border border-[#E8E1F5] dark:border-[#2A203E] text-xs text-[#17151D] dark:text-white focus:outline-none focus:border-[#7652C8]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#7652C8] hover:bg-[#643EBA] active:scale-[0.98] text-white rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Fellowship Application</span>
              </button>
            </form>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

