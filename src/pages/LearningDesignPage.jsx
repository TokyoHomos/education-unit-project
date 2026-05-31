import { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import PageHero from '../components/ui/PageHero';
import { useLang } from '../context/LanguageContext';

/* ─────────────────────────────────────────────────────────────
   TRANSLATION DATA  (same pattern as translations.js)
───────────────────────────────────────────────────────────── */
const LD = {
  en: {
    nav: 'Lessons Plan',
    hero: {
      tag:      'Lessons Plan',
      title:    'Lessons Plan',
      subtitle: 'Explore four distinct educational approaches — from traditional classroom instruction to AI-generated personalised learning. Select a methodology below to design, plan, and assess your lessons.',
    },
    approaches: [
      {
        id: 'traditional',
        icon: '📚',
        title: 'Traditional Learning',
        desc: 'Structured teacher-led instruction, classroom activities, and standardised assessment methods.',
        color: 'neon-blue',
        rgb:   '59,130,246',
      },
      {
        id: 'computerized',
        icon: '💻',
        title: 'Computerized Learning',
        desc: 'Interactive digital tools, gamified elements, and software-driven learning experiences.',
        color: 'neon-green',
        rgb:   '34,197,94',
      },
      {
        id: 'ai',
        icon: '🤖',
        title: 'AI-Powered Learning',
        desc: "Intelligent tutoring systems that adapt in real time to each learner's unique knowledge profile.",
        color: 'neon-purple',
        rgb:   '168,85,247',
      },
      {
        id: 'generative',
        icon: '🧬',
        title: 'Generative AI Learning',
        desc: 'On-demand AI-generated content, quizzes, scenarios, and personalised learning materials.',
        color: 'neon-amber',
        rgb:   '251,146,60',
      },
    ],
    openLabel:  '▶ Open Section',
    closeLabel: '▼ Close Section',
    studioSub:  'Full lesson plan, content structure, flow visualisation, and assessment strategy',

    /* ── Traditional ── */
    trad: {
      badge:    'Traditional Learning',
      heading:  '📚 Traditional Learning Overview',
      overview: 'Traditional learning relies on structured, teacher-led instruction delivered through direct explanation, classroom activities, and standardised assessments. Knowledge flows in a clear sequence, building concepts progressively from introduction through to measured evaluation.',
      plan:     { title: 'Lesson Plan Timeline',  icon: '📅' },
      flow:     { title: 'Lesson Flow',            icon: '🔄' },
      flowNote: 'Each phase builds systematically on the last, reinforcing concepts through progressive disclosure.',
      obj:      { title: 'Learning Objectives',   icon: '🎯' },
      res:      { title: 'Educational Resources', icon: '📖' },
      intro:    { title: 'Lesson Introduction',   icon: '🚀' },
      introTxt: 'Begin with a warm-up question: "What happens inside your computer when you open a browser?" Use a projector to show a motherboard diagram. Ask students to point out parts they recognise. Establish learning goals clearly on the board.',
      proc:     { title: 'Learning Process',      icon: '📝' },
      procTxt:  'Teacher introduces each component with explanation and demonstration. Students complete guided note-taking using structured worksheets. Pair-share activities reinforce understanding before the class moves to independent practice.',
      act:      { title: 'Classroom Activities',  icon: '🧪' },
      actTxt:   'Hands-on labelling exercise with printed motherboard diagrams. Group discussion on component functions. Component matching card game. Q&A round before final assessment.',
      assess:   { title: 'Assessment Strategy',   icon: '📊' },
      rows: {
        lessonTitle:   ['Lesson Title',    'Introduction to PC Hardware Architecture'],
        audience:      ['Target Audience', 'Grade 10–12 / Beginner Level'],
        duration:      ['Duration',        '45–60 minutes'],
        prior:         ['Prior Knowledge', 'Basic computer usage familiarity'],
        method:        ['Assessment Method',  'Written quiz + labelling diagram'],
        outcomes:      ['Learning Outcomes',  '80% correct identification of 5 core components'],
        reflection:    ['Reflection',         "Exit ticket: 'What surprised you most today?'"],
      },
      objList: ['Identify key PC components', 'Explain CPU function', 'Describe RAM and storage roles', 'Distinguish motherboard layouts', 'Connect hardware relationships'],
      resList: ['Whiteboard diagrams', 'Printed component charts', 'Physical CPU / RAM samples', 'Worksheet handouts', 'Reference textbook pages'],
      flow5:   ['Introduction', 'Explanation', 'Activity', 'Summary', 'Assessment'],
      pbLabels:['Conceptual Understanding', 'Practical Application', 'Retention Rate (1 week)'],
      pbVals:  [75, 55, 60],
    },

    /* ── Computerized ── */
    comp: {
      badge:    'Computerized Learning',
      heading:  '💻 Computerized Learning Overview',
      overview: 'Computerized learning leverages software tools, interactive media, and digital platforms to deliver engaging, media-rich experiences. Students interact with simulations, drag-and-drop activities, and gamified elements that provide immediate feedback and visible progress tracking.',
      plan:     { title: 'Lesson Plan',                   icon: '📅' },
      flow:     { title: 'Lesson Flow',                   icon: '🔄' },
      obj:      { title: 'Learning Objectives',           icon: '🎯' },
      soft:     { title: 'Educational Software',          icon: '🛠️' },
      iact:     { title: 'Interactive Learning Activities', icon: '🎮' },
      iactTxt:  'Students use clickable motherboard diagrams to explore each component, trigger pop-up fact cards, and complete drag-and-drop assembly challenges. Matching games reinforce component–function pairing while badge rewards sustain motivation throughout the session.',
      learner:  { title: 'Learner Activities',            icon: '📋' },
      learnerTxt:'Click to explore 3D diagrams → complete timed matching game → drag components into correct slots → attempt adaptive quiz → review instant feedback report → earn achievement badges.',
      assess:   { title: 'Digital Assessment & Analytics', icon: '📊' },
      rows: {
        lessonTitle:   ['Lesson Title',    'PC Hardware — Interactive Digital Exploration'],
        audience:      ['Target Audience', 'Self-paced Learners / Grade 9–12'],
        duration:      ['Duration',        '30–50 minutes (self-paced)'],
        prior:         ['Prior Knowledge', 'Basic keyboard & mouse proficiency'],
        method:        ['Assessment Method',       'Automated quiz + activity completion tracking'],
        tools:         ['Digital Assessment Tools', 'Real-time quiz engine with hint system'],
        analytics:     ['Learning Analytics',       'Time-on-task, accuracy rate, attempt history'],
        outcomes:      ['Learning Outcomes',         'Personalised completion report per student'],
        reflection:    ['Reflection',                'Post-session survey embedded in platform'],
      },
      objList:  ['Navigate interactive diagrams', 'Complete drag-and-drop assembly', 'Earn component identification badges', 'Score ≥70% on digital quiz', 'View personal learning analytics'],
      softList: ['NeuralCore Interactive Diagrams', 'Drag-and-Drop Assembly Simulator', 'Badge & Achievement System', 'Digital Quiz Engine', 'Learning Analytics Dashboard'],
      flow5:    ['Introduction', 'Interactive Exploration', 'Practice Activity', 'Quiz', 'Feedback'],
      pbLabels: ['Engagement Level', 'Quiz Accuracy', 'Completion Rate'],
      pbVals:   [88, 72, 91],
    },

    /* ── AI ── */
    ai: {
      badge:    'AI-Powered Learning',
      heading:  '🤖 AI Learning Overview',
      overview: 'AI-powered learning adapts in real time to each student\'s knowledge gaps, learning pace, and preferred style. An intelligent tutoring engine analyses diagnostic data, guides personalised learning paths, and delivers adaptive assessments that evolve with the learner\'s progress.',
      plan:     { title: 'Lesson Plan',                 icon: '📅' },
      flow:     { title: 'Lesson Flow',                 icon: '🔄' },
      obj:      { title: 'Learning Objectives',         icon: '🎯' },
      tutor:    { title: 'AI Tutor Integration',        icon: '🧠' },
      adapt:    { title: 'Adaptive Learning Process',   icon: '⚙️' },
      adaptTxt: 'The AI engine maps student responses to a knowledge graph of PC hardware concepts. Content difficulty adjusts dynamically — students struggling with CPU architecture receive simplified analogies and extra examples, while advanced learners are fast-tracked to higher-order concepts.',
      learner:  { title: 'Learner Activities',          icon: '📋' },
      learnerTxt:'Engage in AI chat to ask questions → receive personalised lesson modules → complete adaptive exercises → review AI-highlighted weak areas → retake targeted micro-quizzes → earn mastery certifications.',
      assess:   { title: 'Performance Analysis & AI Assessment', icon: '📊' },
      rows: {
        lessonTitle:   ['Lesson Title',    'Adaptive PC Hardware Mastery — AI Tutored Path'],
        audience:      ['Target Audience', 'Mixed ability / Individual learners'],
        duration:      ['Duration',        'Flexible — 20–90 min adaptive sessions'],
        prior:         ['Prior Knowledge', 'Auto-detected via diagnostic assessment'],
        method:        ['AI Assessment System',          'Adaptive question bank — 500+ items'],
        perf:          ['Performance Analysis',          'Per-concept mastery scoring (0–100)'],
        recs:          ['Personalised Recommendations',  'AI-curated next-step content suggestions'],
        outcomes:      ['Learning Outcomes',              'Mastery-based progression, no fixed timeline'],
        reflection:    ['Reflection',                     'AI-generated learning summary with growth chart'],
      },
      objList:   ['Complete AI diagnostic baseline', 'Follow personalised AI learning path', 'Improve weak areas via targeted content', 'Achieve mastery threshold per topic', 'Receive AI-generated performance report'],
      tutorList: ['Conversational AI Q&A Interface', 'Real-time explanation generator', 'Knowledge gap identifier', 'Hint and scaffolding engine', 'Voice-based concept explanations'],
      flow5:     ['Diagnostic Assessment', 'AI Guidance', 'Personalized Learning', 'Adaptive Quiz', 'AI Feedback'],
      pbLabels:  ['Personalisation Depth', 'Adaptive Accuracy', 'Student Mastery Rate'],
      pbVals:    [95, 87, 82],
    },

    /* ── Generative ── */
    gen: {
      badge:      'Generative AI Learning',
      heading:    '🧬 Generative AI Overview',
      overview:   'Generative AI transforms the learning experience by creating bespoke educational content on demand. Quizzes, summaries, practice activities, and immersive scenarios are generated in seconds, perfectly matched to the learner\'s current topic and difficulty level.',
      plan:       { title: 'Lesson Plan',           icon: '📅' },
      flow:       { title: 'Lesson Flow',            icon: '🔄' },
      aiCard:     { title: 'AI Content Generation — Interactive', icon: '✨' },
      features:   { title: 'AI Content Features',   icon: '🛠️' },
      obj:        { title: 'Learning Objectives',   icon: '🎯' },
      assess:     { title: 'Assessment & Outcomes', icon: '📊' },
      genSuccess: (n) => `✓ ${n} item(s) generated successfully — ready for student use`,
      actions: [
        { key: 'quiz',     label: '⚡ Generate Quiz',              color: 'var(--neon-amber)',  desc: 'Auto-generate 5-question quiz on current topic' },
        { key: 'summary',  label: '📄 Generate Summary',          color: 'var(--neon-blue)',   desc: 'Create concise topic summary with key points' },
        { key: 'practice', label: '🏋️ Generate Practice',        color: 'var(--neon-green)',  desc: 'Build personalised practice activity set' },
        { key: 'scenario', label: '🧬 Generate Scenario',         color: 'var(--neon-purple)', desc: 'Craft real-world learning scenario' },
      ],
      generating: '⟳ Generating...',
      generated:  '✓ Generated',
      rows: {
        lessonTitle: ['Lesson Title',    'AI-Generated PC Hardware Learning Experience'],
        audience:    ['Target Audience', 'All levels — content auto-calibrated by AI'],
        duration:    ['Duration',        'On-demand — generates in real time'],
        prior:       ['Prior Knowledge', 'None required — AI builds from your baseline'],
        method:      ['Assessment Method', 'AI-generated adaptive evaluation'],
        outcomes:    ['Learning Outcomes', 'Dynamic — adapts to generated content'],
        reflection:  ['Reflection',        'AI-authored session debrief with next steps'],
      },
      objList:  ['Use AI to generate personalised content', 'Interact with AI-created exercises', 'Refine and iterate on AI outputs', 'Apply generated scenarios to real problems', 'Assess using AI-built evaluation tools'],
      featList: ['Prompt-to-lesson in seconds', 'Topic-aware question generation', 'Difficulty auto-scaling', 'Multi-format output (text/quiz/scenario)', 'Instant content refinement on request'],
      flow5:    ['Prompt', 'Content Generation', 'Student Interaction', 'AI Refinement', 'Assessment'],
      pbLabels: ['Content Relevance Score', 'Learner Engagement', 'Knowledge Transfer Rate'],
      pbVals:   [94, 91, 85],
    },

    /* ── Comparison ── */
    cmp: {
      badge:    'Comparison Dashboard',
      title:    'Four Approaches — Side by Side',
      titleHL:  'Four Approaches',
      subtitle: 'Compare the defining characteristics of each learning methodology across key educational dimensions.',
      cols: [
        { key: 'trad', label: '📚 Traditional',   color: 'var(--neon-blue)'   },
        { key: 'comp', label: '💻 Computerized',  color: 'var(--neon-green)'  },
        { key: 'ai',   label: '🤖 AI-Powered',    color: 'var(--neon-purple)' },
        { key: 'gen',  label: '🧬 Generative AI', color: 'var(--neon-amber)'  },
      ],
      rows: [
        { label: 'Teacher Role',          trad: 'Central facilitator',       comp: 'Guide / tech support',          ai: 'Supervisor of AI tutor',     gen: 'Content curator'             },
        { label: 'Student Interaction',   trad: 'Passive–active mix',        comp: 'Highly interactive',            ai: 'Dialogue-driven',            gen: 'Creative co-creator'         },
        { label: 'Technology Usage',      trad: 'Minimal',                   comp: 'Core delivery medium',          ai: 'Intelligent tutoring system', gen: 'Generative AI engine'        },
        { label: 'Personalisation Level', trad: 'Low',                       comp: 'Medium',                        ai: 'High',                       gen: 'Maximum'                     },
        { label: 'Assessment Method',     trad: 'Written / manual',          comp: 'Automated digital quiz',        ai: 'Adaptive assessment',         gen: 'AI-generated evaluation'     },
        { label: 'Content Generation',    trad: 'Pre-authored only',         comp: 'Template-based',                ai: 'Recommendation-driven',       gen: 'Real-time AI creation'       },
      ],
    },

    /* ── Assessment Framework ── */
    af: {
      badge:    'Assessment Framework',
      title:    'Three-Phase Assessment Strategy',
      titleHL:  'Assessment Strategy',
      subtitle: 'A complete assessment lifecycle that measures readiness, tracks progress, and certifies mastery.',
      purposeLbl: 'Purpose',
      toolsLbl:   'Tools',
      methodLbl:  'Evaluation Method',
      outcomeLbl: 'Expected Outcomes',
      cards: [
        {
          icon: '🔍', title: 'Diagnostic Assessment', color: 'neon-blue', rgb: '59,130,246',
          purpose: 'Identifies prior knowledge and skill gaps before instruction begins. Establishes a personalised baseline for each learner.',
          tools: ['Pre-lesson knowledge check', 'Concept mapping exercise', 'AI baseline diagnostic quiz'],
          method: 'Untimed, low-stakes questionnaire with instant AI analysis',
          outcomes: 'Personalised learning path recommendation and gap identification report',
        },
        {
          icon: '📈', title: 'Formative Assessment', color: 'neon-green', rgb: '34,197,94',
          purpose: 'Monitors learning progress during instruction. Provides continuous feedback to both student and teacher to adjust teaching in real time.',
          tools: ['Exit tickets', 'Quick-fire quiz rounds', 'Peer review activities', 'AI progress monitoring'],
          method: 'Frequent, embedded checkpoints throughout each lesson phase',
          outcomes: 'Continuous improvement data; identifies misconceptions before they solidify',
        },
        {
          icon: '🏆', title: 'Summative Assessment', color: 'neon-amber', rgb: '251,146,60',
          purpose: 'Evaluates overall learning achievement at the end of a unit or course. Measures mastery against defined learning standards.',
          tools: ['Final unit quiz', 'Component identification exam', 'Project-based evidence portfolio'],
          method: 'Timed, comprehensive evaluation with AI-powered marking and detailed report',
          outcomes: 'Mastery certification, grade assignment, and longitudinal learning record',
        },
      ],
    },
  },

  /* ══════════════════════════════════════════════════════
     ARABIC
  ══════════════════════════════════════════════════════ */
  ar: {
    nav: 'تخطيتات الدروس',
    hero: {
      tag:      'تخطيطات الدروس باربع طرق تعليمية',
      title:    'تخطيطات الدروس باربع طرق تعليمية',
      subtitle: 'استكشف أربعة مناهج تعليمية متميزة — من التعليم التقليدي في الفصل إلى التعلم المُولَّد بالذكاء الاصطناعي. اختر منهجية أدناه لتصميم دروسك وتخطيطها وتقييمها.',
    },
    approaches: [
      {
        id: 'traditional',
        icon: '📚',
        title: 'التعلم التقليدي',
        desc: 'تعليم منظم بقيادة المعلم، وأنشطة صفية، وأساليب تقييم معيارية.',
        color: 'neon-blue',
        rgb:   '59,130,246',
      },
      {
        id: 'computerized',
        icon: '💻',
        title: 'التعلم المحوسب',
        desc: 'أدوات رقمية تفاعلية، وعناصر تلعيبية، وتجارب تعلم تعتمد على البرمجيات.',
        color: 'neon-green',
        rgb:   '34,197,94',
      },
      {
        id: 'ai',
        icon: '🤖',
        title: 'التعلم بالذكاء الاصطناعي',
        desc: 'أنظمة تدريس ذكية تتكيف لحظيا مع المعرفة الفريدة لكل متعلم.',
        color: 'neon-purple',
        rgb:   '168,85,247',
      },
      {
        id: 'generative',
        icon: '🧬',
        title: 'التعلم بالذكاء الاصطناعي التوليدي',
        desc: 'محتوى تعليمي وأسئلة وسيناريوهات ومواد تعلم مخصصة تُولَّد فوريا.',
        color: 'neon-amber',
        rgb:   '251,146,60',
      },
    ],
    openLabel:  '▶ فتح القسم',
    closeLabel: '▼ إغلاق القسم',
    studioSub:  'خطة درس كاملة، وهيكل محتوى، وتصور للتدفق، واستراتيجية تقييم',

    /* ── Traditional ── */
    trad: {
      badge:    'التعلم التقليدي',
      heading:  '📚 نظرة عامة على التعلم التقليدي',
      overview: 'يعتمد التعلم التقليدي على التعليم المنظم بقيادة المعلم من خلال الشرح المباشر والأنشطة الصفية والتقييمات المعيارية. تتدفق المعرفة في تسلسل واضح يبني المفاهيم تدريجيا من المقدمة وحتى التقييم المقيس.',
      plan:     { title: 'الجدول الزمني لخطة الدرس', icon: '📅' },
      flow:     { title: 'تدفق الدرس',                icon: '🔄' },
      flowNote: 'تُبنى كل مرحلة بشكل منهجي على السابقة لها، مما يعزز المفاهيم من خلال الكشف التدريجي.',
      obj:      { title: 'أهداف التعلم',              icon: '🎯' },
      res:      { title: 'الموارد التعليمية',          icon: '📖' },
      intro:    { title: 'مقدمة الدرس',               icon: '🚀' },
      introTxt: 'ابدأ بسؤال تمهيدي: "ماذا يحدث داخل حاسوبك عندما تفتح متصفحا؟" استخدم جهاز عرض لإظهار مخطط اللوحة الأم. اطلب من الطلاب الإشارة إلى الأجزاء التي يتعرفون عليها. حدد أهداف التعلم بوضوح على السبورة.',
      proc:     { title: 'العملية التعليمية',          icon: '📝' },
      procTxt:  'يقدم المعلم كل مكون مع الشرح والعرض التوضيحي. يكمل الطلاب تدوين الملاحظات الموجَّهة باستخدام أوراق العمل المنظمة. تعزز أنشطة المشاركة الثنائية الفهم قبل الانتقال إلى الممارسة المستقلة.',
      act:      { title: 'أنشطة الفصل الدراسي',       icon: '🧪' },
      actTxt:   'تمرين وضع تسميات على مخططات اللوحة الأم المطبوعة. نقاش جماعي حول وظائف المكونات. لعبة مطابقة بطاقات المكونات. جولة أسئلة وأجوبة قبل التقييم النهائي.',
      assess:   { title: 'استراتيجية التقييم',         icon: '📊' },
      rows: {
        lessonTitle:   ['عنوان الدرس',         'مقدمة في معمارية مكونات الحاسوب'],
        audience:      ['الفئة المستهدفة',      'الصف 10–12 / مستوى مبتدئ'],
        duration:      ['المدة',               '45–60 دقيقة'],
        prior:         ['المعرفة المسبقة',      'إلمام أساسي باستخدام الحاسوب'],
        method:        ['أسلوب التقييم',        'اختبار كتابي + تسمية مخطط'],
        outcomes:      ['نتائج التعلم',         'تحديد صحيح لـ 5 مكونات أساسية بنسبة 80%'],
        reflection:    ['التأمل',              'بطاقة خروج: "ما أكثر شيء فاجأك اليوم؟"'],
      },
      objList: ['التعرف على مكونات الحاسوب الرئيسية', 'شرح وظيفة المعالج (CPU)', 'وصف أدوار ذاكرة RAM والتخزين', 'التمييز بين تخطيطات اللوحة الأم', 'ربط العلاقات بين المكونات'],
      resList: ['مخططات السبورة', 'جداول المكونات المطبوعة', 'عينات فعلية من CPU وRAM', 'أوراق العمل', 'صفحات الكتاب المرجعي'],
      flow5:   ['مقدمة', 'شرح', 'نشاط', 'ملخص', 'تقييم'],
      pbLabels:['الفهم المفاهيمي', 'التطبيق العملي', 'معدل الاحتفاظ (أسبوع)'],
      pbVals:  [75, 55, 60],
    },

    /* ── Computerized ── */
    comp: {
      badge:    'التعلم المحوسب',
      heading:  '💻 نظرة عامة على التعلم المحوسب',
      overview: 'يستخدم التعلم المحوسب أدوات البرمجيات والوسائط التفاعلية والمنصات الرقمية لتقديم تجارب تعليمية غنية بالوسائط وجذابة. يتفاعل الطلاب مع المحاكاة وأنشطة السحب والإفلات والعناصر التلعيبية التي توفر ملاحظات فورية وتتبعا مرئيا للتقدم.',
      plan:     { title: 'خطة الدرس',                    icon: '📅' },
      flow:     { title: 'تدفق الدرس',                   icon: '🔄' },
      obj:      { title: 'أهداف التعلم',                 icon: '🎯' },
      soft:     { title: 'البرامج التعليمية المستخدمة',  icon: '🛠️' },
      iact:     { title: 'الأنشطة التعليمية التفاعلية', icon: '🎮' },
      iactTxt:  'يستخدم الطلاب مخططات اللوحة الأم القابلة للنقر لاستكشاف كل مكون وتشغيل بطاقات الحقائق المنبثقة وإتمام تحديات السحب والإفلات. تعزز ألعاب المطابقة ربط المكون بوظيفته، في حين تحافظ مكافآت الشارات على الدافعية طوال الجلسة.',
      learner:  { title: 'أنشطة المتعلم',                icon: '📋' },
      learnerTxt:'انقر لاستكشاف المخططات ثلاثية الأبعاد ← أكمل لعبة المطابقة المحددة بوقت ← اسحب المكونات إلى فتحاتها ← أجب الاختبار التكيفي ← راجع تقرير الملاحظات الفورية ← احصل على شارات الإنجاز.',
      assess:   { title: 'التقييم الرقمي والتحليلات',   icon: '📊' },
      rows: {
        lessonTitle:   ['عنوان الدرس',         'مكونات الحاسوب — استكشاف رقمي تفاعلي'],
        audience:      ['الفئة المستهدفة',      'متعلمون بالوتيرة الذاتية / الصف 9–12'],
        duration:      ['المدة',               '30–50 دقيقة (بالوتيرة الذاتية)'],
        prior:         ['المعرفة المسبقة',      'إتقان أساسي للوحة المفاتيح والفأرة'],
        method:        ['أسلوب التقييم',         'اختبار تلقائي + تتبع إتمام الأنشطة'],
        tools:         ['أدوات التقييم الرقمي', 'محرك اختبار فوري مع نظام تلميحات'],
        analytics:     ['تحليلات التعلم',        'وقت الأداء، معدل الدقة، سجل المحاولات'],
        outcomes:      ['نتائج التعلم',          'تقرير إتمام مخصص لكل طالب'],
        reflection:    ['التأمل',               'استبيان ما بعد الجلسة مدمج في المنصة'],
      },
      objList:  ['التنقل عبر المخططات التفاعلية', 'إتمام تجميع السحب والإفلات', 'الحصول على شارات تعريف المكونات', 'تحقيق 70% أو أعلى في الاختبار الرقمي', 'عرض تحليلات التعلم الشخصية'],
      softList: ['مخططات NeuralCore التفاعلية', 'محاكي التجميع بالسحب والإفلات', 'نظام الشارات والإنجازات', 'محرك الاختبارات الرقمية', 'لوحة تحليلات التعلم'],
      flow5:    ['مقدمة', 'استكشاف تفاعلي', 'نشاط تطبيقي', 'اختبار', 'ملاحظات'],
      pbLabels: ['مستوى التفاعل', 'دقة الاختبار', 'معدل الإتمام'],
      pbVals:   [88, 72, 91],
    },

    /* ── AI ── */
    ai: {
      badge:    'التعلم بالذكاء الاصطناعي',
      heading:  '🤖 نظرة عامة على التعلم بالذكاء الاصطناعي',
      overview: 'يتكيف التعلم بالذكاء الاصطناعي لحظيا مع فجوات المعرفة ووتيرة التعلم والأسلوب المفضل لكل طالب. يحلل محرك التدريس الذكي البيانات التشخيصية ويوجه مسارات التعلم الشخصية ويقدم تقييمات تكيفية تتطور مع تقدم المتعلم.',
      plan:     { title: 'خطة الدرس',                    icon: '📅' },
      flow:     { title: 'تدفق الدرس',                   icon: '🔄' },
      obj:      { title: 'أهداف التعلم',                 icon: '🎯' },
      tutor:    { title: 'تكامل المدرس الذكي',           icon: '🧠' },
      adapt:    { title: 'العملية التعليمية التكيفية',   icon: '⚙️' },
      adaptTxt: 'يربط محرك الذكاء الاصطناعي استجابات الطلاب برسم بياني معرفي لمفاهيم مكونات الحاسوب. تتكيف صعوبة المحتوى ديناميكيا — يتلقى الطلاب الذين يجدون صعوبة في معمارية المعالج تشبيهات مبسطة وأمثلة إضافية، بينما يُسرَّع المتقدمون نحو المفاهيم الأعلى درجة.',
      learner:  { title: 'أنشطة المتعلم',                icon: '📋' },
      learnerTxt:'تفاعل مع دردشة الذكاء الاصطناعي لطرح الأسئلة ← احصل على وحدات دروس مخصصة ← أكمل التمارين التكيفية ← راجع المجالات الضعيفة التي حددها الذكاء الاصطناعي ← أعد الاختبارات المستهدفة الصغيرة ← احصل على شهادات الإتقان.',
      assess:   { title: 'تحليل الأداء وتقييم الذكاء الاصطناعي', icon: '📊' },
      rows: {
        lessonTitle:   ['عنوان الدرس',         'إتقان مكونات الحاسوب التكيفي — مسار مدرَّس بالذكاء الاصطناعي'],
        audience:      ['الفئة المستهدفة',      'مستويات مختلطة / متعلمون فرديون'],
        duration:      ['المدة',               'مرن — جلسات تكيفية من 20 إلى 90 دقيقة'],
        prior:         ['المعرفة المسبقة',      'يُكتشف تلقائيا عبر التقييم التشخيصي'],
        method:        ['نظام تقييم الذكاء الاصطناعي',  'بنك أسئلة تكيفي — أكثر من 500 عنصر'],
        perf:          ['تحليل الأداء',          'تسجيل إتقان لكل مفهوم (0–100)'],
        recs:          ['التوصيات الشخصية',      'محتوى الخطوة التالية منتقى بواسطة الذكاء الاصطناعي'],
        outcomes:      ['نتائج التعلم',          'تقدم قائم على الإتقان بدون جدول زمني ثابت'],
        reflection:    ['التأمل',               'ملخص تعلم مُولَّد بالذكاء الاصطناعي مع رسم بياني للنمو'],
      },
      objList:   ['إكمال خط الأساس التشخيصي بالذكاء الاصطناعي', 'اتباع مسار التعلم الشخصي بالذكاء الاصطناعي', 'تحسين المجالات الضعيفة عبر محتوى مستهدف', 'الوصول إلى عتبة الإتقان لكل موضوع', 'الحصول على تقرير الأداء المُولَّد بالذكاء الاصطناعي'],
      tutorList: ['واجهة أسئلة وأجوبة بالمحادثة الذكية', 'مولد شرح في الوقت الفعلي', 'محدد فجوات المعرفة', 'محرك التلميحات والدعم التدريجي', 'شروحات صوتية للمفاهيم'],
      flow5:     ['التقييم التشخيصي', 'التوجيه الذكي', 'التعلم الشخصي', 'الاختبار التكيفي', 'ملاحظات الذكاء الاصطناعي'],
      pbLabels:  ['عمق التخصيص', 'دقة التكيف', 'معدل إتقان الطلاب'],
      pbVals:    [95, 87, 82],
    },

    /* ── Generative ── */
    gen: {
      badge:      'التعلم بالذكاء الاصطناعي التوليدي',
      heading:    '🧬 نظرة عامة على الذكاء الاصطناعي التوليدي',
      overview:   'يحوِّل الذكاء الاصطناعي التوليدي تجربة التعلم بإنشاء محتوى تعليمي مخصص عند الطلب. تُولَّد الاختبارات والملخصات وأنشطة التدريب والسيناريوهات الغامرة في ثوانٍ، مطابقة تماما للموضوع الحالي للمتعلم ومستوى صعوبته.',
      plan:       { title: 'خطة الدرس',                              icon: '📅' },
      flow:       { title: 'تدفق الدرس',                             icon: '🔄' },
      aiCard:     { title: 'توليد محتوى الذكاء الاصطناعي — تفاعلي', icon: '✨' },
      features:   { title: 'ميزات محتوى الذكاء الاصطناعي',          icon: '🛠️' },
      obj:        { title: 'أهداف التعلم',                           icon: '🎯' },
      assess:     { title: 'التقييم والنتائج',                       icon: '📊' },
      genSuccess: (n) => `✓ تم توليد ${n} عنصر(عناصر) بنجاح — جاهزة لاستخدام الطلاب`,
      actions: [
        { key: 'quiz',     label: '⚡ توليد اختبار',            color: 'var(--neon-amber)',  desc: 'توليد اختبار من 5 أسئلة حول الموضوع الحالي تلقائيا' },
        { key: 'summary',  label: '📄 توليد ملخص',             color: 'var(--neon-blue)',   desc: 'إنشاء ملخص موجز للموضوع مع النقاط الرئيسية' },
        { key: 'practice', label: '🏋️ توليد تدريب',           color: 'var(--neon-green)',  desc: 'بناء مجموعة أنشطة تدريبية مخصصة' },
        { key: 'scenario', label: '🧬 توليد سيناريو',          color: 'var(--neon-purple)', desc: 'صياغة سيناريو تعليمي من العالم الحقيقي' },
      ],
      generating: '⟳ جاري التوليد...',
      generated:  '✓ تم التوليد',
      rows: {
        lessonTitle: ['عنوان الدرس',     'تجربة تعلم مكونات الحاسوب المُولَّدة بالذكاء الاصطناعي'],
        audience:    ['الفئة المستهدفة', 'جميع المستويات — المحتوى يُعاير تلقائيا بالذكاء الاصطناعي'],
        duration:    ['المدة',           'عند الطلب — يُولَّد في الوقت الفعلي'],
        prior:       ['المعرفة المسبقة', 'لا شيء مطلوب — الذكاء الاصطناعي يبني من خط أساسك'],
        method:      ['أسلوب التقييم',   'تقييم تكيفي مُولَّد بالذكاء الاصطناعي'],
        outcomes:    ['نتائج التعلم',    'ديناميكية — تتكيف مع المحتوى المُولَّد'],
        reflection:  ['التأمل',          'ملخص جلسة مُؤلَّف بالذكاء الاصطناعي مع الخطوات التالية'],
      },
      objList:  ['استخدام الذكاء الاصطناعي لتوليد محتوى شخصي', 'التفاعل مع التمارين التي أنشأها الذكاء الاصطناعي', 'تحسين مخرجات الذكاء الاصطناعي والتكرار عليها', 'تطبيق السيناريوهات المُولَّدة على مشاكل حقيقية', 'التقييم بأدوات التقييم التي بناها الذكاء الاصطناعي'],
      featList: ['من الأمر إلى الدرس في ثوانٍ', 'توليد أسئلة على دراية بالموضوع', 'ضبط الصعوبة تلقائيا', 'مخرجات متعددة الصيغ (نص/اختبار/سيناريو)', 'تحسين المحتوى فوريا عند الطلب'],
      flow5:    ['الأمر', 'توليد المحتوى', 'تفاعل الطالب', 'تحسين الذكاء الاصطناعي', 'التقييم'],
      pbLabels: ['نقاط ملاءمة المحتوى', 'تفاعل المتعلم', 'معدل نقل المعرفة'],
      pbVals:   [94, 91, 85],
    },

    /* ── Comparison ── */
    cmp: {
      badge:    'لوحة المقارنة',
      title:    'أربعة مناهج — جنبا إلى جنب',
      titleHL:  'أربعة مناهج',
      subtitle: 'قارن الخصائص المميزة لكل منهجية تعليمية عبر الأبعاد التعليمية الرئيسية.',
      cols: [
        { key: 'trad', label: '📚 التقليدي',              color: 'var(--neon-blue)'   },
        { key: 'comp', label: '💻 المحوسب',               color: 'var(--neon-green)'  },
        { key: 'ai',   label: '🤖 الذكاء الاصطناعي',     color: 'var(--neon-purple)' },
        { key: 'gen',  label: '🧬 الذكاء الاصطناعي التوليدي', color: 'var(--neon-amber)' },
      ],
      rows: [
        { label: 'دور المعلم',          trad: 'ميسِّر رئيسي',          comp: 'مرشد / دعم تقني',           ai: 'مشرف على المدرس الذكي',        gen: 'منسق محتوى'               },
        { label: 'تفاعل الطالب',        trad: 'مزيج سلبي–نشط',         comp: 'تفاعلي للغاية',             ai: 'قائم على الحوار',              gen: 'مشارك إبداعي'             },
        { label: 'استخدام التكنولوجيا', trad: 'محدود',                  comp: 'وسيلة التوصيل الأساسية',    ai: 'نظام تدريس ذكي',               gen: 'محرك الذكاء الاصطناعي التوليدي' },
        { label: 'مستوى التخصيص',       trad: 'منخفض',                  comp: 'متوسط',                     ai: 'مرتفع',                        gen: 'أقصى درجة'               },
        { label: 'أسلوب التقييم',        trad: 'كتابي / يدوي',          comp: 'اختبار رقمي تلقائي',        ai: 'تقييم تكيفي',                  gen: 'تقييم مُولَّد بالذكاء الاصطناعي' },
        { label: 'توليد المحتوى',        trad: 'محتوى معدّ مسبقا فقط', comp: 'قائم على قوالب',            ai: 'مدفوع بالتوصيات',              gen: 'إنشاء ذكاء اصطناعي فوري' },
      ],
    },

    /* ── Assessment Framework ── */
    af: {
      badge:      'إطار التقييم',
      title:      'استراتيجية التقييم ثلاثية المراحل',
      titleHL:    'استراتيجية التقييم',
      subtitle:   'دورة تقييم متكاملة تقيس الاستعداد وتتتبع التقدم وتُعطي شهادة الإتقان.',
      purposeLbl: 'الغرض',
      toolsLbl:   'الأدوات',
      methodLbl:  'أسلوب التقييم',
      outcomeLbl: 'النتائج المتوقعة',
      cards: [
        {
          icon: '🔍', title: 'التقييم التشخيصي', color: 'neon-blue', rgb: '59,130,246',
          purpose: 'يحدد المعرفة المسبقة وفجوات المهارات قبل بدء التعليم. يُنشئ خطا أساسيا مخصصا لكل متعلم.',
          tools: ['فحص المعرفة قبل الدرس', 'تمرين رسم خرائط المفاهيم', 'اختبار تشخيصي أساسي بالذكاء الاصطناعي'],
          method: 'استبيان غير محدد بوقت منخفض المخاطر مع تحليل فوري بالذكاء الاصطناعي',
          outcomes: 'توصية بمسار تعلم مخصص وتقرير تحديد الفجوات',
        },
        {
          icon: '📈', title: 'التقييم التكويني', color: 'neon-green', rgb: '34,197,94',
          purpose: 'يراقب تقدم التعلم أثناء التعليم. يوفر ملاحظات مستمرة للطالب والمعلم لضبط التدريس في الوقت الفعلي.',
          tools: ['بطاقات الخروج', 'جولات اختبار سريعة', 'أنشطة مراجعة الأقران', 'مراقبة التقدم بالذكاء الاصطناعي'],
          method: 'نقاط تفتيش متكررة ومدمجة في كل مرحلة من مراحل الدرس',
          outcomes: 'بيانات تحسين مستمرة؛ تحدد المفاهيم الخاطئة قبل ترسخها',
        },
        {
          icon: '🏆', title: 'التقييم الختامي', color: 'neon-amber', rgb: '251,146,60',
          purpose: 'يُقيِّم الإنجاز التعليمي الكلي في نهاية وحدة أو مقرر. يقيس الإتقان وفق المعايير التعليمية المحددة.',
          tools: ['اختبار الوحدة النهائي', 'امتحان تعريف المكونات', 'محفظة أدلة قائمة على المشاريع'],
          method: 'تقييم شامل محدد بوقت مع تصحيح مدعوم بالذكاء الاصطناعي وتقرير مفصل',
          outcomes: 'شهادة إتقان، تعيين درجة، وسجل تعلم طولي',
        },
      ],
    },
  },
};

/* ─────────────────────────────────────────────────────────────
   SHARED COMPONENTS
───────────────────────────────────────────────────────────── */

function FlowStep({ label, index, total, color }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
      <div style={{
        background: `rgba(${color}, 0.15)`,
        border: `1px solid rgba(${color}, 0.5)`,
        borderRadius: 8,
        padding: '6px 14px',
        fontSize: 11,
        fontFamily: "'Orbitron', monospace",
        fontWeight: 600,
        color: `rgba(${color}, 1)`,
        whiteSpace: 'nowrap',
      }}>
        {label}
      </div>
      {index < total - 1 && (
        <div style={{ width: 24, height: 2, background: `rgba(${color},0.4)`, position: 'relative', flexShrink: 0 }}>
          <div style={{
            position: 'absolute', right: -4, top: -4,
            borderTop: '5px solid transparent', borderBottom: '5px solid transparent',
            borderLeft: `6px solid rgba(${color},0.7)`,
          }} />
        </div>
      )}
    </div>
  );
}

