import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Button} from 'components/atoms';
import {DrawerScreen, StackScreen} from 'constants/navigation';
import {
  RootDrawerParamList,
  RootNativeStackParamList,
} from '../../../../@types/navigation';
import styles from './HeaderLeft.styles';

type HeaderLeftDrawerNavigationProp = DrawerNavigationProp<RootDrawerParamList>;
type HeaderLeftStackNavigationProp =
  NativeStackNavigationProp<RootNativeStackParamList>;

type HeaderLeftProps = {
  buttonColor?: string;
};

export const HeaderLeft = (props: HeaderLeftProps) => {
  const {toggleDrawer, navigate: navigateDrawer} =
    useNavigation<HeaderLeftDrawerNavigationProp>();
  const {navigate: navigateStack} =
    useNavigation<HeaderLeftStackNavigationProp>();
  const drawerRouteIndex = useNavigationState(state => state.index);
  const drawerRoutes = useNavigationState(state => state.routes);
  const currentRoute = drawerRoutes[drawerRouteIndex];

  const handleGoBack = () => {
    if (currentRoute?.state) {
      const {index, routeNames} = currentRoute?.state;
      if (routeNames && index && index > 0) {
        const stackName: keyof typeof StackScreen = routeNames[
          index - 1
        ] as keyof typeof StackScreen;
        navigateStack(stackName);
        return;
      }
      const drawerName: keyof typeof DrawerScreen =
        currentRoute?.name as keyof typeof DrawerScreen;
      navigateDrawer(drawerName);
      return;
    }
  };

  const handleToggleDrawer = () => {
    toggleDrawer();
  };

  if (currentRoute?.state?.index) {
    return (
      <Button
        onPress={handleGoBack}
        icon={{
          name: 'west',
          type: 'material',
          color: props.buttonColor,
        }}
        buttonStyle={styles.button}
      />
    );
  }

  return (
    <Button
      onPress={handleToggleDrawer}
      icon={{
        name: 'menu',
        type: 'material',
        color: props.buttonColor,
      }}
      buttonStyle={styles.button}
    />
  );
};
