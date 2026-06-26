import ProjectDetailPage from '@/components/ProjectDetailPage';
import { ALL_PROJECTS } from '@/lib/projectData';

export const metadata = {
  title: 'Yangaa — Alex Thompson',
  description:
    'Premium Shopify beauty marketplace — French pharmacy, K-beauty, luxury skincare, and curated brand collections with mega-menu navigation and promotional carousels.',
};

const project = ALL_PROJECTS.find(p => p.id === 11);

export default function YangaaPage() {
  return <ProjectDetailPage project={project} allProjects={ALL_PROJECTS} />;
}
