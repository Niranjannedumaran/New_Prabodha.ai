import {
  ExamSystem,
  LearningEngineFeature,
  CareerIntelligenceTrack,
  MentorshipPillar,
  FirstPrinciplesProof,
} from '../types';

// =================================================================
// 1. THE FOUR CORE PRODUCT PILLARS
// =================================================================
export const PRODUCT_PILLARS = [
  {
    id: 'exam-intelligence',
    number: '01',
    title: 'Competitive Exam Intelligence',
    subtitle: 'Syllabus Topology, PYQ Decomposition & Trend Analytics',
    description:
      'Transforms thousands of pages of official syllabi and historical question papers into interconnected conceptual topologies. Uncovers underlying question patterns, cross-subject dependencies, and high-yield cognitive invariants.',
    route: 'exams',
    capabilities: [
      'Multi-year PYQ structural trend deconstruction',
      'Cognitive difficulty & ambiguity mapping',
      'Cross-disciplinary syllabus connection graphs',
      'Targeted revision & time-decay scheduling',
    ],
  },
  {
    id: 'socratic-learning',
    number: '02',
    title: 'First-Principles AI Learning',
    subtitle: 'Active Dialogue, Intuitive Analogies & Root-Cause Tutoring',
    description:
      'Rather than presenting answers to memorize, our Socratic engine poses guided counter-questions. It diagnoses the exact premise where your mental model broke down and steers you to discover the solution from elementary axioms.',
    route: 'learning',
    capabilities: [
      'Socratic dialogue protocols that discourage memorization',
      'Interactive mathematical & physical invariants',
      'Document intelligence & policy paper synthesis',
      'Automated error diagnosis from mock attempts',
    ],
  },
  {
    id: 'career-intelligence',
    number: '03',
    title: 'Career & Industry Intelligence',
    subtitle: 'Skill-Gap Audits, Real Problem Statements & Trajectory Maps',
    description:
      'Bridges graduate qualifications with frontier industry demands. Analyzes technical job specifications, identifies invariant foundational competencies, and provides production-grade capstone blueprints.',
    route: 'careers',
    capabilities: [
      'Dynamic skill-gap audits for graduate roles',
      'Architectural blueprint & capstone curation',
      'Quantitative aptitude & technical interview simulation',
      'Long-term technical trajectory forecasting',
    ],
  },
  {
    id: 'ai-mentorship',
    number: '04',
    title: 'Personalised AI Mentorship',
    subtitle: 'Milestone Calibration, Blind-Spot Detection & Cognitive Guidance',
    description:
      'An intelligent longitudinal mentor that tracks your conceptual progress across months. Identifies learning fatigue, cognitive biases, and retention decay, dynamically adjusting preparation pacing to your mental state.',
    route: 'mentorship',
    capabilities: [
      'Adaptive milestone calibration based on true comprehension',
      'Blind-spot detection across complex problem sets',
      'Spaced repetition schedules grounded in cognitive science',
      'Calm, focused guidance without pressure or anxiety',
    ],
  },
];

