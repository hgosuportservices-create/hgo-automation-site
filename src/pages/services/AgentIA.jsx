import { servicesData } from '../../data/services';
import ServicePage from '../../components/ServicePage';
export default function AgentIA() {
  return <ServicePage data={servicesData['agent-ia']} />;
}
