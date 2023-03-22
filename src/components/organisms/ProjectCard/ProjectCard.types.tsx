import {Project} from 'models/business';
import {UpdateProjectRequest} from 'models/requests';

export type ProjectCardProps = {
  data: Project;
  onEdit: (data: UpdateProjectRequest) => void;
  onDelete: (data: Project) => void;
};
