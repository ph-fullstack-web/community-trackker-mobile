import {UpdateProjectRequest} from 'models/requests';

export type ProjectModalProps = {
  data: UpdateProjectRequest;
  onEdit: (data: UpdateProjectRequest) => void;
};
