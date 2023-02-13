import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {HeaderBackground, HeaderRight} from 'components/organisms/Layout/';

import {
  CECDashboardScreen,
  CommunitiesDashboardScreen,
  Members,
} from 'components/screens';
import {RootDrawerParamList} from '../@types/navigation';
import {styles} from './MainNavigationStyles';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Communities"
        screenOptions={{
          headerBackground: HeaderBackground,
          headerRight: HeaderRight,
          headerBackgroundContainerStyle: styles.header,
          headerTitle: '',
          drawerType: 'slide',
          swipeEdgeWidth: 200,
        }}
      >
        <Drawer.Screen
          name="Communities"
          component={CommunitiesDashboardScreen}
        />
        <Drawer.Screen name="Members" component={Members} />
        <Drawer.Screen name="CEC" component={CECDashboardScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
