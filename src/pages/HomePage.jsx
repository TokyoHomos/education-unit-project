import ParticlesCanvas from '../components/layout/ParticlesCanvas';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import LearningJourney from '../components/home/LearningJourney';
import StatsGrid from '../components/home/StatsGrid';
import LearnGrid from '../components/home/LearnGrid';
import ComparisonTable from '../components/home/ComparisonTable';
import MethodCards from '../components/home/MethodCards';
import Toast from '../components/ui/Toast';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCounterAnimation } from '../hooks/useCounterAnimation';

export default function HomePage() {
  useScrollReveal();
  useCounterAnimation();

  return (
    <>
      <ParticlesCanvas />
      <Navbar />
      <HeroSection />
      <LearningJourney />
      <div className="glow-divider" />
      <StatsGrid />
      <div className="glow-divider" />
      <LearnGrid />
      <div className="glow-divider" />
      <ComparisonTable />
      <div className="glow-divider" />
      <MethodCards />
      <Footer />
      <Toast />
    </>
  );
}
