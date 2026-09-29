import { BookOpen } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'contacts') => void;
  currentPage: 'home' | 'contacts';
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className="backdrop-blur-md"
        style={{
          background: 'rgba(10, 10, 18, 0.7)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo + title */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <BookOpen
              className="text-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
              size={28}
              style={{ filter: 'drop-shadow(0 0 6px rgba(212,175,55,0.4))' }}
            />
            <div className="text-left">
              <h1 className="font-display text-xl sm:text-2xl text-gold-light tracking-wide leading-none">
                Библиотека мифов
              </h1>
              <p className="font-body text-sm text-muted italic mt-0.5">
                Мифы и легенды народов мира
              </p>
            </div>
          </button>

          {/* Nav */}
          <nav className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('home')}
              className={`font-heading text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                currentPage === 'home'
                  ? 'text-gold-light border-b border-gold pb-1'
                  : 'text-muted hover:text-gold'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => onNavigate('contacts')}
              className={`font-heading text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                currentPage === 'contacts'
                  ? 'text-gold-light border-b border-gold pb-1'
                  : 'text-muted hover:text-gold'
              }`}
            >
              Контакты
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
