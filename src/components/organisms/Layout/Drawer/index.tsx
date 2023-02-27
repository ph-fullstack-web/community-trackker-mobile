import {useCallback, useState} from 'react';
import {ImageBackground, View} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {DrawerAccordion, DrawerAccordionItem} from 'components/molecules';
import {
  Avatar,
  Divider,
  DrawerItem,
  Icon,
  Switch,
  Text,
} from 'components/atoms';
import {COLORS} from 'constants/colors';
import {useUserDataProvider} from 'providers/UserDataProvider';

import styles from './Drawer.styles';

export type DrawerItems<T> = (Partial<DrawerAccordionItem<T>> & {
  items?: DrawerAccordionItem<T>[];
})[];

type DrawerProps<T> = DrawerContentComponentProps & {
  drawerItems: DrawerItems<T>;
};

const imgBg = require('assets/images/CSV-Cover.png');
const logOutIcon: Icon = {
  name: 'logout',
  type: 'material',
  color: COLORS.MIDNIGHT_BLUE,
};

export const Drawer = <T,>(props: DrawerProps<T>) => {
  const {drawerItems, navigation} = props;
  const {user} = useUserDataProvider();
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleSwitchTheme = () => {
    setIsDark(prevState => !prevState);
  };

  const onLogOut = () => {
    console.log('Logging Out...');
  };

  const renderDrawerItems = useCallback(
    () =>
      drawerItems.map(item =>
        item.items ? (
          <DrawerAccordion<T>
            key={item.label!}
            icon={item.icon!}
            items={item.items}
            label={item.label!}
            navigation={navigation as T}
          />
        ) : (
          <DrawerItem
            key={item.label!}
            icon={item.icon!}
            label={item.label!}
            onPress={() => item.onPress!(navigation as T)}
          />
        )
      ),
    [drawerItems, navigation]
  );

  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      <>
        <View style={styles.headerContainer}>
          <ImageBackground style={styles.headerBackground} source={imgBg}>
            <Avatar size={70} />
            <View style={styles.headerTextContainer}>
              <Text style={styles.greetingText}>Hi, {user?.fullname}</Text>
              <Text style={styles.emailText}>{user?.csvEmail}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.itemsContainer}>{renderDrawerItems()}</View>
        <Divider width={0.5} />
        <View style={styles.footerContainer}>
          <View style={styles.themeContainer}>
            <Icon
              name="nightlight-round"
              type="material"
              color={COLORS.MIDNIGHT_BLUE}
            />
            <Text style={styles.themeLabel}>Dark Mode</Text>
            <Switch
              trackColor={{false: COLORS.DARK_GRAY, true: COLORS.LIGHT_GRAY}}
              thumbColor={isDark ? COLORS.MIDNIGHT_BLUE : COLORS.LIGHT_GRAY}
              value={isDark}
              onValueChange={handleSwitchTheme}
            />
          </View>
          <DrawerItem icon={logOutIcon} label="Log Out" onPress={onLogOut} />
        </View>
      </>
    </DrawerContentScrollView>
  );
};
