import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import HomePage from './pages/HomePage';
import TraditionalPage from './pages/TraditionalPage';
import ComputerizedPage from './pages/ComputerizedPage';
import AILearningPage from './pages/AILearningPage';
import Generative3DPage from './pages/Generative3DPage';
import AssessmentPage from './pages/AssessmentPage';
import './styles.css';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"             element={<HomePage />} />
          <Route path="/traditional"  element={<TraditionalPage />} />
          <Route path="/computerized" element={<ComputerizedPage />} />
          <Route path="/ai-learning"  element={<AILearningPage />} />
          <Route path="/3d-lab"       element={<Generative3DPage />} />
          <Route path="/assessment"   element={<AssessmentPage />} />
          <Route path="/assessment"   element={<AssessmentPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
