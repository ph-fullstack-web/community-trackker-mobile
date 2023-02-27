import {View} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {Divider, DrawerItem, Text} from 'components/atoms';
import {DrawerAccordion, DrawerAccordionItem} from 'components/molecules';
import {useUserDataProvider} from 'providers/UserDataProvider';

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

  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      <>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Hi, {user?.fullname}</Text>
        </View>
        <Divider width={2} />
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
        <Divider width={2} />
        <DrawerItem
          icon={{name: 'logout', type: 'material'}}
          label="Log Out"
          onPress={() => console.log('Logging out...')}
        />
      </>
    </DrawerContentScrollView>
  );
};