function LessonCard({ title, icon, color, children }) {
  return (
    <div className="glass-card" style={{ padding: 20, borderRadius: 16, marginBottom: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
        <span style={{ fontSize: 20 }}>{icon}</span>
        <div style={{
          fontFamily: "'Orbitron', monospace", fontSize: 12, fontWeight: 700,
          color: `var(--${color})`, letterSpacing: 1, textTransform: 'uppercase',
        }}>
          {title}
        </div>
      </div>
      {children}
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
      padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', gap: 12,
    }}>
      <span style={{ fontSize: 12, color: 'var(--text-muted)', flexShrink: 0, minWidth: 140 }}>{label}</span>
      <span style={{ fontSize: 12, color: 'var(--text-secondary)', textAlign: 'right' }}>{value}</span>
    </div>
  );
}

function ProgressBar({ label, value, color }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{label}</span>
        <span style={{ fontSize: 11, color: `var(--${color})`, fontFamily: "'Orbitron', monospace" }}>{value}%</span>
      </div>
      <div style={{ height: 5, background: 'rgba(255,255,255,0.06)', borderRadius: 3, overflow: 'hidden' }}>
        <div style={{
          height: '100%', width: `${value}%`, background: `var(--${color})`,
          borderRadius: 3, boxShadow: `0 0 8px var(--${color})`,
        }} />
      </div>
    </div>
  );
}

