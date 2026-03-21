import { Zap, BookOpen, Rocket } from 'lucide-react';

export function HowItWorks() {
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
      description: 'Step-by-step prompting guide shows you what to tell the AI and why',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Rocket,
      title: 'Ship It',
      description: 'You walk away with something real, hosted and shareable',
      gradient: 'from-purple-400 to-pink-500',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex-shrink-0 flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-lg shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${step.gradient} text-white font-bold text-lg`}>
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
