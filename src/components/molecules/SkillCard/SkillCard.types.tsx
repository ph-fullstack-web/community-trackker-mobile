import {Peopleskills} from 'models/business';

export type SkillCardProps = {
  data: Peopleskills;
  numColumns?: number;
  onEdit: (skillId: number) => void;
  onDelete: (skillId: number) => void;
};
