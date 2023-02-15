import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Drawer as DrawerContent,
  HeaderBackground,
  HeaderLeft,
  HeaderRight,
} from 'components/organisms/Layout/';
import {
  CECDashboardScreen,
  CommunitiesDashboardScreen,
  Members,
  DashboardScreen,
} from 'components/screens';
import {CommunitiesDataProvider} from 'providers/CommunitiesDataProvider';
import {
  RootDrawerParamList,
  RootNativeStackParamList,
} from '../@types/navigation';
import styles from './MainNavigation.styles';
import {ScreenName, StackScreenName} from 'constants/enums';
import {CommunityMembersScreen} from 'components/screens/CommunityMembersScreen';

const Drawer = createDrawerNavigator<RootDrawerParamList>();
const Stack = createNativeStackNavigator<RootNativeStackParamList>();

const CommunitiesDashboardScreenWrapper = () => {
  return (
    <CommunitiesDataProvider>
      <Stack.Navigator initialRouteName={StackScreenName.CommunitiesStack}>
        <Stack.Screen
          name={StackScreenName.CommunitiesStack}
          component={CommunitiesDashboardScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={StackScreenName.CommunityMembers}
          component={CommunityMembersScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </CommunitiesDataProvider>
  );
};

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={ScreenName.Dashboard}
        screenOptions={{
          headerBackground: HeaderBackground,
          headerRight: HeaderRight,
          headerLeft: HeaderLeft,
          headerBackgroundContainerStyle: styles.header,
          headerTitle: '',
          drawerType: 'slide',
          swipeEdgeWidth: 200,
        }}
        drawerContent={DrawerContent}
      >
        <Drawer.Screen
          name={ScreenName.Dashboard}
          component={DashboardScreen}
        />
        <Drawer.Screen
          name={ScreenName.Communities}
          component={CommunitiesDashboardScreenWrapper}
        />
        <Drawer.Screen name={ScreenName.Members} component={Members} />
        <Drawer.Screen name={ScreenName.CEC} component={CECDashboardScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
