import ProjectDetailPage from '@/components/ProjectDetailPage';
import { ALL_PROJECTS } from '@/lib/projectData';

export const metadata = {
  title: 'Xtraspare Ecommerce — Alex Thompson',
  description: 'Rebuilt a broken live spare parts ecommerce store and added a full custom admin dashboard for product and order management.',
};

const project = ALL_PROJECTS.find(p => p.id === 2);

export default function XtrasparePage() {
  return <ProjectDetailPage project={project} allProjects={ALL_PROJECTS} />;
}