function ExpandSection({ title, icon, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 12, marginBottom: 10, overflow: 'hidden',
    }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width: '100%', display: 'flex', alignItems: 'center', gap: 10,
        padding: '12px 16px', background: 'none', border: 'none',
        cursor: 'pointer', textAlign: 'left', color: 'var(--text-primary)',
      }}>
        <span style={{ fontSize: 16 }}>{icon}</span>
        <span style={{ fontSize: 12, fontWeight: 600, flex: 1 }}>{title}</span>
        <span style={{ fontSize: 14, color: 'var(--text-muted)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>▾</span>
      </button>
      {open && (
        <div style={{ padding: '0 16px 16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          {children}
        </div>
      )}
    </div>
  );
}

function SectionBadge({ text, color }) {
  return (
    <span style={{
      display: 'inline-block',
      background: `rgba(${color},0.12)`, border: `1px solid rgba(${color},0.35)`,
      color: `rgba(${color},1)`, borderRadius: 20, padding: '3px 12px',
      fontSize: 10, fontFamily: "'Orbitron', monospace", fontWeight: 700,
      letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10,
    }}>
      {text}
    </span>
  );
}

function ItemList({ items, color }) {
  return items.map(item => (
    <div key={item} style={{ display: 'flex', gap: 8, padding: '5px 0', fontSize: 12, color: 'var(--text-secondary)' }}>
      <span style={{ color: `var(--${color})`, flexShrink: 0 }}>◈</span> {item}
    </div>
  ));
}

function BulletList({ items, color }) {
  return items.map(item => (
    <div key={item} style={{ display: 'flex', gap: 8, padding: '5px 0', fontSize: 12, color: 'var(--text-secondary)' }}>
      <span style={{ color: `var(--${color})`, flexShrink: 0 }}>▸</span> {item}
    </div>
  ));
}

/* ─────────────────────────────────────────────────────────────
   SECTION RENDERERS
───────────────────────────────────────────────────────────── */

function TraditionalSection({ t }) {
  const d = t.trad;
  const r = d.rows;
  return (
    <div className="fade-in-up delay-2">
      <SectionBadge text={d.badge} color="59,130,246" />
      <h3 style={{ fontFamily: "'Orbitron', monospace", fontSize: 16, color: 'var(--neon-blue)', marginBottom: 8 }}>{d.heading}</h3>
      <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>{d.overview}</p>

      <LessonCard title={d.plan.title} icon={d.plan.icon} color="neon-blue">
        {[r.lessonTitle, r.audience, r.duration, r.prior].map(([lbl, val]) => <InfoRow key={lbl} label={lbl} value={val} />)}
      </LessonCard>

      <LessonCard title={d.flow.title} icon={d.flow.icon} color="neon-blue">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
          {d.flow5.map((step, i) => <FlowStep key={step} label={step} index={i} total={d.flow5.length} color="59,130,246" />)}
        </div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 8 }}>{d.flowNote}</div>
      </LessonCard>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <LessonCard title={d.obj.title} icon={d.obj.icon} color="neon-blue">
          <ItemList items={d.objList} color="neon-blue" />
        </LessonCard>
        <LessonCard title={d.res.title} icon={d.res.icon} color="neon-blue">
          <BulletList items={d.resList} color="neon-blue" />
        </LessonCard>
      </div>

      <ExpandSection title={d.intro.title} icon={d.intro.icon}>
        <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 10, lineHeight: 1.7 }}>{d.introTxt}</p>
      </ExpandSection>
      <ExpandSection title={d.proc.title} icon={d.proc.icon}>
        <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 10, lineHeight: 1.7 }}>{d.procTxt}</p>
      </ExpandSection>
      <ExpandSection title={d.act.title} icon={d.act.icon}>
        <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 10, lineHeight: 1.7 }}>{d.actTxt}</p>
      </ExpandSection>

      <LessonCard title={d.assess.title} icon={d.assess.icon} color="neon-blue">
        {[r.method, r.outcomes, r.reflection].map(([lbl, val]) => <InfoRow key={lbl} label={lbl} value={val} />)}
        <div style={{ marginTop: 12 }}>
          {d.pbLabels.map((lbl, i) => <ProgressBar key={lbl} label={lbl} value={d.pbVals[i]} color="neon-blue" />)}
        </div>
      </LessonCard>
    </div>
  );
}

