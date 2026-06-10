import ProjectDetailPage from '@/components/ProjectDetailPage';
import { ALL_PROJECTS } from '@/lib/projectData';

export const metadata = {
  title: 'n8n Leads Classifier — Alex Thompson',
  description:
    'Full-stack AI lead qualification system with Next.js webhook, n8n GPT classifier, Google Sheets logging, Gmail notifications, and admin dashboard.',
};

const project = ALL_PROJECTS.find(p => p.id === 7);

export default function N8nLeadsClassifierPage() {
  return <ProjectDetailPage project={project} allProjects={ALL_PROJECTS} />;
}
