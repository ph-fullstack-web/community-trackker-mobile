import {Peopleskills} from 'models/business';

export type SkillCardProps = {
  data: Peopleskills;
  onEdit: (data: Peopleskills) => void;
  onDelete: (data: Peopleskills) => void;
};
