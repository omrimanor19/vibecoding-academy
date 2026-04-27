import { Container } from './ui/Container';

export function About() {
  return (
    <section id="about" className="app-section bg-gradient-to-b from-slate-50 to-white">
      <Container narrow className="text-center">
        <h2 className="section-title">About This Project</h2>

        <p className="section-copy">
          Created by Omri, a high school sophomore who believes every student should know how to
          build with AI.
        </p>

        <div className="text-5xl">💻✨</div>
      </Container>
    </section>
  );
}
