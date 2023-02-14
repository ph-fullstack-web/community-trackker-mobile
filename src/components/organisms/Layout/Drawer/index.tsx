import {Text, View} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Divider} from '@rneui/base';

import {DrawerItem} from 'components/atoms';
import {DrawerAccordion, DrawerAccordionItem} from 'components/molecules';
import styles from './DrawerStyles';

type DrawerItems = (Partial<DrawerAccordionItem> & {
  items?: DrawerAccordionItem[];
})[];

const drawerItems: DrawerItems = [
  {
    icon: {name: 'groups', type: 'material'},
    label: 'Communities',
    onPress: navigation => navigation.navigate('Communities'),
  },
  {
    icon: {name: 'group', type: 'material'},
    items: [
      {
        icon: {name: 'group', type: 'material'},
        label: 'Quality Engineering',
        onPress: navigation => navigation.navigate('Quality Engineering'),
      },
      {
        icon: {name: 'group', type: 'material'},
        label: 'Cloud and DevOps',
        onPress: () => console.log('Cloud and DevOps'),
      },
      {
        icon: {name: 'group', type: 'material'},
        label: 'Mobile Cross Platform',
        onPress: () => console.log('Mobile Cross Platform'),
      },
      {
        icon: {name: 'group', type: 'material'},
        label: 'Enterprise Coffee',
        onPress: () => console.log('Enterprise Coffee'),
      },
      {
        icon: {name: 'group', type: 'material'},
        label: 'Enterprise .NET',
        onPress: () => console.log('Enterprise .NET'),
      },
      {
        icon: {name: 'group', type: 'material'},
        label: 'Program Management',
        onPress: () => console.log('Program Management'),
      },
      {
        icon: {name: 'group', type: 'material'},
        label: 'Product Strategy',
        onPress: () => console.log('Product Strategy'),
      },
      {
        icon: {name: 'group', type: 'material'},
        label: 'Full-Stack Web',
        onPress: () => console.log('Full-Stack Web'),
      },
      {
        icon: {name: 'group', type: 'material'},
        label: 'Big Data & Analytics',
        onPress: () => console.log('Big Data & Analytics'),
      },
    ],
    label: 'Members',
  },
  {
    icon: {name: 'description', type: 'material'},
    label: 'Report',
    onPress: navigation => navigation.navigate('Report'),
  },
  {
    icon: {name: 'color-lens', type: 'material'},
    items: [
      {
        icon: {name: 'color-lens', type: 'material'},
        label: 'Blue',
        onPress: () => console.log('Blue'),
      },
      {
        icon: {name: 'color-lens', type: 'material'},
        label: 'Plum',
        onPress: () => console.log('Plum'),
      },
      {
        icon: {name: 'color-lens', type: 'material'},
        label: 'Teal',
        onPress: () => console.log('Teal'),
      },
      {
        icon: {name: 'color-lens', type: 'material'},
        label: 'Dark',
        onPress: () => console.log('Dark'),
      },
    ],
    label: 'Themes',
  },
];

export const Drawer = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      <>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Hi, User!</Text>
        </View>
        <Divider width={2} />
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
