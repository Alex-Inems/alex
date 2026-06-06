import ProjectDetailPage from '@/components/ProjectDetailPage';
import { ALL_PROJECTS } from '@/lib/projectData';

export const metadata = {
  title: 'Blogme — Multi-User Blogging Platform — Alex Thompson',
  description: 'Built a complete multi-user SaaS blogging platform from scratch with real-time publishing, SEO architecture, and social cross-sharing.',
};

const project = ALL_PROJECTS.find(p => p.id === 3);

export default function BlogmePage() {
  return <ProjectDetailPage project={project} allProjects={ALL_PROJECTS} />;
}
