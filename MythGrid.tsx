import type { Myth } from '@/data/myths';
import MythCard from './MythCard';

interface MythGridProps {
  myths: Myth[];
  onRead: (myth: Myth) => void;
}

/**
 * ═══════════════════════════════════════════════════════════════
 *  ГЛАВНЫЙ РАЗДЕЛ — СЕТКА КАРТОЧЕК МИФОВ
 * ═══════════════════════════════════════════════════════════════
 *
 *  КАК ДОБАВИТЬ НОВЫЙ МИФ:
 *  1. Откройте файл  src/data/myths.ts
 *  2. Добавьте новый объект в массив `myths` со следующими полями:
 *      {
 *        id: <уникальное число>,
 *        title: "Название мифа",
 *        culture: "Культура / народ",
 *        author: "Автор или источник",
 *        shortDescription: "Краткое описание для карточки",
 *        image: "URL картинки",
 *        fullText: "Полный текст мифа (можно использовать \n\n для абзацев)",
 *      }
 *  3. Карточка автоматически появится на странице — больше ничего
 *     менять не нужно.
 *
 *  КАК ДУБЛИРОВАТЬ КАРТОЧКУ:
 *  Просто скопируйте любой объект в массиве `myths` и измените
 *  поля на новые значения. Убедитесь, что `id` уникален.
 * ═══════════════════════════════════════════════════════════════
 */
export default function MythGrid({ myths, onRead }: MythGridProps) {
  return (
    <section id="myths" className="relative py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="ornament mb-4">
            <span className="font-display text-xl">❖</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-gold-light mb-4">
            Свитки Древних Народов
          </h2>
          <p className="font-body text-lg text-muted max-w-2xl mx-auto italic">
            Каждая карточка — дверь в иной мир. Выберите свиток, чтобы прикоснуться к истории,
            что пережила тысячелетия.
          </p>
          <hr className="gold-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {myths.map((myth, index) => (
            <MythCard
              key={myth.id}
              myth={myth}
              onRead={onRead}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
