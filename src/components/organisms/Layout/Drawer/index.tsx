import {View} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Divider, DrawerItem, Text} from 'components/atoms';
import {MainStackScreenName, ScreenName} from 'constants/enums';
import {DrawerAccordion, DrawerAccordionItem} from 'components/molecules';
import {MainRootNativeStackParamList} from '../../../../@types/navigation';

import styles from './Drawer.styles';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from 'constants/colors';

type DrawerItems = (Partial<DrawerAccordionItem> & {
  items?: DrawerAccordionItem[];
})[];

type MainStackNavigationProp =
  NativeStackNavigationProp<MainRootNativeStackParamList>;

const drawerItems: DrawerItems = [
  {
    icon: {
      name: 'account-circle',
      type: 'material',
      color: COLORS.MIDNIGHT_BLUE,
    },
    label: 'Profile',
    onPress: navigation => navigation.navigate(ScreenName.Profile),
  },
  {
    icon: {name: 'groups', type: 'material', color: COLORS.MIDNIGHT_BLUE},
    label: 'Communities',
    onPress: navigation => navigation.navigate(ScreenName.Communities),
  },
  {
    icon: {name: 'group', type: 'material', color: COLORS.MIDNIGHT_BLUE},
    items: [
      {
        icon: {name: 'group', type: 'material', color: COLORS.MIDNIGHT_BLUE},
        label: 'Quality Engineering',
        onPress: navigation =>
          navigation.navigate(ScreenName.CommunityMembers, {
            communityId: 1,
          }),
      },
      {
        icon: {name: 'group', type: 'material', color: COLORS.MIDNIGHT_BLUE},
        label: 'Cloud and DevOps',
        onPress: navigation =>
          navigation.navigate(ScreenName.CommunityMembers, {
            communityId: 2,
          }),
      },
      {
        icon: {name: 'group', type: 'material', color: COLORS.MIDNIGHT_BLUE},
        label: 'Mobile Cross Platform',
        onPress: navigation =>
          navigation.navigate(ScreenName.CommunityMembers, {
            communityId: 3,
          }),
      },
      {
        icon: {name: 'group', type: 'material', color: COLORS.MIDNIGHT_BLUE},
        label: 'Enterprise Coffee',
        onPress: navigation =>
          navigation.navigate(ScreenName.CommunityMembers, {
            communityId: 4,
          }),
      },
      {
        icon: {name: 'group', type: 'material', color: COLORS.MIDNIGHT_BLUE},
        label: 'Enterprise .NET',
        onPress: navigation =>
          navigation.navigate(ScreenName.CommunityMembers, {
            communityId: 5,
          }),
      },
      {
        icon: {name: 'group', type: 'material', color: COLORS.MIDNIGHT_BLUE},
        label: 'Program Management',
        onPress: navigation =>
          navigation.navigate(ScreenName.CommunityMembers, {
            communityId: 6,
          }),
      },
      {
        icon: {name: 'group', type: 'material', color: COLORS.MIDNIGHT_BLUE},
        label: 'Product Strategy',
        onPress: navigation =>
          navigation.navigate(ScreenName.CommunityMembers, {
            communityId: 7,
          }),
      },
      {
        icon: {name: 'group', type: 'material', color: COLORS.MIDNIGHT_BLUE},
        label: 'Full-Stack Web',
        onPress: navigation =>
          navigation.navigate(ScreenName.CommunityMembers, {
            communityId: 8,
          }),
      },
      {
        icon: {name: 'group', type: 'material', color: COLORS.MIDNIGHT_BLUE},
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
    icon: {name: 'description', type: 'material', color: COLORS.MIDNIGHT_BLUE},
    label: 'Report',
    onPress: navigation => navigation.navigate(ScreenName.Report),
  },
  {
    icon: {name: 'color-lens', type: 'material', color: COLORS.MIDNIGHT_BLUE},
    items: [
      {
        icon: {
          name: 'color-lens',
          type: 'material',
          color: COLORS.MIDNIGHT_BLUE,
        },
        label: 'Blue',
        onPress: () => console.log('Blue'),
      },
      {
        icon: {
          name: 'color-lens',
          type: 'material',
          color: COLORS.MIDNIGHT_BLUE,
        },
        label: 'Plum',
        onPress: () => console.log('Plum'),
      },
      {
        icon: {
          name: 'color-lens',
          type: 'material',
          color: COLORS.MIDNIGHT_BLUE,
        },
        label: 'Teal',
        onPress: () => console.log('Teal'),
      },
      {
        icon: {
          name: 'color-lens',
          type: 'material',
          color: COLORS.MIDNIGHT_BLUE,
        },
        label: 'Dark',
        onPress: () => console.log('Dark'),
      },
    ],
    label: 'Themes',
  },
];

export const Drawer = ({navigation}: DrawerContentComponentProps) => {
  const mainStackNavigation = useNavigation<MainStackNavigationProp>();

  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      <>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Hi, User!</Text>
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
            mainStackNavigation.navigate(MainStackScreenName.Dashboard)
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
