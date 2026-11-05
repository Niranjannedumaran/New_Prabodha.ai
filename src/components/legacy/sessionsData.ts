import { SessionItem, FirstPrinciplesConcept, AspirantGoal } from '../types';

export type { SessionItem };
export type BatchItem = SessionItem;

// 1. PRIMARY TARGET EXAM GOALS (Graduate & Professional Level)
export const ASPIRANT_GOALS: AspirantGoal[] = [
  {
    id: 'upsc-psc',
    label: 'UPSC & State PSC',
    fullName: 'Civil Services Examination & State Public Service Commissions',
    description: 'Polity, Governance, Economy, Modern History & Analytical Essay Writing from Constitutional Axioms.',
    iconName: 'Landmark',
    examFrequency: 'Annual • Prelims & Mains',
    eligibility: 'Graduates in any discipline',
  },
  {
    id: 'banking-rbi',
    label: 'Banking & RBI Grade B',
    fullName: 'Reserve Bank of India Grade B, SBI PO & IBPS Probationary Officers',
    description: 'Economic & Social Issues, Financial Management, Quantitative Speed & Deductive Reasoning.',
    iconName: 'Building2',
    examFrequency: 'Bi-Annual / Annual',
    eligibility: 'Graduates (60%+ for RBI Grade B)',
  },
  {
    id: 'ssc-central',
    label: 'SSC CGL & Central Exams',
    fullName: 'Staff Selection Commission - Combined Graduate Level',
    description: 'Mathematical intuition without memorizing 200 tricks, Logical Reasoning & Comprehension.',
    iconName: 'Shield',
    examFrequency: 'Annual Tier 1 & 2',
    eligibility: 'Graduates in any discipline',
  },
  {
    id: 'gate-cs',
    label: 'GATE (CS & Tech)',
    fullName: 'Graduate Aptitude Test in Engineering (Computer Science & IT)',
    description: 'Discrete Mathematics, Algorithms, Theory of Computation & Operating System Internals.',
    iconName: 'Cpu',
    examFrequency: 'Annual (February)',
    eligibility: 'B.Tech / B.E / MCA / M.Sc students & graduates',
  },
  {
    id: 'cat-mgmt',
    label: 'CAT & Management',
    fullName: 'Common Admission Test (IIMs & Top Business Schools)',
    description: 'Quantitative Aptitude, Data Interpretation, Logical Reasoning & Verbal Ability.',
    iconName: 'TrendingUp',
    examFrequency: 'Annual (November)',
    eligibility: 'Graduates with 50%+ marks',
  },
  {
    id: 'ai-career',
    label: 'AI & Career Foundations',
    fullName: 'Frontier AI Systems, Quantitative Modeling & Career Accelerators',
    description: 'First-principles systems engineering, model evaluation, and technical portfolio development.',
    iconName: 'Sparkles',
    examFrequency: 'Rolling Cohorts',
    eligibility: 'Students, Graduates & Working Professionals',
  },
];