// =================================================================
// 2. COMPETITIVE EXAM INTELLIGENCE SYSTEMS
// =================================================================
export const EXAM_SYSTEMS: ExamSystem[] = [
  {
    id: 'upsc-cse',
    name: 'Civil Services Examination',
    acronym: 'UPSC CSE',
    category: 'Civil Services & Public Administration',
    conductingBody: 'Union Public Service Commission',
    cadence: 'Annual (Prelims: May/June • Mains: September)',
    targetAudience: 'Graduates across all academic disciplines',
    description:
      'Evaluates administrative judgment, multi-dimensional policy comprehension, constitutional literacy, and ethical decision-making under high analytical ambiguity.',
    keyPhases: ['Preliminary GS & CSAT', 'Mains 9 Descriptive Papers', 'Personality Test & Viva Voce'],
    pyqInsights: {
      yearSpan: '2014 – 2025 Trend Evolution',
      analyticalShift:
        'Substantial shift away from isolated factual questions toward multi-statement constitutional synthesis, macroeconomic policy tradeoffs, and inter-connected environmental jurisprudence.',
      coreCompetency:
        'Axiomatic understanding of constitutional basic structure, fiscal governance, and administrative problem-solving.',
    },
    syllabusSlices: [
      {
        title: 'Polity, Governance & Constitutional Law',
        subtopics: [
          'Constituent Power vs Ordinary Legislative Power',
          'Judicial Review & Federal Separation of Powers',
          'Statutory Regulatory Bodies & Administrative Discretion',
        ],
        axiomaticAnchor: 'Democratic Constitutionalism & Rule of Law',
      },
      {
        title: 'Indian Economy & Macro-Fiscal Architecture',
        subtopics: [
          'Monetary Transmission & Inflation Dynamics',
          'Fiscal Federalism, GST Architecture & Finance Commission',
          'External Sector, Capital Account Convertibility & Balance of Payments',
        ],
        axiomaticAnchor: 'Macroeconomic Equilibrium & Resource Allocation',
      },
      {
        title: 'Ethics, Integrity & Administrative Aptitude',
        subtopics: [
          'Ethical Dilemmas in Public Administration',
          'Probity in Governance & Conflict of Interest Mitigation',
          'Multi-Stakeholder Case Analysis Protocols',
        ],
        axiomaticAnchor: 'Deontological and Utilitarian Public Welfare Invariants',
      },
    ],
    readinessChecklist: [
      'Mastery of foundational NCERT conceptual primitives across history, geography, and economics',
      'Ability to outline a 250-word multi-stakeholder argument in under 7 minutes',
      'Systematic tracking of national legal precedents and statutory enactments',
    ],
  },
  {
    id: 'rbi-grade-b',
    name: 'Reserve Bank of India Grade B',
    acronym: 'RBI Grade B',
    category: 'Financial Regulators & Central Banking',
    conductingBody: 'Reserve Bank of India Services Board',
    cadence: 'Annual Phase 1 & Phase 2',
    targetAudience: 'Graduates (Minimum 60% aggregate)',
    description:
      'Evaluates deep macroeconomic intuition, monetary policy mechanisms, financial market structures, and high-difficulty deductive quantitative aptitude.',
    keyPhases: ['Phase 1 Online Objective Screening', 'Phase 2 ESI, FM & English Descriptive', 'Interview'],
    pyqInsights: {
      yearSpan: '2016 – 2025 Regulatory Trajectory',
      analyticalShift:
        'Phase 2 Economic & Social Issues (ESI) questions increasingly demand analytical assessments of global liquidity cycles, non-banking financial regulation, and fiscal deficits rather than textbook definitions.',
      coreCompetency:
        'Understanding central bank balance sheets, interest rate pass-through, and financial risk governance.',
    },
    syllabusSlices: [
      {
        title: 'Economic & Social Issues (ESI)',
        subtopics: [
          'National Income Measurement & Growth Disparities',
          'Sustainable Development Goals & Demographic Shifts',
          'Multilateral Economic Frameworks (IMF, World Bank, WTO)',
        ],
        axiomaticAnchor: 'Economic Invariants & Social Welfare Equations',
      },
      {
        title: 'Finance & Financial System Governance',
        subtopics: [
          'Structure & Regulation of Primary and Secondary Capital Markets',
          'Derivatives, Yield Curves & Corporate Debt Instruments',
          'Banking Regulation Act, Basel III Norms & Insolvency Frameworks',
        ],
        axiomaticAnchor: 'Financial Intermediation & Systemic Risk Insulation',
      },
      {
        title: 'Management & Organizational Dynamics',
        subtopics: [
          'Leadership Models & Behavioral Economics in Decision Making',
          'Corporate Governance & Corporate Social Responsibility',
          'Strategic Change Management in Public Institutions',
        ],
        axiomaticAnchor: 'Organizational Systems Architecture',
      },
    ],
    readinessChecklist: [
      'Ability to interpret Monetary Policy Committee (MPC) bi-monthly resolutions',
      'Proficiency in fast mental calculation and data caselet synthesis under strict sectional timing',
      'Structured descriptive typing fluency for Phase 2 written submissions',
    ],
  },
  {
    id: 'ssc-cgl',
    name: 'Combined Graduate Level Examination',
    acronym: 'SSC CGL',
    category: 'Central Administration & Executive Services',
    conductingBody: 'Staff Selection Commission',
    cadence: 'Annual Tier 1 & Tier 2',
    targetAudience: 'Graduates in any discipline',
    description:
      'Assesses mathematical precision, spatial reasoning, algorithmic arithmetic, grammatical logic, and general administrative awareness.',
    keyPhases: ['Tier 1 Computer-Based Screening', 'Tier 2 Mathematical, Reasoning & English Evaluation'],
    pyqInsights: {
      yearSpan: '2017 – 2025 Paper Modernization',
      analyticalShift:
        'With the modernized Tier 2 pattern, rote formula tricks fail on advanced multi-step geometry and algebra questions. Success requires invariant geometric proofs and structural number theory.',
      coreCompetency:
        'Speed, computational accuracy, and deducing geometric properties from minimal constraints.',
    },
    syllabusSlices: [
      {
        title: 'Mathematical Invariants & Quantitative Logic',
        subtopics: [
          'Euclidean Geometry Theorems (Circles, Tangents, Similarities)',
          'Polynomial Symmetries, Functional Roots & Modular Arithmetic',
          'Exponential Growth Invariants (Compounding vs Linear Progression)',
        ],
        axiomaticAnchor: 'Geometric & Algebraic Bedrock Proofs',
      },
      {
        title: 'Reasoning & Deductive Intelligence',
        subtopics: [
          'Syllogistic Deduction & Set Inclusion Invariants',
          'Spatial Matrix Transformation & Rotational Symmetry',
          'Logical Boundary Constraint Elimination',
        ],
        axiomaticAnchor: 'First-Order Deductive Logic',
      },
      {
        title: 'Linguistic Logic & English Comprehension',
        subtopics: [
          'Structural Syntax Trees & Clause Dependents',
          'Inference Extraction from Dense Non-Fiction Passages',
          'Contextual Semantic Disambiguation',
        ],
        axiomaticAnchor: 'Formal Linguistic Logic',
      },
    ],
    readinessChecklist: [
      'Solving 30 quantitative problems in under 25 minutes without paper scratchwork for arithmetic',
      'Understanding the derivation of every Euclidean theorem without memorized formulas',
      'Mastery of computer fundamentals and automated spreadsheet logic for Tier 2',
    ],
  },
  {
    id: 'gate-cs',
    name: 'Graduate Aptitude Test in Engineering',
    acronym: 'GATE CS',
    category: 'Engineering & Computing Systems',
    conductingBody: 'Indian Institute of Science & IITs',
    cadence: 'Annual (February)',
    targetAudience: 'B.Tech / B.E. / MCA / M.Sc. Computing Candidates',
    description:
      'Tests deep theoretical understanding of discrete mathematics, automata, algorithm complexity, memory hierarchies, and compiler design.',
    keyPhases: ['Single Comprehensive Computer-Based Examination (100 Marks)'],
    pyqInsights: {
      yearSpan: '1990 – 2025 Archive Synthesis',
      analyticalShift:
        'Increasing proportion of Multi-Select Questions (MSQs) requiring rigorous edge-case verification across Turing decidability, graph diameter bounds, and cache coherency.',
      coreCompetency:
        'Mathematical proof construction, asymptotic thinking, and machine state visualization.',
    },
    syllabusSlices: [
      {
        title: 'Theory of Computation & Discrete Mathematics',
        subtopics: [
          'Formal Language Hierarchies (Chomsky Classification)',
          'Turing Undecidability, Reductions & Rice’s Theorem',
          'Combinatorics, Graph Theory & Propositional Logic',
        ],
        axiomaticAnchor: 'Mathematical Computability & Formal Proofs',
      },
      {
        title: 'Algorithms & Data Structures',
        subtopics: [
          'Asymptotic Complexity, Recurrence Relations & Master Theorem',
          'Dynamic Programming Subproblem Topology & Graph Shortest Paths',
          'NP-Completeness, Circuit Satisfiability & Approximation Ratios',
        ],
        axiomaticAnchor: 'Optimal Substructure & Resource Efficiency',
      },
      {
        title: 'Computer Systems Architecture & OS Internals',
        subtopics: [
          'Pipelining Hazards, Branch Prediction & Out-of-Order Execution',
          'Virtual Memory Translation, TLB Walkers & Cache Miss Latencies',
          'Concurrency Primitives, Deadlock Conditions & Memory Barriers',
        ],
        axiomaticAnchor: 'Physical Hardware Constraints & Abstraction Layers',
      },
    ],
    readinessChecklist: [
      'Ability to formalize any English statement into first-order predicate logic',
      'Trace state transitions of non-deterministic automata without ambiguity',
      'Calculate effective memory access times across multi-level cache hierarchies',
    ],
  },
  {
    id: 'cat-mgmt',
    name: 'Common Admission Test',
    acronym: 'CAT',
    category: 'Management Analytics & Business Decision Systems',
    conductingBody: 'Indian Institutes of Management (IIMs)',
    cadence: 'Annual (November)',
    targetAudience: 'Graduates & Final-Year University Scholars',
    description:
      'Measures critical reading, analytical structural reasoning, multi-variable scenario modeling, and quantitative problem selection under time constraints.',
    keyPhases: ['Sectional Computer-Based Examination (VARC, DILR, QA)'],
    pyqInsights: {
      yearSpan: '2015 – 2025 Multi-Slot Analysis',
      analyticalShift:
        'Data Interpretation and Logical Reasoning (DILR) sets have completely abandoned standard bar-charts in favor of complex unstructured mathematical puzzle caselets requiring constraint satisfaction.',
      coreCompetency:
        'Problem selection triage, structural reading comprehension, and constraint optimization.',
    },
    syllabusSlices: [
      {
        title: 'Verbal Ability & Reading Comprehension (VARC)',
        subtopics: [
          'Author Stance, Underlying Presuppositions & Tone Analysis',
          'Argument Structure, Counter-Premise Identification & Flaw Testing',
          'Paragraph Completion & Context Invariant Coherence',
        ],
        axiomaticAnchor: 'Epistemology & Critical Discourse Analysis',
      },
      {
        title: 'Data Interpretation & Logical Reasoning (DILR)',
        subtopics: [
          'Multi-Dimensional Matrix Matching & Constraint Elimination',
          'Game Theory, Tournament Scheduling & Optimal Strategies',
          'Set Theory Venn Topologies with 4 or More Variables',
        ],
        axiomaticAnchor: 'Constraint Satisfaction & Combinatorial Logic',
      },
      {
        title: 'Quantitative Aptitude (QA)',
        subtopics: [
          'Number Systems & Invariant Modular Remainders',
          'Algebraic Functions, Minima-Maxima & Coordinate Symmetry',
          'Modern Mathematics, Probability & Symmetry Corrections',
        ],
        axiomaticAnchor: 'Mathematical Invariance & Elegance',
      },
    ],
    readinessChecklist: [
      'Reading 800-word philosophical or economics texts and answering inference questions with 85%+ accuracy',
      'DILR set triage: accurately predicting which 2 sets out of 4 are solvable in 20 minutes',
      'Solving QA problems using boundary values and dimensional analysis',
    ],
  },
];

