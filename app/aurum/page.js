import ProjectDetailPage from '@/components/ProjectDetailPage';
import { ALL_PROJECTS } from '@/lib/projectData';

export const metadata = {
  title: 'Aurum & Co. Jewelry — Alex Thompson',
  description:
    'Luxury Shopify fine jewelry store with GIA-certified pieces, flash sale countdown, concierge messaging, and insured checkout.',
};

const project = ALL_PROJECTS.find(p => p.id === 12);

export default function AurumPage() {
  return <ProjectDetailPage project={project} allProjects={ALL_PROJECTS} />;
}
