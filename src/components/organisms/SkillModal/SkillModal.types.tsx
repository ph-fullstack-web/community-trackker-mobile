import {Peopleskills} from 'models/business';
import {UpdateSkillRequest} from 'models/requests';

export type SkillModalProps = {
  data: Peopleskills;
  onEdit: (data: UpdateSkillRequest) => void;
};
