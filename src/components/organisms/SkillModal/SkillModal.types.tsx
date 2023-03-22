import {Peopleskills} from 'models/business';

export type SkillModalProps = {
  data: Peopleskills;
  onEdit: (data: Peopleskills) => void;
};
