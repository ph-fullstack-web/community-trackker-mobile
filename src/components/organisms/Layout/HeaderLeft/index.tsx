import {useNavigation, useNavigationState} from '@react-navigation/native';
import {Button, Icon} from '@rneui/base';

export const HeaderLeft = () => {
  const {navigate, toggleDrawer} = useNavigation<any>();
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
