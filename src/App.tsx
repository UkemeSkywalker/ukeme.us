import AboutSection from './sections/AboutSection';
import ArticlesSection from './sections/ArticlesSection';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import ProjectsSection from './sections/ProjectsSection';
import ServicesSection from './sections/ServicesSection';
import VideosSection from './sections/VideosSection';

export default function App() {
  return (
    <main style={{ background: '#0C0C0C', overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <VideosSection />
      <ArticlesSection />
    </main>
  );
}
