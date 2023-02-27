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
import {useThemeProvider} from 'providers/ThemeProvider';

import styles from './Drawer.styles';

export type DrawerItems<T> = (Partial<DrawerAccordionItem<T>> & {
  items?: DrawerAccordionItem<T>[];
})[];

type DrawerProps<T> = DrawerContentComponentProps & {
  drawerItems: DrawerItems<T>;
};

export const Drawer = <T,>(props: DrawerProps<T>) => {
  const {drawerItems, navigation} = props;
  const {user} = useUserDataProvider();
  const {mode, toggleTheme} = useThemeProvider();

  const handleSwitchTheme = () => {
    toggleTheme();
  };

  const icon = mode === 'light' ? 'wb-sunny' : 'nightlight-round';

  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      <>
        <View style={styles.headerContainer}>
          <ImageBackground
            style={styles.headerBackground}
            source={require('assets/images/CSV-Cover.png')}
          >
            <Avatar size={70} />
            <View style={styles.headerTextContainer}>
              <Text style={styles.greetingText}>Hi, {user?.fullname}</Text>
              <Text style={styles.emailText}>{user?.csvEmail}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.itemsContainer}>
          {drawerItems.map(item =>
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
          )}
        </View>
        <Divider width={0.5} />
        <View style={styles.footerContainer}>
          <View style={styles.themeContainer}>
            <Icon name={icon} type="material" color={COLORS.MIDNIGHT_BLUE} />
            <Text style={styles.themeLabel}>
              {mode?.charAt(0).toUpperCase() + mode?.slice(1)} Mode
            </Text>
            <Switch
              trackColor={{false: COLORS.DARK_GRAY, true: COLORS.LIGHT_GRAY}}
              thumbColor={
                mode === 'light' ? COLORS.MIDNIGHT_BLUE : COLORS.LIGHT_GRAY
              }
              value={mode !== 'light' ? true : false}
              onValueChange={handleSwitchTheme}
            />
          </View>
          <DrawerItem
            icon={{
              name: 'logout',
              type: 'material',
              color: COLORS.MIDNIGHT_BLUE,
            }}
            label="Log Out"
            onPress={() => console.log('Logging out...')}
          />
        </View>
      </>
    </DrawerContentScrollView>
  );
};
