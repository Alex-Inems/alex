import ProjectDetailPage from '@/components/ProjectDetailPage';
import { ALL_PROJECTS } from '@/lib/projectData';

export const metadata = {
  title: 'Oreo — Alex Thompson',
  description:
    'Custom Shopify DTC sneaker store for premium authentic Yeezy, Nike & Adidas — featured drops, shop-by-style collections, and authenticity guarantee.',
};

const project = ALL_PROJECTS.find(p => p.id === 10);

export default function OreoPage() {
  return <ProjectDetailPage project={project} allProjects={ALL_PROJECTS} />;
}
