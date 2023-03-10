import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import {LoginScreen} from 'components/screens';
import {RootNativeStackScreens} from 'constants/navigation';
import {CommunitiesDrawerNavigation} from './CommunitiesNavigation';

const Stack = createNativeStackNavigator<RootNativeStackParamList>();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      {/*TODO: remove DashboardStack as initial route when login screen has been implemented */}
      <Stack.Navigator
        initialRouteName={RootNativeStackScreens.CommunitiesDrawer}
        screenOptions={{headerShown: false}}
      >
        {/* <Stack.Screen
            name={StackScreen.LoginStack}
            component={LoginScreen}
          /> */}
        <Stack.Screen
          name={RootNativeStackScreens.CommunitiesDrawer}
          component={CommunitiesDrawerNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
