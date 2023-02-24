import {LoginTemplate} from 'components/templates';
import {RootNativeStackScreens} from 'constants/navigation';

type LoginScreenProps =
  RootNativeStackScreenProps<RootNativeStackScreens.Login>;

export const LoginScreen = ({}: LoginScreenProps) => {
  return <LoginTemplate />;
};
