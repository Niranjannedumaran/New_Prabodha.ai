import React, { useState } from 'react';
import {
  Sparkles,
  Send,
  Terminal,
  Brain,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle,
  FileText,
  Search,
  BookOpen,
  ArrowRight,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpotlightCard } from '../components/SpotlightCard';
import { PhysicalAnalogySimulator } from '../components/PhysicalAnalogySimulator';
import { NavigationPage } from '../types';
import { LEARNING_FEATURES } from '../data/platformData';

interface AiLearningPageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenContact: () => void;
}

export const AiLearningPage: React.FC<AiLearningPageProps> = ({
  onNavigate,
  onOpenContact,
}) => {
  const [selectedFeatureId, setSelectedFeatureId] = useState<string>('socratic-tutor');
  const [activeProtocolStep, setActiveProtocolStep] = useState<number>(1);
  const [chatMessages, setChatMessages] = useState<
    Array<{ sender: 'user' | 'ai'; text: string; tag?: string }>
  >([
    {
      sender: 'ai',
      text: "I am the Prabodha Socratic Tutoring Engine. I do not provide memorized solution sheets or shortcuts. Present an examination problem, conceptual doubt, or policy dilemma, and we will deconstruct it from elementary invariants. What would you like to explore?",
      tag: 'Axiomatic Grounding',
    },
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const selectedFeature =
    LEARNING_FEATURES.find((f) => f.id === selectedFeatureId) || LEARNING_FEATURES[0];

  const presetQueries = [
    'Why can Parliament not destroy the Basic Structure? (UPSC)',
    'Derive the compound interest difference invariant without formulas (Banking)',
    'Explain why the Turing Halting Problem is undecidable (GATE)',
    'Why does combination divide by r! factorial? (CAT)',
  ];

  const protocolSteps = [
    {
      num: 1,
      title: 'Parse Inquiry & Implicit Assumptions',
      desc: 'The engine decomposes your question into underlying boundary conditions rather than pattern-matching a textbook formula.',
    },
    {
      num: 2,
      title: 'Identify Faulty or Incomplete Premise',
      desc: 'Pinpoints exactly where your mental model broke down: whether you conflated a symptom with a cause or applied a special case as a general rule.',
    },
    {
      num: 3,
      title: 'Formulate Minimal Counter-Example',
      desc: 'Poses a targeted thought-experiment (e.g. mud vs asphalt wheels) that forces you to observe the contradiction yourself.',
    },
    {
      num: 4,
      title: 'Guide Causal Deduction to Invariant Truth',
      desc: 'You state the invariant law in your own words, consolidating permanent neural retention that never evaporates in exams.',
    },
  ];

  const handleSend = (text: string) => {
    if (!text.trim() || isSynthesizing) return;
    const userMsg = { sender: 'user' as const, text };
    setChatMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsSynthesizing(true);

    setTimeout(() => {
      let aiReply = '';
      const q = text.toLowerCase();

      if (q.includes('basic structure') || q.includes('constitution') || q.includes('upsc')) {
        aiReply =
          'Consider the origin of power: Did Parliament create the Constitution, or did the Constitution create Parliament? If an amending power is delegated by Article 368 of the document, can that delegated power logically repeal the foundational axioms that gave it authority to amend? What is the elementary boundary between constituent sovereignty and ordinary legislative competence?';
      } else if (q.includes('interest') || q.includes('compound') || q.includes('banking')) {
        aiReply =
          'In year 1, both simple and compound interest accrue interest solely on the initial principal P. At the start of year 2, what new balance exists under compounding that does NOT exist under simple interest? What interest does that new amount earn during year 2? Notice how the difference Δ = P · r² is purely self-evident.';
      } else if (q.includes('halting') || q.includes('turing') || q.includes('gate')) {
        aiReply =
          'Assume an algorithm H(P, I) exists that predicts whether any program P halts on input I. If we construct an adversary program D that halts if H predicts it loops, and loops if H predicts it halts, what happens when we evaluate D(D)? Can H return either TRUE or FALSE without generating an impossible contradiction?';
      } else if (q.includes('combination') || q.includes('cat') || q.includes('factorial')) {
        aiReply =
          'When you arrange 3 individuals into President, VP, and Treasurer, order matters (3! = 6 unique permutations). But when you form a committee of 3, does naming order change the committee? How many times was that identical committee overcounted during the arrangement stage? Why is a combination simply an arrangement corrected for internal symmetry?';
      } else {
        aiReply = `That is an insightful inquiry: "${text}". To deconstruct this from first principles: What is the single axiomatic constraint that must hold true under all conditions here? What elementary building block remains if we strip away the conventional definitions?`;
      }

      setChatMessages((prev) => [
        ...prev,
        { sender: 'ai', text: aiReply, tag: 'Socratic Scaffolding' },
      ]);
      setIsSynthesizing(false);
    }, 550);
  };

  const handleCopy = (idx: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1800);
  };

  return (
    <div className="pt-28 pb-24 bg-[#FCFBFE] dark:bg-[#0B0A0F] text-[#19171F] dark:text-[#F3F2F8] min-h-screen">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF]">
            Pillar 02 • AI Learning Suite
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-[#19171F] dark:text-white leading-[1.08]">
            Socratic Tutoring & <br />
            <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
              first-principles dialogue.
            </span>
          </h1>
          <p className="text-base text-[#77727F] dark:text-[#9490A0] font-light leading-relaxed">
            Learning through guided inquiry. The engine identifies your exact misconception, poses minimal counter-examples, and guides you to discover the core invariant truth.
          </p>

          <div className="p-3 rounded-2xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/40 text-xs text-amber-800 dark:text-amber-200 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>
              <strong>Demonstration Mode:</strong> This sandbox showcases Prabodha's Socratic dialogue protocols and reasoning scaffolds.
            </span>
          </div>
        </div>

        {/* Feature Selector Tabs with Sliding Indicator */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {LEARNING_FEATURES.map((feature) => {
            const isSelected = selectedFeatureId === feature.id;

            return (
              <SpotlightCard
                key={feature.id}
                onClick={() => {
                  setSelectedFeatureId(feature.id);
                  setActiveProtocolStep(1);
                }}
                className={`p-5 rounded-2xl cursor-pointer text-left border transition-all ${
                  isSelected
                    ? 'bg-white dark:bg-[#151320] border-[#7550C8] shadow-soft'
                    : 'bg-[#FCFBFE] dark:bg-[#12111A] border-[#EAE7EF] dark:border-[#222030] text-[#77727F] dark:text-[#9490A0] hover:text-[#19171F] hover:border-[#7550C8]/40'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono uppercase text-[#7550C8] dark:text-[#B99CFF] font-semibold">
                    Protocol
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-[#7550C8] animate-pulse" />}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#19171F] dark:text-white mb-1">
                  {feature.name}
                </div>
                <div className="text-[11px] text-[#77727F] dark:text-[#9490A0] font-light line-clamp-1">
                  {feature.tagline}
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Protocol Deep Dive Card with Cursor Spotlight & Sliding Stepper */}
        <SpotlightCard className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#13121C] border border-[#EAE7EF] dark:border-[#262436] shadow-soft mb-12 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EAE7EF] dark:border-[#242232] pb-5">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#7550C8] dark:text-[#B99CFF] tracking-wider font-bold">
                Selected Protocol Architecture
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#19171F] dark:text-white">
                {selectedFeature.name}
              </h3>
            </div>
            <span className="text-xs font-mono text-[#7550C8] bg-[#F7F3FD] dark:bg-[#201C33] px-3 py-1 rounded-full border border-[#DDD2F7] dark:border-[#352D4F]">
              {selectedFeature.socraticProtocol.split('->')[0].trim()}...
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD5E1] font-light leading-relaxed">
            {selectedFeature.description}
          </p>

          {/* Sliding 4-Step Architecture Stepper */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#77727F]">
              <span className="font-bold text-[#7550C8] dark:text-[#B99CFF] uppercase">
                4-Stage Cognitive Scaffolding Pipeline
              </span>
              <span>Step {activeProtocolStep} of 4</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {protocolSteps.map((step) => {
                const isActive = activeProtocolStep === step.num;

                return (
                  <button
                    key={step.num}
                    onClick={() => setActiveProtocolStep(step.num)}
                    className={`p-4 rounded-xl text-left border transition-all ${
                      isActive
                        ? 'bg-[#F7F3FD] dark:bg-[#1E192E] border-[#7550C8] shadow-xs'
                        : 'bg-[#FCFBFE] dark:bg-[#161423] border-[#EAE7EF] dark:border-[#262436] hover:border-[#7550C8]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono font-bold mb-1">
                      <span className={isActive ? 'text-[#7550C8]' : 'text-[#77727F]'}>
                        Stage 0{step.num}
                      </span>
                      {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-[#7550C8]" />}
                    </div>
                    <div className="text-xs font-bold text-[#19171F] dark:text-white mb-1">
                      {step.title.split('&')[0].trim()}
                    </div>
                    <p className="text-[11px] text-[#77727F] dark:text-[#9490A0] font-light line-clamp-2">
                      {step.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Physical Analogy Simulation Widget (Fixes Photo 2 Snell's Law Box) */}
          <div className="pt-2">
            <PhysicalAnalogySimulator />
          </div>
        </SpotlightCard>

        {/* Live Interactive Socratic Terminal with Cursor Spotlight */}
        <SpotlightCard className="rounded-3xl bg-white dark:bg-[#13121C] border border-[#EAE7EF] dark:border-[#262436] shadow-soft overflow-hidden flex flex-col min-h-[500px]">
          
          <div className="px-6 py-4 bg-[#F8F7FB] dark:bg-[#181622] border-b border-[#EAE7EF] dark:border-[#262436] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#7550C8]" />
              <span className="text-xs font-mono font-bold text-[#19171F] dark:text-white">
                Live Socratic Reasoning Console
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-500 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              Engine Online
            </span>
          </div>

          <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
            
            {/* Messages */}
            <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2 mb-6">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div className="text-[10px] text-[#77727F] mb-1 flex items-center gap-1.5 px-1">
                    <span>{msg.sender === 'user' ? 'Inquirer' : 'Prabodha Socratic Guide'}</span>
                    {msg.tag && (
                      <span className="text-[#7550C8] font-semibold">✦ {msg.tag}</span>
                    )}
                  </div>

                  <div
                    className={`p-4 rounded-2xl max-w-xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#19171F] dark:bg-white text-white dark:text-[#19171F] rounded-br-none'
                        : 'bg-[#F7F3FD] dark:bg-[#1B1829] text-[#19171F] dark:text-[#F3F2F8] border border-[#DDD2F7] dark:border-[#352D4E] rounded-bl-none shadow-xs'
                    }`}
                  >
                    {msg.text}
                    {msg.sender === 'ai' && (
                      <div className="pt-2 mt-2 border-t border-[#EAE7EF] dark:border-[#2B2440] flex justify-end">
                        <button
                          onClick={() => handleCopy(i, msg.text)}
                          className="text-[10px] text-[#77727F] hover:text-[#7550C8] flex items-center gap-1"
                        >
                          {copiedIdx === i ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedIdx === i ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isSynthesizing && (
                <div className="text-xs text-[#7550C8] pl-1 font-mono flex items-center gap-2">
                  <span className="animate-pulse">●</span>
                  <span>Formulating Socratic counter-question...</span>
                </div>
              )}
            </div>

            {/* Prompt presets & input */}
            <div className="pt-4 border-t border-[#EAE7EF] dark:border-[#242232]">
              <div className="flex flex-wrap items-center gap-1.5 mb-3">
                <span className="text-[11px] text-[#77727F] mr-1">Quick inquiries:</span>
                {presetQueries.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="text-[11px] px-3 py-1 rounded-full bg-[#FCFBFE] dark:bg-[#1A1826] border border-[#EAE7EF] dark:border-[#29263A] text-[#475569] dark:text-[#CBD5E1] hover:text-[#7550C8] hover:border-[#7550C8]/40 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputQuery);
                }}
                className="flex items-center gap-2 p-1.5 rounded-full bg-[#FCFBFE] dark:bg-[#1A1826] border border-[#EAE7EF] dark:border-[#29263A] focus-within:border-[#7550C8]"
              >
                <input
                  type="text"
                  placeholder="Ask any examination doubt or problem to deconstruct from first principles..."
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  className="flex-1 px-4 py-2 bg-transparent text-xs sm:text-sm text-[#19171F] dark:text-white placeholder:text-[#77727F] focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#19171F] dark:bg-white text-white dark:text-[#19171F] hover:bg-[#7550C8] dark:hover:bg-[#EDE6FB] rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs"
                >
                  <span>Deconstruct</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

          </div>

        </SpotlightCard>

      </div>
    </div>
  );
};
