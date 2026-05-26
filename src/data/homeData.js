export const HERO_STATS = [
  { count: 48,  suffix: '',  label: 'Lessons' },
  { count: 12,  suffix: '',  label: '3D Models' },
  { count: 8,   suffix: '',  label: 'AI Features' },
  { count: 94,  suffix: '%', label: 'Pass Rate' },
];

export const HERO_COMPONENTS = [
  { cls: 'fc-cpu',  icon: '🔲', name: 'CPU',      spec: 'Intel Core i9' },
  { cls: 'fc-gpu',  icon: '🎮', name: 'GPU',      spec: 'RTX 4090' },
  { cls: 'fc-ram',  icon: '💾', name: 'RAM',      spec: 'DDR5 64GB' },
  { cls: 'fc-ssd',  icon: '💿', name: 'NVMe SSD', spec: '2TB Gen5' },
];

export const JOURNEY_STEPS = [
  { icon: '🏠', label: 'Introduction',          to: '/',              status: 'completed' },
  { icon: '📚', label: 'Traditional Learning',  to: '/traditional',   status: 'completed' },
  { icon: '💻', label: 'Computerized Learning', to: '/computerized',  status: 'active' },
  { icon: '🤖', label: 'AI Learning',           to: '/ai-learning',   status: '' },
  { icon: '🧬', label: 'Generative AI + 3D Lab',to: '/3d-lab',        status: '' },
  { icon: '🏆', label: 'Assessment Center',     to: '/assessment',    status: '' },
];

export const PLATFORM_STATS = [
  { icon: '📖', color: 'var(--neon-blue)',   count: 48,  label: 'Structured Lessons',    delay: 'delay-1' },
  { icon: '🧊', color: 'var(--neon-cyan)',   count: 12,  label: 'Interactive 3D Models', delay: 'delay-2' },
  { icon: '✦',  color: 'var(--neon-purple)', count: 8,   label: 'AI Features',           delay: 'delay-3' },
  { icon: '📈', color: 'var(--neon-green)',  count: 94,  label: 'Student Progress Rate %',delay: 'delay-4' },
];

export const LEARN_CARDS = [
  {
    icon: '🔲', title: 'Motherboard Architecture', delay: 'delay-1',
    desc: 'Deep-dive into PCB design, chipsets, power delivery, and the interconnects that tie every component together.',
    tag: 'CORE MODULE',
    iconBg: '', tagBg: '',
  },
  {
    icon: '🧠', title: 'Component Synergy', delay: 'delay-2',
    desc: 'Understand how CPU, RAM, GPU, and storage communicate via buses, controllers, and protocols like PCIe Gen 5.',
    tag: 'INTERMEDIATE',
    iconStyle: { background: 'rgba(192,132,252,0.08)', borderColor: 'rgba(192,132,252,0.2)' },
    tagStyle: { background: 'rgba(192,132,252,0.06)', borderColor: 'rgba(192,132,252,0.15)', color: 'var(--neon-purple)' },
  },
  {
    icon: '🧊', title: '3D Hardware Exploration', delay: 'delay-3',
    desc: 'Interact with photorealistic 3D models, rotate components, and explore internal architecture from every angle.',
    tag: '3D IMMERSIVE',
    iconStyle: { background: 'rgba(0,255,245,0.08)', borderColor: 'rgba(0,255,245,0.2)' },
    tagStyle: { background: 'rgba(0,255,245,0.06)', borderColor: 'rgba(0,255,245,0.15)', color: 'var(--neon-cyan)' },
  },
  {
    icon: '🖥️', title: 'Virtual PC Assembly', delay: 'delay-4',
    desc: 'Build a complete virtual PC from scratch in our 3D simulation lab — slot RAM, seat CPUs, route cables.',
    tag: 'SIMULATION',
    iconStyle: { background: 'rgba(0,255,136,0.08)', borderColor: 'rgba(0,255,136,0.2)' },
    tagStyle: { background: 'rgba(0,255,136,0.06)', borderColor: 'rgba(0,255,136,0.15)', color: 'var(--neon-green)' },
  },
  {
    icon: '🤖', title: 'AI Learning Assistants', delay: 'delay-5',
    desc: 'Chat with our AI tutor, get instant explanations, personalized study plans, and adaptive quiz generation.',
    tag: 'AI-POWERED',
    iconStyle: { background: 'rgba(255,170,0,0.08)', borderColor: 'rgba(255,170,0,0.2)' },
    tagStyle: { background: 'rgba(255,170,0,0.06)', borderColor: 'rgba(255,170,0,0.15)', color: 'var(--neon-amber)' },
  },
  {
    icon: '🎯', title: 'Immersive Simulations', delay: 'delay-6',
    desc: 'Complete guided scenarios like diagnosing hardware faults, optimizing cooling, and building high-performance workstations.',
    tag: 'ADVANCED',
    iconStyle: { background: 'rgba(239,68,68,0.08)', borderColor: 'rgba(239,68,68,0.2)' },
    tagStyle: { background: 'rgba(239,68,68,0.06)', borderColor: 'rgba(239,68,68,0.15)', color: '#f87171' },
  },
];

