import { servicesData } from '../../data/services';
import ServicePage from '../../components/ServicePage';
export default function CreationApplications() {
  return <ServicePage data={servicesData['creation-applications-dashboards']} />;
}
