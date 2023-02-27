import {DrawerNavigationProp} from '@react-navigation/drawer';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

import {DrawerItems} from 'components/organisms';
import {COLORS} from './colors';
import {CommunityDrawerScreens, CommunityStackScreens} from './navigation';

export const DEFAULT_DRAWER_ITEMS = <
  T extends CompositeNavigationProp<
    DrawerNavigationProp<CommunityDrawerParamList>,
    NativeStackNavigationProp<RootNativeStackParamList>
  >
>(): DrawerItems<T> => [
  {
    icon: {
      name: 'dashboard',
      type: 'material',
      color: COLORS.MIDNIGHT_BLUE,
    },
    label: 'Dashboard',
    onPress: navigation =>
      navigation.navigate(CommunityDrawerScreens.Dashboard),
  },
  {
    icon: {
      name: 'account-circle',
      type: 'material',
      color: COLORS.MIDNIGHT_BLUE,
    },
    label: 'Profile',
    onPress: navigation => navigation.navigate(CommunityDrawerScreens.Profile),
  },
  {
    icon: {name: 'groups', type: 'material', color: COLORS.MIDNIGHT_BLUE},
    label: 'Communities',
    onPress: navigation =>
      navigation.navigate(CommunityDrawerScreens.CommunitiesStack, {
        screen: CommunityStackScreens.Communities,
      }),
  },
  {
    icon: {
      name: 'assignment',
      type: 'material',
      color: COLORS.MIDNIGHT_BLUE,
    },
    label: 'CEC Requests',
    onPress: navigation => navigation.navigate(CommunityDrawerScreens.CEC),
  },
  {
    icon: {
      name: 'account-tree',
      type: 'material',
      color: COLORS.MIDNIGHT_BLUE,
    },
    label: 'Skills',
    onPress: navigation => navigation.navigate(CommunityDrawerScreens.Skills),
  },
  {
    icon: {name: 'description', type: 'material', color: COLORS.MIDNIGHT_BLUE},
    label: 'Report',
    onPress: navigation => navigation.navigate(CommunityDrawerScreens.Report),
  },
];
