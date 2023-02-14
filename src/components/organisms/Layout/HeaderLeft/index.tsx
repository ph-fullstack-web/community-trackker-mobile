import {useNavigation, useNavigationState} from '@react-navigation/native';
import {Button, Icon} from '@rneui/base';

export const HeaderLeft = () => {
  const {navigate, toggleDrawer} = useNavigation<any>();
  const drawerRouteIndex = useNavigationState(state => state.index);
  const drawerRoutes = useNavigationState(state => state.routes);

  const handleGoBack = () => {
    const currentRoute = drawerRoutes[drawerRouteIndex];
    if (currentRoute?.state?.type === 'stack') {
      navigate(`${currentRoute?.name}Stack`);
      return;
    }
    navigate(currentRoute?.name);
  };

  const handleToggleDrawer = () => {
    toggleDrawer();
  };

  if (drawerRoutes[drawerRouteIndex]?.state?.index) {
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
