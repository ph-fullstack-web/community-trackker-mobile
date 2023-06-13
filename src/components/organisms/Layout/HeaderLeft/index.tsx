import {useCallback, useMemo} from 'react';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from '@react-navigation/native';
import {DrawerHeaderProps} from '@react-navigation/drawer';

import {Button} from 'components/atoms';
import {COLORS} from 'constants/colors';
import {CommunityStackScreens} from 'constants/navigation';

import styles from './HeaderLeft.styles';
import {Keyboard} from 'react-native';

type HeaderLeftProps = DrawerHeaderProps;

type Params = {previousScreen: string};

export const HeaderLeft = ({navigation, route}: HeaderLeftProps) => {
  const {getState: getDrawerState, goBack, toggleDrawer} = navigation;
  const currentScreen = useMemo(
    () => getFocusedRouteNameFromRoute(route),
    [route]
  );
  const {getState: getStackState, pop} =
    useNavigation<
      CommunityStackScreenProps<CommunityStackScreens.Communities>['navigation']
    >();
  const stackScreenNames: string[] = Object.values(CommunityStackScreens);

  const getPreviousScreen = useCallback(() => {
    const {index: drawerIndex, routes: drawerRoutes} = getDrawerState();
    const {params: drawerParams, state} = drawerRoutes[drawerIndex];

    if (drawerParams && 'params' in drawerParams) {
      return (drawerParams.params as Params).previousScreen;
    }

    const {index: stackIndex, routes: stackRoutes} = state as ReturnType<
      typeof getStackState
    >;
    const {params: stackParams} = stackRoutes[stackIndex];

    return (stackParams as Params).previousScreen;
  }, [getDrawerState]);

  const showBackButton = useMemo(
    () =>
      stackScreenNames.includes(currentScreen!) &&
      currentScreen !== CommunityStackScreens.Communities,
    [currentScreen, stackScreenNames]
  );

  const handleToggleDrawer = () => {
    Keyboard.dismiss();
    toggleDrawer();
  };

  const handleGoBack = () => {
    const previousScreen = getPreviousScreen();
    const isStackScreen = stackScreenNames.includes(previousScreen);

    isStackScreen ? pop() : goBack();
  };

  if (showBackButton) {
    return (
      <Button
        id="headerBackBtn"
        onPress={handleGoBack}
        icon={{
          name: 'west',
          type: 'material',
          color: COLORS.WHITE,
        }}
        buttonStyle={styles.button}
      />
    );
  }

  return (
    <Button
      id="headerMenuBtn"
      onPress={handleToggleDrawer}
      icon={{
        name: 'menu',
        type: 'material',
        color: COLORS.WHITE,
      }}
      buttonStyle={styles.button}
    />
  );
};
