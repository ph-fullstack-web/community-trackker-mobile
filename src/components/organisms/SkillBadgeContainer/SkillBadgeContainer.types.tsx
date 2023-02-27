import {User} from 'models/business';

export type SkillBadgeContainerProps = {
  user: User | undefined;
  size: number;
  numColumns: number;
};
