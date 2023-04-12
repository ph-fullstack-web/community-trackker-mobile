import {LoginTemplate} from 'components/templates';
import {RootNativeStackScreens} from 'constants/navigation';

type LoginScreenProps =
  RootNativeStackScreenProps<RootNativeStackScreens.Login>;

export const LoginScreen = ({navigation}: LoginScreenProps) => {
  return <LoginTemplate navigation={navigation} />;
};
