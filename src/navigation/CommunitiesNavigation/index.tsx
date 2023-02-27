import {useCallback, useMemo} from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Drawer as DrawerContent, Header} from 'components/organisms';
import {
  CECDashboardScreen,
  CommunitiesDashboardScreen,
  DashboardScreen,
  MembersScreen,
  ProfileScreen,
  ReportScreen,
  SkillsDashboardScreen,
} from 'components/screens';
import {DEFAULT_DRAWER_ITEMS} from 'constants/drawer';
import {
  CommunityDrawerScreens,
  CommunityStackScreens,
} from 'constants/navigation';

type DrawerNavigation =
  CommunityDrawerScreenProps<CommunityDrawerScreens.CommunitiesStack>['navigation'];

const Drawer = createDrawerNavigator<CommunityDrawerParamList>();
const Stack = createNativeStackNavigator<CommunityStackParamList>();

export const CommunitiesDrawerNavigation = () => {
  const drawerItems = useMemo(
    () => DEFAULT_DRAWER_ITEMS<DrawerNavigation>(),
    []
  );

  const renderDrawer = useCallback(
    (props: DrawerContentComponentProps) => (
      <DrawerContent<DrawerNavigation> {...props} drawerItems={drawerItems} />
    ),
    [drawerItems]
  );

  return (
    <Drawer.Navigator
      initialRouteName={CommunityDrawerScreens.Dashboard}
      screenOptions={{
        header: Header,
        drawerType: 'slide',
        swipeEdgeWidth: 200,
      }}
      drawerContent={renderDrawer}
      backBehavior="history"
    >
      <Drawer.Screen
        name={CommunityDrawerScreens.Dashboard}
        component={DashboardScreen}
      />
      <Drawer.Screen
        name={CommunityDrawerScreens.Profile}
        component={ProfileScreen}
      />
      <Drawer.Screen
        name={CommunityDrawerScreens.CommunitiesStack}
        component={CommunitiesNativeStackNavigation}
      />
      <Drawer.Screen
        name={CommunityDrawerScreens.CEC}
        component={CECDashboardScreen}
      />
      <Drawer.Screen
        name={CommunityDrawerScreens.Skills}
        component={SkillsDashboardScreen}
      />
      <Drawer.Screen
        name={CommunityDrawerScreens.Report}
        component={ReportScreen}
      />
    </Drawer.Navigator>
  );
};

export const CommunitiesNativeStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={CommunityStackScreens.Communities}
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name={CommunityStackScreens.Communities}
        component={CommunitiesDashboardScreen}
      />
      <Stack.Screen
        name={CommunityStackScreens.CommunityMembers}
        component={MembersScreen}
      />
    </Stack.Navigator>
  );
};
