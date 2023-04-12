import Logo from 'assets/images/CSV-Logo-Teal.svg';
import {AppContainer, Button} from 'components/atoms';
import {
  CommunityDrawerScreens,
  RootNativeStackScreens,
} from 'constants/navigation';

import styles from './LoginTemplate.styles';

type LoginTemplateProp = {
  navigation: RootNativeStackScreenProps<RootNativeStackScreens.Login>['navigation'];
};

export const LoginTemplate = ({navigation}: LoginTemplateProp) => {
  const handleOnPress = () => {
    navigation.navigate(RootNativeStackScreens.CommunitiesDrawer, {
      screen: CommunityDrawerScreens.Dashboard,
    });
  };

  return (
    <AppContainer contentContainerStyle={styles.container}>
      <Logo width={300} height={100} style={styles.logo} />
      <Button
        gradient
        title="Go to Dashboard"
        onPress={handleOnPress}
        buttonStyle={styles.loginButton}
      />
    </AppContainer>
  );
};
