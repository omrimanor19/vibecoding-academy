export type ChallengeLevel = 'beginner' | 'intermediate' | 'advanced';

export interface ChallengeStep {
  title: string;
  description: string;
  promptTip?: string;
  terms?: Record<string, string>;
}

export interface SetupStep {
  instruction: string;
  note?: string;
}

export interface AhaMomentContent {
  front: string;
  back: string;
}

export interface ChallengeDetailContent {
  summary: string;
  outcome: string;
  setup?: {
    intro: string;
    steps: SetupStep[];
    ahaMoment?: AhaMomentContent;
  };
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
  description?: string;
}

// Shared Lovable setup steps — used by all Level 1 challenges so the
// instructions stay in sync if Lovable's UI ever changes.
const lovableSetupSteps: SetupStep[] = [
  {
    instruction: 'Go to lovable.dev and create a free account.',
    note: 'You can sign up with Google. It takes about 2 minutes.',
  },
  {
    instruction: 'Once you\'re logged in, click "Start building" or "New Project" to create a new project.',
  },
  {
    instruction:
      'You will see a text box at the bottom of the screen. This is where you type what you want to build, in plain English, just like you would in ChatGPT.',
    note: 'No coding knowledge needed. You just describe what you want.',
  },
  {
    instruction:
      'Type your first prompt and hit Enter. Lovable will read it and start building your site. You will see the result appear on the right side of the screen.',
  },
  {
    instruction:
      "If you don't like something, just say so in the next message. You can keep chatting to change, add, or fix anything. It's a conversation.",
  },
];

