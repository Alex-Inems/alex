import ProjectDetailPage from '@/components/ProjectDetailPage';
import { ALL_PROJECTS } from '@/lib/projectData';

export const metadata = {
  title: 'LinkedIn Post Generator — Alex Thompson',
  description:
    'n8n automation that generates professional LinkedIn posts via GPT, logs to Google Sheets, emails the admin, and returns results instantly to a Shopify UI.',
};

const project = ALL_PROJECTS.find(p => p.id === 8);

export default function LinkedInPostGeneratorPage() {
  return <ProjectDetailPage project={project} allProjects={ALL_PROJECTS} />;
}