function ComputerizedSection({ t }) {
  const d = t.comp;
  const r = d.rows;
  return (
    <div className="fade-in-up delay-2">
      <SectionBadge text={d.badge} color="34,197,94" />
      <h3 style={{ fontFamily: "'Orbitron', monospace", fontSize: 16, color: 'var(--neon-green)', marginBottom: 8 }}>{d.heading}</h3>
      <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>{d.overview}</p>

      <LessonCard title={d.plan.title} icon={d.plan.icon} color="neon-green">
        {[r.lessonTitle, r.audience, r.duration, r.prior].map(([lbl, val]) => <InfoRow key={lbl} label={lbl} value={val} />)}
      </LessonCard>

      <LessonCard title={d.flow.title} icon={d.flow.icon} color="neon-green">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {d.flow5.map((step, i) => <FlowStep key={step} label={step} index={i} total={d.flow5.length} color="34,197,94" />)}
        </div>
      </LessonCard>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <LessonCard title={d.obj.title} icon={d.obj.icon} color="neon-green">
          <ItemList items={d.objList} color="neon-green" />
        </LessonCard>
        <LessonCard title={d.soft.title} icon={d.soft.icon} color="neon-green">
          <BulletList items={d.softList} color="neon-green" />
        </LessonCard>
      </div>

      <ExpandSection title={d.iact.title} icon={d.iact.icon}>
        <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 10, lineHeight: 1.7 }}>{d.iactTxt}</p>
      </ExpandSection>
      <ExpandSection title={d.learner.title} icon={d.learner.icon}>
        <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 10, lineHeight: 1.7 }}>{d.learnerTxt}</p>
      </ExpandSection>

      <LessonCard title={d.assess.title} icon={d.assess.icon} color="neon-green">
        {[r.method, r.tools, r.analytics, r.outcomes, r.reflection].map(([lbl, val]) => <InfoRow key={lbl} label={lbl} value={val} />)}
        <div style={{ marginTop: 12 }}>
          {d.pbLabels.map((lbl, i) => <ProgressBar key={lbl} label={lbl} value={d.pbVals[i]} color="neon-green" />)}
        </div>
      </LessonCard>
    </div>
  );
}

