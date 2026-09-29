import { useEffect } from 'react';
import { X, Globe, Feather } from 'lucide-react';
import type { Myth } from '@/data/myths';

interface MythModalProps {
  myth: Myth | null;
  onClose: () => void;
}

export default function MythModal({ myth, onClose }: MythModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (myth) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [myth, onClose]);

  if (!myth) return null;

  const paragraphs = myth.fullText.split('\n\n');

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 animate-overlay-in"
        style={{
          background: 'rgba(5, 5, 10, 0.85)',
          backdropFilter: 'blur(8px)',
        }}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-sm animate-modal-in"
        style={{
          background: 'linear-gradient(180deg, #14141f 0%, #0e0e16 100%)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          boxShadow: '0 0 60px rgba(212, 175, 55, 0.15), 0 0 100px rgba(139, 92, 246, 0.1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-sm transition-all duration-300 cursor-pointer group"
          style={{
            background: 'rgba(10,10,18,0.6)',
            border: '1px solid rgba(212,175,55,0.2)',
          }}
          aria-label="Закрыть"
        >
          <X
            size={20}
            className="text-gold transition-transform duration-300 group-hover:rotate-90 group-hover:text-gold-light"
          />
        </button>

        {/* Header image */}
        <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-sm">
          <img
            src={myth.image}
            alt={myth.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(20,20,31,0.3) 0%, rgba(20,20,31,0.7) 60%, #14141f 100%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="p-8 sm:p-10 -mt-16 relative">
          {/* Culture + author */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-sm text-xs font-heading tracking-wider uppercase"
              style={{
                background: 'rgba(212,175,55,0.1)',
                border: '1px solid rgba(212,175,55,0.25)',
                color: 'var(--color-gold-light)',
              }}
            >
              <Globe size={12} />
              {myth.culture}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted italic">
              <Feather size={14} className="text-gold" />
              {myth.author}
            </span>
          </div>

          {/* Title */}
          <h2 className="font-display text-3xl sm:text-4xl text-gold-light mb-6 leading-tight">
            {myth.title}
          </h2>

          <hr className="gold-divider mb-6" />

          {/* Full text */}
          <div className="space-y-5">
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="font-body text-lg leading-relaxed text-text"
                style={{
                  color: 'var(--color-text)',
                  textIndent: i === 0 ? '2em' : 0,
                }}
              >
                {i === 0 && (
                  <span className="font-display text-3xl text-gold float-left mr-2 leading-none mt-1">
                    {para.charAt(0)}
                  </span>
                )}
                {i === 0 ? para.slice(1) : para}
              </p>
            ))}
          </div>

          {/* Footer ornament */}
          <div className="ornament mt-8">
            <span className="font-display text-lg">✦</span>
          </div>
        </div>
      </div>
    </div>
  );
}
