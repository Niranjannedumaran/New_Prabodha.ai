import React, { useState } from 'react';
import {
  Search,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  BarChart3,
  Layers,
  ArrowRight,
  TrendingUp,
  FileText,
  Clock,
  Landmark,
  Building2,
  Shield,
  Cpu
} from 'lucide-react';
import { NavigationPage, ExamSystem } from '../types';
import { EXAM_SYSTEMS } from '../data/platformData';

interface ExamIntelligencePageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenContact: () => void;
}

export const ExamIntelligencePage: React.FC<ExamIntelligencePageProps> = ({
  onNavigate,
  onOpenContact,
}) => {
  const [selectedExamId, setSelectedExamId] = useState<string>('upsc-cse');
  const [searchFilter, setSearchFilter] = useState('');
  const [activeTab, setActiveTab] = useState<'syllabus' | 'pyq' | 'readiness'>('syllabus');

  const selectedExam = EXAM_SYSTEMS.find((e) => e.id === selectedExamId) || EXAM_SYSTEMS[0];

  const filteredExams = EXAM_SYSTEMS.filter(
    (e) =>
      searchFilter === '' ||
      e.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      e.acronym.toLowerCase().includes(searchFilter.toLowerCase()) ||
      e.category.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="pt-28 pb-24 bg-[#F5F2FA] dark:bg-[#0B0A0F] text-[#110E1B] dark:text-[#F3F2F8] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE3F7]/70 dark:bg-[#201A33] border border-[#DDD2F7] dark:border-[#382B55]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7550C8] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold">
              Pillar 01 • Exam Intelligence
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-[#110E1B] dark:text-white leading-[1.08]">
            Competitive Examination <br />
            <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
              intelligence engine.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed">
            Deconstruct official syllabi, explore multi-year question topologies, and track retention decay across UPSC CSE, State PSC, RBI Grade B, SSC CGL, GATE, and CAT.
          </p>
        </div>

        {/* Exam Discovery & Filter Strip: Apple Squircle Card */}
        <div className="p-4 sm:p-5 rounded-[24px] sm:rounded-3xl bg-white/95 dark:bg-[#13121C] border border-[#E3DAF2] dark:border-[#262436] shadow-[0_4px_20px_rgba(117,80,200,0.06)] mb-8 sm:mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#7550C8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Filter examinations by name or body..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#FAF8FE] dark:bg-[#1B1927] border border-[#E3DAF2] dark:border-[#2D2A3D] text-xs text-[#110E1B] dark:text-white placeholder:text-[#585366] dark:placeholder:text-[#8E8A9E] focus:outline-none focus:border-[#7550C8]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            {filteredExams.map((e) => (
              <button
                key={e.id}
                onClick={() => setSelectedExamId(e.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium flex items-center gap-1.5 whitespace-nowrap active:scale-[0.98] ${
                  selectedExamId === e.id
                    ? 'bg-[#110E1B] dark:bg-white text-white dark:text-[#110E1B] shadow-sm font-semibold'
                    : 'bg-[#FAF8FE] dark:bg-[#1A1826] text-[#4D475B] dark:text-[#94A3B8] hover:text-[#110E1B] dark:hover:text-white border border-[#E3DAF2] dark:border-[#272537]'
                }`}
                style={{ transition: 'background-color 150ms ease, color 150ms ease' }}
              >
                <span>{e.acronym}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Examination Dossier Card: Apple Curvy Squircle Card */}
        <div className="rounded-[28px] sm:rounded-[36px] bg-white/95 dark:bg-[#13121C] border border-[#E3DAF2] dark:border-[#262436] shadow-[0_8px_30px_rgba(117,80,200,0.06)] overflow-hidden mb-16">
          
          {/* Top Info Bar */}
          <div className="p-6 sm:p-10 border-b border-[#EAE7EF] dark:border-[#242232] space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-[#EDE6FB] dark:bg-[#25203A] text-[#7550C8] dark:text-[#D5C2FF] font-semibold">
                {selectedExam.category}
              </span>
              <span className="text-[#585366] dark:text-[#9A95A8] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#7550C8]" />
                <span>{selectedExam.cadence}</span>
              </span>
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#110E1B] dark:text-white tracking-tight">
                {selectedExam.name} ({selectedExam.acronym})
              </h2>
              <p className="text-xs font-mono text-[#585366] dark:text-[#9A95A8]">
                Conducting Authority: {selectedExam.conductingBody} • Eligibility: {selectedExam.targetAudience}
              </p>
            </div>

            <p className="text-sm text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed max-w-3xl">
              {selectedExam.description}
            </p>

            {/* Key Examination Stages */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase text-[#585366] dark:text-[#9A95A8] font-bold mr-2">Evaluation Architecture:</span>
              {selectedExam.keyPhases.map((phase, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-xl bg-[#FAF8FE] dark:bg-[#1C1A28] border border-[#E3DAF2] dark:border-[#2D2A3D] text-xs font-semibold text-[#110E1B] dark:text-[#E2E8F0]"
                >
                  {phase}
                </span>
              ))}
            </div>
          </div>

          {/* Subsystem Tabs */}
          <div className="px-6 sm:px-8 border-b border-[#EAE7EF] dark:border-[#242232] flex items-center gap-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('syllabus')}
              className={`py-4 text-xs font-semibold border-b-2 whitespace-nowrap ${
                activeTab === 'syllabus'
                  ? 'border-[#7550C8] text-[#7550C8] dark:text-[#D5C2FF]'
                  : 'border-transparent text-[#585366] dark:text-[#94A3B8] hover:text-[#110E1B]'
              }`}
              style={{ transition: 'color 150ms ease, border-color 150ms ease' }}
            >
              Conceptual Syllabus Topology
            </button>

            <button
              onClick={() => setActiveTab('pyq')}
              className={`py-4 text-xs font-semibold border-b-2 whitespace-nowrap ${
                activeTab === 'pyq'
                  ? 'border-[#7550C8] text-[#7550C8] dark:text-[#D5C2FF]'
                  : 'border-transparent text-[#585366] dark:text-[#94A3B8] hover:text-[#110E1B]'
              }`}
              style={{ transition: 'color 150ms ease, border-color 150ms ease' }}
            >
              PYQ Structural Decomposition
            </button>

            <button
              onClick={() => setActiveTab('readiness')}
              className={`py-4 text-xs font-semibold border-b-2 whitespace-nowrap ${
                activeTab === 'readiness'
                  ? 'border-[#7550C8] text-[#7550C8] dark:text-[#D5C2FF]'
                  : 'border-transparent text-[#585366] dark:text-[#94A3B8] hover:text-[#110E1B]'
              }`}
              style={{ transition: 'color 150ms ease, border-color 150ms ease' }}
            >
              Aspirant Readiness Criteria
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="p-6 sm:p-10">
            
            {/* 1. SYLLABUS TOPOLOGY */}
            {activeTab === 'syllabus' && (
              <div className="space-y-6">
                <div className="text-xs text-[#585366] dark:text-[#9A95A8]">
                  Syllabi are broken down into foundational modules anchored to invariant principles.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                  {selectedExam.syllabusSlices.map((slice, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-[#FAF8FE] dark:bg-[#181624] border border-[#E3DAF2] dark:border-[#282537] space-y-4 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#7550C8] dark:text-[#B99CFF] font-bold">
                          Module 0{i + 1}
                        </span>
                        <h4 className="text-sm font-bold text-[#110E1B] dark:text-white">
                          {slice.title}
                        </h4>
                        <div className="space-y-1.5 pt-2 border-t border-[#EAE7EF] dark:border-[#262334]">
                          {slice.subtopics.map((t, idx) => (
                            <div key={idx} className="text-xs text-[#383347] dark:text-[#CBD5E1] flex items-start gap-2">
                              <span className="text-[#7550C8] font-bold">•</span>
                              <span>{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-[#EAE7EF] dark:border-[#262334] text-[11px] text-[#585366] dark:text-[#9A95A8] italic">
                        Anchor: {slice.axiomaticAnchor}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. PYQ ANALYSIS */}
            {activeTab === 'pyq' && (
              <div className="space-y-6 max-w-3xl">
                <div className="p-6 rounded-2xl bg-[#FAF8FE] dark:bg-[#181624] border border-[#E3DAF2] dark:border-[#282537] space-y-3">
                  <div className="text-xs font-mono font-bold text-[#7550C8] dark:text-[#B99CFF]">
                    {selectedExam.pyqInsights.yearSpan}
                  </div>
                  <h4 className="text-base font-bold text-[#110E1B] dark:text-white">
                    Evolution of Examination Ambiguity
                  </h4>
                  <p className="text-xs sm:text-sm text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed">
                    {selectedExam.pyqInsights.analyticalShift}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-[#151320] border border-[#E3DAF2] dark:border-[#262436] space-y-2">
                  <span className="text-xs font-mono uppercase text-[#585366] dark:text-[#9A95A8] font-bold">
                    Essential Cognitive Competency
                  </span>
                  <p className="text-xs sm:text-sm text-[#110E1B] dark:text-[#F1F5F9] font-medium leading-relaxed">
                    {selectedExam.pyqInsights.coreCompetency}
                  </p>
                </div>
              </div>
            )}

            {/* 3. READINESS CRITERIA */}
            {activeTab === 'readiness' && (
              <div className="space-y-4 max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-wider text-[#585366] dark:text-[#9A95A8] font-bold block mb-2">
                  Non-Negotiable Benchmarks for Examination Confidence
                </span>
                {selectedExam.readinessChecklist.map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#FAF8FE] dark:bg-[#181624] border border-[#E3DAF2] dark:border-[#282537] text-xs text-[#2E293B] dark:text-[#E2E8F0] font-normal flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Footer Navigation Trigger */}
          <div className="px-6 sm:px-8 py-5 bg-[#FAF8FE] dark:bg-[#161422] border-t border-[#EAE7EF] dark:border-[#242232] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-[#585366] dark:text-[#9A95A8]">
              Connect this syllabus with the Socratic AI tutoring engine
            </span>
            <button
              onClick={() => onNavigate('learning')}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#110E1B] dark:bg-white text-white dark:text-[#110E1B] hover:bg-[#7550C8] dark:hover:bg-[#EDE6FB] text-xs font-semibold flex items-center justify-center gap-1.5 shadow-soft-xs active:scale-[0.98]"
              style={{ transition: 'background-color 150ms ease, transform 100ms ease' }}
            >
              <span>Launch Socratic Tutoring</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
