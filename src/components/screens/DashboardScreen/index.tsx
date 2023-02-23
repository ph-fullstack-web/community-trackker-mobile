import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootNativeStackParamList} from '../../../@types/navigation';
import {AppCardProps} from 'components/molecules';
import {DashboardTemplate} from 'components/templates';
import {COLORS} from 'constants/colors';
import {StackScreen} from 'constants/navigation';
import {useUserDataProvider} from 'providers/UserDataProvider';
import {StatusBar} from 'react-native';

export const DashboardScreen = () => {
  const {user} = useUserDataProvider();
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootNativeStackParamList>>();

  const applications: AppCardProps[] = [
    {
      title: 'My Community',
      icon: {
        name: 'groups',
        type: 'material',
        size: 50,
        color: COLORS.ULTRA_LIGHT_GRAY,
      },
      onPress: () => navigate(StackScreen.MyCommunities),
    },
    {
      title: 'CEC Tracker',
      icon: {
        name: 'assignment',
        type: 'material',
        size: 50,
        color: COLORS.ULTRA_LIGHT_GRAY,
      },
      onPress: () => navigate(StackScreen.CECTracker),
    },
    {
      title: 'Skill Tree',
      icon: {
        name: 'account-tree',
        type: 'material',
        size: 50,
        color: COLORS.ULTRA_LIGHT_GRAY,
      },
      onPress: () => navigate(StackScreen.SkillTree),
    },
  ];

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={COLORS.MIDNIGHT_BLUE}
      />
      <DashboardTemplate applications={applications} user={user} />
    </>
  );
};
