import { Globe, Feather } from 'lucide-react';
import type { Myth } from '@/data/myths';

interface MythCardProps {
  myth: Myth;
  onRead: (myth: Myth) => void;
  index: number;
}

export default function MythCard({ myth, onRead, index }: MythCardProps) {
  return (
    <article
      className="myth-card relative overflow-hidden rounded-sm border bg-dark-light animate-fade-in-up"
      style={{
        borderColor: 'rgba(212, 175, 55, 0.15)',
        animationDelay: `${index * 0.12}s`,
        opacity: 0,
      }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={myth.image}
          alt={myth.title}
          className="myth-card-img w-full h-full object-cover"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,10,18,0.2) 0%, rgba(10,10,18,0.6) 60%, rgba(10,10,18,0.95) 100%)',
          }}
        />
        {/* Culture badge */}
        <div className="absolute top-3 left-3">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-sm text-xs font-heading tracking-wider uppercase backdrop-blur-sm"
            style={{
              background: 'rgba(10,10,18,0.7)',
              border: '1px solid rgba(212,175,55,0.25)',
              color: 'var(--color-gold-light)',
            }}
          >
            <Globe size={12} />
            {myth.culture}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl text-gold-light mb-3 leading-snug">
          {myth.title}
        </h3>

        <p className="font-body text-muted text-base leading-relaxed mb-4 line-clamp-3">
          {myth.shortDescription}
        </p>

        {/* Author */}
        <div className="flex items-center gap-2 mb-5 text-sm text-muted">
          <Feather size={14} className="text-gold" />
          <span className="italic">{myth.author}</span>
        </div>

        {/* Read button */}
        <button
          onClick={() => onRead(myth)}
          className="btn-outline-gold w-full"
        >
          Читать
        </button>
      </div>

      {/* Corner ornaments */}
      <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none"
        style={{ borderTop: '1px solid rgba(212,175,55,0.3)', borderRight: '1px solid rgba(212,175,55,0.3)' }}
      />
      <div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none"
        style={{ borderBottom: '1px solid rgba(212,175,55,0.3)', borderLeft: '1px solid rgba(212,175,55,0.3)' }}
      />
    </article>
  );
}
