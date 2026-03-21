export interface Challenge {
  id: string;
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  levelLabel: string;
  time: string;
  description: string;
  clickable: boolean;
}

export const challenges: Challenge[] = [
  {
    id: 'landing-page',
    title: 'My Landing Page',
    level: 'beginner',
    levelLabel: 'Quick Win',
    time: '20 min',
    description: 'Build your own personal homepage',
    clickable: true,
  },
  {
    id: 'would-you-rather',
    title: 'Would You Rather',
    level: 'beginner',
    levelLabel: 'Quick Win',
    time: '20 min',
    description: 'A voting game with two choices',
    clickable: false,
  },
  {
    id: 'quiz-machine',
    title: 'Quiz Machine',
    level: 'beginner',
    levelLabel: 'Quick Win',
    time: '30 min',
    description: 'Trivia quiz on any topic',
    clickable: false,
  },
  {
    id: 'countdown-timer',
    title: 'Countdown Timer',
    level: 'beginner',
    levelLabel: 'Quick Win',
    time: '15 min',
    description: 'Stylish countdown to any event',
    clickable: false,
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    level: 'intermediate',
    levelLabel: 'Real Project',
    time: '1 hr',
    description: 'Look up weather for any city',
    clickable: false,
  },
  {
    id: 'study-buddy',
    title: 'Study Buddy',
    level: 'intermediate',
    levelLabel: 'Real Project',
    time: '1.5 hrs',
    description: 'Flashcards that track progress',
    clickable: false,
  },
  {
    id: 'split-the-bill',
    title: 'Split the Bill',
    level: 'intermediate',
    levelLabel: 'Real Project',
    time: '1 hr',
    description: 'Bill splitter with tax and tip',
    clickable: false,
  },
  {
    id: 'class-schedule',
    title: 'Class Schedule',
    level: 'intermediate',
    levelLabel: 'Real Project',
    time: '1.5 hrs',
    description: 'Color-coded weekly class view',
    clickable: false,
  },
  {
    id: 'club-manager',
    title: 'Club Manager',
    level: 'advanced',
    levelLabel: 'Serious Build',
    time: 'multi-session',
    description: 'Members, events, signups for school clubs',
    clickable: false,
  },
  {
    id: 'debate-prep',
    title: 'Debate Prep Tool',
    level: 'advanced',
    levelLabel: 'Serious Build',
    time: 'multi-session',
    description: 'Both sides of any argument',
    clickable: false,
  },
  {
    id: 'tutoring-market',
    title: 'Peer Tutoring Market',
    level: 'advanced',
    levelLabel: 'Serious Build',
    time: 'multi-session',
    description: 'Connect student tutors with learners',
    clickable: false,
  },
];
