import { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import PageHero from '../components/ui/PageHero';
import LessonSidebar from '../components/traditional/LessonSidebar';
import LessonContent from '../components/traditional/LessonContent';
import QuizCard from '../components/ui/QuizCard';
import Toast from '../components/ui/Toast';
import { useLessons } from '../hooks/useLessons';
import { useLang } from '../context/LanguageContext';
import { T } from '../data/translations';

export default function TraditionalPage() {
  const [activeId, setActiveId] = useState(1);
  const lessons = useLessons();
  const lesson = lessons.find(l => l.id === activeId);
  const { lang } = useLang();
  const p = T[lang].pages.traditional;

  return (
    <PageLayout>
      <PageHero tag={p.tag} title={`📚 <span class='gradient-text'>${p.title}</span>`} subtitle={p.subtitle} />
      <div className="sidebar-layout">
        <LessonSidebar activeLesson={activeId} onSelect={setActiveId} lessons={lessons} />
        <main className="content-area">
          <LessonContent lesson={lesson} />
          <QuizCard badge={lesson.quiz.badge} counter={lang === 'ar' ? 'سؤال ١ من ٣' : 'Question 1 of 3'} question={lesson.quiz.question} options={lesson.quiz.options} explanation={lesson.quiz.explanation} />
        </main>
      </div>
      <Toast />
    </PageLayout>
  );
}
