import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onScrollToMyths: () => void;
}

export default function Hero({ onScrollToMyths }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-3xl">
        {/* Ornament top */}
        <div className="ornament mb-8 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <span className="font-display text-2xl">✦</span>
        </div>

        {/* Main heading */}
        <h2
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-tight animate-fade-in-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          <span className="shimmer-text">Библиотека</span>
          <br />
          <span className="text-purple-accent" style={{ textShadow: '0 0 30px rgba(139,92,246,0.4)' }}>
            Мифов
          </span>
        </h2>

        {/* Divider */}
        <hr className="gold-divider my-8 animate-fade-in" style={{ animationDelay: '0.8s', opacity: 0 }} />

        {/* Description */}
        <p
          className="font-body text-lg sm:text-xl text-muted leading-relaxed max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '1s', opacity: 0 }}
        >
          Здесь хранятся древние предания, рождённые у костров забытых цивилизаций.
          От греческих богов Олимпа до скандинавских сумерек, от египетского солнца до
          кельтских туманов — каждая история ждёт своего читателя в этих стенах.
        </p>

        {/* Scroll button */}
        <div
          className="mt-12 flex flex-col items-center gap-3 animate-fade-in-up"
          style={{ animationDelay: '1.4s', opacity: 0 }}
        >
          <button onClick={onScrollToMyths} className="btn-gold animate-glow">
            Войти в библиотеку
          </button>
          <ChevronDown
            className="text-gold animate-scroll-down mt-4"
            size={32}
            style={{ filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.4))' }}
          />
        </div>
      </div>
    </section>
  );
}
