import { useState, useRef } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MythGrid from '@/components/MythGrid';
import MythModal from '@/components/MythModal';
import Footer from '@/components/Footer';
import ContactsPage from '@/pages/ContactsPage';
import { myths, type Myth } from '@/data/myths';

type Page = 'home' | 'contacts';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [selectedMyth, setSelectedMyth] = useState<Myth | null>(null);
  const mythsRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToMyths = () => {
    mythsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Header onNavigate={handleNavigate} currentPage={page} />

      {page === 'home' ? (
        <main>
          <Hero onScrollToMyths={handleScrollToMyths} />
          <div ref={mythsRef}>
            <MythGrid myths={myths} onRead={setSelectedMyth} />
          </div>
        </main>
      ) : (
        <main>
          <ContactsPage />
        </main>
      )}

      <Footer />
      <MythModal myth={selectedMyth} onClose={() => setSelectedMyth(null)} />
    </div>
  );
}