function AISection({ t }) {
  const d = t.ai;
  const r = d.rows;
  return (
    <div className="fade-in-up delay-2">
      <SectionBadge text={d.badge} color="168,85,247" />
      <h3 style={{ fontFamily: "'Orbitron', monospace", fontSize: 16, color: 'var(--neon-purple)', marginBottom: 8 }}>{d.heading}</h3>
      <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>{d.overview}</p>

      <LessonCard title={d.plan.title} icon={d.plan.icon} color="neon-purple">
        {[r.lessonTitle, r.audience, r.duration, r.prior].map(([lbl, val]) => <InfoRow key={lbl} label={lbl} value={val} />)}
      </LessonCard>

      <LessonCard title={d.flow.title} icon={d.flow.icon} color="neon-purple">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {d.flow5.map((step, i) => <FlowStep key={step} label={step} index={i} total={d.flow5.length} color="168,85,247" />)}
        </div>
      </LessonCard>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <LessonCard title={d.obj.title} icon={d.obj.icon} color="neon-purple">
          <ItemList items={d.objList} color="neon-purple" />
        </LessonCard>
        <LessonCard title={d.tutor.title} icon={d.tutor.icon} color="neon-purple">
          <BulletList items={d.tutorList} color="neon-purple" />
        </LessonCard>
      </div>

      <ExpandSection title={d.adapt.title} icon={d.adapt.icon}>
        <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 10, lineHeight: 1.7 }}>{d.adaptTxt}</p>
      </ExpandSection>
      <ExpandSection title={d.learner.title} icon={d.learner.icon}>
        <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 10, lineHeight: 1.7 }}>{d.learnerTxt}</p>
      </ExpandSection>

      <LessonCard title={d.assess.title} icon={d.assess.icon} color="neon-purple">
        {[r.method, r.perf, r.recs, r.outcomes, r.reflection].map(([lbl, val]) => <InfoRow key={lbl} label={lbl} value={val} />)}
        <div style={{ marginTop: 12 }}>
          {d.pbLabels.map((lbl, i) => <ProgressBar key={lbl} label={lbl} value={d.pbVals[i]} color="neon-purple" />)}
        </div>
      </LessonCard>
    </div>
  );
}

