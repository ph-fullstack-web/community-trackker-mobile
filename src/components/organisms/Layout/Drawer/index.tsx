import {ImageBackground, View} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {useGetPerson} from 'api/hooks';
import {
  Avatar,
  Divider,
  DrawerItem,
  Icon,
  Switch,
  Text,
} from 'components/atoms';
import {
  DrawerAccordion,
  DrawerAccordionItem,
  Spinner,
} from 'components/molecules';
import {COLORS} from 'constants/colors';
import {useThemeProvider} from 'providers';

import styles from './Drawer.styles';

export type DrawerItems<T> = (Partial<DrawerAccordionItem<T>> & {
  items?: DrawerAccordionItem<T>[];
})[];

type DrawerProps<T> = DrawerContentComponentProps & {
  drawerItems: DrawerItems<T>;
};

export const Drawer = <T,>(props: DrawerProps<T>) => {
  const {drawerItems, navigation} = props;
  const personId: number = 1;

  const {isLoading, data} = useGetPerson(personId);
  const {mode, toggleTheme} = useThemeProvider();

  const handleSwitchTheme = () => {
    toggleTheme();
  };

  const icon = mode === 'light' ? 'wb-sunny' : 'nightlight-round';
  const iconColor = mode === 'light' ? COLORS.MIDNIGHT_BLUE : COLORS.LIGHT_BLUE;

  return (
    <DrawerContentScrollView
      contentContainerStyle={[
        styles.container,
        styles[`container_${mode}` as keyof typeof undefined],
      ]}
    >
      <>
        <ImageBackground
          style={styles.headerBackground}
          source={require('assets/images/CSV-Cover.png')}
        >
          {isLoading ? (
            <Spinner size={35} viewStyle={styles.spinnerContainer} />
          ) : (
            <>
              <Avatar size={70} />
              <View style={styles.headerTextContainer}>
                <Text style={styles.greetingText}>Hi, {data?.full_name}</Text>
                <Text style={styles.emailText}>{data?.csv_email}</Text>
              </View>
            </>
          )}
        </ImageBackground>
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
            <Icon name={icon} type="material" color={iconColor} />
            <Text
              style={[
                styles.themeLabel,
                styles[`themeLabel_${mode}` as keyof typeof undefined],
              ]}
            >
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
              color: iconColor,
            }}
            label="Log Out"
            onPress={() => console.log('Logging out...')}
          />
        </View>
      </>
    </DrawerContentScrollView>
  );
};
