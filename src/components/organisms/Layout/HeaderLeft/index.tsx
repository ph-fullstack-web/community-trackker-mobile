import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button, Icon} from '@rneui/base';

import {ScreenName, StackScreenName} from 'constants/enums';
import {
  RootDrawerParamList,
  RootNativeStackParamList,
} from '../../../../@types/navigation';

type HeaderLeftDrawerNavigationProp = DrawerNavigationProp<RootDrawerParamList>;
type HeaderLeftStackNavigationProp =
  NativeStackNavigationProp<RootNativeStackParamList>;

export const HeaderLeft = () => {
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
        const stackName: keyof typeof StackScreenName = routeNames[
          index - 1
        ] as keyof typeof StackScreenName;
        navigateStack(stackName);
        return;
      }
      const drawerName: keyof typeof ScreenName =
        currentRoute?.name as keyof typeof ScreenName;
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
        type="clear"
        icon={<Icon name="west" type="material" />}
        onPress={handleGoBack}
      />
    );
  }

  return (
    <Button
      type="clear"
      icon={<Icon name="menu" type="material" />}
      onPress={handleToggleDrawer}
    />
  );
};
