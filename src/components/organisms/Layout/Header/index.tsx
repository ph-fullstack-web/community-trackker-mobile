import {View} from 'react-native';
import {DrawerHeaderProps} from '@react-navigation/drawer';

import Logo from 'assets/images/CSV-Logo.svg';
import {HeaderLeft} from '../HeaderLeft';

import styles from './Header.styles';

type HeaderProps = DrawerHeaderProps;

export const Header = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <HeaderLeft {...props} />
      <View style={styles.logoContainer}>
        <Logo height="130%" />
      </View>
    </View>
  );
};
