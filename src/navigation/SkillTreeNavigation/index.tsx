import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import {
  Drawer as DrawerContent,
  DrawerItems,
  Header,
} from 'components/organisms';
import {SkillsDashboardScreen} from 'components/screens';
import {COLORS} from 'constants/colors';

const Drawer = createDrawerNavigator<SkillTreeDrawerParamList>();
type DrawerNavigation = SkillTreeDrawerScreenProps<'Skills'>['navigation'];

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
      name: 'account-tree',
      type: 'material',
      color: COLORS.MIDNIGHT_BLUE,
    },
    label: 'Skills',
    onPress: navigation => navigation.navigate('Skills'),
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

export const SkillTreeDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Skills"
      screenOptions={{
        header: Header,
        drawerType: 'slide',
        swipeEdgeWidth: 200,
      }}
      drawerContent={renderDrawer}
    >
      <Drawer.Screen name="Skills" component={SkillsDashboardScreen} />
    </Drawer.Navigator>
  );
};
