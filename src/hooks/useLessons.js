import { useLang } from '../context/LanguageContext';
import { LESSONS } from '../data/lessonsData';
import { LESSONS_AR } from '../data/lessonsData.ar';

export function useLessons() {
  const { lang } = useLang();
  return lang === 'ar' ? LESSONS_AR : LESSONS;
}
