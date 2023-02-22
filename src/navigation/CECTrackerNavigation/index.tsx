import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import {
  Drawer as DrawerContent,
  DrawerItems,
  Header,
} from 'components/organisms';
import {CECDashboardScreen} from 'components/screens';
import {COLORS} from 'constants/colors';

const Drawer = createDrawerNavigator<CECTrackerDrawerParamList>();
type DrawerNavigation = CECTrackerDrawerScreenProps<'CEC'>['navigation'];

const drawerItems: DrawerItems<DrawerNavigation> = [
  {
    icon: {
      name: 'dashboard',
      type: 'material',
      color: COLORS.MIDNIGHT_BLUE,
    },
    label: 'Dashboard',
    onPress: navigation =>
      navigation.navigate('CommunitiesDrawer', {screen: 'Dashboard'}),
  },
  {
    icon: {
      name: 'assignment',
      type: 'material',
      color: COLORS.MIDNIGHT_BLUE,
    },
    label: 'CEC Requests',
    onPress: navigation => navigation.navigate('CEC'),
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

export const CECTrackerDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="CEC"
      screenOptions={{
        header: Header,
        drawerType: 'slide',
        swipeEdgeWidth: 200,
      }}
      drawerContent={renderDrawer}
    >
      <Drawer.Screen name="CEC" component={CECDashboardScreen} />
    </Drawer.Navigator>
  );
};
