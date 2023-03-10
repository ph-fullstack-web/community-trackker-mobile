import {AppCardProps} from 'components/molecules';
import {DashboardTemplate} from 'components/templates';
import {COLORS} from 'constants/colors';
import {
  CommunityDrawerScreens,
  CommunityStackScreens,
} from 'constants/navigation';
import {useGetPerson} from 'api/hooks';

type DashboardScreenProps =
  CommunityDrawerScreenProps<CommunityDrawerScreens.Dashboard>;

export const DashboardScreen = ({navigation}: DashboardScreenProps) => {
  const {navigate} = navigation;

  const personId: number = 1; //TODO: to remove once login module is implemented

  const {isLoading, data, error, isError} = useGetPerson(personId);

  const applications: AppCardProps[] = [
    {
      title: 'My Community',
      icon: {
        name: 'groups',
        type: 'material',
        size: 50,
        color: COLORS.ULTRA_LIGHT_GRAY,
      },
      onPress: () =>
        navigate(CommunityDrawerScreens.CommunitiesStack, {
          screen: CommunityStackScreens.CommunityMembers,
          params: {
            communityId: data!.community_id,
            previousScreen: CommunityDrawerScreens.Dashboard,
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
      onPress: () => navigate(CommunityDrawerScreens.CEC),
    },
    {
      title: 'Skill Tree',
      icon: {
        name: 'account-tree',
        type: 'material',
        size: 50,
        color: COLORS.ULTRA_LIGHT_GRAY,
      },
      onPress: () => navigate(CommunityDrawerScreens.Skills),
    },
  ];

  return (
    <DashboardTemplate
      applications={applications}
      full_name={data?.full_name}
      csv_email={data?.csv_email}
      skills={data?.skills}
      isLoading={isLoading}
      isError={isError}
      error={error}
    />
  );
};
