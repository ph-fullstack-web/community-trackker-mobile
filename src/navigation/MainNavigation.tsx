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
  MembersScreen,
  DashboardScreen,
  ProfileScreen,
} from 'components/screens';
import {CommunitiesDataProvider} from 'providers/CommunitiesDataProvider';
import {
  MainRootNativeStackParamList,
  RootDrawerParamList,
  RootNativeStackParamList,
} from '../@types/navigation';
import styles from './MainNavigation.styles';
import {
  MainStackScreenName,
  ScreenName,
  StackScreenName,
} from 'constants/enums';
import {CommunityMembersScreen} from 'components/screens/CommunityMembersScreen';

const MainStack = createNativeStackNavigator<MainRootNativeStackParamList>();
const Stack = createNativeStackNavigator<RootNativeStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

const MyCommunitiesDrawerWrapper = () => {
  return (
    <CommunitiesDataProvider>
      <Drawer.Navigator
        initialRouteName={ScreenName.Profile}
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
        drawerContent={DrawerContent}
      >
        <Drawer.Screen name={ScreenName.Profile} component={ProfileScreen} />
        <Drawer.Screen
          name={ScreenName.Communities}
          component={CommunitiesDashboardScreenWrapper}
        />
        <Drawer.Screen
          name={ScreenName.CommunityMembers}
          component={CommunityMembersScreen}
        />
        <Drawer.Screen name={ScreenName.Members} component={MembersScreen} />
        <Drawer.Screen name={ScreenName.CEC} component={CECDashboardScreen} />
      </Drawer.Navigator>
    </CommunitiesDataProvider>
  );
};

const CommunitiesDashboardScreenWrapper = () => {
  return (
    <Stack.Navigator initialRouteName={StackScreenName.CommunitiesStack}>
      <Stack.Screen
        name={StackScreenName.CommunitiesStack}
        component={CommunitiesDashboardScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={StackScreenName.CommunityMembersStack}
        component={CommunityMembersScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={MainStackScreenName.Dashboard}>
        <MainStack.Screen
          name={MainStackScreenName.Dashboard}
          component={DashboardScreen}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name={MainStackScreenName.MyCommunities}
          component={MyCommunitiesDrawerWrapper}
          options={{headerShown: false}}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
