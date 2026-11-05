export type NavigationPage =
  | 'home'
  | 'platform'
  | 'exams'
  | 'learning'
  | 'careers'
  | 'mentorship'
  | 'about'
  | 'updates'
  | 'company-careers'
  | 'contact';

export interface ExamSystem {
  id: string;
  name: string;
  acronym: string;
  category: string;
  conductingBody: string;
  cadence: string;
  targetAudience: string;
  description: string;
  keyPhases: string[];
  pyqInsights: {
    yearSpan: string;
    analyticalShift: string;
    coreCompetency: string;
  };
  syllabusSlices: {
    title: string;
    subtopics: string[];
    axiomaticAnchor: string;
  }[];
  readinessChecklist: string[];
}

export interface LearningEngineFeature {
  id: string;
  name: string;
  tagline: string;
  description: string;
  socraticProtocol: string;
  interfaceDemonstration: {
    prompt: string;
    traditionalCoachingResponse: string;
    socraticAiResponse: string;
    underlyingInvariant: string;
  };
}

export interface CareerIntelligenceTrack {
  id: string;
  title: string;
  domain: string;
  overview: string;
  marketReality: string;
  invariants: string[];
  competencyPillars: {
    name: string;
    proficiency: string;
    rationale: string;
  }[];
  capstoneProblemStatement: string;
}

export interface MentorshipPillar {
  id: string;
  phase: string;
  title: string;
  rationale: string;
  diagnosticAction: string;
  adaptiveOutcome: string;
}

export interface FirstPrinciplesProof {
  id: string;
  domain: string;
  problem: string;
  superficialTrick: string;
  socraticInterrogation: string;
  invariantConclusion: string;
}

export interface PlatformUpdate {
  id: string;
  date: string;
  category: 'Intelligence Engine' | 'Syllabus Topology' | 'Research Note' | 'Architecture';
  title: string;
  summary: string;
  readTime: string;
}
