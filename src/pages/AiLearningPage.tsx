import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Brain,
  MessageSquare,
  Layers,
  CheckCircle2,
  Send,
  RotateCcw,
  BookOpen,
  HelpCircle,
  Copy,
  Check,
  AlertCircle,
  Terminal,
  Activity,
  Sliders,
  Play
} from 'lucide-react';
import { NavigationPage } from '../types';
import { LEARNING_FEATURES } from '../data/platformData';
import { SpotlightCard } from '../components/SpotlightCard';
import { PhysicalAnalogySimulator } from '../components/PhysicalAnalogySimulator';

interface AiLearningPageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenContact: () => void;
}

export const AiLearningPage: React.FC<AiLearningPageProps> = ({
  onNavigate,
  onOpenContact,
}) => {
  const [selectedFeatureId, setSelectedFeatureId] = useState<string>('socratic-engine');
  const [inputQuery, setInputQuery] = useState('');
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [activeProtocolStep, setActiveProtocolStep] = useState(1);

  const selectedFeature =
    LEARNING_FEATURES.find((f) => f.id === selectedFeatureId) || LEARNING_FEATURES[0];

  const [chatMessages, setChatMessages] = useState<
    Array<{ sender: 'user' | 'ai'; text: string; tag?: string }>
  >([
    {
      sender: 'user',
      text: 'Why does a ray of light bend when entering water from air? Is it just Snell’s Law formula n1 sin θ1 = n2 sin θ2?',
    },
    {
      sender: 'ai',
      text: 'Snell’s Law is the mathematical description, not the causal reason. Imagine a four-wheeled vehicle moving from smooth dry asphalt diagonally into a deep muddy ditch. When the front-right wheel hits the mud first, what happens to its speed compared to the other three wheels?',
      tag: 'Causal Inquiry Protocol',
    },
    {
      sender: 'user',
      text: 'The front-right wheel slows down first while the others are still rolling fast. That causes the whole car to pivot and change direction.',
    },
    {
      sender: 'ai',
      text: 'Precisely. Light behaves as wavefronts following Fermat’s Principle of Least Time. Because phase velocity is lower in the denser optical medium (water), the wavefront pivots to minimize the total travel time between two boundary points. The formula n1 sin θ1 = n2 sin θ2 is just the trigonometric consequence of that single invariant.',
      tag: 'Axiomatic Breakthrough',
    },
  ]);

  const presetQueries = [
    'Deconstruct Turing Undecidability',
    'Why Basic Structure Doctrine Invariant?',
    'Yield Curve Inversion Mechanics',
    'Dynamic Programming Invariant',
  ];

  const protocolSteps = [
    { num: 1, title: 'Misconception Audit', desc: 'Isolates formula rote recall vs genuine causal deduction.' },
    { num: 2, title: 'Adversarial Pivot', desc: 'Presents an extreme boundary case where surface logic fails.' },
    { num: 3, title: 'Bedrock Discovery', desc: 'Prompts the learner to deduce the underlying invariant.' },
    { num: 4, title: 'Permanent Transfer', desc: 'Validates comprehension across 5 adjacent exam problem variants.' },
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    const userText = text;
    setInputQuery('');
    setChatMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setIsSynthesizing(true);

    setTimeout(() => {
      let aiReply = '';
      if (userText.toLowerCase().includes('turing')) {
        aiReply =
          'Consider a hypothetical machine H that accurately decides if any program halts. What happens if you build an adversarial machine D that invokes H on its own code and does the exact opposite? Does D halt or run forever?';
      } else if (userText.toLowerCase().includes('basic structure')) {
        aiReply =
          'If Parliament can amend any article under Article 368 without limit, can it pass a constitutional amendment abolishing judicial review and the Republic itself? What distinguishes constituent power from ordinary legislative power?';
      } else if (userText.toLowerCase().includes('yield curve')) {
        aiReply =
          'When central banks hike policy rates aggressively to combat inflation, short-term yields spike. Why do long-term 10-year yields stay depressed or fall? What are institutional bondholders anticipating about future GDP growth?';
      } else {
        aiReply =
          'Let us strip away the surface variables. What is the fundamental conservation law or structural invariant that cannot change regardless of boundary inputs in this scenario?';
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
    <div className="pt-28 pb-24 bg-[#F5F2FA] dark:bg-[#0B0A0F] text-[#110E1B] dark:text-[#F3F2F8] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE3F7]/70 dark:bg-[#201A33] border border-[#DDD2F7] dark:border-[#382B55]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7550C8] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold">
              Pillar 02 • AI Learning Suite
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-[#110E1B] dark:text-white leading-[1.08]">
            Socratic Tutoring & <br />
            <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
              first-principles dialogue.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed">
            Learning through guided inquiry. The engine identifies your exact misconception, poses minimal counter-examples, and guides you to discover the core invariant truth.
          </p>

          <div className="p-3.5 rounded-2xl bg-[#EDE6FB]/80 dark:bg-[#1C182A] border border-[#DDD2F7] dark:border-[#352B4D] text-xs text-[#553C8B] dark:text-[#D5C2FF] flex items-center gap-2.5">
            <AlertCircle className="w-4 h-4 text-[#7550C8] dark:text-[#B99CFF] shrink-0" />
            <span>
              <strong>Interactive Protocol Sandbox:</strong> Experience Prabodha's Socratic dialogue protocols and reasoning scaffolds.
            </span>
          </div>
        </div>

        {/* Feature Selector Tabs: Apple Curvy Cards */}
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
                className={`p-5 rounded-2xl sm:rounded-[24px] cursor-pointer text-left border ${
                  isSelected
                    ? 'bg-white dark:bg-[#151320] border-[#7550C8] shadow-[0_4px_20px_rgba(117,80,200,0.12)] ring-1 ring-[#7550C8]/20'
                    : 'bg-[#FAF8FE] dark:bg-[#12111A] border-[#E3DAF2] dark:border-[#222030] text-[#4D475B] dark:text-[#94A3B8] hover:text-[#110E1B] hover:border-[#7550C8]/40'
                }`}
                style={{ transition: 'background-color 150ms ease, border-color 150ms ease, box-shadow 150ms ease' }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono uppercase text-[#7550C8] dark:text-[#B99CFF] font-bold">
                    Protocol
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-[#7550C8] animate-pulse" />}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#110E1B] dark:text-white mb-1">
                  {feature.name}
                </div>
                <div className="text-[11px] text-[#585366] dark:text-[#94A3B8] font-normal line-clamp-1">
                  {feature.tagline}
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Protocol Deep Dive Card: Apple Curvy Squircle Card */}
        <SpotlightCard className="p-6 sm:p-10 rounded-[28px] sm:rounded-[36px] bg-white/95 dark:bg-[#13121C] border border-[#E3DAF2] dark:border-[#262436] shadow-[0_8px_30px_rgba(117,80,200,0.06)] mb-12 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EAE7EF] dark:border-[#242232] pb-5">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#7550C8] dark:text-[#B99CFF] tracking-wider font-bold">
                Selected Protocol Architecture
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#110E1B] dark:text-white">
                {selectedFeature.name}
              </h3>
            </div>
            <span className="text-xs font-mono text-[#7550C8] dark:text-[#B99CFF] bg-[#F2EDFB] dark:bg-[#201C33] px-3.5 py-1 rounded-full border border-[#DDD2F7] dark:border-[#352D4F] font-semibold self-start sm:self-auto">
              {selectedFeature.socraticProtocol.split('->')[0].trim()}...
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed">
            {selectedFeature.description}
          </p>

          {/* Sliding 4-Step Architecture Stepper */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#585366] dark:text-[#9A95A8]">
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
                    className={`p-4 rounded-xl sm:rounded-2xl text-left border ${
                      isActive
                        ? 'bg-[#FAF6FE] dark:bg-[#1E192E] border-[#7550C8] shadow-xs'
                        : 'bg-[#FAF8FE] dark:bg-[#161423] border-[#E3DAF2] dark:border-[#262436] hover:border-[#7550C8]/40'
                    }`}
                    style={{ transition: 'background-color 150ms ease, border-color 150ms ease' }}
                  >
                    <div className="flex items-center justify-between text-xs font-mono font-bold mb-1">
                      <span className={isActive ? 'text-[#7550C8] dark:text-[#B99CFF]' : 'text-[#585366] dark:text-[#8E8A9E]'}>
                        Stage 0{step.num}
                      </span>
                      {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-[#7550C8] dark:text-[#B99CFF]" />}
                    </div>
                    <div className="text-xs font-bold text-[#110E1B] dark:text-white mb-1">
                      {step.title.split('&')[0].trim()}
                    </div>
                    <p className="text-[11px] text-[#383347] dark:text-[#9490A0] font-normal line-clamp-2">
                      {step.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Physical Analogy Simulation Widget */}
          <div className="pt-2">
            <PhysicalAnalogySimulator />
          </div>
        </SpotlightCard>

        {/* Live Interactive Socratic Terminal with Apple Styling */}
        <SpotlightCard className="rounded-[28px] sm:rounded-[36px] bg-white/95 dark:bg-[#13121C] border border-[#E3DAF2] dark:border-[#262436] shadow-[0_8px_30px_rgba(117,80,200,0.06)] overflow-hidden flex flex-col min-h-[500px]">
          
          <div className="px-6 py-4 bg-[#FAF8FE] dark:bg-[#181622] border-b border-[#EAE7EF] dark:border-[#262436] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Terminal className="w-4 h-4 text-[#7550C8]" />
              <span className="text-xs font-mono font-bold text-[#110E1B] dark:text-white">
                Live Socratic Reasoning Console
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
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
                  <div className="text-[10px] text-[#585366] dark:text-[#9A95A8] mb-1 flex items-center gap-1.5 px-1 font-mono">
                    <span>{msg.sender === 'user' ? 'Inquirer' : 'Prabodha Socratic Guide'}</span>
                    {msg.tag && (
                      <span className="text-[#7550C8] dark:text-[#B99CFF] font-semibold">✦ {msg.tag}</span>
                    )}
                  </div>

                  <div
                    className={`p-4 rounded-2xl max-w-xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#110E1B] dark:bg-white text-white dark:text-[#110E1B] rounded-br-none shadow-sm'
                        : 'bg-[#FAF6FE] dark:bg-[#1B1829] text-[#110E1B] dark:text-[#F3F2F8] border border-[#E2D9F3] dark:border-[#352D4E] rounded-bl-none shadow-xs'
                    }`}
                  >
                    {msg.text}
                    {msg.sender === 'ai' && (
                      <div className="pt-2 mt-2 border-t border-[#EAE7EF] dark:border-[#2B2440] flex justify-end">
                        <button
                          onClick={() => handleCopy(i, msg.text)}
                          className="text-[10px] text-[#585366] dark:text-[#9A95A8] hover:text-[#7550C8] flex items-center gap-1"
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
                <div className="text-xs text-[#7550C8] dark:text-[#B99CFF] pl-1 font-mono flex items-center gap-2">
                  <span className="animate-pulse">●</span>
                  <span>Formulating Socratic counter-question...</span>
                </div>
              )}
            </div>

            {/* Prompt presets & input */}
            <div className="pt-4 border-t border-[#EAE7EF] dark:border-[#242232]">
              <div className="flex flex-wrap items-center gap-1.5 mb-3">
                <span className="text-[11px] text-[#585366] dark:text-[#9A95A8] mr-1 font-mono">Quick inquiries:</span>
                {presetQueries.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="text-[11px] px-3 py-1 rounded-full bg-[#FAF8FE] dark:bg-[#1A1826] border border-[#E3DAF2] dark:border-[#29263A] text-[#383347] dark:text-[#CBD5E1] hover:text-[#7550C8] hover:border-[#7550C8]/40 transition-colors"
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
                className="flex items-center gap-2 p-1.5 rounded-full bg-[#FAF8FE] dark:bg-[#1A1826] border border-[#E3DAF2] dark:border-[#29263A] focus-within:border-[#7550C8] shadow-xs"
              >
                <input
                  type="text"
                  placeholder="Ask any examination doubt or problem to deconstruct from first principles..."
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  className="flex-1 px-4 py-2 bg-transparent text-xs sm:text-sm text-[#110E1B] dark:text-white placeholder:text-[#585366] dark:placeholder:text-[#8E8A9E] focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#110E1B] dark:bg-white text-white dark:text-[#110E1B] hover:bg-[#7550C8] dark:hover:bg-[#EDE6FB] rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-soft-xs active:scale-[0.98]"
                  style={{ transition: 'background-color 150ms ease, transform 100ms ease' }}
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
