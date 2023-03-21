import {SkillsDashboardTemplate} from 'components/templates';
import {CommunityDrawerScreens} from 'constants/navigation';

type SkillDashboardScreenProps =
  CommunityDrawerScreenProps<CommunityDrawerScreens.SkillTreeDrawer>;

export const SkillsDashboardScreen = ({}: SkillDashboardScreenProps) => {
  return <SkillsDashboardTemplate />;
};
