import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CECTrackerDrawerNavigation} from './CECTrackerNavigation';
import {DashboardDrawerNavigation} from './DashboardNavigation';
import {MyCommunitiesDrawerNavigation} from './MyCommunitiesNavigation';
import {SkillTreeDrawerNavigation} from './SkillTreeNavigation';
import {RootNativeStackParamList} from '../@types/navigation';
//import {LoginScreen} from 'components/screens';
import {StackScreen} from 'constants/navigation';
import {CommunitiesDataProvider} from 'providers/CommunitiesDataProvider';

const Stack = createNativeStackNavigator<RootNativeStackParamList>();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <CommunitiesDataProvider>
        {/*TODO: remove DashboardStack as initial route when login screen has been implemented */}
        <Stack.Navigator initialRouteName={StackScreen.DashboardStack}>
          {/* <Stack.Navigator initialRouteName={StackScreen.LoginStack}>
          <Stack.Screen
            name={StackScreen.LoginStack}
            component={LoginScreen}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name={StackScreen.DashboardStack}
            component={DashboardDrawerNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={StackScreen.MyCommunities}
            component={MyCommunitiesDrawerNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={StackScreen.CECTracker}
            component={CECTrackerDrawerNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={StackScreen.SkillTree}
            component={SkillTreeDrawerNavigation}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </CommunitiesDataProvider>
    </NavigationContainer>
  );
};
