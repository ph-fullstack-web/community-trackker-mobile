import {SkillsDashboardTemplate} from 'components/templates';
import {CommunityDrawerScreens} from 'constants/navigation';

type SkillDashboardScreenProps =
  CommunityDrawerScreenProps<CommunityDrawerScreens.Skills>;

export const SkillsDashboardScreen = ({}: SkillDashboardScreenProps) => {
  return <SkillsDashboardTemplate />;
};