// =================================================================
// 3. AI LEARNING ENGINE CAPABILITIES
// =================================================================
export const LEARNING_FEATURES: LearningEngineFeature[] = [
  {
    id: 'socratic-tutor',
    name: 'The Socratic Dialogue Protocol',
    tagline: 'Active Inquiry Instead of Passive Solution Copying',
    description:
      'When an aspirant submits a doubt or mock test mistake, conventional tools dump the final equation. Prabodha AI asks a sequence of targeted questions that force the learner to notice their own contradictory assumption.',
    socraticProtocol:
      '1. Parse student inquiry -> 2. Identify faulty implicit premise -> 3. Formulate minimal counter-example -> 4. Guide student to discover invariant truth.',
    interfaceDemonstration: {
      prompt: 'Why does light bend when entering glass from air? Does it just get tired?',
      traditionalCoachingResponse:
        'Apply Snell’s law: n1*sin(θ1) = n2*sin(θ2). The refractive index of glass is higher so the angle decreases toward the normal.',
      socraticAiResponse:
        'Imagine you are pulling a cart across smooth asphalt, and the right wheel suddenly hits thick mud while the left wheel is still on asphalt. Which wheel slows down first? How does that change the cart’s heading?',
      underlyingInvariant:
        'Fermat’s Principle of Least Time: refraction is the natural consequence of wave speed differential across a boundary, not a mysterious formula.',
    },
  },
  {
    id: 'first-principles-deconstruction',
    name: 'First-Principles Deconstruction',
    tagline: 'Stripping Away 300 Memorized Formulae for 3 Axiomatic Laws',
    description:
      'Transforms overwhelming subject curricula into a sparse directed graph of elementary invariants. Once you grasp the invariant, thousands of derivative formula variants become self-evident.',
    socraticProtocol:
      'Reduce every problem to Conservation Laws, Geometric Symmetries, or Axiomatic Definitions.',
    interfaceDemonstration: {
      prompt: 'How do I memorize the 12 formulas for time and work problems with pipes and cisterns?',
      traditionalCoachingResponse:
        'Use Formula 4 for inlet pipes: 1/A + 1/B. For outlet pipes use Formula 7: 1/A - 1/B. If pipe C operates alternate hours, use formula 11.',
      socraticAiResponse:
        'What is a "rate"? If one worker does 1 job in 4 hours, what fraction do they complete in one hour? If another worker empties 1 job in 6 hours, what is their net addition in that same hour? Why would you need a separate formula for a pipe versus a human worker?',
      underlyingInvariant:
        'Rates of independent agents are purely additive linear scalars: Net Rate = Σ(Inflows) - Σ(Outflows). There is only one equation.',
    },
  },
  {
    id: 'document-intelligence',
    name: 'Document & Policy Intelligence',
    tagline: 'Instant Decomposition of 500-Page Reports, Bills & Court Rulings',
    description:
      'Designed for competitive exam preparation where national economic surveys, Law Commission reports, and constitutional judgments must be synthesized with razor-sharp analytical precision.',
    socraticProtocol:
      'Isolates constitutional anchors, empirical datasets, and policy counter-arguments automatically.',
    interfaceDemonstration: {
      prompt: 'Summarize the 300-page Economic Survey chapter on Fiscal Consolidation for UPSC Mains.',
      traditionalCoachingResponse:
        'A generic 10-bullet summary repeating GDP growth estimates and headline deficit percentages.',
      socraticAiResponse:
        'Here is the structural policy dilemma: 1. The Fiscal Anchor (Debt-to-GDP vs Deficit Target); 2. Quality of Expenditure (Capital Capex Multiplier 2.45 vs Revenue Consumption Multiplier 0.98); 3. Counter-cyclical Policy Tradeoff during inflation. Three primary analytical questions framed for GS Paper 3.',
      underlyingInvariant:
        'Fiscal policy is not accounting arithmetic; it is the strategic inter-temporal balancing of sovereign borrowing against public productive capital.',
    },
  },
  {
    id: 'diagnostic-retrieval',
    name: 'Adaptive Diagnostic Retrieval',
    tagline: 'Cognitive Science-Backed Memory Consolidation',
    description:
      'Replaces static flashcards with dynamic retrieval drills. The system tests concepts at the exact moment your memory trace begins to destabilize, ensuring long-term retention over multi-year preparation.',
    socraticProtocol:
      'Calculates retention decay rates based on problem complexity and prior revision accuracy.',
    interfaceDemonstration: {
      prompt: 'Review Schedule for Constitutional Articles and Judicial Precedents',
      traditionalCoachingResponse:
        'Revise all 395 articles every Sunday morning from a printed booklet.',
      socraticAiResponse:
        'Your recall for Fundamental Rights (Part III) is solid (94% retention). However, your distinction between Article 26(b) and Article 25(1) public order constraints decayed 38% since last Wednesday. Here is one scenario question targeting that exact nuance.',
      underlyingInvariant:
        'Targeted active retrieval on destabilized memory traces strengthens neural pathways 4x faster than passive re-reading.',
    },
  },
];

