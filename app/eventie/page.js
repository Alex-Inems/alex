import ProjectDetailPage from '@/components/ProjectDetailPage';
import { ALL_PROJECTS } from '@/lib/projectData';

export const metadata = {
  title: 'Eventie — Events Ticketing Platform — Alex Thompson',
  description: 'Architected a complete event ticketing platform with cryptographic QR code verification, Paystack payments, and real-time organiser dashboards.',
};

const project = ALL_PROJECTS.find(p => p.id === 4);

export default function EventiePage() {
  return <ProjectDetailPage project={project} allProjects={ALL_PROJECTS} />;
}
