interface HeroProps {
  onCTAClick: () => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-2xl w-full text-center relative z-10">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
          Build real apps.
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            No code required.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-purple-100 mb-10 leading-relaxed">
          Learn to use AI to create websites, games, and tools, one challenge at a time.
        </p>

        <button
          onClick={onCTAClick}
          className="relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-lg font-semibold px-10 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl animate-pulse hover:animate-none"
        >
          Try Your First Challenge
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 hover:opacity-20 transition-opacity"></div>
        </button>
      </div>
    </section>
  );
}
