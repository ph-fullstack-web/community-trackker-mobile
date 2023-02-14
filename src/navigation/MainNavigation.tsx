import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  HeaderBackground,
  HeaderLeft,
  HeaderRight,
} from 'components/organisms/Layout/';
import {
  CECDashboardScreen,
  CommunitiesDashboardScreen,
  Members,
  MembersDetailsScreen,
} from 'components/screens';
import {CommunitiesDataProvider} from 'providers/CommunitiesDataProvider';
import {
  RootDrawerParamList,
  RootNativeStackParamList,
} from '../@types/navigation';
import {styles} from './MainNavigationStyles';
import {ScreenName} from 'constants/enums';
import {CommunityMembersScreen} from 'components/screens/CommunityMembersScreen';

const Drawer = createDrawerNavigator<RootDrawerParamList>();
const Stack = createNativeStackNavigator<RootNativeStackParamList>();

const CommunitiesDashboardScreenWrapper = () => {
  return (
    <CommunitiesDataProvider>
      <Stack.Navigator initialRouteName={ScreenName.CommunitiesStack}>
        <Stack.Screen
          name={ScreenName.CommunitiesStack}
          component={CommunitiesDashboardScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenName.CommunityMembers}
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
        initialRouteName={ScreenName.MembersDetails}
        screenOptions={{
          headerBackground: HeaderBackground,
          headerRight: HeaderRight,
          headerLeft: HeaderLeft,
          headerBackgroundContainerStyle: styles.header,
          headerTitle: '',
          drawerType: 'slide',
          swipeEdgeWidth: 200,
        }}
      >
        <Drawer.Screen
          name={ScreenName.MembersDetails}
          component={MembersDetailsScreen}
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
