export type ChallengeLevel = 'beginner' | 'intermediate' | 'advanced';

export interface ChallengeStep {
  title: string;
  description: string;
  promptTip: string;
}

export interface ChallengeDetailContent {
  summary: string;
  outcome: string;
  steps: ChallengeStep[];
  tips: string[];
  checklist: string[];
  closingTitle: string;
  closingMessage: string;
}

export interface Challenge {
  id: string;
  title: string;
  level: ChallengeLevel;
  levelLabel: string;
  time: string;
  description: string;
  available: boolean;
  featured?: boolean;
  detail?: ChallengeDetailContent;
}

export interface ChallengeLevelMeta {
  key: ChallengeLevel;
  heading: string;
  stepNumber: string;
  accentClassName: string;
}

export const challengeLevels: ChallengeLevelMeta[] = [
  {
    key: 'beginner',
    heading: 'Level 1: Quick Wins',
    stepNumber: '1',
    accentClassName: 'bg-emerald-500',
  },
  {
    key: 'intermediate',
    heading: 'Level 2: Real Projects',
    stepNumber: '2',
    accentClassName: 'bg-sky-500',
  },
  {
    key: 'advanced',
    heading: 'Level 3: Serious Builds',
    stepNumber: '3',
    accentClassName: 'bg-violet-500',
  },
];

export const challenges: Challenge[] = [
  {
    id: 'landing-page',
    title: 'My Landing Page',
    level: 'beginner',
    levelLabel: 'Quick Win',
    time: '20 min',
    description: 'Build your own personal homepage',
    available: true,
    featured: true,
    detail: {
      summary:
        "Your personal landing page is your digital front door. In this challenge, you'll build a page that shows who you are, what you're interested in, and how people can reach you.",
      outcome:
        "A clean, modern homepage with your name, a short bio, links to your projects or socials, and a simple way for people to contact you.",
      steps: [
        {
          title: 'Step 1: Set Up Your Structure',
          description:
            'Start with a clean HTML base. You need a header section with your name, a bio section, and a footer with contact links.',
          promptTip:
            'Create a simple HTML structure for a personal landing page with a header, hero section with my name and bio, and a footer.',
        },
        {
          title: 'Step 2: Style It to Look Good',
          description:
            'Add CSS to make it look modern and clean. Think about colors, fonts, spacing, and how it looks on phones too.',
          promptTip:
            'Add CSS to make this page look modern and professional. Use a clear color scheme and make sure it is responsive on mobile.',
        },
        {
          title: 'Step 3: Add Your Content',
          description:
            'Fill in your name, write a short bio about yourself, add links to your socials or projects, and include your email or contact form.',
          promptTip:
            'Help me write a compelling 2 to 3 sentence bio about myself as a high school student interested in coding and tech.',
        },
        {
          title: 'Step 4: Deploy It',
          description:
            'Get your page live on the internet. Use a free hosting service so you can share it with anyone.',
          promptTip: 'How do I deploy this HTML and CSS page to the internet for free?',
        },
      ],
      tips: [
        "Keep it simple. You do not need fancy effects to look professional.",
        'Use plenty of white space. It makes your page easier to read.',
        'Make sure your links work and your contact info is correct before sharing.',
        'Test it on your phone. A lot of people will see it on mobile first.',
      ],
      checklist: [
        'Your name is prominently displayed',
        'You have a bio or about section',
        'It has at least one call to action',
        'It looks good on mobile',
        'You have deployed it and have a live URL',
      ],
      closingTitle: 'Ready to ship?',
      closingMessage:
        'Once your page is live, share it with the Vibe Coding community. You just built your first real project.',
    },
  },
  {
    id: 'would-you-rather',
    title: 'Would You Rather',
    level: 'beginner',
    levelLabel: 'Quick Win',
    time: '20 min',
    description: 'A voting game with two choices',
    available: false,
  },
  {
    id: 'quiz-machine',
    title: 'Quiz Machine',
    level: 'beginner',
    levelLabel: 'Quick Win',
    time: '30 min',
    description: 'Trivia quiz on any topic',
    available: false,
  },
  {
    id: 'countdown-timer',
    title: 'Countdown Timer',
    level: 'beginner',
    levelLabel: 'Quick Win',
    time: '15 min',
    description: 'Stylish countdown to any event',
    available: false,
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    level: 'intermediate',
    levelLabel: 'Real Project',
    time: '1 hr',
    description: 'Look up weather for any city',
    available: false,
  },
  {
    id: 'study-buddy',
    title: 'Study Buddy',
    level: 'intermediate',
    levelLabel: 'Real Project',
    time: '1.5 hrs',
    description: 'Flashcards that track progress',
    available: false,
  },
  {
    id: 'split-the-bill',
    title: 'Split the Bill',
    level: 'intermediate',
    levelLabel: 'Real Project',
    time: '1 hr',
    description: 'Bill splitter with tax and tip',
    available: false,
  },
  {
    id: 'class-schedule',
    title: 'Class Schedule',
    level: 'intermediate',
    levelLabel: 'Real Project',
    time: '1.5 hrs',
    description: 'Color-coded weekly class view',
    available: false,
  },
  {
    id: 'club-manager',
    title: 'Club Manager',
    level: 'advanced',
    levelLabel: 'Serious Build',
    time: 'multi-session',
    description: 'Members, events, signups for school clubs',
    available: false,
  },
  {
    id: 'debate-prep',
    title: 'Debate Prep Tool',
    level: 'advanced',
    levelLabel: 'Serious Build',
    time: 'multi-session',
    description: 'Both sides of any argument',
    available: false,
  },
  {
    id: 'tutoring-market',
    title: 'Peer Tutoring Market',
    level: 'advanced',
    levelLabel: 'Serious Build',
    time: 'multi-session',
    description: 'Connect student tutors with learners',
    available: false,
  },
];

export function getChallengeById(id: string | null) {
  if (!id) {
    return null;
  }

  return challenges.find((challenge) => challenge.id === id) ?? null;
}
