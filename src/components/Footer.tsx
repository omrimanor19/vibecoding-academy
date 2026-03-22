import { Container } from './ui/Container';

export function Footer() {
  return (
    <footer className="bg-slate-950 px-4 py-8 text-slate-300">
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm">Built with AI by Omri</p>
        <p className="text-sm">More challenges coming soon</p>
      </Container>
    </footer>
  );
}
