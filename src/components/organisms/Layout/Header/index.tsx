import {View} from 'react-native';
import {DrawerHeaderProps} from '@react-navigation/drawer';

import Logo from 'assets/images/CSV-Logo.svg';
import {HeaderLeft} from '../HeaderLeft';
import {HeaderRight} from '../HeaderRight';

import styles from './Header.styles';

type HeaderProps = DrawerHeaderProps;

export const Header = ({navigation}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <HeaderLeft navigation={navigation} />
      <View style={styles.logoContainer}>
        <Logo height="100%" width="75%" />
      </View>
      <HeaderRight />
    </View>
  );
};
