import ProjectDetailPage from '@/components/ProjectDetailPage';
import { ALL_PROJECTS } from '@/lib/projectData';

export const metadata = {
  title: 'Sturdee Education Platform — Alex Thompson',
  description: 'Built a premium custom education platform with structured courses, learning paths, instructor profiles, and editorial-grade design that commands high-ticket pricing.',
};

const project = ALL_PROJECTS.find(p => p.id === 6);

export default function SturdeePage() {
  return <ProjectDetailPage project={project} allProjects={ALL_PROJECTS} />;
}
