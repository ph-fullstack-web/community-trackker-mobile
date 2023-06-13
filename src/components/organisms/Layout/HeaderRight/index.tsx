import {useNavigation} from '@react-navigation/native';

import {Button} from 'components/atoms';
import {RootNativeStackScreens} from 'constants/navigation';

import styles from './HeaderRight.styles';

export const HeaderRight = () => {
  const {navigate} =
    useNavigation<
      RootNativeStackScreenProps<RootNativeStackScreens.Login>['navigation']
    >();

  return (
    <Button
      id="headerLogoutBtn"
      buttonStyle={styles.button}
      onPress={() => navigate(RootNativeStackScreens.Login)}
      icon={{
        name: 'logout',
        type: 'material',
      }}
    />
  );
};
