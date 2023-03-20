import {Peopleskills} from 'models/business';

export type SkillsTemplateProps = {
  skills?: Peopleskills[];
  isLoading: boolean;
  isError: boolean;
  error: any;
  isFetching: boolean;
  numColumns?: number;
  onEdit: (skillId: number) => void;
  onDelete: (skillId: number) => void;
};
