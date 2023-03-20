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
  ProjectsScreen,
  ReportScreen,
  SkillsDashboardScreen,
  SkillsScreen,
} from 'components/screens';
import {DEFAULT_DRAWER_ITEMS} from 'constants/drawer';
import {
  CommunityDrawerScreens,
  CommunityStackScreens,
  MaintenanceDrawerScreens,
} from 'constants/navigation';
import {useThemeProvider} from 'providers';

type DrawerNavigation =
  CommunityDrawerScreenProps<CommunityDrawerScreens.CommunitiesStack>['navigation'] &
    MaintenanceDrawerScreenProps<MaintenanceDrawerScreens.Skills>['navigation'];

const Drawer = createDrawerNavigator<CommunityDrawerParamList>();
const MaintenanceDrawer = createDrawerNavigator<MaintenanceDrawerParamList>();
const Stack = createNativeStackNavigator<CommunityStackParamList>();

export const CommunitiesDrawerNavigation = () => {
  const {mode} = useThemeProvider();
  const drawerItems = useMemo(
    () => DEFAULT_DRAWER_ITEMS<DrawerNavigation>(mode),
    [mode]
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
        name={CommunityDrawerScreens.CECRequestsDrawer}
        component={CECDashboardScreen}
      />
      <Drawer.Screen
        name={CommunityDrawerScreens.SkillTreeDrawer}
        component={SkillsDashboardScreen}
      />
      <Drawer.Screen
        name={CommunityDrawerScreens.Report}
        component={ReportScreen}
      />
      <MaintenanceDrawer.Screen
        name={MaintenanceDrawerScreens.Skills}
        component={SkillsScreen}
      />
      <MaintenanceDrawer.Screen
        name={MaintenanceDrawerScreens.Projects}
        component={ProjectsScreen}
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
