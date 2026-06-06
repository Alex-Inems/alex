import ProjectDetailPage from '@/components/ProjectDetailPage';
import { ALL_PROJECTS } from '@/lib/projectData';

export const metadata = {
  title: 'Amazon Marketing Agency Dashboard — Alex Thompson',
  description: 'Designed and built a premium dark-mode analytics dashboard for an Amazon marketing agency with D3 charts, real-time KPI trackers, and Framer Motion animations.',
};

const project = ALL_PROJECTS.find(p => p.id === 5);

export default function AmaPage() {
  return <ProjectDetailPage project={project} allProjects={ALL_PROJECTS} />;
}
