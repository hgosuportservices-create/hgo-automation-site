import { servicesData } from '../../data/services';
import ServicePage from '../../components/ServicePage';
export default function AutomatisationCRM() {
  return <ServicePage data={servicesData['automatisation-crm']} />;
}