export const challengeLevels: ChallengeLevelMeta[] = [
  {
    key: 'beginner',
    heading: 'Level 1: Quick Wins',
    stepNumber: '1',
    accentClassName: 'bg-emerald-500',
    description:
      'Great starting points if you have never built anything before. Pick any one you like, in any order. Each challenge takes 15 to 30 minutes and leaves you with something real you built yourself.',
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
        "Your personal landing page is your digital front door. In this challenge, you'll build a page that shows who you are, what you're interested in, and how people can reach you. By the end, you'll have a real, live webpage with your own URL that you can share with anyone. Use it on college applications, include it in internship outreach emails, share it on social media, or just point people to it when they want to know more about you.",
      outcome:
        "A clean, modern homepage with your name, a short bio, links to your projects or socials, and a simple way for people to contact you. Something you're genuinely proud to share.",
      setup: {
        intro:
          "Before you write a single prompt, let's get you set up. Lovable is like ChatGPT, except instead of just answering you in text, it actually builds a real website as you talk to it.",
        steps: [
          {
            instruction: 'Go to lovable.dev and create a free account.',
            note: 'You can sign up with Google. It takes about 2 minutes.',
          },
          {
            instruction: "Once you're logged in, click \"Start building\" or \"New Project\" to create a new project.",
          },
          {
            instruction:
              'You will see a text box at the bottom of the screen. This is where you type what you want to build, in plain English, just like you would in ChatGPT.',
            note: 'No coding knowledge needed. You just describe what you want.',
          },
          {
            instruction:
              'Type your first prompt and hit Enter. Lovable will read it and start building your site. You will see the result appear on the right side of the screen.',
          },
          {
            instruction:
              "If you don't like something, just say so in the next message. You can keep chatting to change, add, or fix anything. It's a conversation.",
          },
        ],
        ahaMoment: {
          front:
            "Why do some people get amazing results from AI builders while others just get a mess?",
          back: "The secret is planning before prompting. The AI can build almost anything you describe, but it can only build what you describe. Before you type, take 30 seconds to think: what exactly do I want this step to do? Then ask for one small thing at a time. Big vague prompts get messy results. Small clear prompts get clean results.",
        },
      },
      steps: [
        {
          title: 'Step 1: Set Up Your Structure',
          description:
            'Start by giving Lovable the basic skeleton of your page: a top section with your name, a middle section for your bio, and a bottom section with your contact links. Try the prompt below, or rewrite it in your own words.',
          promptTip:
            'Create a personal landing page with a header showing my name, a hero section with a short bio, and a footer with contact links.',
          terms: {
            HTML: 'the language that defines the structure of a webpage, like a skeleton',
          },
        },
        {
          title: 'Step 2: Style It to Look Good',
          description:
            "Now make it look like you. Tell Lovable what colors, fonts, or vibe you're going for. Want it minimal and clean? Bold and colorful? Just describe it. Also mention that it should look good on phones.",
          promptTip:
            'Style this page to look modern and clean. Use a color scheme I like and make sure it looks good on mobile.',
          terms: {
            CSS: 'the language that controls how a page looks: colors, fonts, spacing, and layout',
          },
        },
        {
          title: 'Step 3: Add Your Content',
          description:
            'Fill in your name, write a short bio about yourself, add links to your socials or projects, and include your email or contact form.',
          promptTip:
            'Help me write a compelling 2 to 3 sentence bio about myself as a high school student interested in coding and tech.',
        },
        {
          title: 'Step 4: Publish It',
          description:
            'When you are happy with how it looks, click the Publish button in Lovable. It will give you a live URL you can share with anyone.',
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
    available: true,
    detail: {
      summary:
        "You know the game: would you rather eat a live worm or lick a subway pole? Now you're going to build your own version that anyone can actually vote on. In this challenge you'll create a voting app where two choices go head to head and the vote counts update when people click. By the end you'll have a shareable link you can drop in your group chat and watch the votes come in.",
      outcome:
        "A voting app with two choices, live vote counts that update when clicked, and your own custom question. Something you can actually send to friends.",
      setup: {
        intro:
          "Before you start building, let's get you set up in Lovable. If you have done this before, you can skim through quickly. If this is your first time, follow each step.",
        steps: [
          ...lovableSetupSteps,
          {
            instruction: 'Start a new project for this challenge. Do not continue from a previous one.',
          },
        ],
        ahaMoment: {
          front: "What's the difference between a webpage and an app?",
          back: "A webpage shows you things. An app responds to what you do. When you click a choice and the vote count goes up in real time, your page is listening, remembering, and reacting. That is called interactivity, and it is what you are building right now. Once you know how to make one thing interactive, you can make almost anything.",
        },
      },
      steps: [
        {
          title: 'Step 1: Build the Voting Screen',
          description:
            "The core of this app is one question and two big clickable cards side by side. When someone clicks a card, the vote count for that choice goes up. Tell Lovable to build all of this at once — it can handle it in one prompt.",
          promptTip:
            'Build a Would You Rather voting app. Show a question at the top. Below it, two large clickable cards side by side, one for each choice. When someone clicks a card, show a vote count below it that goes up by 1.',
          terms: {
            'vote count': 'a number that tracks how many times something has been clicked',
          },
        },
        {
          title: 'Step 2: Make It Yours',
          description:
            "Right now it probably has placeholder text like 'Option A vs Option B.' Replace it with something your friends will actually want to vote on. Pick a theme: school lunch options, celebrities, sports teams, ridiculous hypotheticals. The weirder the question, the more people share it.",
          promptTip:
            'Replace the placeholder question and choices with: Would you rather [your choice 1] or [your choice 2]?',
        },
        {
          title: 'Step 3: Style It Like a Battle',
          description:
            "Make the two choices feel like rivals. Think bold colors, big text, maybe a VS in the middle. The design should make it obvious that this is a versus moment, not just two boring buttons.",
          promptTip:
            'Style this to look like a versus battle. Bold, high-contrast design with big text for each choice and a VS symbol in the middle.',
        },
        {
          title: 'Step 4: Publish It',
          description:
            'Click the Publish button in Lovable. Share the link with at least one person and see if you get a vote.',
        },
      ],
      tips: [
        'Pick a question your friends will actually have an opinion about. A good question gets shared.',
        'Keep the two choices roughly the same length. A long option next to a short one looks unbalanced.',
        'Vote counts reset when the page is refreshed. That is normal at this level. Storing votes permanently is a Level 2 problem.',
        'Try it on your phone before sharing. Buttons that are too small are frustrating to tap.',
      ],
      checklist: [
        'Two choices are displayed clearly',
        'Clicking a choice updates its vote count',
        'The question is your own, not placeholder text',
        'It looks good on mobile',
        'You have a live URL to share',
      ],
      closingTitle: 'First interactive app, done.',
      closingMessage:
        'Send the link to someone and watch the votes come in. You just built something that actually responds to people.',
    },
  },
  {
    id: 'quiz-machine',
    title: 'Quiz Machine',
    level: 'beginner',
    levelLabel: 'Quick Win',
    time: '30 min',
    description: 'Trivia quiz on any topic',
    available: true,
    detail: {
      summary:
        "You pick the topic, Lovable builds the quiz. Whether it is World Cup trivia, Taylor Swift deep cuts, or whatever you are studying for a test — this challenge teaches you to build a real quiz app with questions, multiple choice answers, and a score at the end. By the end you will have something actually useful for studying or just messing around, and you can change the whole topic in under a minute.",
      outcome:
        "A working quiz app on any topic you choose, with multiple choice answers, instant right/wrong feedback, and a final score screen. Reusable for any subject, any time.",
      setup: {
        intro:
          "Before you start building, let's get you set up in Lovable. If you have done this before, you can skim through quickly. If this is your first time, follow each step.",
        steps: [
          ...lovableSetupSteps,
          {
            instruction: 'Start a new project for this challenge. Do not continue from a previous one.',
          },
        ],
        ahaMoment: {
          front: "If you wanted to swap out every question in a quiz, how long do you think that would take?",
          back: "About two minutes. Here is why: in a well-built quiz app, the questions are just a list of text. The code handles everything else — showing one question at a time, checking your answer, keeping score. The content and the logic are separate. That means you can change every question without touching anything that makes the quiz actually work. This is one of the most powerful ideas in all of software.",
        },
      },
      steps: [
        {
          title: 'Step 1: Build the Quiz',
          description:
            "Tell Lovable what the quiz should look like and how it should work. Give it a topic and describe the format: one question at a time, four answer choices, feedback after each answer. It will build the whole question-to-score flow for you.",
          promptTip:
            'Build a multiple choice quiz app about [your topic]. Show one question at a time with 4 answer choices. When the user picks an answer, show whether it was right or wrong, then show a button to go to the next question. At the end, show their final score.',
          terms: {
            'multiple choice': 'a question format where you pick one answer from a list of options',
          },
        },
        {
          title: 'Step 2: Add a Results Screen',
          description:
            "When the quiz ends, the learner should see more than just a number. Add a short message that changes based on how well they did. Something encouraging for low scores, something celebratory for high ones.",
          promptTip:
            'When the quiz is finished, show a results screen with the final score and a message that changes based on the result. For example: under 50% gets an encouraging message, 50-80% gets a good effort message, above 80% gets a congratulations message.',
        },
        {
          title: 'Step 3: Fill In Your Questions',
          description:
            "Now make it yours. Replace the placeholder questions with real ones on your topic. You can ask Lovable to generate questions for you, or write your own. Aim for at least 5.",
          promptTip:
            'Replace all the questions with real trivia about [your topic]. Use 5 questions with 4 answer choices each, and make sure one answer per question is marked as correct.',
        },
        {
          title: 'Step 4: Style It',
          description:
            "Give it a look that fits the topic. A sports quiz can be bold and energetic. A music quiz can be colorful. A study tool can be clean and distraction-free. Tell Lovable what vibe you are going for.",
          promptTip:
            'Style this quiz to feel like [describe the vibe you want]. Make it easy to read and polished.',
        },
        {
          title: 'Step 5: Publish It',
          description:
            'Click the Publish button in Lovable. Challenge a friend to beat your score.',
        },
      ],
      tips: [
        'Keep questions clear and unambiguous. If two answer choices could both be correct, the question needs rewording.',
        'Mix easy and hard questions. All easy is boring, all hard is discouraging.',
        'Take the quiz yourself after building it to catch any wrong answers before you share it.',
        '4 answer choices per question is the sweet spot. More gets overwhelming, fewer makes it too easy to guess.',
      ],
      checklist: [
        'The quiz has at least 5 questions',
        'Each question has multiple choice answers',
        'Right and wrong answers are shown clearly after each pick',
        'There is a final score screen',
        'The questions are on your own topic, not placeholders',
        'You have a live URL to share',
      ],
      closingTitle: 'Your quiz is live.',
      closingMessage:
        'Change the topic any time in about 2 minutes. That is the power of keeping your content separate from your code.',
    },
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
