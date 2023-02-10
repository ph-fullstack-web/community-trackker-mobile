import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Button, Icon} from '@rneui/base';

import {Communities, Members} from 'components/screens';
import Logo from 'assets/images/CSV-Logo.svg';
import {RootDrawerParamList} from './@types/navigation';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const headerBackground = () => <Logo height="100%" />;

const headerRight = () => (
  <Button type="clear" icon={<Icon name="logout" type="material" />} />
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Communities"
        screenOptions={{
          headerBackground,
          headerRight,
          headerBackgroundContainerStyle: styles.header,
          headerTitle: '',
          drawerType: 'slide',
          swipeEdgeWidth: 200,
        }}
      >
        <Drawer.Screen name="Communities" component={Communities} />
        <Drawer.Screen name="Members" component={Members} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
  },
});

export default App;
