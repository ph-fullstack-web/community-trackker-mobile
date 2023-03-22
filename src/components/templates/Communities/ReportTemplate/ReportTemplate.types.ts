import {Peopleskills, PersonBySkills} from 'models/business';

export type ReportTemplateProp = {
  skills: Peopleskills[];
  isLoading: boolean;
  isError: boolean;
  error: any;
  setSelectedSkills: React.Dispatch<React.SetStateAction<string>>;
  isLoadingPeople: boolean;
  isFetchingPeople: boolean;
  people: PersonBySkills[];
  isPeopleError: boolean;
  peopleError: any;
};
