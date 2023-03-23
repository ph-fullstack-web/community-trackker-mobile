import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query';
import {Peopleskills} from 'models/business';
import {UpdateSkillRequest} from 'models/requests';

export type SkillsTemplateProps = {
  skills?: Peopleskills[];
  isLoading: boolean;
  isError: boolean;
  error: any;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<Peopleskills[], unknown>>;
  onEdit: (data: UpdateSkillRequest) => void;
  onDelete: (data: Peopleskills) => void;
};
