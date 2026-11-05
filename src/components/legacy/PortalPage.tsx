import React, { useState } from 'react';
import { Terminal, Compass, Sparkles, Send, Copy, Check, RotateCcw, ArrowRight, Brain, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { SpotlightCard } from '../components/SpotlightCard';
import { BrandEmblem } from '../components/BrandEmblem';
import { FIRST_PRINCIPLES_DEMOS } from '../data/sessionsData';

export const PortalPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tutor' | 'graph' | 'quiz'>('tutor');

  // Socratic Companion State
  const initialMessages = [
    {
      sender: 'ai' as const,
      text: "Welcome to the Prabodha Socratic Sandbox! I am your AI learning companion for competitive examinations (UPSC, State PSC, Banking, SSC, GATE, CAT) and advanced problem solving. Instead of giving you formula shortcuts to memorize, I guide you to discover the invariant truth yourself. What concept or problem shall we deconstruct?",
      tag: 'Socratic Guide',
    },
  ];

  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string; tag?: string }>>(initialMessages);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const presetQueries = [
    'Why can Parliament not destroy the Basic Structure? (UPSC)',
    'Derive compound interest difference without formulas (Banking/SSC)',
    'Explain Turing undecidability and halting (GATE CS)',
    'Why do combinations divide by r! factorial? (CAT Quant)',
  ];

  const generateSocraticResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('basic structure') || q.includes('parliament') || q.includes('constitution') || q.includes('upsc')) {
      return "Consider the origin of authority: Where does Parliament derive its power to pass or amend laws? From the Constitution itself. If a delegated entity uses delegated power to abolish the very document or foundational axioms that created it, does that power logically remain legitimate? What distinguishes 'constituent power' from ordinary 'legislative power'?";
    } else if (q.includes('interest') || q.includes('compound') || q.includes('banking') || q.includes('ssc')) {
      return "Rather than memorizing 15 formulas for 2-year and 3-year CI-SI differences, consider: In year 1, both simple and compound interest are identical. In year 2, where exactly does the extra difference come from? It is simply the interest earned on year 1's interest: Δ = P · r². If you view compounding as a geometric progression, why does the ratio between successive years stay constant?";
    } else if (q.includes('turing') || q.includes('halting') || q.includes('gate') || q.includes('computation')) {
      return "Think of the liar paradox: 'This sentence is false.' If an algorithm H could predict whether any program P halts, what happens if we create an adversary program D that halts if H predicts it loops, and loops if H predicts it halts? If we feed D into itself as D(D), can H answer without contradicting itself?";
    } else if (q.includes('combination') || q.includes('cat') || q.includes('quant') || q.includes('permutation')) {
      return "When you arrange 3 distinct people in a line, there are 3! = 6 unique orders. But when you form a committee of 3, does order matter? Every distinct team of 3 was counted exactly 6 times too often during arrangement. Why is a combination not a separate magic formula, but simply a permutation corrected for internal symmetry?";
    } else {
      return `That is a fundamental inquiry: "${query}". To analyze this from first principles: What is the single axiomatic constraint that cannot be broken here? If we strip away the conventional definitions, what invariant building block remains?`;
    }
  };

  const handleSend = (text: string) => {
    if (!text.trim() || isTyping) return;
    const newHist = [...chatMessages, { sender: 'user' as const, text }];
    setChatMessages(newHist);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateSocraticResponse(text);
      setChatMessages((prev) => [
        ...prev,
        { sender: 'ai', text: reply, tag: 'Socratic Scaffolding' },
      ]);
      setIsTyping(false);
    }, 550);
  };

  const handleCopy = (index: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1800);
  };

  return (
    <div className="pt-28 pb-24 bg-[#FAF8FE] dark:bg-[#0D0B14] text-[#17151D] dark:text-[#F3F0FA] min-h-screen">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] text-[#552AA8] dark:text-[#DDD2F7] text-xs font-semibold mb-3 border border-[#DDD2F7] dark:border-[#382658]">
            <Terminal className="w-3.5 h-3.5 text-[#7652C8] dark:text-[#B395F7]" />
            <span>SOCRATIC LEARNING LAB & CONCEPT DIAGNOSTICS</span>
            <BrandEmblem size="sm" animated={true} />
          </div>

          <h1 className="text-4xl sm:text-6xl font-wide font-black uppercase tracking-tight text-[#17151D] dark:text-white leading-[1.08] mb-4">
            Interactive Socratic <br />
            <span className="font-editorial italic font-normal lowercase tracking-normal text-[#7652C8] dark:text-[#EDE7FA] editorial-underline">
              deconstruction lab.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#4B5563] dark:text-white/70 font-light leading-relaxed">
            Experience first-principles learning in action. Rather than spoon-feeding rote answers, Prabodha AI guides competitive aspirants (UPSC, Banking, SSC, GATE, CAT) to unmask the invariant truth behind complex questions.
          </p>

          {/* AI Simulation Transparency Notice */}
          <div className="mt-4 p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 flex items-center gap-2.5 text-xs text-amber-800 dark:text-amber-200">
            <AlertCircle className="w-4 h-4 flex-shrink-0 text-amber-600 dark:text-amber-400" />
            <span>
              <strong>Demonstration Mode:</strong> This sandbox showcases Prabodha's Socratic dialogue patterns. Production LLM endpoints with verified examination RAG grounding will launch in Phase P2.
            </span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-white dark:bg-[#14101F] border border-[#E8E1F5] dark:border-[#2A203E] shadow-soft-sm mb-8">
          <button
            onClick={() => setActiveTab('tutor')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'tutor'
                ? 'bg-[#7652C8] text-white shadow-sm'
                : 'text-[#85818D] dark:text-white/60 hover:text-[#17151D]'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Socratic AI Companion</span>
          </button>

          <button
            onClick={() => setActiveTab('graph')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'graph'
                ? 'bg-[#7652C8] text-white shadow-sm'
                : 'text-[#85818D] dark:text-white/60 hover:text-[#17151D]'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Exam Concept Invariants</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'quiz'
                ? 'bg-[#7652C8] text-white shadow-sm'
                : 'text-[#85818D] dark:text-white/60 hover:text-[#17151D]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Aspirant Diagnostic Drill</span>
          </button>
        </div>

        {/* Sandbox Content Container */}
        <div className="bg-white dark:bg-[#14101F] rounded-3xl border border-[#E8E1F5] dark:border-[#2A203E] shadow-soft-xl overflow-hidden min-h-[540px] flex flex-col">
          
          {/* Chrome Top Bar */}
          <div className="px-6 py-4 bg-[#FAF8FE] dark:bg-[#1A1428] border-b border-[#E8E1F5] dark:border-[#2A203E] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-rose-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="ml-2 text-xs font-medium text-[#85818D] dark:text-white/60 font-mono">
                prabodha.ai/socratic-sandbox
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#552AA8] dark:text-[#DDD2F7] bg-[#EDE7FA] dark:bg-[#251A3A] px-3.5 py-1 rounded-full border border-[#DDD2F7] dark:border-[#382658]">
              <Sparkles className="w-3.5 h-3.5 text-[#7652C8] dark:text-[#B395F7]" />
              <span>Socratic First-Principles Reasoning</span>
            </div>
          </div>

          {/* TAB 1: SOCRATIC AI COMPANION */}
          {activeTab === 'tutor' && (
            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
              
              {/* Messages Container */}
              <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2 mb-6">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div className="text-[10px] text-[#85818D] dark:text-white/50 mb-1 flex items-center gap-1.5 px-2">
                      <span>{msg.sender === 'user' ? 'Aspirant' : 'Prabodha Socratic Guide'}</span>
                      {msg.tag && (
                        <span className="text-[#7652C8] dark:text-[#B395F7] font-semibold">✦ {msg.tag}</span>
                      )}
                    </div>

                    <div
                      className={`p-4 rounded-2xl max-w-xl text-xs sm:text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-[#7652C8] text-white rounded-br-none'
                          : 'bg-[#FAF8FE] dark:bg-[#1A1428] text-[#17151D] dark:text-white border border-[#E8E1F5] dark:border-[#2A203E] rounded-bl-none shadow-xs'
                      }`}
                    >
                      {msg.text}
                      {msg.sender === 'ai' && (
                        <div className="pt-2 mt-2 border-t border-[#E8E1F5] dark:border-[#2A203E] flex justify-end">
                          <button
                            onClick={() => handleCopy(i, msg.text)}
                            className="text-[10px] text-[#85818D] hover:text-[#7652C8] flex items-center gap-1"
                          >
                            {copiedIndex === i ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                            <span>{copiedIndex === i ? 'Copied' : 'Copy'}</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-1 text-xs text-[#7652C8] pl-2">
                    <span className="w-2 h-2 rounded-full bg-[#7652C8] animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-[#7652C8] animate-bounce [animation-delay:0.15s]" />
                    <span className="w-2 h-2 rounded-full bg-[#7652C8] animate-bounce [animation-delay:0.3s]" />
                    <span className="ml-1 text-[11px] text-[#85818D]">Formulating Socratic counter-question...</span>
                  </div>
                )}
              </div>

              {/* Input Area & Prompt Chips */}
              <div className="pt-4 border-t border-[#F1ECFA] dark:border-[#241C35]">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[11px] font-medium text-[#85818D]">Try deconstructing:</span>
                  {presetQueries.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="text-[11px] font-medium px-3 py-1 rounded-full bg-[#FAF8FE] dark:bg-[#1A1428] border border-[#E8E1F5] dark:border-[#2A203E] text-[#552AA8] dark:text-[#DDD2F7] hover:bg-[#EDE7FA] active:scale-95 transition-all"
                    >
                      {q}
                    </button>
                  ))}
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend(inputText);
                  }}
                  className="flex items-center gap-2 p-1.5 rounded-full bg-[#FAF8FE] dark:bg-[#1A1428] border border-[#E8E1F5] dark:border-[#2A203E] focus-within:border-[#7652C8]"
                >
                  <input
                    type="text"
                    placeholder="Ask any competitive exam concept or problem to deconstruct from first principles..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="flex-1 px-4 py-2 bg-transparent text-xs sm:text-sm text-[#17151D] dark:text-white placeholder:text-[#85818D] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#7652C8] hover:bg-[#643EBA] active:scale-95 text-white rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all"
                  >
                    <span>Deconstruct</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>

            </div>
          )}

          {/* TAB 2: EXAM CONCEPT INVARIANTS */}
          {activeTab === 'graph' && (
            <div className="flex-1 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#17151D] dark:text-white mb-2">
                  First-Principles Concept Invariants
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5563] dark:text-white/70 font-light mb-6">
                  Every high-order question in UPSC, RBI, GATE, and CAT tests whether you understand foundational invariants or merely memorized formula tricks.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {FIRST_PRINCIPLES_DEMOS.map((demo) => (
                    <div
                      key={demo.id}
                      className="p-5 rounded-2xl bg-[#FAF8FE] dark:bg-[#1A1428] border border-[#E8E1F5] dark:border-[#2A203E] hover:border-[#7652C8]/50 transition-all space-y-3"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-[#7652C8] dark:text-[#B395F7] uppercase tracking-wider">
                          {demo.exam}
                        </span>
                        <span className="text-[#85818D]">{demo.subject}</span>
                      </div>

                      <h4 className="text-sm font-bold text-[#17151D] dark:text-white">
                        {demo.topic}
                      </h4>

                      <div className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 text-xs text-rose-800 dark:text-rose-300">
                        <div className="font-bold text-[10px] uppercase mb-0.5">The Rote Coaching Approach:</div>
                        {demo.roteMyth}
                      </div>

                      <div className="p-3 rounded-xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/40 text-xs text-[#302044] dark:text-[#EDE7FA]">
                        <div className="font-bold text-[10px] uppercase text-[#7652C8] dark:text-[#B395F7] mb-0.5">
                          Prabodha First-Principles Invariant:
                        </div>
                        {demo.firstPrinciplesInsight}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#F1ECFA] dark:border-[#241C35] flex items-center justify-between text-xs text-[#85818D]">
                <span>Axiomatic mental models apply across all competitive examinations.</span>
                <button
                  onClick={() => setActiveTab('tutor')}
                  className="text-xs font-semibold text-[#7652C8] dark:text-[#B395F7] hover:underline"
                >
                  Test this in Socratic Companion ➔
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: ASPIRANT DIAGNOSTIC DRILL */}
          {activeTab === 'quiz' && (
            <div className="flex-1 p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#7652C8] dark:text-[#B395F7] uppercase tracking-wider block mb-2">
                  First-Principles Diagnostic Challenge
                </span>
                <h3 className="text-xl font-bold text-[#17151D] dark:text-white mb-2">
                  Why can Parliament not pass a constitutional amendment to abolish judicial review?
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5563] dark:text-white/70 font-light mb-6">
                  Select the underlying constitutional premise, not a surface memorized article number.
                </p>

                <div className="space-y-3 max-w-xl">
                  {[
                    { label: 'A', text: 'Because Article 368 explicitly lists judicial review as non-amendable in its clauses.' },
                    { label: 'B', text: 'A delegated amending power created by the Constitution cannot be utilized to dismantle the foundational constitutional balance that created it (Basic Structure Axiom).' },
                    { label: 'C', text: 'Because the President has absolute veto power over all constitutional amendments.' },
                    { label: 'D', text: 'Because international law forbids parliamentary changes to judicial organs.' },
                  ].map((opt) => (
                    <div
                      key={opt.label}
                      className="p-4 rounded-2xl bg-[#FAF8FE] dark:bg-[#1A1428] border border-[#E8E1F5] dark:border-[#2A203E] hover:border-[#7652C8] cursor-pointer transition-all flex items-center gap-3 group"
                    >
                      <span className="w-7 h-7 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] group-hover:bg-[#7652C8] group-hover:text-white text-[#7652C8] dark:text-[#DDD2F7] font-bold text-xs flex items-center justify-center flex-shrink-0 transition-colors">
                        {opt.label}
                      </span>
                      <span className="text-xs sm:text-sm text-[#17151D] dark:text-white font-medium">
                        {opt.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#F1ECFA] dark:border-[#241C35] flex items-center justify-between text-xs text-[#85818D]">
                <span>Option B correctly demonstrates the constitutional axiom established in Kesavananda Bharati.</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Diagnostic Axiom: Verified</span>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
