import {View} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import styles from './Drawer.styles';
import {RootNativeStackParamList} from '../../../../@types/navigation';
import {Divider, DrawerItem, Text} from 'components/atoms';
import {DrawerAccordion, DrawerAccordionItem} from 'components/molecules';
import {COLORS} from 'constants/colors';
import {StackScreen} from 'constants/navigation';
import {useUserDataProvider} from 'providers/UserDataProvider';

export type DrawerItems = (Partial<DrawerAccordionItem> & {
  items?: DrawerAccordionItem[];
})[];

type DrawerProps = DrawerContentComponentProps & {drawerItems: DrawerItems};

export const Drawer = (props: DrawerProps) => {
  const {drawerItems, navigation} = props;
  const {user} = useUserDataProvider();

  const mainStackNavigation =
    useNavigation<NativeStackNavigationProp<RootNativeStackParamList>>();

  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      <>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Hi, {user?.fullname}</Text>
        </View>
        <Divider width={2} />
        <DrawerItem
          key="Dashboard"
          icon={{
            name: 'dashboard',
            type: 'material',
            color: COLORS.MIDNIGHT_BLUE,
          }}
          label="Dashboard"
          onPress={() =>
            mainStackNavigation.navigate(StackScreen.DashboardStack)
          }
        />
        {drawerItems.map(item =>
          item.items ? (
            <DrawerAccordion
              key={item.label!}
              icon={item.icon!}
              items={item.items}
              label={item.label!}
              navigation={navigation}
            />
          ) : (
            <DrawerItem
              key={item.label!}
              icon={item.icon!}
              label={item.label!}
              onPress={() => item.onPress!(navigation)}
            />
          )
        )}
      </>
    </DrawerContentScrollView>
  );
};