// =================================================================
// 4. CAREER INTELLIGENCE TRACKS
// =================================================================
export const CAREER_TRACKS: CareerIntelligenceTrack[] = [
  {
    id: 'ai-systems-engineer',
    title: 'AI Systems & Evaluation Engineer',
    domain: 'Applied Artificial Intelligence & Systems Architecture',
    overview:
      'Engineers who bridge mathematical foundational models with high-reliability enterprise production. Focuses on evaluation harnesses, deterministic agent workflows, and model quantization.',
    marketReality:
      'The industry has moved beyond toy prompt engineering. Enterprise demand centers on engineers who understand model latency budgets, synthetic data generation, and deterministic verification.',
    invariants: [
      'High-dimensional vector geometry & cosine distance metrics',
      'Asymmetric information retrieval & vector indexing tradeoffs',
      'Deterministic state machines driving autonomous agent actions',
      'Rigorous statistical evaluation benchmarks (MMLU, HumanEval, Domain Benchmarks)',
    ],
    competencyPillars: [
      { name: 'Model Evaluation & Benchmarking', proficiency: 'Advanced', rationale: 'Preventing silent drift and hallucinations in production workflows' },
      { name: 'RAG Pipeline Optimization', proficiency: 'Mastery', rationale: 'Chunking topologies, hybrid lexical/semantic search, and re-ranking architectures' },
      { name: 'Agentic Tool Calling', proficiency: 'Intermediate', rationale: 'Structured JSON schema outputs and multi-step backtracking controllers' },
    ],
    capstoneProblemStatement:
      'Build a deterministic Socratic evaluation harness that evaluates whether an educational tutor gave away the solution or successfully guided the student to the answer.',
  },
  {
    id: 'distributed-systems-architect',
    title: 'High-Scale Distributed Systems Architect',
    domain: 'Cloud Systems, Consensus & Data Infrastructure',
    overview:
      'Engineers who design fault-tolerant, high-throughput backend backbones capable of processing millions of concurrent events across geographically distributed data centers.',
    marketReality:
      'Microservice proliferation has created crippling operational complexity. Companies prioritize engineers who understand consensus algorithms, asynchronous state consistency, and latency tails.',
    invariants: [
      'CAP Invariant: balancing consistency, availability, and partition tolerance',
      'Distributed consensus protocols (Raft, Paxos, Vector Clocks)',
      'Database storage engines (LSM Trees vs B+ Trees)',
      'Event streaming & idempotent message consumers',
    ],
    competencyPillars: [
      { name: 'Consensus & State Replication', proficiency: 'Mastery', rationale: 'Building fault-tolerant cluster controllers' },
      { name: 'Database Internal Architectures', proficiency: 'Advanced', rationale: 'Optimizing disk write amplification and memory page lookups' },
      { name: 'Telemetry & P99 Latency Control', proficiency: 'Advanced', rationale: 'Diagnosing head-of-line blocking in asynchronous systems' },
    ],
    capstoneProblemStatement:
      'Design a geo-distributed mock examination testing engine that guarantees zero state loss and sub-20ms submission latency during concurrent 500,000-user examinations.',
  },
  {
    id: 'quantitative-decision-scientist',
    title: 'Quantitative Decision Scientist',
    domain: 'Empirical Econometrics, Risk Modeling & Market Design',
    overview:
      'Professionals who apply rigorous statistical econometrics and causal inference to large-scale business and economic decision-making.',
    marketReality:
      'Correlational machine learning often misguides strategic decisions. Organizations demand causal inference specialists who can isolate true causal treatment effects.',
    invariants: [
      'Causal Inference & Instrumental Variables',
      'Bayesian Probability & Uncertainty Quantification',
      'Game Theoretic Mechanism Design',
      'Time-Series Econometrics & Volatility Modeling',
    ],
    competencyPillars: [
      { name: 'Quasi-Experimental Design', proficiency: 'Mastery', rationale: 'Difference-in-differences and regression discontinuity studies' },
      { name: 'Bayesian Risk Modeling', proficiency: 'Advanced', rationale: 'Quantifying catastrophic tail risk under sparse empirical data' },
      { name: 'Mechanism Design & Auctions', proficiency: 'Intermediate', rationale: 'Creating incentive-compatible market allocation mechanisms' },
    ],
    capstoneProblemStatement:
      'Quantify the causal economic impact of digital public infrastructure adoption on regional formal credit access using state-level panel datasets.',
  },
];

