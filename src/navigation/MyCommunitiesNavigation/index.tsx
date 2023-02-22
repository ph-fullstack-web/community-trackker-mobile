import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import styles from '../Navigation.styles';
import {
  RootDrawerParamList,
  RootNativeStackParamList,
} from '../../@types/navigation';
import {
  Drawer as DrawerContent,
  DrawerItems,
  HeaderBackground,
  HeaderLeft,
  HeaderRight,
} from 'components/organisms';
import {
  CommunitiesDashboardScreen,
  MembersScreen,
  ProfileScreen,
  ReportScreen,
} from 'components/screens';
import {COLORS} from 'constants/colors';
import {DrawerScreen, StackScreen} from 'constants/navigation';

const Drawer = createDrawerNavigator<RootDrawerParamList>();
const Stack = createNativeStackNavigator<RootNativeStackParamList>();

const drawerItems: DrawerItems = [
  {
    icon: {
      name: 'account-circle',
      type: 'material',
      color: COLORS.MIDNIGHT_BLUE,
    },
    label: 'Profile',
    onPress: navigation => navigation.navigate(DrawerScreen.Profile),
  },
  {
    icon: {name: 'groups', type: 'material', color: COLORS.MIDNIGHT_BLUE},
    label: 'Communities',
    onPress: navigation => navigation.navigate(DrawerScreen.Communities),
  },
  {
    icon: {name: 'group', type: 'material', color: COLORS.MIDNIGHT_BLUE},
    items: [
      {
        icon: {name: 'group', type: 'material', color: COLORS.MIDNIGHT_BLUE},
        label: 'Quality Engineering',
        onPress: navigation =>
          navigation.navigate(DrawerScreen.Members, {
            communityId: 1,
          }),
      },
      {
        icon: {name: 'group', type: 'material', color: COLORS.MIDNIGHT_BLUE},
        label: 'Cloud and DevOps',
        onPress: navigation =>
          navigation.navigate(DrawerScreen.Members, {
            communityId: 2,
          }),
      },
      {
        icon: {name: 'group', type: 'material', color: COLORS.MIDNIGHT_BLUE},
        label: 'Mobile Cross Platform',
        onPress: navigation =>
          navigation.navigate(DrawerScreen.Members, {
            communityId: 3,
          }),
      },
      {
        icon: {name: 'group', type: 'material', color: COLORS.MIDNIGHT_BLUE},
        label: 'Enterprise Coffee',
        onPress: navigation =>
          navigation.navigate(DrawerScreen.Members, {
            communityId: 4,
          }),
      },
      {
        icon: {name: 'group', type: 'material', color: COLORS.MIDNIGHT_BLUE},
        label: 'Enterprise .NET',
        onPress: navigation =>
          navigation.navigate(DrawerScreen.Members, {
            communityId: 5,
          }),
      },
      {
        icon: {name: 'group', type: 'material', color: COLORS.MIDNIGHT_BLUE},
        label: 'Program Management',
        onPress: navigation =>
          navigation.navigate(DrawerScreen.Members, {
            communityId: 6,
          }),
      },
      {
        icon: {name: 'group', type: 'material', color: COLORS.MIDNIGHT_BLUE},
        label: 'Product Strategy',
        onPress: navigation =>
          navigation.navigate(DrawerScreen.Members, {
            communityId: 7,
          }),
      },
      {
        icon: {name: 'group', type: 'material', color: COLORS.MIDNIGHT_BLUE},
        label: 'Full-Stack Web',
        onPress: navigation =>
          navigation.navigate(DrawerScreen.Members, {
            communityId: 8,
          }),
      },
      {
        icon: {name: 'group', type: 'material', color: COLORS.MIDNIGHT_BLUE},
        label: 'Big Data & Analytics',
        onPress: navigation =>
          navigation.navigate(DrawerScreen.Members, {
            communityId: 9,
          }),
      },
    ],
    label: 'Members',
  },
  {
    icon: {name: 'description', type: 'material', color: COLORS.MIDNIGHT_BLUE},
    label: 'Report',
    onPress: navigation => navigation.navigate(DrawerScreen.Report),
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

export const MyCommunitiesDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName={DrawerScreen.Profile}
      screenOptions={{
        headerBackground: HeaderBackground,
        headerRight: HeaderRight,
        headerLeft: HeaderLeft,
        headerBackgroundContainerStyle: styles.header,
        headerRightContainerStyle: styles.headerRight,
        headerLeftContainerStyle: styles.headerLeft,
        headerTitle: '',
        drawerType: 'slide',
        swipeEdgeWidth: 200,
      }}
      drawerContent={({navigation, state, descriptors}) => (
        <DrawerContent
          navigation={navigation}
          state={state}
          descriptors={descriptors}
          drawerItems={drawerItems}
        />
      )}
    >
      <Drawer.Screen name={DrawerScreen.Profile} component={ProfileScreen} />
      <Drawer.Screen
        name={DrawerScreen.Communities}
        component={MyCommunitiesNativeStackNavigation}
      />
      <Drawer.Screen name={DrawerScreen.Members} component={MembersScreen} />
      <Drawer.Screen name={DrawerScreen.Report} component={ReportScreen} />
    </Drawer.Navigator>
  );
};

export const MyCommunitiesNativeStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={StackScreen.CommunitiesStack}>
      <Stack.Screen
        name={StackScreen.CommunitiesStack}
        component={CommunitiesDashboardScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={StackScreen.MembersStack}
        component={MembersScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
