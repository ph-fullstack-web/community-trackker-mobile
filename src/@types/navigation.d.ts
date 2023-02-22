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
    CECTracker: undefined;
    SkillTree: undefined;
  };

  export type RootNativeStackScreenProps<
    T extends keyof RootNativeStackParamList
  > = NativeStackScreenProps<RootNativeStackParamList, T>;

  export type CommunityDrawerParamList = {
    Dashboard: undefined;
    Profile: undefined;
    CommunitiesStack: NavigatorScreenParams<CommunityStackParamList>;
    Report: undefined;
  };

  export type CommunityDrawerScreenProps<
    T extends keyof CommunityDrawerParamList
  > = CompositeScreenProps<
    DefaultDrawerScreenProps<CommunityDrawerParamList, T>,
    NativeStackScreenProps<RootNativeStackParamList>
  >;

  export type CommunityStackParamList = {
    Communities: undefined;
    CommunityMembers: {communityId: number};
  };

  export type CommunityStackScreenProps<
    T extends keyof CommunityStackParamList
  > = NativeStackScreenProps<CommunityStackParamList, T>;

  export type CECTrackerDrawerParamList = {
    CEC: undefined;
  };

  export type CECTrackerDrawerScreenProps<
    T extends keyof CECTrackerDrawerParamList
  > = CompositeScreenProps<
    DefaultDrawerScreenProps<CECTrackerDrawerParamList, T>,
    NativeStackScreenProps<RootNativeStackParamList>
  >;

  export type SkillTreeDrawerParamList = {
    Skills: undefined;
  };

  export type SkillTreeDrawerScreenProps<
    T extends keyof SkillTreeDrawerParamList
  > = CompositeScreenProps<
    DefaultDrawerScreenProps<SkillTreeDrawerParamList, T>,
    NativeStackScreenProps<RootNativeStackParamList>
  >;
}