function GenerativeSection({ t }) {
  const d = t.gen;
  const r = d.rows;
  const [generating, setGenerating] = useState(null);
  const [generated, setGenerated] = useState({});

  const handle = (key) => {
    setGenerating(key);
    setTimeout(() => { setGenerating(null); setGenerated(p => ({ ...p, [key]: true })); }, 1800);
  };

  return (
    <div className="fade-in-up delay-2">
      <SectionBadge text={d.badge} color="251,146,60" />
      <h3 style={{ fontFamily: "'Orbitron', monospace", fontSize: 16, color: 'var(--neon-amber)', marginBottom: 8 }}>{d.heading}</h3>
      <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>{d.overview}</p>

      <LessonCard title={d.plan.title} icon={d.plan.icon} color="neon-amber">
        {[r.lessonTitle, r.audience, r.duration, r.prior].map(([lbl, val]) => <InfoRow key={lbl} label={lbl} value={val} />)}
      </LessonCard>

      <LessonCard title={d.flow.title} icon={d.flow.icon} color="neon-amber">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {d.flow5.map((step, i) => <FlowStep key={step} label={step} index={i} total={d.flow5.length} color="251,146,60" />)}
        </div>
      </LessonCard>

      <LessonCard title={d.aiCard.title} icon={d.aiCard.icon} color="neon-amber">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {d.actions.map(({ key, label, color, desc }) => (
            <button key={key} onClick={() => handle(key)} disabled={generating !== null} style={{
              background: generated[key] ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.03)',
              border: `1px solid ${generated[key] ? 'var(--neon-green)' : 'rgba(255,255,255,0.1)'}`,
              borderRadius: 10, padding: '12px 14px',
              cursor: generating !== null ? 'not-allowed' : 'pointer', textAlign: 'left',
            }}>
              <div style={{
                fontFamily: "'Orbitron', monospace", fontSize: 11, fontWeight: 700,
                color: generated[key] ? 'var(--neon-green)' : color, marginBottom: 4,
              }}>
                {generating === key ? d.generating : generated[key] ? d.generated : label}
              </div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.5 }}>{desc}</div>
            </button>
          ))}
        </div>
        {Object.keys(generated).length > 0 && (
          <div style={{
            marginTop: 12, padding: '10px 14px',
            background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)',
            borderRadius: 8, fontSize: 12, color: 'var(--neon-green)',
          }}>
            {d.genSuccess(Object.keys(generated).length)}
          </div>
        )}
      </LessonCard>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <LessonCard title={d.features.title} icon={d.features.icon} color="neon-amber">
          <BulletList items={d.featList} color="neon-amber" />
        </LessonCard>
        <LessonCard title={d.obj.title} icon={d.obj.icon} color="neon-amber">
          <ItemList items={d.objList} color="neon-amber" />
        </LessonCard>
      </div>

      <LessonCard title={d.assess.title} icon={d.assess.icon} color="neon-amber">
        {[r.method, r.outcomes, r.reflection].map(([lbl, val]) => <InfoRow key={lbl} label={lbl} value={val} />)}
        <div style={{ marginTop: 12 }}>
          {d.pbLabels.map((lbl, i) => <ProgressBar key={lbl} label={lbl} value={d.pbVals[i]} color="neon-amber" />)}
        </div>
      </LessonCard>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   COMPARISON DASHBOARD
