import ProjectDetailPage from '@/components/ProjectDetailPage';
import { ALL_PROJECTS } from '@/lib/projectData';

export const metadata = {
  title: 'Yanga Beauty — Alex Thompson',
  description:
    'Premium Shopify beauty marketplace with French pharmacy, K-beauty, and luxury skincare brands — mega-menu, sale carousels, and brand features.',
};

const project = ALL_PROJECTS.find(p => p.id === 11);

export default function YangaPage() {
  return <ProjectDetailPage project={project} allProjects={ALL_PROJECTS} />;
}
