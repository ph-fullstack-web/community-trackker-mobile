import {Peopleskills} from 'models/business';
import {UpdateSkillRequest} from 'models/requests';

export type SkillCardProps = {
  data: Peopleskills;
  onEdit: (data: UpdateSkillRequest) => void;
  onDelete: (data: Peopleskills) => void;
};
