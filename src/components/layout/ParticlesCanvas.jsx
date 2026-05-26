import { useParticles } from '../../hooks/useParticles';

export default function ParticlesCanvas() {
  useParticles('particles-canvas');
  return <canvas id="particles-canvas" />;
}
