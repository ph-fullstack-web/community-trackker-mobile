import {DrawerScreenProps as DefaultDrawerScreenProps} from '@react-navigation/drawer';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootNativeStackParamList {}
  }

  export type RootNativeStackParamList = {
    Login: undefined;
    CommunitiesDrawer: NavigatorScreenParams<CommunityDrawerParamList>;
  };

  export type RootNativeStackScreenProps<
    T extends keyof RootNativeStackParamList
  > = NativeStackScreenProps<RootNativeStackParamList, T>;

  export type CommunityDrawerParamList = {
    Dashboard: undefined;
    Profile: undefined;
    CommunitiesStack: NavigatorScreenParams<CommunityStackParamList>;
    Report: undefined;
    CEC: undefined;
    Skills: undefined;
  };

  export type CommunityDrawerScreenProps<
    T extends keyof CommunityDrawerParamList
  > = CompositeScreenProps<
    DefaultDrawerScreenProps<CommunityDrawerParamList, T>,
    NativeStackScreenProps<RootNativeStackParamList>
  >;

  export type CommunityStackParamList = {
    Communities: undefined;
    CommunityMembers: {
      communityId: number;
      previousScreen: string;
    };
  };

  export type CommunityStackScreenProps<
    T extends keyof CommunityStackParamList
  > = NativeStackScreenProps<CommunityStackParamList, T>;
}
