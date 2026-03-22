export type ChallengeLevel = 'beginner' | 'intermediate' | 'advanced';

export interface RecipeStep {
  title: string;
  prompt: string;
  tip: string;
}

export interface ChallengeDetailContent {
  tool: string;
  summary: string;
  recipe: RecipeStep[];
  stretch: string[];
  freestyle: string;
  showAndTell: string;
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
      tool: 'Lovable (free)',
      summary:
        'Build a personal homepage that introduces you to the world. Your name, a short bio, your interests, and links to your socials. Your corner of the internet.',
      recipe: [
        {
          title: 'Start with the big picture',
          prompt:
            'Build me a personal landing page. I want my name [YOUR NAME] as a big headline, a short bio section, a list of my interests, and links to my social media. Modern and clean, dark background, bright accent colors.',
          tip: 'Give the AI the full picture in your first prompt -- what it is, what\'s in it, how it looks. Fewer round trips = better results.',
        },
        {
          title: 'Make it yours',
          prompt:
            'Change the bio to: [your 2-3 sentences]. Update interests to: [your list]. Add links to my [your socials].',
          tip: 'AI scaffolds fast, but you fill in what makes it yours. Replace placeholder content early.',
        },
        {
          title: 'Level up the design',
          prompt:
            "Add a fade-in animation on the headline. Add a 'What I'm Working On' section at the bottom with 2-3 bullet points.",
          tip: "Rough draft first, then layer in polish. That's how real building works.",
        },
        {
          title: 'Ship it',
          prompt: 'Make sure it looks good on mobile. Fix any spacing issues.',
          tip: 'The last step is always polish. This is the difference between a project and a product.',
        },
      ],
      stretch: [
        'Add dark mode / light mode toggle',
        'Include a photo or avatar',
        'Add a "Contact Me" form',
        'Custom cursor or hover effects',
      ],
      freestyle:
        "Add something that's totally your idea. A feature, a section, a whole new vibe. This is where you stop following the recipe and start cooking.",
      showAndTell:
        'Share what you built. Reflect: What was easier than expected? What surprised you? If you had another hour, what would you add?',
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
