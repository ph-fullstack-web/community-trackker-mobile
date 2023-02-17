import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {MainRootNativeStackParamList} from '../../../@types/navigation';
import {AppCardObject} from 'components/molecules';
import {DashboardTemplate} from 'components/templates';
import {COLORS} from 'constants/colors';
import {useUserDataProvider} from 'providers/UserDataProvider';
import {MainStackScreenName} from 'constants/enums';

type DashboardStackNavigationProp =
  NativeStackNavigationProp<MainRootNativeStackParamList>;

export const DashboardScreen = () => {
  const {user} = useUserDataProvider();
  const {navigate} = useNavigation<DashboardStackNavigationProp>();

  const applications: AppCardObject[] = [
    {
      title: 'My Community',
      icon: {
        name: 'people',
        type: 'material',
        size: 50,
        color: COLORS.ULTRA_LIGHT_GRAY,
      },
      onPress: () => navigate(MainStackScreenName.MyCommunities),
    },
    {
      title: 'CEC Tracker',
      icon: {
        name: 'notebook',
        type: 'simple-line-icon',
        size: 50,
        color: COLORS.ULTRA_LIGHT_GRAY,
      },
      onPress: () => console.log('CEC Tracker'),
    },
    {
      title: 'Skill Tree',
      icon: {
        name: 'account-tree',
        type: 'material',
        size: 50,
        color: COLORS.ULTRA_LIGHT_GRAY,
      },
      onPress: () => console.log('Skill Tree'),
    },
  ];

  return (
    <DashboardTemplate applications={applications} numColumns={3} user={user} />
  );
};
