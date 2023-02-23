import {createDrawerNavigator} from '@react-navigation/drawer';

import styles from './DashboardNavigation.styles';
import {RootDrawerParamList} from '../../@types/navigation';
import {DashboardHeader, HeaderLeft} from 'components/organisms';
import {DashboardScreen} from 'components/screens';
import {DrawerScreen} from 'constants/navigation';
import {COLORS} from 'constants/colors';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export const DashboardDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName={DrawerScreen.Dashboard}
      screenOptions={{
        headerBackground: DashboardHeader,
        headerLeft: () => <HeaderLeft buttonColor={COLORS.LIGHT_GRAY} />,
        headerBackgroundContainerStyle: styles.header,
        headerLeftContainerStyle: styles.headerLeft,
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
