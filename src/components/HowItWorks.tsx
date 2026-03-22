import { BookOpen, Rocket, Zap } from 'lucide-react';
import { Container } from './ui/Container';

const steps = [
  {
    icon: Zap,
    title: 'Pick a Challenge',
    description: 'Choose a project like a quiz game, weather app, or personal site',
    gradient: 'from-orange-400 to-red-500',
  },
  {
    icon: BookOpen,
    title: 'Follow the Recipe',
    description: 'Step-by-step prompting guides show you what to tell the AI and why',
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    icon: Rocket,
    title: 'Ship It',
    description: 'You walk away with something real, hosted and shareable',
    gradient: 'from-violet-400 to-pink-500',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="app-section bg-gradient-to-b from-slate-50 to-white">
      <Container>
        <h2 className="section-title text-center">How It Works</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="surface-card">
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} shadow-lg`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${step.gradient} text-lg font-bold text-white`}
                  >
                    {index + 1}
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="leading-relaxed text-slate-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
