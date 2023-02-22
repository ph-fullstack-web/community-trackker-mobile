import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import {LoginScreen} from 'components/screens';
import {CommunitiesDataProvider} from 'providers/CommunitiesDataProvider';
import {CECTrackerDrawerNavigation} from './CECTrackerNavigation';
import {CommunitiesDrawerNavigation} from './CommunitiesNavigation';
import {SkillTreeDrawerNavigation} from './SkillTreeNavigation';

const Stack = createNativeStackNavigator<RootNativeStackParamList>();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <CommunitiesDataProvider>
        {/*TODO: remove DashboardStack as initial route when login screen has been implemented */}
        <Stack.Navigator
          initialRouteName="CommunitiesDrawer"
          screenOptions={{headerShown: false}}
        >
          {/* <Stack.Screen
            name={StackScreen.LoginStack}
            component={LoginScreen}
          /> */}
          <Stack.Screen
            name="CommunitiesDrawer"
            component={CommunitiesDrawerNavigation}
          />
          <Stack.Screen
            name="CECTracker"
            component={CECTrackerDrawerNavigation}
          />
          <Stack.Screen
            name="SkillTree"
            component={SkillTreeDrawerNavigation}
          />
        </Stack.Navigator>
      </CommunitiesDataProvider>
    </NavigationContainer>
  );
};