export const COMPARISON_ROWS = [
  { feature: 'Teacher-led Content',    trad: 'yes',  comp: 'part', ai: 'no',  gen: 'no'  },
  { feature: 'Interactive Media',      trad: 'no',   comp: 'yes',  ai: 'yes', gen: 'yes' },
  { feature: 'Personalized Tutoring',  trad: 'no',   comp: 'no',   ai: 'yes', gen: 'yes' },
  { feature: '3D Simulations',         trad: 'no',   comp: 'part', ai: 'no',  gen: 'yes' },
  { feature: 'Smart Recommendations',  trad: 'no',   comp: 'no',   ai: 'yes', gen: 'yes' },
  { feature: 'Gamification',           trad: 'no',   comp: 'yes',  ai: 'part',gen: 'yes' },
  { feature: 'AI Voice Explanations',  trad: 'no',   comp: 'no',   ai: 'part',gen: 'yes' },
];

export const METHOD_CARDS = [
  {
    to: '/traditional',   icon: '📚', color: '#60a5fa',
    title: 'Traditional Learning',
    desc: 'Structured lessons, teacher notes, concept cards, and quizzes in a digital classroom environment.',
    cta: 'Enter Classroom →', cls: 'mc-traditional',
  },
  {
    to: '/computerized',  icon: '💻', color: 'var(--neon-cyan)',
    title: 'Computerized Learning',
    desc: 'Interactive diagrams, gamification, drag-and-drop activities, and achievement badges for engaged learning.',
    cta: 'Explore Activities →', cls: 'mc-computerized',
  },
  {
    to: '/ai-learning',   icon: '🤖', color: 'var(--neon-purple)',
    title: 'AI-Based Learning',
    desc: 'AI tutor, smart conversation, personalized adaptive curriculum, and real-time feedback on your progress.',
    cta: 'Meet Your AI Tutor →', cls: 'mc-ai',
  },
  {
    to: '/3d-lab',        icon: '🧬', color: 'var(--neon-green)',
    title: 'Generative AI + 3D Lab',
    desc: 'Immersive 3D motherboard simulation, AI voice guidance, virtual PC assembly, and holographic overlays.',
    cta: 'Enter the Lab →', cls: 'mc-generative',
  },
];

export const FOOTER_LINKS = {
  Learning: [
    { to: '/traditional',  label: 'Traditional Lessons' },
    { to: '/computerized', label: 'Interactive Activities' },
    { to: '/ai-learning',  label: 'AI Tutor' },
    { to: '/3d-lab',       label: '3D Lab' },
  ],
  Platform: [
    { to: '/assessment',   label: 'Assessment Center' },
    { to: '#',             label: 'Progress Tracking' },
    { to: '#',             label: 'Leaderboard' },
    { to: '#',             label: 'Certificates' },
  ],
  Topics: [
    { to: '#', label: 'CPU Architecture' },
    { to: '#', label: 'GPU Technology' },
    { to: '#', label: 'Memory Systems' },
    { to: '#', label: 'Storage & I/O' },
  ],
};
