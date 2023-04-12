import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen} from 'components/screens';
import {RootNativeStackScreens} from 'constants/navigation';
import {CommunitiesDrawerNavigation} from './CommunitiesNavigation';

const Stack = createNativeStackNavigator<RootNativeStackParamList>();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={RootNativeStackScreens.Login}
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name={RootNativeStackScreens.Login}
          component={LoginScreen}
        />
        <Stack.Screen
          name={RootNativeStackScreens.CommunitiesDrawer}
          component={CommunitiesDrawerNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
