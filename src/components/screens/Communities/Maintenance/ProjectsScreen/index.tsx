import {ProjectsTemplate} from 'components/templates';
import {MaintenanceDrawerScreens} from 'constants/navigation';

type ProjectsScreenProps =
  MaintenanceDrawerScreenProps<MaintenanceDrawerScreens.Projects>;

export const ProjectsScreen = ({}: ProjectsScreenProps) => {
  return <ProjectsTemplate />;
};
