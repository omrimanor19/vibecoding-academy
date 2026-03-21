import { Challenge } from '../data/challenges';

interface ChallengeCardProps {
  challenge: Challenge;
  onStartClick: (id: string) => void;
}

export function ChallengeCard({ challenge, onStartClick }: ChallengeCardProps) {
  const levelColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-blue-100 text-blue-800',
    advanced: 'bg-purple-100 text-purple-800',
  };

  const isClickable = challenge.clickable;

  return (
    <div
      className={`rounded-lg p-6 transition-all duration-300 relative ${
        isClickable
          ? 'bg-white border-2 border-transparent hover:border-cyan-400 hover:shadow-2xl cursor-pointer hover:-translate-y-1 shadow-lg'
          : 'bg-gray-50 border border-gray-200 opacity-70'
      }`}
      onClick={() => isClickable && onStartClick(challenge.id)}
    >
      {isClickable && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 hover:opacity-5 transition-opacity pointer-events-none"></div>
      )}

      {isClickable && (
        <div className="absolute -top-2 -right-2 flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          ⭐ Featured
        </div>
      )}

      <div className="mb-3 flex items-start justify-between">
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${levelColors[challenge.level]}`}>
          {challenge.levelLabel}
        </span>
        <span className="text-sm font-medium text-gray-500">{challenge.time}</span>
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-2">{challenge.title}</h3>
      <p className="text-gray-600 text-sm mb-6">{challenge.description}</p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          if (isClickable) {
            onStartClick(challenge.id);
          }
        }}
        disabled={!isClickable}
        className={`w-full py-2 px-4 rounded font-semibold transition-all text-sm ${
          isClickable
            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white cursor-pointer hover:shadow-lg transform hover:scale-105'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {isClickable ? 'Start Challenge' : 'Coming Soon'}
      </button>
    </div>
  );
}
