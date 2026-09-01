import ProjectDetailPage from '@/components/ProjectDetailPage';
import { ALL_PROJECTS } from '@/lib/projectData';

export const metadata = {
  title: 'Inkamoto Tours, Alex Thompson',
  description:
    'Premium motorcycle tour website for Peru road trips with tour packages, bike rentals, multilingual navigation, testimonials, and lead capture. Live at inkamototours.com.',
};

const project = ALL_PROJECTS.find(p => p.id === 13);

export default function InkamotoPage() {
  return <ProjectDetailPage project={project} allProjects={ALL_PROJECTS} />;
}
