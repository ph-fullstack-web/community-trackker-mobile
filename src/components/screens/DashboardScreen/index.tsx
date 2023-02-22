import {AppCardObject} from 'components/molecules';
import {DashboardTemplate} from 'components/templates';
import {COLORS} from 'constants/colors';
import {useUserDataProvider} from 'providers/UserDataProvider';

type DashboardScreenProps = CommunityDrawerScreenProps<'Dashboard'>;

export const DashboardScreen = ({navigation}: DashboardScreenProps) => {
  const {navigate} = navigation;
  const {user} = useUserDataProvider();

  const applications: AppCardObject[] = [
    {
      title: 'My Communities',
      icon: {
        name: 'groups',
        type: 'material',
        size: 50,
        color: COLORS.ULTRA_LIGHT_GRAY,
      },
      onPress: () =>
        navigate('CommunitiesDrawer', {
          screen: 'CommunitiesStack',
          params: {
            screen: 'CommunityMembers',
            params: {communityId: user!.communityId},
          },
        }),
    },
    {
      title: 'CEC Tracker',
      icon: {
        name: 'assignment',
        type: 'material',
        size: 50,
        color: COLORS.ULTRA_LIGHT_GRAY,
      },
      onPress: () => navigate('CECTracker'),
    },
    {
      title: 'Skill Tree',
      icon: {
        name: 'account-tree',
        type: 'material',
        size: 50,
        color: COLORS.ULTRA_LIGHT_GRAY,
      },
      onPress: () => navigate('SkillTree'),
    },
  ];

  return (
    <DashboardTemplate applications={applications} numColumns={3} user={user} />
  );
};
