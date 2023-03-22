import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query';
import {Peopleskills, PersonBySkills} from 'models/business';

export type ReportTemplateProp = {
  skills: Peopleskills[];
  isLoading: boolean;
  isError: boolean;
  error: any;
  setSelectedSkills: React.Dispatch<React.SetStateAction<string>>;
  isLoadingPeople: boolean;
  people: PersonBySkills[];
  isPeopleError: boolean;
  peopleError: any;
  refetchPeople: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<PersonBySkills[], unknown>>;
};
