import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Drawer as DrawerContent,
  DrawerItems,
  Header,
} from 'components/organisms';
import {
  CommunitiesDashboardScreen,
  DashboardScreen,
  MembersScreen,
  ProfileScreen,
  ReportScreen,
} from 'components/screens';
import {COLORS} from 'constants/colors';

const Drawer = createDrawerNavigator<CommunityDrawerParamList>();
const Stack = createNativeStackNavigator<CommunityStackParamList>();
type DrawerNavigation =
  CommunityDrawerScreenProps<'CommunitiesStack'>['navigation'];

const drawerItems: DrawerItems<DrawerNavigation> = [
  {
    icon: {
      name: 'dashboard',
      type: 'material',
      color: COLORS.MIDNIGHT_BLUE,
    },
    label: 'Dashboard',
    onPress: navigation => navigation.navigate('Dashboard'),
  },
  {
    icon: {
      name: 'account-circle',
      type: 'material',
      color: COLORS.MIDNIGHT_BLUE,
    },
    label: 'Profile',
    onPress: navigation => navigation.navigate('Profile'),
  },
  {
    icon: {name: 'groups', type: 'material', color: COLORS.MIDNIGHT_BLUE},
    label: 'Communities',
    onPress: navigation =>
      navigation.navigate('CommunitiesStack', {screen: 'Communities'}),
  },
  {
    icon: {name: 'description', type: 'material', color: COLORS.MIDNIGHT_BLUE},
    label: 'Report',
    onPress: navigation => navigation.navigate('Report'),
  },
  {
    icon: {name: 'color-lens', type: 'material', color: COLORS.MIDNIGHT_BLUE},
    items: [
      {
        icon: {
          name: 'color-lens',
          type: 'material',
          color: COLORS.MIDNIGHT_BLUE,
        },
        label: 'Blue',
        onPress: () => console.log('Blue'),
      },
      {
        icon: {
          name: 'color-lens',
          type: 'material',
          color: COLORS.MIDNIGHT_BLUE,
        },
        label: 'Plum',
        onPress: () => console.log('Plum'),
      },
      {
        icon: {
          name: 'color-lens',
          type: 'material',
          color: COLORS.MIDNIGHT_BLUE,
        },
        label: 'Teal',
        onPress: () => console.log('Teal'),
      },
      {
        icon: {
          name: 'color-lens',
          type: 'material',
          color: COLORS.MIDNIGHT_BLUE,
        },
        label: 'Dark',
        onPress: () => console.log('Dark'),
      },
    ],
    label: 'Themes',
  },
];

const renderDrawer = (props: DrawerContentComponentProps) => (
  <DrawerContent<DrawerNavigation> {...props} drawerItems={drawerItems} />
);

export const CommunitiesDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        header: Header,
        drawerType: 'slide',
        swipeEdgeWidth: 200,
      }}
      drawerContent={renderDrawer}
    >
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen
        name="CommunitiesStack"
        component={CommunitiesNativeStackNavigation}
      />
      <Drawer.Screen name="Report" component={ReportScreen} />
    </Drawer.Navigator>
  );
};

export const CommunitiesNativeStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Communities"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="Communities" component={CommunitiesDashboardScreen} />
      <Stack.Screen name="CommunityMembers" component={MembersScreen} />
    </Stack.Navigator>
  );
};
