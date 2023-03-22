import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query';
import {Project} from 'models/business';
import {UpdateProjectRequest} from 'models/requests';

export type ProjectsTemplateProps = {
  projects?: Project[];
  isLoading: boolean;
  isError: boolean;
  error: any;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<Project[], unknown>>;
  onEdit: (data: UpdateProjectRequest) => void;
  onDelete: (data: Project) => void;
};