───────────────────────────────────────────────────────────── */
function ComparisonDashboard({ t }) {
  const d = t.cmp;
  return (
    <section className="section fade-in-up">
      <div className="container-wide" style={{ padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{
            display: 'inline-block', background: 'rgba(99,102,241,0.12)',
            border: '1px solid rgba(99,102,241,0.3)', borderRadius: 20, padding: '4px 14px',
            fontSize: 10, fontFamily: "'Orbitron', monospace", fontWeight: 700,
            color: 'var(--neon-purple)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12,
          }}>
            {d.badge}
          </div>
          <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: 22, marginBottom: 10 }}>
            <span className="gradient-text">{d.titleHL}</span> — {d.title.replace(d.titleHL, '').replace('— ', '').trim()}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14, maxWidth: 600, margin: '0 auto' }}>{d.subtitle}</p>
        </div>

        <div style={{ display: 'grid', gap: 12 }}>
          {d.rows.map(row => (
            <div key={row.label} className="glass-card" style={{ padding: 20, borderRadius: 14 }}>
              <div style={{
                fontFamily: "'Orbitron', monospace", fontSize: 11, fontWeight: 700,
                color: 'var(--text-muted)', letterSpacing: 1, marginBottom: 14, textTransform: 'uppercase',
              }}>
                {row.label}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
                {d.cols.map(col => (
                  <div key={col.key} style={{
                    background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 10, padding: '10px 12px', borderTop: `2px solid ${col.color}`,
                  }}>
                    <div style={{ fontSize: 10, color: col.color, fontFamily: "'Orbitron', monospace", fontWeight: 700, marginBottom: 6 }}>{col.label}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{row[col.key]}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   ASSESSMENT FRAMEWORK
───────────────────────────────────────────────────────────── */
function AssessmentFramework({ t }) {
  const d = t.af;
  return (
    <section className="section fade-in-up">
      <div className="container-wide" style={{ padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{
            display: 'inline-block', background: 'rgba(251,146,60,0.12)',
            border: '1px solid rgba(251,146,60,0.3)', borderRadius: 20, padding: '4px 14px',
            fontSize: 10, fontFamily: "'Orbitron', monospace", fontWeight: 700,
            color: 'var(--neon-amber)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12,
          }}>
            {d.badge}
          </div>
          <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: 22, marginBottom: 10 }}>
            {d.title.replace(d.titleHL, '')} <span className="gradient-text">{d.titleHL}</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14, maxWidth: 580, margin: '0 auto' }}>{d.subtitle}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {d.cards.map(card => (
            <div key={card.title} className="glass-card" style={{
              padding: 24, borderRadius: 18, borderTop: `3px solid var(--${card.color})`,
              display: 'flex', flexDirection: 'column', gap: 14,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `rgba(${card.rgb},0.15)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, flexShrink: 0,
                }}>
                  {card.icon}
                </div>
                <div style={{ fontFamily: "'Orbitron', monospace", fontSize: 13, fontWeight: 700, color: `var(--${card.color})` }}>
                  {card.title}
                </div>
              </div>

              {[
                { lbl: d.purposeLbl, val: card.purpose, isList: false },
                { lbl: d.toolsLbl,   val: card.tools,   isList: true  },
                { lbl: d.methodLbl,  val: card.method,  isList: false },
                { lbl: d.outcomeLbl, val: card.outcomes, isList: false, highlight: true },
              ].map(({ lbl, val, isList, highlight }) => (
                <div key={lbl} style={highlight ? {
                  background: `rgba(${card.rgb},0.07)`, borderRadius: 10, padding: 12,
                  border: `1px solid rgba(${card.rgb},0.15)`,
                } : {}}>
                  <div style={{
                    fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 5,
                    color: highlight ? `var(--${card.color})` : 'var(--text-muted)',
                    fontFamily: "'Orbitron', monospace",
                  }}>
                    {lbl}
                  </div>
                  {isList
                    ? val.map(item => (
                        <div key={item} style={{ display: 'flex', gap: 7, padding: '4px 0', fontSize: 12, color: 'var(--text-secondary)' }}>
                          <span style={{ color: `var(--${card.color})`, flexShrink: 0 }}>▸</span> {item}
                        </div>
                      ))
                    : <p style={{ fontSize: 12, color: 'var(--text-secondary)', margin: 0 }}>{val}</p>
                  }
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────────────── */
export default function LearningDesignPage() {
  const { lang } = useLang();
  const t = LD[lang];
  const [active, setActive] = useState(null);

  const renderSection = () => {
    switch (active) {
      case 'traditional':  return <TraditionalSection  t={t} />;
      case 'computerized': return <ComputerizedSection t={t} />;
      case 'ai':           return <AISection           t={t} />;
      case 'generative':   return <GenerativeSection   t={t} />;
      default:             return null;
    }
  };

  const activeApproach = t.approaches.find(a => a.id === active);

  return (
    <PageLayout>
      <PageHero
        tag={t.hero.tag}
        title={`📐 <span class='gradient-text'>${t.hero.title}</span>`}
        subtitle={t.hero.subtitle}
      />

      {/* Four Approach Cards */}
      <section className="section">
        <div className="container-wide" style={{ padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 40 }}>
            {t.approaches.map(a => (
              <button
                key={a.id}
                onClick={() => setActive(active === a.id ? null : a.id)}
                style={{
                  background:  active === a.id ? `rgba(${a.rgb},0.12)` : 'rgba(255,255,255,0.02)',
                  border:      active === a.id ? `2px solid var(--${a.color})` : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 18, padding: '28px 22px', cursor: 'pointer', textAlign: 'left',
                  transition: 'all 0.3s ease',
                  boxShadow: active === a.id ? `0 0 24px rgba(${a.rgb},0.2), inset 0 0 20px rgba(${a.rgb},0.05)` : 'none',
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 14 }}>{a.icon}</div>
                <div style={{
                  fontFamily: "'Orbitron', monospace", fontSize: 13, fontWeight: 700,
                  color: active === a.id ? `var(--${a.color})` : 'var(--text-primary)',
                  marginBottom: 10, lineHeight: 1.3,
                }}>
                  {a.title}
                </div>
                <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{a.desc}</p>
                <div style={{
                  marginTop: 16, fontSize: 11,
                  color: active === a.id ? `var(--${a.color})` : 'var(--text-muted)',
                  fontFamily: "'Orbitron', monospace", letterSpacing: 0.5,
                }}>
                  {active === a.id ? t.closeLabel : t.openLabel}
                </div>
              </button>
            ))}
          </div>

          {/* Active Section Panel */}
          {active && (
            <div className="glass-card fade-in-up" style={{
              padding: 32, borderRadius: 20, marginBottom: 40,
              borderTop: `3px solid var(--${activeApproach?.color})`,
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28,
                paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}>
                <span style={{ fontSize: 28 }}>{activeApproach?.icon}</span>
                <div>
                  <div style={{
                    fontFamily: "'Orbitron', monospace", fontSize: 16, fontWeight: 800,
                    color: `var(--${activeApproach?.color})`,
                  }}>
                    {activeApproach?.title}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>{t.studioSub}</div>
                </div>
              </div>
              {renderSection()}
            </div>
          )}
        </div>
      </section>

      <ComparisonDashboard  t={t} />
      <AssessmentFramework  t={t} />
    </PageLayout>
  );
}
