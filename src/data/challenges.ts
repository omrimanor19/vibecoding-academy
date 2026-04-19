export type ChallengeLevel = 'beginner' | 'intermediate' | 'advanced';

export interface ChallengeStep {
  title: string;
  description: string;
  promptTip?: string;
  terms?: Record<string, string>;
  ahaMoment?: AhaMomentContent;
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
  coreIdea: string;
  coreIdeaBlurb: string;
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
    coreIdea: 'Layout Prompting',
    coreIdeaBlurb:
      'Learn how to describe structure, style, and personality clearly enough for AI to build a page that actually feels like you.',
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
    coreIdea: 'Interactivity',
    coreIdeaBlurb:
      'Learn that apps can react to clicks, update what people see, and keep track of what just happened.',
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
    coreIdea: 'Content vs. Logic',
    coreIdeaBlurb:
      'Learn that the questions in an app can change completely while the code that runs the experience stays the same.',
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
    coreIdea: 'Real-Time Updates',
    coreIdeaBlurb:
      'Learn how apps can keep checking the clock and update themselves automatically without the user doing anything.',
    available: true,
    detail: {
      summary:
        "A countdown timer is one of the most satisfying things you can build because you actually use it. Set it to your birthday, graduation, summer break, or a concert you're waiting for. Every time you open the page, it shows exactly how many days, hours, minutes, and seconds are left. By the end you'll have a live, shareable countdown page of your own.",
      outcome:
        "A live countdown timer to any event you choose, showing days, hours, minutes, and seconds ticking down in real time. Styled to look sharp and ready to share.",
      setup: {
        intro:
          "Before you start, let's get you set up in Lovable. If you've done this before, skim through. If it's your first time, follow each step.",
        steps: [
          ...lovableSetupSteps,
          {
            instruction: 'Start a new project for this challenge. Do not continue from a previous one.',
          },
        ],
        ahaMoment: {
          front: "How does a countdown update every second without you clicking anything?",
          back: "When you build a countdown, you write code that says: check what time it is right now, calculate the difference, then do it again in exactly one second. Computers can repeat instructions like that forever without stopping. Once you set it up, the page handles itself. This is how live scoreboards, sports scores, and anything that updates automatically actually works.",
        },
      },
      steps: [
        {
          title: 'Step 1: Build the Countdown',
          description:
            "Tell Lovable to build a countdown timer. Give it a target date and describe the four numbers you want to see: days, hours, minutes, and seconds. Lovable will wire up all the logic that keeps it ticking.",
          promptTip:
            'Build a countdown timer that counts down to [a date you care about, like your graduation or a concert]. Show four numbers: days, hours, minutes, and seconds remaining. Update them automatically every second.',
          terms: {
            'target date': 'the future moment the timer is counting down to',
          },
        },
        {
          title: 'Step 2: Make It Yours',
          description:
            "Replace the placeholder event name and date with something real. It could be the last day of school, your birthday, a game release you are waiting for, or literally anything in the future. The more personal it is, the more you will want to share it.",
        },
        {
          title: 'Step 3: Style It',
          description:
            "Make the design match the energy of the event. A graduation countdown can feel clean and official. A concert countdown can go bold and colorful. A summer break countdown can be bright and fun. Tell Lovable the vibe you are going for.",
          promptTip:
            'Style this countdown to feel like [describe the mood or event]. Use big, bold numbers and a background that matches the vibe.',
        },
        {
          title: 'Step 4: Publish It',
          description:
            'Click the Publish button in Lovable. You will get a live URL you can share with anyone who is counting down to the same thing.',
        },
      ],
      tips: [
        'Use a date that is actually in the future — if the date has already passed, the timer will show zeroes.',
        'Big numbers hit harder. Use a large, bold font so the countdown feels dramatic.',
        'Test it on your phone before sharing. Countdowns look especially good on mobile.',
        'Ask Lovable to add a message for when the timer reaches zero, so it does not just go blank.',
      ],
      checklist: [
        'The timer shows days, hours, minutes, and seconds',
        'The event name is yours, not placeholder text',
        'The numbers update automatically every second without you doing anything',
        'It looks good on mobile',
        'You have a live URL to share',
      ],
      closingTitle: "Time's ticking.",
      closingMessage:
        "Share the link and let people watch it count down with you. You built something that runs on its own.",
    },
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    level: 'intermediate',
    levelLabel: 'Real Project',
    time: '1 hr',
    description: 'Look up weather for any city',
    coreIdea: 'APIs',
    coreIdeaBlurb:
      'Learn how an app can ask another service for live information from the internet instead of trying to know everything itself.',
    available: true,
    detail: {
      summary:
        "This challenge introduces something no Level 1 project does: connecting to real data from the internet. You will build a weather app where someone types any city in the world and sees the actual current conditions pulled live from a weather service. By the end you will understand how almost every real app works: not because it knows everything, but because it knows who to ask.",
      outcome:
        "A live weather dashboard where you can search any city and see real-time temperature, conditions, humidity, and wind speed. A real app that connects to the internet, not just a page that shows things.",
      setup: {
        intro:
          "Before you can build a weather app, you need a source of weather data. Lovable can build you the interface, but it cannot invent weather data; it needs to ask a weather service for that. The connection between your app and that service is called an API. Getting one set up takes about 5 minutes and unlocks a skill you will use in almost every real project from here on.",
        steps: [
          {
            instruction: 'Go to openweathermap.org and create a free account.',
            note: 'You can sign up with Google or email. The free tier gives you 1,000 API calls per day, which is more than enough.',
          },
          {
            instruction: 'After signing in, click your username in the top right and select "My API Keys."',
          },
          {
            instruction: 'You will see a key already generated called "Default." Click the copy icon next to it.',
            note: 'If it says "pending" instead of showing a key, wait a few minutes and refresh. New API keys take a little time to activate.',
          },
          {
            instruction: 'Paste the key somewhere safe (a notes app, a sticky note, anywhere). You will need it in Step 2.',
          },
          {
            instruction: 'Go to lovable.dev and start a new project for this challenge. Do not continue from a previous one.',
          },
        ],
        ahaMoment: {
          front: "How does an app like yours know what the weather is, right now, anywhere in the world?",
          back: "It doesn't know. It asks. OpenWeatherMap has weather stations feeding data into their system around the clock. Your app sends a request: 'What's the weather in Tokyo?' They send back an answer: temperature, conditions, humidity. That back-and-forth is an API. The API key is like your app's ID badge; it proves you are authorized to ask. Once you know how to use one API, you can use almost any of them. Google Maps, Spotify, NASA. All of it works the same way.",
        },
      },
      steps: [
        {
          title: 'Step 1: Build the Search Interface',
          description:
            'Start by building the part the user actually sees: a text box to type a city name, a search button, and a results area below where the weather will show up. You are building the shell first, before you connect any real data. This makes it easier to get the layout right.',
          promptTip:
            'Build a weather dashboard with a text input where I can type a city name, a search button, and a results area below that will show the weather details. No real data yet, just the layout.',
          terms: {
            UI: 'the visible part of an app that users interact with: buttons, inputs, and displays',
          },
        },
        {
          title: 'Step 2: Connect to Real Weather Data',
          description:
            "Now you wire up your app to a live weather service. Paste your API key from the setup step into the prompt below. When this step works, you will type a city and see real conditions come back from the internet. That is the moment it stops being a mock and becomes a real app.",
          promptTip:
            'Connect this app to the OpenWeatherMap Current Weather API. My API key is [paste your key here]. When the user searches a city, fetch the current weather and display the city name, temperature in Fahrenheit, and a short description of the conditions like "Clear sky" or "Light rain."',
          terms: {
            'API key': 'a unique code that proves your app is authorized to use a service',
            fetch: 'to request and receive data from another service on the internet',
          },
        },
        {
          title: 'Step 3: Add More Weather Details',
          description:
            'Temperature and conditions are a start, but a useful weather app tells you more. Add humidity and wind speed so the dashboard actually gives you the full picture. These are already in the data coming back from the API; Lovable just needs to know to show them.',
          promptTip:
            'Add humidity percentage and wind speed in mph to the weather display.',
        },
        {
          title: 'Step 4: Handle Bad City Names',
          description:
            "What happens if someone types a city that doesn't exist, or makes a typo? Right now the app might go blank or show a raw error. Tell Lovable to catch that and show a helpful message instead. This is what separates a polished app from a broken one.",
          promptTip:
            'If the city is not found or the request fails, show a friendly message like "City not found. Try a different name." instead of showing an error or going blank.',
          terms: {
            'error handling': "code that catches when something goes wrong and shows a helpful message instead of breaking",
          },
          ahaMoment: {
            front: "What should happen when your app gets something it didn't expect?",
            back: "Most beginners only think about the happy path: the user types a city, the weather shows up. But real users type nothing, misspell cities, and lose their internet connection. How your app handles those moments matters just as much as how it handles the easy ones. A clear, friendly message keeps the user in control. A blank screen or a raw error code sends them away. Thinking about what can go wrong before it does is one of the things that separates a finished app from a prototype.",
          },
        },
        {
          title: 'Step 5: Style It Like a Real Weather App',
          description:
            'Weather apps have a distinct look: clean backgrounds, big temperature numbers, simple icons. Tell Lovable what vibe you are going for, or describe a real weather app you like the look of. If you want a weather icon that changes based on conditions, ask for it.',
          promptTip:
            'Style this to look like a modern weather app. Clean background, big bold temperature number, a weather icon or emoji that reflects the current conditions, and a simple layout.',
        },
        {
          title: 'Step 6: Publish It',
          description:
            'Try searching a few cities first to make sure everything is working, including a city that does not exist, to test your error message. Then click the Publish button in Lovable. You will get a live URL you can share with anyone.',
        },
      ],
      tips: [
        'If your API key shows "invalid" or "unauthorized" at first, wait 10-15 minutes and try again. New OpenWeatherMap keys take time to activate.',
        'Search by full city name. "New York" works better than "NYC." For cities that share names, you can add the country like "Paris, FR."',
        'Test a few edge cases before sharing: a city with spaces, a city in another country, and a name that doesn\'t exist. Your app should handle all of them.',
        'Ask Lovable to add a Celsius toggle if you want to practice adding a feature on your own.',
      ],
      checklist: [
        'You can search any city and see real, live weather data',
        'The display shows temperature, conditions, humidity, and wind speed',
        'Searching a city that doesn\'t exist shows a friendly message, not a broken screen',
        'It looks clean and polished',
        'You tested it with at least three different cities',
        'You have a live URL to share',
      ],
      closingTitle: 'Your first real API app.',
      closingMessage:
        'You just built something that connects to live data from the internet. That is how most of the apps you use every day actually work.',
    },
  },
  {
    id: 'study-buddy',
    title: 'Study Buddy',
    level: 'intermediate',
    levelLabel: 'Real Project',
    time: '1.5 hrs',
    description: 'Flashcards that track progress',
    coreIdea: 'Memory',
    coreIdeaBlurb:
      'Learn how a browser can remember useful information, so an app can save progress and feel like it knows you came back.',
    available: true,
    detail: {
      summary:
        "This challenge builds something that actually helps you study. You paste in your class notes or a passage from a textbook, and your app uses AI to generate a deck of flashcards from them. Then you study the deck, marking each card as 'got it' or 'still learning,' and your progress saves automatically so you can pick up where you left off. Build it once and you have a study tool you can use for any class, any subject, any time.",
      outcome:
        "A flashcard study app where you paste your notes, click generate, and get a custom deck of cards tailored to exactly what you're studying. Work through them, track your progress, and come back later right where you stopped.",
      setup: {
        intro:
          "Before you can build an app that uses AI, you need a way for your app to talk to one. That connection goes through an API key, a private code that lets your app make requests to Google's Gemini AI. Getting one is free and takes about 3 minutes.",
        steps: [
          {
            instruction: 'Go to aistudio.google.com and sign in with your Google account.',
          },
          {
            instruction: 'Click "Get API key" in the left sidebar, then click "Create API key."',
          },
          {
            instruction: 'A key will appear. Click the copy icon next to it.',
            note: 'Keep this key private. Do not share it publicly or post it anywhere online.',
          },
          {
            instruction: 'Paste the key somewhere safe, like a notes app. You will need it in Step 2.',
          },
          {
            instruction: 'Go to lovable.dev and start a new project for this challenge.',
          },
        ],
        ahaMoment: {
          front: "You've used AI to chat. But what would it look like if your app used AI as a tool inside it?",
          back: "That's exactly what you're building. When you paste your notes and click Generate, your app sends them to Gemini with a set of instructions, Gemini writes the flashcards, and your app displays them. You're not just talking to AI. You're building something that uses AI to do a specific job. Once you know how to do that, you can add AI to almost any app you build.",
        },
      },
      steps: [
        {
          title: 'Step 1: Build the Input Screen',
          description:
            "Start with the part the student sees first: a text area to paste their notes, a way to choose how many flashcards to generate, and a button to kick things off. Build the layout and controls before you connect any real AI. This way you can get the look right without worrying about the logic.",
          promptTip:
            'Build a study app with a large text area where I can paste my notes, a dropdown to select how many flashcards to generate (5, 10, or 15), and a Generate Flashcards button. No AI connection yet, just the layout.',
        },
        {
          title: 'Step 2: Connect Gemini to Generate Cards',
          description:
            "Now wire up the AI. When the user clicks Generate, your app will send their notes to Gemini with a specific instruction: turn this into flashcard pairs. You need to tell Gemini exactly what format to return the cards in so your app knows how to display them. Paste your API key from the setup step into the prompt below.",
          promptTip:
            "Connect this app to the Google Gemini API. My API key is [paste your key here]. When the user clicks Generate Flashcards, send their pasted notes to Gemini with this instruction: Read these notes and generate [selected number] flashcards. Each flashcard should have a question on the front and a short answer on the back. Return them as a JSON array with 'question' and 'answer' fields. Display the generated cards below the input.",
          terms: {
            JSON: 'a standard format apps use to pass structured data back and forth',
            prompt: 'the instruction you give an AI to tell it exactly what to do and what to return',
          },
        },
        {
          title: 'Step 3: Build the Study Interface',
          description:
            "Now build the part where the studying actually happens. Each card should show the question first. When the user clicks it, it flips to reveal the answer. Below each card, two buttons: Got it and Still learning. Clicking either moves to the next card and updates a count of how many are mastered versus remaining.",
          promptTip:
            'Add a study mode. Show one flashcard at a time. The card should flip to show the answer when clicked. Below each card, show two buttons: Got it and Still learning. Clicking either moves to the next card. Show a progress counter at the top showing how many cards are mastered versus remaining.',
          terms: {
            state: 'the current condition of your app, like which card is showing and which ones are mastered',
          },
        },
        {
          title: 'Step 4: Save Progress with Local Storage',
          description:
            "Right now, if the student closes the tab and comes back, their progress is gone. Fix that by saving it to localStorage, a small storage space built into every browser. Add a Reset button too, so they can start fresh when they want to study again.",
          promptTip:
            'Use localStorage to save the current flashcard deck and the user\'s progress (which cards are mastered and which are still learning). When the app loads, check if there\'s a saved deck and restore it. Add a Reset button that clears the saved progress and goes back to the input screen.',
          terms: {
            localStorage: 'a small storage space built into every browser that your app can use to save data between visits',
          },
          ahaMoment: {
            front: "If your app can't remember anything, what happens every time someone closes the tab?",
            back: "It starts from scratch. Every flashcard deck gone, every bit of progress erased. That's the browser's default: it doesn't save anything automatically. localStorage changes that. It's a small notepad built into every browser that your app can write to and read from. No server, no account, no cloud required. Your deck gets written there when you study, and read back when you return. Once you know this exists, you'll find yourself reaching for it in almost every project.",
          },
        },
        {
          title: 'Step 5: Style It and Publish',
          description:
            "Give the app a clean, focused look that doesn't distract from studying. Think calm colors, readable fonts, and a card design that clearly shows which side is the question and which is the answer. When you are happy with it, click Publish.",
          promptTip:
            'Style this to look like a focused study app. Calm colors, readable fonts, and a card that looks distinct when flipped to reveal the answer. Keep the layout simple and distraction-free.',
        },
      ],
      tips: [
        'Paste a paragraph or two, not pages and pages. Short focused notes produce better flashcards than a whole chapter.',
        'After you generate a deck, read through the cards before studying them. AI gets it right most of the time, but occasionally it misses the point of a sentence.',
        'Use the Still learning pile aggressively. If you are not 100% sure of the answer, tap Still learning and see it again.',
        'You can generate a new deck from the same app any time. Build it once, use it all year.',
        'Test the card flip on your phone before sharing. It should feel snappy, not sluggish.',
      ],
      checklist: [
        'You can paste notes and generate a deck of flashcards from them',
        'Each card flips to reveal the answer when clicked',
        'Got it and Still learning buttons move you through the deck and track your progress',
        'Your deck and progress are still there after you close and reopen the tab',
        'There is a Reset button to start fresh with new notes',
        'You have a live URL to share',
      ],
      closingTitle: 'Study smarter.',
      closingMessage:
        'You just built a study tool that reads your notes and quizzes you on them. Use it for any class, any subject, any time. That is the point of building your own tools.',
    },
  },
  {
    id: 'split-the-bill',
    title: 'Split the Bill',
    level: 'intermediate',
    levelLabel: 'Real Project',
    time: '1 hr',
    description: 'Bill splitter with tax and tip',
    coreIdea: 'Trustworthy UX',
    coreIdeaBlurb:
      'Learn that a useful app does not just calculate the right answer, it shows the logic clearly enough for people to trust it.',
    available: true,
    detail: {
      summary:
        "This is the app you wish someone in your group chat already had. When the check comes, someone always has to figure out tax, tip, and who owes a little more or less. In this challenge, you'll build a bill-splitting app that starts with an even split, then lets you make small adjustments so the final numbers feel fair. By the end, you'll have a tool you can actually use the next time you grab pizza, boba, or dinner with friends.",
      outcome:
        "A clean bill splitter where you enter the subtotal, tax, tip, and group size, then see what each person owes with simple per-person adjustments. A useful app that feels fair, polished, and ready to use in real life.",
      setup: {
        intro:
          "Before you start building, let's get you set up in Lovable. If you have already used it, this will feel familiar. If not, think of it like ChatGPT, except instead of replying with ideas, it builds the app as you describe it.",
        steps: [
          ...lovableSetupSteps,
          {
            instruction: 'Start a new project for this challenge. Do not continue from a previous one.',
          },
        ],
        ahaMoment: {
          front: "Why do some money apps feel sketchy even when the math is probably right?",
          back: "Because people do not trust numbers they cannot follow. A good bill splitter does not just show the final answer. It shows how it got there: subtotal, tax, tip, base split, then any adjustments. When the logic is visible, the app feels fair. That is product thinking, not just math.",
        },
      },
      steps: [
        {
          title: 'Step 1: Build the Calculator Shell',
          description:
            'Start with the shape of the app before you worry about the math. You want inputs for subtotal, tax percent, tip percent, and number of people, plus a simple list where the user can enter names. Leave space below for the final split results. Getting the layout right first makes the logic easier to plug in afterward.',
          promptTip:
            'Build a bill splitting app with inputs for subtotal, tax percentage, tip percentage, and number of people. Add a simple way to enter each person\'s name. Below that, create a results area where each person\'s amount will appear. No split math yet, just the layout.',
          terms: {
            subtotal: 'the cost of the bill before tax and tip are added',
          },
        },
        {
          title: 'Step 2: Add the Even Split',
          description:
            'Now make the app actually calculate. It should add tax and tip to the subtotal, show the final total, and divide that number evenly across everyone in the group. This is your baseline. Every adjustment later should start from this even split.',
          promptTip:
            'Calculate the full bill by adding tax and tip to the subtotal, then split the final total evenly across all people. Show the subtotal, tax amount, tip amount, final total, and the base amount each person owes.',
          terms: {
            percentage: 'a part out of 100, like a 15% tip',
          },
        },
        {
          title: 'Step 3: Add Per-Person Adjustments',
          description:
            'Real bills are rarely perfectly even. Maybe one person had dessert, or someone only had fries and a drink. Add a way to increase or decrease one person\'s amount by a dollar value. The rest of the group should rebalance automatically so the grand total still matches exactly.',
          promptTip:
            'Add per-person adjustments. I want to be able to add or subtract a dollar amount for any person, with an optional short reason like dessert or ate less. If one person pays more, the rest of the group should share less automatically. If one person pays less, the rest of the group should share more automatically. Keep the grand total exactly correct.',
          terms: {
            adjustment: 'a small change to one person\'s amount to make the split feel fairer',
          },
        },
        {
          title: 'Step 4: Make the Logic Easy to Trust',
          description:
            'This is the product-thinking step. Do not just show the final numbers. Show the base split, each person\'s adjustment, and the final amount they owe. Add a clear check at the bottom that proves all the individual amounts add up to the full bill. This is what makes the app feel reliable instead of random.',
          promptTip:
            'Make the math easy to follow. For each person, show their base split amount, their adjustment, and their final amount owed. At the bottom, add a clear total check that confirms all final amounts together equal the full bill.',
        },
        {
          title: 'Step 5: Handle Weird Cases',
          description:
            'Now think like a product builder, not just a prompt writer. What if someone enters 0 people? What if an adjustment is bigger than the whole share? What if a field is blank? Ask Lovable to catch the obvious bad inputs and show helpful messages instead of breaking or showing nonsense math.',
          promptTip:
            'Handle edge cases cleanly. If the number of people is less than 1, if a field is blank, or if an adjustment would make someone owe a negative amount, show a friendly message and prevent broken math from appearing.',
          terms: {
            'edge case': 'a weird or uncommon situation that can break an app if you do not plan for it',
          },
        },
        {
          title: 'Step 6: Style It and Publish',
          description:
            'Give the app a look that fits what it is: clean, friendly, and easy to scan in the middle of a real meal. A receipt-inspired layout can work well, but do not let style make the math harder to read. Test a normal split and an adjusted split, then click Publish and keep the link for the next time your group goes out.',
          promptTip:
            'Style this app to feel clean, modern, and easy to trust. Make the numbers readable, group each person\'s result clearly, and give it a polished bill or receipt vibe without making it cluttered.',
        },
      ],
      tips: [
        'Use realistic test numbers while building, like a $48 subtotal with 8.5% tax and 18% tip, so you can tell whether the math looks believable.',
        'Name the people while you test. It is much easier to catch mistakes when you see Alex and Maya instead of Person 1 and Person 2.',
        'After adding adjustments, always check that the grand total still matches exactly. Money apps lose trust fast when they are off by even one cent.',
        'Keep the layout calm and readable. This app should help end an argument, not start one.',
        'Test one person paying extra and one person paying less before you publish. If both work, the core logic is probably solid.',
      ],
      checklist: [
        'You can enter a subtotal, tax percentage, tip percentage, and number of people',
        'The app shows subtotal, tax, tip, final total, and the even base split',
        'You can add or subtract a dollar adjustment for a specific person',
        'Each person\'s final amount updates correctly after adjustments',
        'The app clearly shows that all final amounts add up to the full bill',
        'You have a live URL to share or use later',
      ],
      closingTitle: 'Fair split, no drama.',
      closingMessage:
        'You just built a tool people would actually want in real life. Next time the bill shows up, open your own app and settle it in about 10 seconds.',
    },
  },
  {
    id: 'class-schedule',
    title: 'Class Schedule',
    level: 'intermediate',
    levelLabel: 'Real Project',
    time: '1.5 hrs',
    description: 'Color-coded weekly class view',
    coreIdea: 'Structured Data',
    coreIdeaBlurb:
      'Learn how organizing information cleanly makes it possible to turn a rough class list into a readable weekly view.',
    available: true,
    detail: {
      summary:
        "School schedules usually show up in annoying formats: copied text from a portal, a note from a counselor, or something you typed out fast so you would not forget it. In this challenge, you will build an app that takes that rough input and turns it into a clean weekly schedule you can actually use. By the end, you will have a phone-friendly class schedule with your real classes, real times, and a live link you can open between classes.",
      outcome:
        "A mobile-friendly weekly class schedule that organizes classes by day and time, keeps the layout easy to scan, and uses consistent colors so you can find what you need fast. Something you would actually keep on your phone.",
      setup: {
        intro:
          "Before you start building, you need two things: Lovable to build the app, and a Gemini API key so the app can read schedule text and turn it into structured class entries. This is the same idea as Study Buddy: Lovable builds the interface, and Gemini handles the language task inside the app.",
        steps: [
          {
            instruction: 'Go to aistudio.google.com and sign in with your Google account.',
          },
          {
            instruction: 'Click "Get API key" in the left sidebar, then click "Create API key."',
          },
          {
            instruction: 'Copy the API key and save it somewhere safe. You will need it in Step 2.',
            note: 'Keep this key private. Do not post it publicly or share it with anyone.',
          },
          ...lovableSetupSteps,
          {
            instruction: 'Start a new project for this challenge. Do not continue from a previous one.',
          },
        ],
        ahaMoment: {
          front: 'How can a computer make sense of a schedule written like a normal person would write it?',
          back: 'Because the app does not need to understand everything about the sentence. It only needs to pull out a few useful pieces: class name, day, start time, end time, and maybe room or teacher. Gemini can do that extraction, and once those pieces are in a clean structure, your app can place classes in the right part of the week and keep the layout easy to read. That is what structured data means.',
        },
      },
      steps: [
        {
          title: 'Step 1: Build the Input Screen',
          description:
            'Start by building the shell of the app. You want one large text box where a student can paste or type their schedule in normal language, one button to organize it, and an empty weekly layout below it where the results will appear. Ask for a mobile-friendly layout right away so the app is designed for phone use from the start, not fixed later.',
          promptTip:
            'Build a class schedule app with a large text area where I can paste or type my schedule in normal language, an Organize Schedule button, and an empty weekly schedule view below it. Make the layout clean, simple, and mobile-friendly from the start.',
          terms: {
            responsive: 'able to adjust its layout so it still works well on smaller screens like a phone',
          },
        },
        {
          title: 'Step 2: Connect Gemini',
          description:
            "Now wire up the AI step. When the user clicks the button, the app should send their pasted schedule text to Gemini with a very specific instruction: pull out each class and return it in a clean format the app can display. Paste your API key from the setup step into the prompt below. This is the moment where rough human writing becomes structured data your app can actually use.",
          promptTip:
            "Connect this app to the Google Gemini API. My API key is [paste your key here]. When I click Organize Schedule, send the pasted schedule text to Gemini and ask it to return a JSON array where each class includes: className, day, startTime, endTime, and room or teacher if available. Then show the classes in the correct day and time order in the weekly schedule view.",
          terms: {
            'structured data': 'information broken into clear pieces so a computer can organize and display it reliably',
            JSON: 'a standard format apps use to pass structured data back and forth',
          },
        },
        {
          title: 'Step 3: Make It Easy to Scan',
          description:
            'A schedule only helps if you can understand it fast. Tell Lovable to color-code the classes, keep the same class the same color across the week, and make each block easy to read at a glance. This is where the app starts feeling useful instead of just technically correct.',
          promptTip:
            'Color-code the schedule so the same class keeps the same color across the week. Make each class block easy to scan with the class name, time, and optional room, and keep the layout clean and readable.',
        },
        {
          title: 'Step 4: Handle Imperfect Input',
          description:
            'Real schedules are rarely perfectly formatted. Some students will paste incomplete notes, forget times, or use odd spacing. Ask Lovable to handle that gracefully with helpful messages and partial results instead of breaking the whole app.',
          promptTip:
            'If the schedule box is empty, or if the text is too unclear to organize, show a friendly message that explains what to fix. If some classes are missing details, still show the ones the app can understand instead of breaking.',
          terms: {
            'partial results': 'showing the useful parts that worked, even if some parts of the input were unclear',
          },
          ahaMoment: {
            front: "What should your app do when a real student pastes something imperfect instead of ideal?",
            back: "That is the real test. Most people only design for the easy version, when the input is clean and complete. But real users forget things, mistype things, and paste odd formatting all the time. A strong app still helps them move forward. Handling imperfect input is not extra polish, it is part of making the product trustworthy.",
          },
        },
        {
          title: 'Step 5: Polish for Phone Use',
          description:
            'Now make the schedule feel good in the situation where students will actually use it, on a phone between classes. Tighten the spacing, keep the text readable, and make sure day sections stack cleanly on smaller screens. Test it with your real schedule, then click Publish and save the live link.',
          promptTip:
            'Polish this for real phone use. On small screens, stack the days cleanly, keep the text readable, make the class blocks easy to tap and scan, and keep the weekly view organized without feeling cramped.',
        },
      ],
      tips: [
        'Paste a realistic schedule while you build. Real class names and times make it much easier to spot whether the layout actually works.',
        'Keep class names short if your real schedule uses long course titles. Short labels are easier to scan on a phone.',
        'Use the same color for the same class every time it appears. Consistency matters more than fancy design here.',
        'Test the smallest screen you can in Lovable before publishing. If it works there, it will usually work everywhere else.',
        'If the parser misses something, fix the prompt, not just the example text. The goal is an app that can handle normal student input, not one perfect sample.',
      ],
      checklist: [
        'You can paste or type a schedule in normal language',
        'The app turns that text into class entries organized by day and time',
        'The schedule uses consistent colors that make classes easy to scan',
        'It handles empty or unclear input with a helpful message',
        'It looks good on a phone, not just on a laptop',
        'You have a live URL to save or share',
      ],
      closingTitle: 'Your week, organized.',
      closingMessage:
        'You built something students could actually use every day. That is the power of turning rough information into a clean structure.',
    },
  },
  {
    id: 'club-manager',
    title: 'Club Manager',
    level: 'advanced',
    levelLabel: 'Serious Build',
    time: 'multi-session',
    description: 'Members, events, signups for school clubs',
    coreIdea: 'Systems Thinking',
    coreIdeaBlurb:
      'Learn how real products connect multiple features that each do one job but work together as one system.',
    available: false,
  },
  {
    id: 'debate-prep',
    title: 'Debate Prep Tool',
    level: 'advanced',
    levelLabel: 'Serious Build',
    time: 'multi-session',
    description: 'Both sides of any argument',
    coreIdea: 'AI as a Feature',
    coreIdeaBlurb:
      'Learn how to build an app that uses AI inside the experience, instead of making AI the whole experience.',
    available: false,
  },
  {
    id: 'tutoring-market',
    title: 'Peer Tutoring Market',
    level: 'advanced',
    levelLabel: 'Serious Build',
    time: 'multi-session',
    description: 'Connect student tutors with learners',
    coreIdea: 'Two-Sided Flows',
    coreIdeaBlurb:
      'Learn how products get harder when they need to work for two different groups of users with different goals.',
    available: false,
  },
];

export function getChallengeById(id: string | null) {
  if (!id) {
    return null;
  }

  return challenges.find((challenge) => challenge.id === id) ?? null;
}
