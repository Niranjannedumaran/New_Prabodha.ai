import React, { useState } from 'react';
import { Sparkles, Terminal, Compass, CheckCircle, Send, ArrowRight, ShieldCheck, RotateCcw, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export const InteractiveDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tutor' | 'graph' | 'quiz'>('tutor');
  const shouldReduceMotion = useReducedMotion();

  // 1. Socratic Companion Simulator State
  const initialMessages = [
    {
      sender: 'ai' as const,
      text: "Hello! I am your Prabodha Socratic Companion. Instead of just handing you plain answers to memorize, I explore ideas with you from first principles. What are you curious about today?",
      tag: 'Prabodha Socratic Guide',
    },
  ];

  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string; tag?: string }>>(initialMessages);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const presetQueries = [
    'How do neural networks generalize?',
    'Why does curiosity produce better retention?',
    'How do I pivot into modern AI systems?',
    'How to build mathematical intuition?',
  ];

  const generateSocraticResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('neural') || q.includes('generalize') || q.includes('deep learning')) {
      return "Think of a neural network not as a giant spreadsheet, but like a flexible landscape of hills and valleys. When learning, it isn't memorizing specific raindrops—it's shaping gravity so any future drop naturally flows to the right river. If you change one constraint in that landscape, what happens to the valleys?";
    } else if (q.includes('curiosity') || q.includes('retention') || q.includes('remember')) {
      return "When you are forced to memorize for an exam, the brain treats knowledge as temporary baggage to drop at the exit. But when curiosity strikes, dopamine flags the insight as vital survival knowledge. What was the last thing you learned purely because you couldn't sleep without knowing?";
    } else if (q.includes('pivot') || q.includes('career') || q.includes('job') || q.includes('skills')) {
      return "Every great pivot starts by identifying your invariant foundations. Traditional engineering taught you systems thinking, state constraints, and debugging. The secret isn't starting over from scratch—it's mapping those foundational strengths directly into agent architectures and model evaluations. Ready to map your skills radar?";
    } else if (q.includes('math') || q.includes('calculus') || q.includes('geometry') || q.includes('formula')) {
      return "Calculus is not about symbol-pushing; it is simply the study of change and accumulation. Derivatives ask: 'How fast is this moment slipping away?' Integrals ask: 'What does this accumulation add up to?' If you visualize area instead of formulas, where do you see accumulation in your daily life?";
    } else if (q.includes('code') || q.includes('program') || q.includes('python') || q.includes('software')) {
      return "Code is simply executable thought. Instead of memorizing syntax libraries, think in state transitions: What is the current state? What event triggers a transition? What must remain invariant? If an invariant breaks, where is your first inspection point?";
    } else {
      return `That is a fascinating inquiry: "${query}". To explore this from first principles: What is the single most basic premise that must be true for this to exist? If we strip away the conventional definitions, what elementary building block remains?`;
    }
  };

  const handleSendQuery = (query: string) => {
    if (!query.trim() || isTyping) return;

    const newHistory = [...chatMessages, { sender: 'user' as const, text: query }];
    setChatMessages(newHistory);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateSocraticResponse(query);
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: reply,
          tag: 'Socratic Scaffolding',
        },
      ]);
      setIsTyping(false);
    }, 600);
  };

  const handleCopyMessage = (index: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1800);
  };

  const handleResetChat = () => {
    setChatMessages(initialMessages);
    setInputText('');
    setIsTyping(false);
  };

  // 2. Knowledge Graph Interactive State (4 Interconnected Nodes)
  const graphNodes = [
    {
      id: 'ai-agents',
      title: 'Autonomous AI Agents',
      category: 'Frontier AI Systems',
      prereq: 'Algorithmic Thinking • State Machines',
      horizon: 'AI Systems Architect • Research Lead',
      insight: 'Connects perception, memory vector retrieval, and reflective tool selection into purposeful autonomous action.',
      x: '28%',
      y: '32%',
      connections: ['math-geometry', 'systems-logic', 'career-compass'],
    },
    {
      id: 'math-geometry',
      title: 'Spatial Geometry & Vectors',
      category: 'Foundations',
      prereq: 'Linear Algebra Intuitions',
      horizon: 'Graphics Engineer • ML Modeler',
      insight: 'Transforms abstract numbers into multi-dimensional vectors where distance directly encodes semantic meaning.',
      x: '72%',
      y: '26%',
      connections: ['ai-agents', 'career-compass'],
    },
    {
      id: 'systems-logic',
      title: 'Systems Thinking & Logic',
      category: 'Cognitive Science',
      prereq: 'First-Principles Reasoning',
      horizon: 'Principal Architect • Systems Strategist',
      insight: 'Discovers feedback loops, invariant constraints, and root leverage points in complex computational networks.',
      x: '38%',
      y: '74%',
      connections: ['ai-agents', 'career-compass'],
    },
    {
      id: 'career-compass',
      title: 'Multidisciplinary Synthesis',
      category: 'Career Vector',
      prereq: 'Domain Fundamentals',
      horizon: 'Product Lead • Frontier Strategist',
      insight: 'The intersection of multiple cognitive domains creates defensible, non-commoditized creative leverage.',
      x: '78%',
      y: '70%',
      connections: ['math-geometry', 'systems-logic', 'ai-agents'],
    },
  ];

  const [selectedNode, setSelectedNode] = useState(graphNodes[0]);

  // 3. First-Principles Lab State (Multi-Question Diagnostic)
  const quizQuestions = [
    {
      id: 0,
      question: "If you have to master a completely new subject in 48 hours, which strategy builds genuine intuition fastest?",
      options: [
        'Read through 400 pages of reference textbooks back-to-back without pause.',
        'Teach the core mechanism to a 10-year-old using elementary analogies (Feynman Technique).',
        'Highlight all definitions and re-read standardized flashcards repeatedly.',
      ],
      correctIndex: 1,
      explanation: 'Forcing yourself to explain an idea in simple terms immediately exposes cognitive gaps and transforms abstract facts into lasting mental models.',
    },
    {
      id: 1,
      question: "When an engineer designs a reliable distributed system, what is the first-principles principle?",
      options: [
        'Assume everything will fail, and design state reconciliation around inevitable disruptions.',
        'Buy the most expensive server hardware so nothing can go offline.',
        'Write twice as much code to cover every possible edge-case by hand.',
      ],
      correctIndex: 0,
      explanation: 'Resilience is not the absence of failure; it is architecting deterministic state reconciliation when underlying parts fail.',
    },
    {
      id: 2,
      question: "Why do vector embeddings allow computers to 'understand' semantic similarity?",
      options: [
        'Because vectors convert conceptual relationships into spatial distances in geometry.',
        'Because computers memorize dictionary definitions word by word.',
        'Because the processor stores images and text in alphabetical order.',
      ],
      correctIndex: 0,
      explanation: 'In vector space, semantic closeness is encoded as spatial distance (cosine similarity). Concepts with similar meaning cluster naturally together.',
    },
  ];

  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const activeQuestion = quizQuestions[currentQuizIndex];

  const handleSelectQuizAnswer = (idx: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    if (idx === activeQuestion.correctIndex) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuizQuestion = () => {
    if (currentQuizIndex < quizQuestions.length - 1) {
      setCurrentQuizIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuizIndex(0);
    setSelectedAnswer(null);
    setQuizScore(0);
    setQuizCompleted(false);
  };

  const tabs = [
    { id: 'tutor' as const, label: 'Socratic AI Companion', icon: Terminal },
    { id: 'graph' as const, label: 'Interactive Knowledge Map', icon: Compass },
    { id: 'quiz' as const, label: 'First-Principles Lab', icon: Sparkles },
  ];

  return (
    <section id="demo" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden isolate">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#7652C8] dark:text-[#EDE7FA] bg-[#EDE7FA]/80 dark:bg-[#7652C8]/20 border border-[#E8E1F5] dark:border-[#2A223B] px-3.5 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#7652C8] dark:text-[#9B74F3]" />
            <span>FUNCTIONAL LEARNING SANDBOX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-wide font-black uppercase tracking-tight mb-4 leading-[1.08]">
            Experience the <br />
            <span className="font-editorial italic font-normal lowercase tracking-normal text-[#7652C8] dark:text-[#EDE7FA] editorial-underline">
              Prabodha method.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#4B5563] dark:text-white/70 leading-relaxed font-light max-w-xl mx-auto">
            Test-drive our interactive learning architecture right in your browser. Feel the difference between passive listening and active, curiosity-driven discovery.
          </p>

          {/* Mode Switcher with Fluid Shared Layout Pill */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-[#151221] border border-[#E8E1F5] dark:border-[#2A223B] shadow-soft-sm max-w-full">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap active:scale-[0.97] transition-colors duration-150 ${
                    isActive
                      ? 'text-white'
                      : 'text-[#85818D] dark:text-white/60 hover:text-[#17151D] dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSandboxTab"
                      className="absolute inset-0 bg-[#7652C8] rounded-xl shadow-sm z-0"
                      transition={
                        shouldReduceMotion
                          ? { duration: 0.1 }
                          : { type: 'spring', stiffness: 460, damping: 35 }
                      }
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Demo Stage Container */}
        <div className="bg-white dark:bg-[#120F1D] rounded-3xl border border-[#E8E1F5] dark:border-[#221B30] shadow-soft-xl overflow-hidden">
          
          {/* Top Browser chrome bar */}
          <div className="px-5 sm:px-6 py-3.5 bg-[#F7F4FC] dark:bg-[#181424] border-b border-[#E8E1F5] dark:border-[#221B30] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 text-[11px] font-mono text-[#85818D] dark:text-white/50 hidden sm:inline">
                prabodha.learning/sandbox-live
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#7652C8] dark:text-[#EDE7FA] bg-white dark:bg-[#201B30] border border-[#E8E1F5] dark:border-[#2A223B] px-3 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ring-2 ring-emerald-400/20" />
              <span>Active Environment</span>
            </div>
          </div>

          {/* Animated Tab Content Switcher */}
          <AnimatePresence mode="wait">
            {/* TAB 1: Socratic AI Companion */}
            {activeTab === 'tutor' && (
              <motion.div
                key="tutor"
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="p-5 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch"
              >
                {/* Chat Column */}
                <div className="lg:col-span-8 flex flex-col justify-between min-h-[420px] bg-[#F7F4FC] dark:bg-[#181424] rounded-2xl p-4 sm:p-5 border border-[#E8E1F5] dark:border-[#2A223B]">
                  
                  {/* Top Bar inside chat */}
                  <div className="flex items-center justify-between pb-2.5 border-b border-[#E8E1F5] dark:border-[#221B30] text-xs">
                    <span className="font-mono text-[11px] text-[#7652C8] dark:text-[#EDE7FA] font-bold">
                      SOCRATIC DIALOGUE THREAD
                    </span>
                    <button
                      onClick={handleResetChat}
                      className="inline-flex items-center gap-1 text-[11px] text-[#85818D] hover:text-[#17151D] dark:hover:text-white transition-colors"
                      title="Clear chat and restart"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Restart</span>
                    </button>
                  </div>

                  {/* Conversation area */}
                  <div className="space-y-3.5 overflow-y-auto pr-1 flex-1 py-3 max-h-[300px]">
                    {chatMessages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={
                          shouldReduceMotion
                            ? { opacity: 0 }
                            : { opacity: 0, y: 8, filter: 'blur(3px)' }
                        }
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className={`flex flex-col group ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                      >
                        {msg.tag && (
                          <span className="text-[10px] font-mono font-semibold uppercase text-[#7652C8] dark:text-[#EDE7FA] mb-1">
                            {msg.tag}
                          </span>
                        )}
                        <div
                          className={`relative max-w-[92%] sm:max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                            msg.sender === 'user'
                              ? 'bg-[#7652C8] text-white shadow-soft-sm'
                              : 'bg-white dark:bg-[#120F1D] text-[#17151D] dark:text-white border border-[#E8E1F5] dark:border-[#2A223B]'
                          }`}
                        >
                          <p>{msg.text}</p>
                          {msg.sender === 'ai' && (
                            <button
                              onClick={() => handleCopyMessage(i, msg.text)}
                              className="absolute top-2 right-2 p-1 text-[#85818D] hover:text-[#17151D] dark:hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                              title="Copy Socratic insight"
                              aria-label="Copy message"
                            >
                              {copiedIndex === i ? (
                                <Check className="w-3 h-3 text-emerald-500" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          )}
                        </div>
                      </motion.div>
                    ))}

                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-1.5 text-xs text-[#85818D] dark:text-white/50 pl-2 py-1 font-mono"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7652C8] animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7652C8] animate-bounce [animation-delay:0.15s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7652C8] animate-bounce [animation-delay:0.3s]" />
                        <span className="ml-1 text-[11px]">Companion synthesizing intuition...</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Preset Prompts & Input Bar */}
                  <div className="pt-3 border-t border-[#E8E1F5] dark:border-[#221B30] mt-2">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {presetQueries.map((q) => (
                        <button
                          key={q}
                          onClick={() => handleSendQuery(q)}
                          className="text-[10px] sm:text-[11px] bg-white dark:bg-[#120F1D] hover:bg-[#EDE7FA] dark:hover:bg-[#201B30] active:scale-[0.97] border border-[#E8E1F5] dark:border-[#2A223B] px-2.5 py-1 rounded-full text-[#302044] dark:text-white/80 transition-all duration-120"
                        >
                          {q}
                        </button>
                      ))}
                    </div>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSendQuery(inputText);
                      }}
                      className="flex items-center gap-2"
                    >
                      <input
                        type="text"
                        placeholder="Ask anything you are genuinely curious about (e.g. Calculus, Neural Networks)..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        className="flex-1 px-4 py-2.5 rounded-xl bg-white dark:bg-[#120F1D] border border-[#E8E1F5] dark:border-[#2A223B] text-xs sm:text-sm text-[#17151D] dark:text-white placeholder:text-[#85818D] focus:outline-none focus:ring-2 focus:ring-[#7652C8] transition-shadow duration-150"
                      />
                      <button
                        type="submit"
                        disabled={!inputText.trim() || isTyping}
                        className="px-4 py-2.5 bg-[#7652C8] text-white rounded-xl text-xs font-semibold disabled:opacity-50 hover:bg-[#623cb8] active:scale-[0.96] transition-all duration-120 flex items-center gap-1.5 shadow-sm"
                      >
                        <span>Send</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </form>

                    {/* AI Trust Builder: Caveats & Data Governance Footprint */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] text-[#85818D] dark:text-white/50 pt-2 px-1 gap-1">
                      <span className="inline-flex items-center gap-1.5">
                        <ShieldCheck className="w-3 h-3 text-[#7652C8] dark:text-[#9B74F3] flex-shrink-0" />
                        <span>Socratic Sandbox • Zero storage or training on private learner inputs</span>
                      </span>
                      <span className="font-mono text-[9px] text-[#85818D]/70 dark:text-white/40">
                        AI guides intuition; verify facts independently
                      </span>
                    </div>
                  </div>

                </div>

                {/* Informational Cognitive Scaffolding Panel */}
                <div className="lg:col-span-4 flex flex-col justify-between p-6 bg-[#F7F4FC] dark:bg-[#181424] rounded-2xl border border-[#E8E1F5] dark:border-[#2A223B]">
                  <div>
                    <div className="text-[10px] font-mono text-[#7652C8] dark:text-[#EDE7FA] uppercase tracking-wider font-bold mb-2">
                      COGNITIVE METHODOLOGY
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#17151D] dark:text-white mb-2 font-display">
                      Socratic Inquiry vs. Plain Answers
                    </h4>
                    <p className="text-xs text-[#4B5563] dark:text-white/70 leading-relaxed font-light mb-4">
                      When an AI simply answers your question, your brain remains passive. Prabodha prompts you with intuitive analogies that guide you to reconstruct the concept yourself.
                    </p>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#120F1D] border border-[#E8E1F5] dark:border-[#2A223B] space-y-2">
                      <div className="text-[11px] font-bold text-[#17151D] dark:text-white">Active Scaffolding Rules:</div>
                      <ul className="text-[11px] text-[#85818D] dark:text-white/60 space-y-1.5">
                        <li className="flex items-center gap-1.5">
                          <CheckCircle className="w-3 h-3 text-[#7652C8] flex-shrink-0" />
                          <span>No rote dictionary regurgitation</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <CheckCircle className="w-3 h-3 text-[#7652C8] flex-shrink-0" />
                          <span>Analogies anchored to everyday physics</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <CheckCircle className="w-3 h-3 text-[#7652C8] flex-shrink-0" />
                          <span>Prompting the learner to find the breakthrough</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E8E1F5] dark:border-[#221B30] space-y-2 mt-4 text-[11px] font-mono text-[#85818D] dark:text-white/50">
                    <div className="flex items-center justify-between">
                      <span>Intuition Index:</span>
                      <span className="text-[#7652C8] dark:text-[#EDE7FA] font-bold">96% Mastery</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Recall Stability:</span>
                      <span className="text-emerald-500 font-bold">High (3.4x)</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}

            {/* TAB 2: Dynamic Knowledge Map */}
            {activeTab === 'graph' && (
              <motion.div
                key="graph"
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="p-5 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch"
              >
                {/* Canvas */}
                <div className="lg:col-span-7 relative min-h-[360px] bg-[#F7F4FC] dark:bg-[#181424] rounded-2xl p-6 border border-[#E8E1F5] dark:border-[#2A223B] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#7652C8_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />

                  {/* SVG Connecting Vectors */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <line x1="28%" y1="32%" x2="72%" y2="26%" stroke="#7652C8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                    <line x1="28%" y1="32%" x2="38%" y2="74%" stroke="#7652C8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                    <line x1="72%" y1="26%" x2="78%" y2="70%" stroke="#7652C8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                    <line x1="38%" y1="74%" x2="78%" y2="70%" stroke="#7652C8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                    <line x1="28%" y1="32%" x2="78%" y2="70%" stroke="#9B74F3" strokeWidth="1" opacity="0.3" />
                  </svg>

                  {graphNodes.map((node) => {
                    const isSelected = selectedNode.id === node.id;
                    return (
                      <button
                        key={node.id}
                        onClick={() => setSelectedNode(node)}
                        style={{ left: node.x, top: node.y }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-2xl active:scale-[0.96] transition-all duration-200 z-10 ${
                          isSelected
                            ? 'bg-[#7652C8] text-white shadow-soft-lg ring-4 ring-[#7652C8]/25 scale-105'
                            : 'bg-white dark:bg-[#120F1D] text-[#17151D] dark:text-white border border-[#E8E1F5] dark:border-[#221B30] hover:border-[#7652C8]/50 shadow-soft-sm'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-white animate-pulse' : 'bg-[#7652C8]'}`} />
                          <span className="text-[11px] sm:text-xs font-bold whitespace-nowrap">{node.title}</span>
                        </div>
                      </button>
                    );
                  })}

                  <div className="absolute bottom-3 left-4 text-[10px] font-mono text-[#85818D] dark:text-white/50">
                    ✦ Click any node to inspect conceptual dependencies and career vectors
                  </div>
                </div>

                {/* Inspector Panel */}
                <div className="lg:col-span-5 p-5 sm:p-6 bg-[#F7F4FC] dark:bg-[#181424] rounded-2xl border border-[#E8E1F5] dark:border-[#2A223B] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7652C8] dark:text-[#EDE7FA] bg-[#EDE7FA] dark:bg-[#7652C8]/30 px-2.5 py-0.5 rounded-full">
                        {selectedNode.category}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-500 font-semibold">Active Node</span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-[#17151D] dark:text-white tracking-tight mb-2">
                      {selectedNode.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#4B5563] dark:text-white/80 leading-relaxed mb-4 font-light">
                      {selectedNode.insight}
                    </p>

                    <div className="space-y-2">
                      <div className="p-3 bg-white dark:bg-[#120F1D] rounded-xl border border-[#E8E1F5] dark:border-[#221B30]">
                        <div className="text-[9px] font-mono text-[#85818D] dark:text-white/50 uppercase font-bold">
                          Cognitive Prerequisites
                        </div>
                        <div className="text-xs font-semibold text-[#17151D] dark:text-white mt-0.5">
                          {selectedNode.prereq}
                        </div>
                      </div>

                      <div className="p-3 bg-white dark:bg-[#120F1D] rounded-xl border border-[#E8E1F5] dark:border-[#221B30]">
                        <div className="text-[9px] font-mono text-[#85818D] dark:text-white/50 uppercase font-bold">
                          Emerging Career Vector
                        </div>
                        <div className="text-xs font-semibold text-[#7652C8] dark:text-[#EDE7FA] mt-0.5">
                          {selectedNode.horizon}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E8E1F5] dark:border-[#221B30] mt-4">
                    <a
                      href="#sessions"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#7652C8] hover:bg-[#623cb8] active:scale-[0.97] text-white py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 shadow-sm"
                    >
                      <span>Explore Tracks for this Vector</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </motion.div>
            )}

            {/* TAB 3: First-Principles Lab */}
            {activeTab === 'quiz' && (
              <motion.div
                key="quiz"
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="p-5 sm:p-8 lg:p-10 space-y-6"
              >
                {!quizCompleted ? (
                  <>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E8E1F5] dark:border-[#221B30] pb-4">
                      <div>
                        <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-wider text-[#7652C8] dark:text-[#EDE7FA] mb-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>FIRST-PRINCIPLES CHALLENGE • QUESTION {currentQuizIndex + 1} OF {quizQuestions.length}</span>
                        </div>
                        <h3 className="text-lg sm:text-2xl font-bold font-display text-[#17151D] dark:text-white tracking-tight leading-snug">
                          {activeQuestion.question}
                        </h3>
                      </div>

                      <div className="text-xs font-mono text-[#7652C8] dark:text-[#EDE7FA] bg-[#EDE7FA] dark:bg-[#7652C8]/25 px-3 py-1 rounded-full font-bold self-start sm:self-auto">
                        Score: {quizScore} / {quizQuestions.length}
                      </div>
                    </div>

                    <div className="space-y-3 max-w-3xl">
                      {activeQuestion.options.map((option, idx) => {
                        const isSelected = selectedAnswer === idx;
                        const isCorrect = idx === activeQuestion.correctIndex;
                        const hasAnswered = selectedAnswer !== null;

                        return (
                          <button
                            key={idx}
                            onClick={() => handleSelectQuizAnswer(idx)}
                            disabled={hasAnswered}
                            className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm active:scale-[0.98] transition-all duration-150 flex items-center justify-between ${
                              hasAnswered
                                ? isCorrect
                                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500/20'
                                  : isSelected
                                  ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200'
                                  : 'opacity-50 border-[#E8E1F5] dark:border-[#2A223B]'
                                : 'bg-[#F7F4FC] dark:bg-[#181424] border-[#E8E1F5] dark:border-[#2A223B] text-[#302044] dark:text-white/90 hover:border-[#7652C8]/50'
                            }`}
                          >
                            <span className="pr-4">{option}</span>
                            {hasAnswered && isCorrect && <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
                          </button>
                        );
                      })}
                    </div>

                    {selectedAnswer !== null && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-[#EDE7FA]/70 dark:bg-[#7652C8]/20 rounded-2xl border border-[#7652C8]/30 text-xs text-[#302044] dark:text-white/90 leading-relaxed max-w-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div>
                          <span className="font-bold text-[#7652C8] dark:text-[#EDE7FA]">
                            {selectedAnswer === activeQuestion.correctIndex ? 'Correct reasoning! ' : 'Conceptual Nuance: '}
                          </span>
                          <span>{activeQuestion.explanation}</span>
                        </div>

                        <button
                          onClick={handleNextQuizQuestion}
                          className="px-4 py-2 bg-[#7652C8] hover:bg-[#623cb8] text-white rounded-xl text-xs font-semibold whitespace-nowrap self-end sm:self-auto shadow-sm"
                        >
                          {currentQuizIndex < quizQuestions.length - 1 ? 'Next Question →' : 'View Results'}
                        </button>
                      </motion.div>
                    )}
                  </>
                ) : (
                  /* Quiz Completed Score Summary */
                  <div className="text-center py-10 space-y-4 max-w-lg mx-auto">
                    <div className="w-16 h-16 rounded-full bg-[#EDE7FA] dark:bg-[#7652C8]/30 text-[#7652C8] dark:text-[#EDE7FA] flex items-center justify-center mx-auto shadow-soft">
                      <CheckCircle className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-bold font-display text-[#17151D] dark:text-white">
                      Diagnostic Challenge Complete!
                    </h3>

                    <p className="text-sm text-[#4B5563] dark:text-white/70">
                      You solved <span className="font-bold text-[#7652C8] dark:text-[#EDE7FA]">{quizScore} out of {quizQuestions.length}</span> first-principles reasoning challenges correctly.
                    </p>

                    <div className="pt-3 flex items-center justify-center gap-3">
                      <button
                        onClick={handleRestartQuiz}
                        className="px-5 py-2.5 bg-[#F7F4FC] dark:bg-[#181424] border border-[#E8E1F5] dark:border-[#2A223B] text-xs font-semibold rounded-xl hover:border-[#7652C8] transition-colors flex items-center gap-2"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Retake Challenge</span>
                      </button>

                      <a
                        href="#sessions"
                        className="px-5 py-2.5 bg-[#7652C8] text-white text-xs font-semibold rounded-xl hover:bg-[#623cb8] transition-colors"
                      >
                        Start Learning Track
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
