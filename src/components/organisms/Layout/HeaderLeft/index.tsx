import {useNavigation, useNavigationState} from '@react-navigation/native';
import {DrawerHeaderProps} from '@react-navigation/drawer';

import {Button} from 'components/atoms';

import styles from './HeaderLeft.styles';

type HeaderLeftProps = {
  navigation: DrawerHeaderProps['navigation'];
};

export const HeaderLeft = ({navigation}: HeaderLeftProps) => {
  const {toggleDrawer} = navigation;
  const {pop} =
    useNavigation<CommunityStackScreenProps<'Communities'>['navigation']>();
  const {index: drawerRouteIndex, routes: drawerRoutes} = useNavigationState(
    state => state
  );
  const currentRoute = drawerRoutes[drawerRouteIndex];

  const handleGoBack = () => {
    pop();
  };

  if (currentRoute?.state?.index) {
    return (
      <Button
        onPress={handleGoBack}
        icon={{
          name: 'west',
          type: 'material',
        }}
        buttonStyle={styles.button}
      />
    );
  }

  return (
    <Button
      onPress={toggleDrawer}
      icon={{
        name: 'menu',
        type: 'material',
      }}
      buttonStyle={styles.button}
    />
  );
};
