import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, Send, HelpCircle, ChevronDown } from 'lucide-react';
import { NavigationPage } from '../types';

interface ContactPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Aspirant',
    area: 'Competitive Examination Intelligence',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        role: 'Aspirant',
        area: 'Competitive Examination Intelligence',
        message: '',
      });
    }, 800);
  };

  const supportFaqs = [
    {
      q: 'How can an academic institution or research lab collaborate with Prabodha AI?',
      a: 'We welcome partnerships with universities, research cells, and educational trusts interested in Socratic learning benchmarks and cognitive evaluation architectures. Use this inquiry form to initiate a research dialogue.',
    },
    {
      q: 'Is Prabodha AI a coaching institute or test series seller?',
      a: 'No. Prabodha AI is an AI-first technology platform for intelligent learning, competitive examination preparation, and career trajectory modeling. We do not sell coaching batches or commercial courses.',
    },
    {
      q: 'How does Prabodha handle learner privacy and examination query data?',
      a: 'We practice strict data minimization. Learning interactions are utilized solely to calibrate real-time Socratic hints and retention models. We do not sell or monetize personal learner profiles.',
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#FCFBFE] dark:bg-[#0B0A0F] text-[#19171F] dark:text-[#F3F2F8] min-h-screen">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="mb-14 space-y-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF]">
            Dialogue & Inquiries
          </span>
          <h1 className="text-4xl sm:text-5xl font-sans font-bold tracking-tight text-[#19171F] dark:text-white leading-[1.08]">
            Contact & <br />
            <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
              academic inquiries.
            </span>
          </h1>
          <p className="text-base text-[#77727F] dark:text-[#9490A0] font-light leading-relaxed">
            Reach out to our academic cell, technical team, or institutional collaboration division.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Form */}
          <div className="md:col-span-7 p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#14121E] border border-[#EAE7EF] dark:border-[#272535] shadow-soft-xs">
            {status === 'success' ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#19171F] dark:text-white">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-xs sm:text-sm text-[#77727F] dark:text-[#9490A0] font-light max-w-sm mx-auto">
                  Thank you for reaching out. Our academic mentorship and research team will review your message and reply via email.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-5 py-2.5 rounded-full bg-[#19171F] dark:bg-white text-white dark:text-[#19171F] text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && (
                  <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Please ensure all fields are filled before submitting.</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-[#19171F] dark:text-white mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FCFBFE] dark:bg-[#1B1927] border border-[#EAE7EF] dark:border-[#2C293D] text-xs text-[#19171F] dark:text-white focus:outline-none focus:border-[#7550C8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#19171F] dark:text-white mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FCFBFE] dark:bg-[#1B1927] border border-[#EAE7EF] dark:border-[#2C293D] text-xs text-[#19171F] dark:text-white focus:outline-none focus:border-[#7550C8]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#19171F] dark:text-white mb-1.5">
                      You are a...
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#FCFBFE] dark:bg-[#1B1927] border border-[#EAE7EF] dark:border-[#2C293D] text-xs text-[#19171F] dark:text-white focus:outline-none focus:border-[#7550C8]"
                    >
                      <option value="Aspirant">Exam Aspirant</option>
                      <option value="Student">University Scholar</option>
                      <option value="Professional">Professional / Engineer</option>
                      <option value="Researcher">Academic / Researcher</option>
                      <option value="Partner">Institutional Partner</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#19171F] dark:text-white mb-1.5">
                      Subject Area
                    </label>
                    <select
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#FCFBFE] dark:bg-[#1B1927] border border-[#EAE7EF] dark:border-[#2C293D] text-xs text-[#19171F] dark:text-white focus:outline-none focus:border-[#7550C8]"
                    >
                      <option value="Competitive Examination Intelligence">Exam Intelligence</option>
                      <option value="Socratic AI Learning Engine">AI Learning Engine</option>
                      <option value="Career & Industry Trajectories">Career Intelligence</option>
                      <option value="Institutional Research Collaboration">Collaboration</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#19171F] dark:text-white mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your inquiry, question or research interest..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FCFBFE] dark:bg-[#1B1927] border border-[#EAE7EF] dark:border-[#2C293D] text-xs text-[#19171F] dark:text-white focus:outline-none focus:border-[#7550C8]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3 rounded-full bg-[#19171F] dark:bg-white text-white dark:text-[#19171F] hover:bg-[#7550C8] text-xs font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    <span>{status === 'loading' ? 'Dispatching...' : 'Submit Inquiry'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Context & Direct Contacts */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-[#14121E] border border-[#EAE7EF] dark:border-[#272535] space-y-3">
              <h3 className="text-sm font-bold text-[#19171F] dark:text-white">
                Academic & Research Channels
              </h3>
              <p className="text-xs text-[#77727F] dark:text-[#9490A0] font-light leading-relaxed">
                Our team reviews inquiries on a rolling basis. For university or institutional collaboration proposals, please indicate your department and institution.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F5F4F7] dark:bg-[#151320] border border-[#EAE7EF] dark:border-[#272535] space-y-3">
              <h3 className="text-sm font-bold text-[#19171F] dark:text-white">
                Ethical AI & Research Integrity
              </h3>
              <p className="text-xs text-[#77727F] dark:text-[#9490A0] font-light leading-relaxed">
                Prabodha AI does not offer exam proxy services, essay-generation shortcuts, or rote solution scraping. Our platform is dedicated strictly to cognitive understanding and first-principles education.
              </p>
            </div>
          </div>

        </div>

        {/* Support FAQs */}
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-[#7550C8] dark:text-[#B99CFF] block">
            Frequently Answered Inquiries
          </span>

          <div className="space-y-3">
            {supportFaqs.map((faq, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white dark:bg-[#14121E] border border-[#EAE7EF] dark:border-[#272535] transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-bold text-[#19171F] dark:text-white"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#77727F] transition-transform ${activeFaq === i ? 'rotate-180 text-[#7550C8]' : ''}`} />
                </button>
                {activeFaq === i && (
                  <p className="text-xs text-[#475569] dark:text-[#CBD5E1] font-light leading-relaxed pt-3 border-t border-[#EAE7EF] dark:border-[#242232] mt-3">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

