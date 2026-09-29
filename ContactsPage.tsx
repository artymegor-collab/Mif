import { useState } from 'react';
import { Mail, MapPin, Send, Scroll } from 'lucide-react';

export default function ContactsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 4000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-24">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="ornament mb-4">
            <Scroll size={24} className="text-gold" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-gold-light mb-4">
            Связаться с Хранителем
          </h2>
          <p className="font-body text-lg text-muted italic max-w-xl mx-auto">
            Если вы знаете древний миф, что ещё не хранится в этих стенах,
            поведайте его — и он займёт своё место среди свитков.
          </p>
          <hr className="gold-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* Contact info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div
            className="flex items-center gap-3 p-4 rounded-sm border bg-dark-light/50"
            style={{ borderColor: 'rgba(212,175,55,0.15)' }}
          >
            <Mail size={20} className="text-gold flex-shrink-0" />
            <div>
              <p className="font-heading text-xs uppercase tracking-wider text-muted">Почта</p>
              <p className="font-body text-gold-light">keeper@biblioteka-mifov.ru</p>
            </div>
          </div>
          <div
            className="flex items-center gap-3 p-4 rounded-sm border bg-dark-light/50"
            style={{ borderColor: 'rgba(212,175,55,0.15)' }}
          >
            <MapPin size={20} className="text-gold flex-shrink-0" />
            <div>
              <p className="font-heading text-xs uppercase tracking-wider text-muted">Обитель</p>
              <p className="font-body text-gold-light">Александрийская б-ца, зал VII</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-8 rounded-sm border bg-dark-light/30 animate-fade-in-up"
          style={{
            borderColor: 'rgba(212,175,55,0.2)',
            animationDelay: '0.2s',
            opacity: 0,
          }}
        >
          <div>
            <label className="font-heading text-xs uppercase tracking-wider text-muted block mb-2">
              Ваше имя
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input-gold"
              placeholder="Как вас зовут, странник?"
            />
          </div>

          <div>
            <label className="font-heading text-xs uppercase tracking-wider text-muted block mb-2">
              Ваша почта
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-gold"
              placeholder="Куда направить ответ?"
            />
          </div>

          <div>
            <label className="font-heading text-xs uppercase tracking-wider text-muted block mb-2">
              Сообщение
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="input-gold resize-none"
              placeholder="Поведайте вашу историю..."
            />
          </div>

          <button
            type="submit"
            className="btn-gold w-full flex items-center justify-center gap-2"
            disabled={sent}
          >
            {sent ? (
              <>
                <span className="font-display text-lg">✦</span>
                Сообщение отправлено
              </>
            ) : (
              <>
                <Send size={16} />
                Отправить
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
