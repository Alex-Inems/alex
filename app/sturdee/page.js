import ProjectDetailPage from '@/components/ProjectDetailPage';
import { ALL_PROJECTS } from '@/lib/projectData';

export const metadata = {
  title: 'Sturdee Education Platform — Alex Thompson',
  description:
    'Full-stack EdTech platform with auth, admin dashboard, session booking, and integrated tutorials — courses, programs, and learning paths live at sturdee.online.',
};

const project = ALL_PROJECTS.find(p => p.id === 6);

export default function SturdeePage() {
  return <ProjectDetailPage project={project} allProjects={ALL_PROJECTS} />;
}
