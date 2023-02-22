import {createDrawerNavigator} from '@react-navigation/drawer';

import styles from '../Navigation.styles';
import {RootDrawerParamList} from '../../@types/navigation';
import {
  Drawer as DrawerContent,
  DrawerItems,
  HeaderBackground,
  HeaderLeft,
  HeaderRight,
} from 'components/organisms';
import {CECDashboardScreen} from 'components/screens';
import {COLORS} from 'constants/colors';
import {DrawerScreen} from 'constants/navigation';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const drawerItems: DrawerItems = [
  {
    icon: {
      name: 'assignment',
      type: 'material',
      color: COLORS.MIDNIGHT_BLUE,
    },
    label: 'CEC Requests',
    onPress: navigation => navigation.navigate(DrawerScreen.CEC),
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

export const CECTrackerDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName={DrawerScreen.CEC}
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
      <Drawer.Screen name={DrawerScreen.CEC} component={CECDashboardScreen} />
    </Drawer.Navigator>
  );
};
