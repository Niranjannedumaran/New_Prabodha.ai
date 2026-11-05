import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface FAQProps {
  onOpenContact: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenContact }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const shouldReduceMotion = useReducedMotion();

  const faqs = [
    {
      q: 'What is Prabodha AI?',
      a: 'Prabodha AI is an AI-powered learning and career-development initiative focused on helping people learn, explore opportunities and develop their potential. We are building an interconnected ecosystem that bridges fundamental conceptual knowledge with real-world career exploration.',
      category: 'General',
    },
    {
      q: 'Who is Prabodha AI for?',
      a: 'Our broader vision includes students, competitive-exam aspirants, graduates and young professionals who want to develop their knowledge and skills. Whether you are building academic fundamentals or pivoting into emerging industries, Prabodha is designed for your phase of growth.',
      category: 'Audience',
    },
    {
      q: 'How does AI fit into Prabodha AI?',
      a: 'We believe AI can make learning more accessible, interactive and supportive. We are exploring how intelligent technology can contribute meaningfully to the learning and development experience—acting as a Socratic thinking partner rather than just an automated answers engine.',
      category: 'Technology',
    },
    {
      q: 'Is Prabodha AI available now?',
      a: 'Prabodha AI is currently in active research and development. We are testing foundational concepts with cohorts of learners and educators. Follow our official channels and register your interest to receive updates about early testing access and launch timelines.',
      category: 'Availability',
    },
    {
      q: 'How can I connect with Prabodha AI?',
      a: "You can contact our team directly through the website's contact section or via our official communication channels. We welcome questions, early feedback, and conversations with students and educators.",
      category: 'Contact',
    },
    {
      q: 'How can I collaborate with Prabodha AI?',
      a: 'We welcome relevant conversations around education, technology, curriculum partnerships and academic collaboration. If you are an educator, researcher, or institution aligned with our mission, reach out through our contact form.',
      category: 'Partnership',
    },
  ];

  const filteredFaqs = faqs.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 md:py-36 bg-white dark:bg-[#0D0B14] text-[#17151D] dark:text-white transition-colors duration-300 border-t border-[#E8E1F5] dark:border-[#241C35] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] text-[#552AA8] dark:text-[#DDD2F7] text-xs font-semibold mb-4 border border-[#DDD2F7] dark:border-[#382658]">
            <HelpCircle className="w-3.5 h-3.5 text-[#7652C8] dark:text-[#B395F7]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 font-display">
            Got questions? We have answers.
          </h2>
          <p className="text-base sm:text-lg text-[#85818D] dark:text-white/60 font-light">
            Clear explanations about our vision, how AI integrates with learning, and how to get involved.
          </p>

          {/* Search Filter */}
          <div className="mt-8 relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-[#85818D] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search questions (e.g. availability, students, collaboration)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#F7F4FC] dark:bg-[#171324] border border-[#E8E1F5] dark:border-[#302044] text-sm text-[#17151D] dark:text-white placeholder:text-[#85818D] focus:outline-none focus:ring-2 focus:ring-[#7652C8] focus:bg-white dark:focus:bg-[#1B162B] transition-all duration-150"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#7652C8]/40 dark:border-[#7652C8]/60 bg-[#F7F4FC]/90 dark:bg-[#171324] shadow-soft-sm'
                    : 'border-[#E8E1F5] dark:border-[#241C35] bg-white dark:bg-[#120F1D] hover:border-[#D5C7F0] dark:hover:border-[#7652C8]/40'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7652C8] active:bg-[#F7F4FC]/50 dark:active:bg-[#1B162B]/50 transition-colors duration-100"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#7652C8] text-white rotate-180'
                        : 'bg-[#EDE7FA] dark:bg-[#7652C8]/20 text-[#7652C8] dark:text-[#EDE7FA]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { height: 0, opacity: 0 }
                      }
                      animate={
                        shouldReduceMotion
                          ? { opacity: 1 }
                          : { height: 'auto', opacity: 1 }
                      }
                      exit={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { height: 0, opacity: 0 }
                      }
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#4B5563] dark:text-white/80 leading-relaxed border-t border-[#E8E1F5]/60 dark:border-[#241C35] font-light">
                        <p>{faq.a}</p>
                        <div className="mt-4 flex items-center justify-between pt-3 border-t border-[#EDE7FA]/60 dark:border-[#241C35] text-xs font-normal">
                          <span className="text-[#85818D] dark:text-white/50">Category: {faq.category}</span>
                          <button
                            onClick={onOpenContact}
                            className="text-[#7652C8] dark:text-[#EDE7FA] font-semibold hover:underline active:scale-[0.97] transition-transform duration-100"
                          >
                            Ask another question →
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 bg-[#F7F4FC] dark:bg-[#171324] rounded-2xl border border-[#E8E1F5] dark:border-[#302044]">
              <p className="text-sm text-[#85818D] dark:text-white/60 mb-4">No matching questions found.</p>
              <button
                onClick={onOpenContact}
                className="text-sm font-semibold text-[#7652C8] dark:text-[#EDE7FA] underline"
              >
                Send your question to our team
              </button>
            </div>
          )}
        </div>

        {/* Mascot cheer note */}
        <div className="mt-12 text-center flex items-center justify-center gap-3">
          <img
            src="/assets/mascots/student-peace.png"
            alt="Prabodha Student Mascot peace sign"
            className="w-10 h-10 object-contain"
          />
          <span className="text-xs text-[#85818D] dark:text-white/60">
            Have a custom query? Our team responds within 24 hours.
          </span>
        </div>

      </div>
    </section>
  );
};
