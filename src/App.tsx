import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';

export default function App() {
  return (
    <main style={{ background: '#0C0C0C', overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
    </main>
  );
}
