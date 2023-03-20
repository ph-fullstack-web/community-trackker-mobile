import {DrawerNavigationProp} from '@react-navigation/drawer';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

import {DrawerItems} from 'components/organisms';
import {COLORS} from './colors';
import {
  CommunityDrawerScreens,
  CommunityStackScreens,
  MaintenanceDrawerScreens,
  ScreenTitle,
} from './navigation';

type NavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<CommunityDrawerParamList>,
  NativeStackNavigationProp<RootNativeStackParamList>
> &
  DrawerNavigationProp<MaintenanceDrawerParamList>;

export const DEFAULT_DRAWER_ITEMS = <T extends NavigationProp>(
  mode: string | undefined
): DrawerItems<T> => [
  {
    icon: {
      name: 'dashboard',
      type: 'material',
      color: mode === 'light' ? COLORS.MIDNIGHT_BLUE : COLORS.LIGHT_BLUE,
    },
    label: ScreenTitle.Dashboard,
    onPress: navigation =>
      navigation.navigate(CommunityDrawerScreens.Dashboard),
  },
  {
    icon: {
      name: 'account-circle',
      type: 'material',
      color: mode === 'light' ? COLORS.MIDNIGHT_BLUE : COLORS.LIGHT_BLUE,
    },
    label: ScreenTitle.Profile,
    onPress: navigation => navigation.navigate(CommunityDrawerScreens.Profile),
  },
  {
    icon: {
      name: 'groups',
      type: 'material',
      color: mode === 'light' ? COLORS.MIDNIGHT_BLUE : COLORS.LIGHT_BLUE,
    },
    label: ScreenTitle.Communities,
    onPress: navigation =>
      navigation.navigate(CommunityDrawerScreens.CommunitiesStack, {
        screen: CommunityStackScreens.Communities,
      }),
  },
  {
    icon: {
      name: 'assignment',
      type: 'material',
      color: mode === 'light' ? COLORS.MIDNIGHT_BLUE : COLORS.LIGHT_BLUE,
    },
    label: ScreenTitle.CECRequests,
    onPress: navigation =>
      navigation.navigate(CommunityDrawerScreens.CECRequestsDrawer),
  },
  {
    icon: {
      name: 'account-tree',
      type: 'material',
      color: mode === 'light' ? COLORS.MIDNIGHT_BLUE : COLORS.LIGHT_BLUE,
    },
    label: ScreenTitle.SkillTree,
    onPress: navigation =>
      navigation.navigate(CommunityDrawerScreens.SkillTreeDrawer),
  },
  {
    icon: {
      name: 'description',
      type: 'material',
      color: mode === 'light' ? COLORS.MIDNIGHT_BLUE : COLORS.LIGHT_BLUE,
    },
    label: ScreenTitle.Report,
    onPress: navigation => navigation.navigate(CommunityDrawerScreens.Report),
  },
  {
    icon: {
      name: 'construction',
      type: 'material',
      color: mode === 'light' ? COLORS.MIDNIGHT_BLUE : COLORS.LIGHT_BLUE,
    },
    label: ScreenTitle.Maintenance,
    onPress: navigation =>
      navigation.navigate(CommunityDrawerScreens.MaintenanceDrawer, {
        screen: MaintenanceDrawerScreens.Skills,
      }),
    items: [
      {
        icon: {
          name: 'psychology',
          type: 'material',
          color: mode === 'light' ? COLORS.MIDNIGHT_BLUE : COLORS.LIGHT_BLUE,
        },
        label: ScreenTitle.Skills,
        onPress: navigation =>
          navigation.navigate(MaintenanceDrawerScreens.Skills),
      },
      {
        icon: {
          name: 'assignment',
          type: 'material',
          color: mode === 'light' ? COLORS.MIDNIGHT_BLUE : COLORS.LIGHT_BLUE,
        },
        label: ScreenTitle.Projects,
        onPress: navigation =>
          navigation.navigate(MaintenanceDrawerScreens.Projects),
      },
    ],
  },
];
