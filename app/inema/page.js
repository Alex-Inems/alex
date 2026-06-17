import ProjectDetailPage from '@/components/ProjectDetailPage';
import { ALL_PROJECTS } from '@/lib/projectData';

export const metadata = {
  title: 'Inema Construction — Alex Thompson',
  description:
    'Full-stack corporate site for PT Inema Konstruksi with auth, admin dashboard, project booking, phased hero storytelling, and landmark portfolio. Live at inema.site.',
};

const project = ALL_PROJECTS.find(p => p.id === 9);

export default function InemaPage() {
  return <ProjectDetailPage project={project} allProjects={ALL_PROJECTS} />;
}
