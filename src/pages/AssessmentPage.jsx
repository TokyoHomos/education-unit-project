import { useLang } from '../context/LanguageContext';
import { T } from '../data/translations';
import PageLayout from '../components/layout/PageLayout';
import PageHero from '../components/ui/PageHero';
import PerformanceStats from '../components/assessment/PerformanceStats';
import AssessmentTabs from '../components/assessment/AssessmentTabs';
import Toast from '../components/ui/Toast';

export default function AssessmentPage() {
  const { lang } = useLang();
  const p = T[lang].pages.assessment;

  return (
    <PageLayout>
      <PageHero tag={p.tag} title={`🏆 <span class='gradient-text'>${p.title}</span>`} subtitle={p.subtitle} />
      <div style={{maxWidth:1400,margin:'0 auto',padding:'0 24px 24px'}}>
        <PerformanceStats />
        <AssessmentTabs />
      </div>
      <Toast />
    </PageLayout>
  );
}
