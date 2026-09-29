export default function Footer() {
  return (
    <footer
      className="fixed bottom-0 left-0 right-0 z-40"
      style={{
        background: 'rgba(10, 10, 18, 0.8)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(212, 175, 55, 0.12)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-center">
        <div className="flex items-center gap-3 text-sm">
          <span className="font-display text-gold">✦</span>
          <span className="font-heading text-muted tracking-wider text-xs uppercase">
            Библиотека мифов, 2026
          </span>
          <span className="font-display text-gold">✦</span>
        </div>
      </div>
    </footer>
  );
}
