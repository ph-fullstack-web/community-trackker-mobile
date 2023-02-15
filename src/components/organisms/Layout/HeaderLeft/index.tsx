import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button, Icon} from '@rneui/base';
import {RootDrawerParamList} from '../../../../@types/navigation';

type HeaderLeftDrawerNavigationProp = DrawerNavigationProp<RootDrawerParamList>;
type HeaderLeftStackNavigationProp = NativeStackNavigationProp<any>;

export const HeaderLeft = () => {
  const {toggleDrawer} = useNavigation<HeaderLeftDrawerNavigationProp>();
  const {navigate} = useNavigation<HeaderLeftStackNavigationProp>();
  const drawerRouteIndex = useNavigationState(state => state.index);
  const drawerRoutes = useNavigationState(state => state.routes);
  const currentRoute = drawerRoutes[drawerRouteIndex];

  const handleGoBack = () => {
    if (currentRoute?.state) {
      const {index, routeNames} = currentRoute?.state;
      if (routeNames && index && index > 0) {
        navigate(routeNames[index - 1]);
        return;
      }
      navigate(currentRoute?.name);
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