// =================================================================
// 5. AI MENTORSHIP FRAMEWORK
// =================================================================
export const MENTORSHIP_PILLARS: MentorshipPillar[] = [
  {
    id: 'cognitive-diagnostic',
    phase: 'Phase 01',
    title: 'Cognitive Baseline & Misconception Audit',
    rationale:
      'Identifies whether a student’s recurrent errors stem from vocabulary confusion, missing mathematical primitives, or test-taking anxiety.',
    diagnosticAction:
      'Analyzes response latency and elimination patterns across 20 diagnostic first-principles questions.',
    adaptiveOutcome:
      'Generates a calibrated conceptual graph highlighting verified invariants versus brittle memory zones.',
  },
  {
    id: 'milestone-calibration',
    phase: 'Phase 02',
    title: 'Longitudinal Milestone Calibration',
    rationale:
      'Traditional timetables assume equal progress every week. Prabodha adjusts preparation roadmaps dynamically based on true concept mastery.',
    diagnosticAction:
      'Continuously updates estimated time-to-mastery as you interact with the Socratic platform.',
    adaptiveOutcome:
      'Prevents cognitive overload by redistributing complex chapters when mental fatigue is detected.',
  },
  {
    id: 'blind-spot-remediation',
    phase: 'Phase 03',
    title: 'Subconscious Blind-Spot Remediation',
    rationale:
      'Students frequently over-practice concepts they already understand while avoiding their uncomfortable conceptual weaknesses.',
    diagnosticAction:
      'Detects avoidance behaviors and gently scaffolds targeted inquiry in under-practiced areas.',
    adaptiveOutcome:
      'Builds balanced, resilient examination confidence without false security.',
  },
  {
    id: 'calm-pacing-reflection',
    phase: 'Phase 04',
    title: 'Reflective Synthesis & Calm Pacing',
    rationale:
      'High-stakes preparation is emotionally demanding. Mentorship includes mindful progress reflection and anxiety reduction.',
    diagnosticAction:
      'Conducts bi-weekly Socratic reflection dialogues on learning habits, focus sustainability, and strategic mindset.',
    adaptiveOutcome:
      'Fosters emotional resilience and long-term intellectual calm essential for peak performance.',
  },
];

