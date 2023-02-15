import {Text, View} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {Divider, DrawerItem} from 'components/atoms';
import {ScreenName} from 'constants/enums';
import {DrawerAccordion, DrawerAccordionItem} from 'components/molecules';
import styles from './Drawer.styles';

type DrawerItems = (Partial<DrawerAccordionItem> & {
  items?: DrawerAccordionItem[];
})[];

const drawerItems: DrawerItems = [
  {
    icon: {name: 'account-circle', type: 'material'},
    label: 'Profile',
    onPress: navigation => navigation.navigate(ScreenName.Dashboard),
  },
  {
    icon: {name: 'groups', type: 'material'},
    label: 'Communities',
    onPress: navigation => navigation.navigate(ScreenName.Communities),
  },
  {
    icon: {name: 'group', type: 'material'},
    items: [
      {
        icon: {name: 'group', type: 'material'},
        label: 'Quality Engineering',
        onPress: navigation =>
          navigation.navigate(ScreenName.CommunityMembers, {
            communityId: 1,
          }),
      },
      {
        icon: {name: 'group', type: 'material'},
        label: 'Cloud and DevOps',
        onPress: navigation =>
          navigation.navigate(ScreenName.CommunityMembers, {
            communityId: 2,
          }),
      },
      {
        icon: {name: 'group', type: 'material'},
        label: 'Mobile Cross Platform',
        onPress: navigation =>
          navigation.navigate(ScreenName.CommunityMembers, {
            communityId: 3,
          }),
      },
      {
        icon: {name: 'group', type: 'material'},
        label: 'Enterprise Coffee',
        onPress: navigation =>
          navigation.navigate(ScreenName.CommunityMembers, {
            communityId: 4,
          }),
      },
      {
        icon: {name: 'group', type: 'material'},
        label: 'Enterprise .NET',
        onPress: navigation =>
          navigation.navigate(ScreenName.CommunityMembers, {
            communityId: 5,
          }),
      },
      {
        icon: {name: 'group', type: 'material'},
        label: 'Program Management',
        onPress: navigation =>
          navigation.navigate(ScreenName.CommunityMembers, {
            communityId: 6,
          }),
      },
      {
        icon: {name: 'group', type: 'material'},
        label: 'Product Strategy',
        onPress: navigation =>
          navigation.navigate(ScreenName.CommunityMembers, {
            communityId: 7,
          }),
      },
      {
        icon: {name: 'group', type: 'material'},
        label: 'Full-Stack Web',
        onPress: navigation =>
          navigation.navigate(ScreenName.CommunityMembers, {
            communityId: 8,
          }),
      },
      {
        icon: {name: 'group', type: 'material'},
        label: 'Big Data & Analytics',
        onPress: navigation =>
          navigation.navigate(ScreenName.CommunityMembers, {
            communityId: 9,
          }),
      },
    ],
    label: 'Members',
  },
  {
    icon: {name: 'description', type: 'material'},
    label: 'Report',
    onPress: navigation => navigation.navigate(ScreenName.Report),
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
