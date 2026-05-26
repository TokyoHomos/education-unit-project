import ParticlesCanvas from './ParticlesCanvas';
import Navbar from './Navbar';
import Footer from './Footer';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useCounterAnimation } from '../../hooks/useCounterAnimation';

export default function PageLayout({ children, className = '' }) {
  useScrollReveal();
  useCounterAnimation();

  return (
    <>
      <ParticlesCanvas />
      <Navbar />
      <div className={`page-wrapper ${className}`}>
        {children}
      </div>
      <Footer />
    </>
  );
}
