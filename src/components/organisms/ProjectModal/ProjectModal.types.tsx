import {Project} from 'models/business';
import {UpdateProjectRequest} from 'models/requests';

export type ProjectModalProps = {
  data: Project;
  onEdit: (data: UpdateProjectRequest) => void;
};
