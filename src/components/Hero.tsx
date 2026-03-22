import { Button } from './ui/Button';
import { Container } from './ui/Container';

interface HeroProps {
  onCTAClick: () => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 px-4 pt-20">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-violet-500 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-sky-500 blur-3xl" />
      </div>

      <Container narrow className="relative z-10 text-center">
        <h1 className="text-balance text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
          Build real apps.
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
            No code required.
          </span>
        </h1>

        <p className="mx-auto mb-10 mt-6 max-w-2xl text-lg leading-relaxed text-violet-100 sm:text-2xl">
          Learn to use AI to create websites, games, and tools, one challenge at a time.
        </p>

        <Button
          onClick={onCTAClick}
          size="lg"
          className="relative shadow-xl hover:shadow-2xl"
        >
          Try Your First Challenge
        </Button>
      </Container>
    </section>
  );
}
