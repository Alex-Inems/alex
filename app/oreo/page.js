import ProjectDetailPage from '@/components/ProjectDetailPage';
import { ALL_PROJECTS } from '@/lib/projectData';

export const metadata = {
  title: 'Oreo Luxury Showcase — Alex Thompson',
  description: 'A content-managed luxury car dealership platform built with Next.js and Firebase. Full admin CMS, inventory management, and premium UI.',
};

const project = ALL_PROJECTS.find(p => p.id === 1);

export default function OreoPage() {
  return <ProjectDetailPage project={project} allProjects={ALL_PROJECTS} />;
}