// =================================================================
// 6. FIRST-PRINCIPLES CONCEPT PROOFS (For Live Interactive Engine)
// =================================================================
export const FIRST_PRINCIPLES_PROOFS: FirstPrinciplesProof[] = [
  {
    id: 'constitutional-basic-structure',
    domain: 'UPSC Civil Services • Constitutional Law',
    problem: 'Can Parliament amend Article 368 to make all constitutional provisions amendable without judicial review?',
    superficialTrick:
      'Memorize that Kesavananda Bharati case established basic structure and read the list of non-amendable features.',
    socraticInterrogation:
      'Consider the difference between a creator and its created agent. If the Constitution created Parliament under Article 79 and gave it amending power under Article 368, is Parliament the original constituent sovereign, or a delegated creature of the Constitution? Can a delegated agent expand the terms of its own authority to destroy its creator?',
    invariantConclusion:
      'An amendment power is by definition intra-constitutional, not extra-constitutional. A power to amend the document cannot logically include the power to destroy the foundational axioms that legitimize the amending power itself. The Basic Structure is a logical axiom of delegated authority.',
  },
  {
    id: 'quantitative-invariants-exponential',
    domain: 'Banking & Central Services • Quantitative Logic',
    problem: 'Why do compound interest and simple interest diverge by exactly P · r² in year two?',
    superficialTrick:
      'Memorize formula: Difference = P · (R/100)² for two years and Difference = P · (R/100)² · (3 + R/100) for three years.',
    socraticInterrogation:
      'In year one, both simple interest and compound interest earn interest on the initial principal P. In year two, simple interest again earns interest ONLY on P. But under compounding, what new amount exists at the start of year two that was not there at the start of year one? What interest does that new amount earn?',
    invariantConclusion:
      'The difference is simply the interest earned on year one’s interest: (P · r) · r = P · r². Compounding is purely discrete geometric progression. With this invariant, 3-year, 4-year, and fractional rate differences can be calculated mentally without polynomials.',
  },
  {
    id: 'computation-turing-halting',
    domain: 'GATE Computer Science • Automata Theory',
    problem: 'Why can no algorithm determine whether an arbitrary computer program terminates?',
    superficialTrick:
      'Remember that the Halting Problem is recursively enumerable (RE) but undecidable, and quote Rice’s Theorem.',
    socraticInterrogation:
      'Assume a decider algorithm H(P, I) exists that returns TRUE if program P halts on input I, and FALSE if it loops forever. Can we construct a new program D that calls H(D, D)? If H says D halts, D enters an infinite loop. If H says D loops, D immediately halts. What happens when we run D on itself?',
    invariantConclusion:
      'If H says D halts, it loops (contradiction). If H says D loops, it halts (contradiction). Therefore, the initial assumption that algorithm H can exist is false. This is the diagonal contradiction invariant that governs all computability.',
  },
  {
    id: 'combinatorics-symmetry-correction',
    domain: 'CAT Analytics • Modern Mathematics',
    problem: 'Why is the number of combinations of n objects taken r at a time equal to n! / (r! · (n-r)!)?',
    superficialTrick:
      'Plug numbers into formula nCr = n! / (r!(n-r)!) whenever the question says "select" instead of "arrange".',
    socraticInterrogation:
      'If you have 5 runners and want to assign 1st, 2nd, and 3rd place, there are 5 × 4 × 3 = 60 possibilities (order matters). But if you just want to select 3 runners to represent the team, does the order in which they were named change the team? In how many different ways can the SAME 3 runners be arranged?',
    invariantConclusion:
      'Any 3 selected objects have 3! = 6 internal orderings. Therefore, the ordered count (60) overcounted the actual distinct teams by exactly a factor of 6. A combination is simply an arrangement divided by its internal symmetry group r!. It is an overcounting correction invariant.',
  },
];