// 2. VERIFIED GRADUATE & COMPETITIVE EXAM BATCHES
export const FEATURED_SESSIONS: SessionItem[] = [
  // UPSC & STATE PSC
  {
    id: 'upsc-polity-economy-foundations',
    title: 'UPSC CSE: Constitutional Law, Governance & Macro-Economy Axioms',
    category: 'UPSC & State PSC',
    targetExam: 'UPSC CSE 2026/2027 & State PSCs',
    eligibility: 'Graduates & Final-Year College Students',
    level: 'Foundational',
    duration: '9-Month Comprehensive Cohort • 220 Interactive Lectures',
    instructor: 'Prabodha Civil Services Faculty Cell',
    instructorRole: 'Former Civil Servants & Academic Constitutional Jurists',
    rating: 4.96,
    studentsCount: 'Cohort Enrolling',
    thumbnail: '/assets/mascots/student-learning-bench.jpg',
    isLive: true,
    startDate: 'Batch Starts 15th of Every Month',
    price: '₹14,999',
    originalPrice: '₹28,000',
    discountBadge: 'Founding Cohort',
    practiceSetsCount: '150+ Analytical Answer-Writing Evaluators with Socratic Feedback',
    hasSocraticGuide: true,
    tags: ['Constitutional Articles', 'Macroeconomic Models', 'Socratic Mains Answer Feedback'],
    description:
      'Learn Indian Polity and Economy not by memorizing articles in isolation, but by tracing constitutional philosophy from fundamental rights to federal architecture. Every topic is linked with real judicial precedents and economic policy axioms.',
    syllabusModules: [
      { title: 'Module 1: Constitutional Philosophy & Fundamental Framework', hours: '40 Hours', topics: ['Preamble & Basic Structure Doctrine', 'Fundamental Rights vs Directive Principles', 'Emergency Provisions & Federal Balance'] },
      { title: 'Module 2: Indian Economy & Fiscal Architecture', hours: '45 Hours', topics: ['Monetary Policy & Inflation Dynamics', 'Fiscal Federalism & GST Council', 'Balance of Payments & Capital Accounts'] },
      { title: 'Module 3: Socratic Mains Answer Writing & Ethics', hours: '35 Hours', topics: ['Structuring Multi-Dimensional Arguments', 'Case Studies in Public Administration', 'PYQ Trend Deconstruction (2014-2025)'] },
    ],
  },

  // BANKING & RBI GRADE B
  {
    id: 'rbi-grade-b-banking-mastery',
    title: 'RBI Grade B & Financial Regulatory Officers: Economic Systems & Analytics',
    category: 'Banking & Financial (RBI/IBPS)',
    targetExam: 'RBI Grade B Phase 1 & 2 • SBI PO • NABARD',
    eligibility: 'Graduates (60%+ Aggregate)',
    level: 'Advanced',
    duration: '6-Month Rigorous Track • 160 Live Interactive Sessions',
    instructor: 'Economic Research & Banking Practice Cell',
    instructorRole: 'Ex-Central Bankers & Financial Economists',
    rating: 4.95,
    studentsCount: 'Cohort Enrolling',
    thumbnail: '/assets/mascots/student-stand-thumb.png',
    isLive: true,
    startDate: 'Live Daily • 7:00 PM',
    price: '₹11,999',
    originalPrice: '₹22,000',
    discountBadge: 'Phase 1 + 2 Complete',
    practiceSetsCount: '80+ Full-Length Adaptive Timed Tests with Error Diagnostics',
    hasSocraticGuide: true,
    tags: ['Economic & Social Issues', 'Finance & Management', 'Quantitative Speed Without Rote'],
    description:
      'Master Phase 1 Quantitative Aptitude, Logical Reasoning, and Phase 2 ESI & FM papers. Built for working professionals and ambitious graduates who need deep conceptual clarity in macroeconomics, banking regulations, and corporate finance.',
    syllabusModules: [
      { title: 'Module 1: Economic & Social Issues (ESI)', hours: '35 Hours', topics: ['Measurement of Growth & National Income', 'Poverty Alleviation & Sustainable Development', 'International Economic Institutions'] },
      { title: 'Module 2: Financial Management & Markets', hours: '40 Hours', topics: ['Indian Financial System Structure', 'Derivatives, Bonds & Money Market Instruments', 'Corporate Governance in Banking'] },
      { title: 'Module 3: High-Order Analytical Reasoning & Quant', hours: '30 Hours', topics: ['Data Interpretation Complex Sets', 'Probability & Combinatorics Intuition', 'Socratic Time-Optimization Drills'] },
    ],
  },

  // SSC CGL & CENTRAL SERVICES
  {
    id: 'ssc-cgl-arithmetic-logic-engine',
    title: 'SSC CGL Tier 1 & 2: First-Principles Mathematical & Deductive Engine',
    category: 'SSC & Central Staff',
    targetExam: 'SSC CGL • CPO • CHSL • Railway NTPC',
    eligibility: 'Graduates in any stream',
    level: 'Foundational',
    duration: '5-Month Intensive Track • 180 Live Sessions',
    instructor: 'Quantitative & Analytical Aptitude Mentors',
    instructorRole: 'Top Percentile Quant Researchers',
    rating: 4.94,
    studentsCount: 'Cohort Enrolling',
    thumbnail: '/assets/mascots/robot-compass.png',
    isLive: true,
    startDate: 'Live Daily • 6:00 PM',
    price: '₹6,999',
    originalPrice: '₹14,000',
    discountBadge: 'Tier 1 & Tier 2 Unified',
    practiceSetsCount: '200+ Chapter-Wise DPPs & 30 Computer-Based Mock Tests',
    hasSocraticGuide: true,
    tags: ['Geometric Proofs', 'Algebraic Symmetries', 'Speed Without 500 Formulae'],
    description:
      'Most coaching centers force students to memorize 300 formula shortcuts that collapse under slightly altered examination patterns. Prabodha teaches invariant geometric relations, algebraic symmetries, and mental arithmetic axioms.',
    syllabusModules: [
      { title: 'Module 1: Invariant Geometry & Mensuration', hours: '35 Hours', topics: ['Circle Theorems & Tangent Axioms', 'Triangle Centers & Similarity', 'Coordinate Geometry Foundations'] },
      { title: 'Module 2: Number Theory & Arithmetic Reasoning', hours: '40 Hours', topics: ['Divisibility & Remainder Invariants', 'Percentages & Ratio Dynamics', 'Work, Time & Kinematics Analogies'] },
      { title: 'Module 3: English Comprehension & Logic', hours: '25 Hours', topics: ['Grammatical Logic & Syntax Trees', 'Reading Comprehension Deduction', 'Logical Ordering & Argument Structures'] },
    ],
  },

  // GATE COMPUTER SCIENCE
  {
    id: 'gate-cs-algorithms-computation',
    title: 'GATE CS: Theory of Computation, Algorithms & Discrete Structures',
    category: 'GATE (CS & Engineering)',
    targetExam: 'GATE CS 2026/2027 • PSU Technical Tests',
    eligibility: 'B.E. / B.Tech / MCA / M.Sc. CS Candidates',
    level: 'Mastery',
    duration: '8-Month Deep Engineering Track • 200 Lectures',
    instructor: 'Prabodha Computing Systems Faculty',
    instructorRole: 'IISc / IIT Alums & Systems Researchers',
    rating: 4.98,
    studentsCount: 'Cohort Enrolling',
    thumbnail: '/assets/mascots/robot-idea.png',
    isLive: true,
    startDate: 'Live Daily • 8:00 PM',
    price: '₹12,499',
    originalPrice: '₹24,000',
    discountBadge: 'Comprehensive Technical',
    practiceSetsCount: '120+ PYQ Concept Deconstructions & Virtual Test Interface',
    hasSocraticGuide: true,
    tags: ['Automata Theory', 'Asymptotic Complexity', 'Computer Architecture'],
    description:
      'Designed for engineering undergraduates and working software developers preparing for IISc, IITs, or PSU selections. Covers formal languages, Turing reducibility, dynamic programming proofs, and cache coherence architectures.',
    syllabusModules: [
      { title: 'Module 1: Discrete Math & Theoretical Computation', hours: '45 Hours', topics: ['Propositional Logic & Graph Theory', 'DFA, NFA & Regular Expressions', 'Turing Machines & Decidability'] },
      { title: 'Module 2: Algorithms, Data Structures & Complexity', hours: '45 Hours', topics: ['Recurrence Relations & Master Theorem', 'Graph Traversal & Shortest Path Proofs', 'NP-Completeness & Reductions'] },
      { title: 'Module 3: Computer Systems & Architecture', hours: '40 Hours', topics: ['Pipelining & Hazard Resolution', 'Virtual Memory & Page Table Walkers', 'Compiler Syntax Directed Translation'] },
    ],
  },

  // CAT & MANAGEMENT ENTRANCE
  {
    id: 'cat-quant-di-logic-invariants',
    title: 'CAT: First-Principles Quantitative Aptitude & Complex DILR',
    category: 'CAT & Management',
    targetExam: 'CAT 2026 • XAT • GMAT',
    eligibility: 'College Students & Working Professionals',
    level: 'Advanced',
    duration: '7-Month Strategic Cohort • 150 Masterclasses',
    instructor: 'Management Analytics Mentors',
    instructorRole: '99.9+ Percentile CAT Scholars',
    rating: 4.97,
    studentsCount: 'Cohort Enrolling',
    thumbnail: '/assets/mascots/student-peace.png',
    isLive: true,
    startDate: 'Weekend & Evening Cohort',
    price: '₹13,999',
    originalPrice: '₹26,000',
    discountBadge: 'Comprehensive Track',
    practiceSetsCount: '70+ Caselet Workouts & Sectional Time-Attack Drills',
    hasSocraticGuide: true,
    tags: ['Logical Caselets', 'Algebra Without Guesswork', 'Critical Reasoning'],
    description:
      'Cracking CAT does not require solving 10,000 repetitive drills; it requires reading problem constraints as architectural blueprints. Develop razor-sharp caselet modeling for Data Interpretation and Logical Reasoning (DILR).',
    syllabusModules: [
      { title: 'Module 1: Quantitative Logic & Number Systems', hours: '35 Hours', topics: ['Modular Arithmetic & Factors', 'Quadratic Equations & Function Blueprints', 'Modern Math & Permutations'] },
      { title: 'Module 2: High-Difficulty DILR Frameworks', hours: '40 Hours', topics: ['Multi-Constraint Grid Matching', 'Tournament & Scheduling Logic', 'Venn Diagrams for 4+ Sets'] },
      { title: 'Module 3: VARC Structural Critical Thinking', hours: '30 Hours', topics: ['Author Stance & Underlying Presuppositions', 'Paragraph Summary & Completion Invariants', 'Inference vs Assumption Testing'] },
    ],
  },

  // AI & CAREER FOUNDATIONS
  {
    id: 'applied-ai-systems-frontier',
    title: 'Applied AI Systems Engineering: From Linear Algebra to Production LLMs',
    category: 'AI & Career Foundations',
    targetExam: 'Career Growth • AI Engineer Roles • Technical Upskilling',
    eligibility: 'Engineers, Analysts & Forward-Thinking Professionals',
    level: 'Intermediate',
    duration: '4-Month Applied Track • 120 Hands-on Hours',
    instructor: 'Dr. Aris Thorne & Systems Team',
    instructorRole: 'Principal AI Researcher & Systems Architect',
    rating: 4.99,
    studentsCount: 'Cohort Enrolling',
    thumbnail: '/assets/mascots/robot-welcome.png',
    isLive: true,
    startDate: 'Evening Track • 8:30 PM',
    price: '₹14,499',
    originalPrice: '₹29,000',
    discountBadge: 'Portfolio Capstone Included',
    practiceSetsCount: '10 Production Grade Code Labs & Model Evaluation Harnesses',
    hasSocraticGuide: true,
    tags: ['Transformer Geometries', 'Vector Indexing & RAG', 'Agentic Workflows'],
    description:
      'Learn modern artificial intelligence from its mathematical primitives (vector spaces, projection matrices, attention mechanisms) to enterprise deployment (evaluation harnesses, agentic tooling, and low-latency inference).',
    syllabusModules: [
      { title: 'Module 1: Vector Spaces & Latent Geometry', hours: '30 Hours', topics: ['Matrix Decompositions (SVD & Eigenvalues)', 'High-Dimensional Embeddings & Cosine Distance', 'Gradient Descent Loss Landscapes'] },
      { title: 'Module 2: Transformer Architectures & Attention', hours: '35 Hours', topics: ['Scaled Dot-Product Attention Mechanisms', 'Positional Encodings & Context Windows', 'Quantization & LoRA Fine-Tuning'] },
      { title: 'Module 3: Enterprise Agents & Autonomous Workflows', hours: '35 Hours', topics: ['RAG Pipeline Optimization & Chunking', 'Tool Calling & Structured Output Schemas', 'Deterministic Evaluation Systems'] },
    ],
  },
];

