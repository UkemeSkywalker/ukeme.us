import AboutSection from './sections/AboutSection';
import ArticlesSection from './sections/ArticlesSection';
import ContactSection from './sections/ContactSection';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import Navbar from './components/Navbar';
import ProjectsSection from './sections/ProjectsSection';
import ServicesSection from './sections/ServicesSection';
import VideosSection from './sections/VideosSection';

export default function App() {
  return (
    // The navbar sits outside main so nothing there can become its containing
    // block and knock it out of fixed positioning.
    <>
      <Navbar />
      <main style={{ background: '#0C0C0C', overflowX: 'clip' }}>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <VideosSection />
        <ArticlesSection />
        <ContactSection />
      </main>
    </>
  );
}
