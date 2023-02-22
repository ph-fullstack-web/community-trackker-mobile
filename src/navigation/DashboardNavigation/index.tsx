import {createDrawerNavigator} from '@react-navigation/drawer';

import styles from '../Navigation.styles';
import {RootDrawerParamList} from '../../@types/navigation';
import {HeaderBackground, HeaderRight} from 'components/organisms';
import {DashboardScreen} from 'components/screens';
import {DrawerScreen} from 'constants/navigation';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export const DashboardDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName={DrawerScreen.Dashboard}
      screenOptions={{
        headerBackground: HeaderBackground,
        headerRight: HeaderRight,
        headerLeft: () => <></>,
        headerBackgroundContainerStyle: styles.header,
        headerRightContainerStyle: styles.headerRight,
        headerTitle: '',
      }}
    >
      <Drawer.Screen
        name={DrawerScreen.Dashboard}
        component={DashboardScreen}
        options={{swipeEnabled: false}}
      />
    </Drawer.Navigator>
  );
};