// 3. FIRST-PRINCIPLES CONCEPT DECONSTRUCTION (For Interactive Demonstrations)
export const FIRST_PRINCIPLES_DEMOS: FirstPrinciplesConcept[] = [
  {
    id: 'polity-basic-structure',
    exam: 'UPSC Civil Services',
    subject: 'Indian Polity & Constitutional Law',
    topic: 'Basic Structure Doctrine (Kesavananda Bharati)',
    roteMyth: 'Memorize the list of basic features: democracy, judicial review, secularism, federalism.',
    firstPrinciplesInsight:
      'The Constitution is not an ordinary statute; it is the constituent power itself. If parliament can alter the core principles that grant it power to amend, the creature becomes greater than the creator. The Basic Structure doctrine is simply the logical axiom that a delegated power cannot destroy the terms of its own delegation.',
    socraticQuestion:
      'If Article 368 gives Parliament power to amend "any provision", could Parliament vote to abolish Article 368 itself or repeal democracy? What prevents that?',
    sampleQuestion: 'Examine how the Basic Structure doctrine maintains constitutionalism without paralyzing parliamentary sovereignty.',
  },
  {
    id: 'quant-interest-invariants',
    exam: 'Banking & SSC CGL',
    subject: 'Quantitative Aptitude',
    topic: 'Compound Interest vs Geometric Progression',
    roteMyth: 'Memorize 15 distinct formulas for CI difference, half-yearly compounding, and rate fluctuations.',
    firstPrinciplesInsight:
      'Compound interest is not an isolated financial trick; it is purely discrete exponential growth $A = P(1+r)^t$. The difference between Simple and Compound interest for 2 periods is always the interest accrued on the first period’s interest: $\\Delta = P \\cdot r^2$. Master this invariant and all multi-year variation problems dissolve into mental math.',
    socraticQuestion:
      'When interest compounds, why does the ratio of successive year amounts remain constant regardless of the starting principal?',
    sampleQuestion: 'If the difference between CI and SI for 2 years at r% is ₹96 on ₹15,000, find r without expanding polynomial tables.',
  },
  {
    id: 'gate-turing-halting',
    exam: 'GATE Computer Science',
    subject: 'Theory of Computation',
    topic: 'Turing Halting Problem & Undecidability',
    roteMyth: 'Remember that Halting is RE but not REC and memorize Rice theorem conditions.',
    firstPrinciplesInsight:
      'The Halting Problem is the computational equivalent of the liar paradox ("This statement is false"). If an algorithm $H(P, I)$ could predict whether any program $P$ halts on input $I$, we can build an adversary program $D$ that halts if $H$ says it loops, and loops if $H$ says it halts. Running $D(D)$ creates an inescapable logical contradiction.',
    socraticQuestion:
      'Can an algorithm inspect its own behavior in advance without simulating its execution step by step?',
    sampleQuestion: 'Prove using diagonalization why no decider can exist for arbitrary Turing machine termination.',
  },
  {
    id: 'cat-permutations-symmetry',
    exam: 'CAT Quantitative Aptitude',
    subject: 'Modern Mathematics & Combinatorics',
    topic: 'Combinations as Overcounting Correction',
    roteMyth: 'Apply formula $n! / (r!(n-r)!)$ blindly whenever you see the word "selection".',
    firstPrinciplesInsight:
      'Permutation counts ordered arrangements. When order does not matter (selection), every subset of size $r$ was counted $r!$ times too often. A combination is not a separate formula; it is simply the ordered count divided by internal symmetry $r!$.',
    socraticQuestion:
      'Why does forming a committee of 3 people from 10 divide by 6, while forming President, VP, and Secretary does not?',
    sampleQuestion: 'In how many ways can 4 vertices of a regular dodecagon be chosen to form a rectangle?',
  },
];
