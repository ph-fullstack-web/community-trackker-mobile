import {DrawerScreenProps} from '@react-navigation/drawer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootNativeStackParamList = {
  LoginStack: undefined;
  DashboardStack: undefined;

  MyCommunities: undefined;
  CECTracker: undefined;
  SkillTree: undefined;

  CommunitiesStack: undefined;
  MembersStack: {communityId: number} | undefined;
};

export type RootNativeStackScreenProp<
  T extends keyof RootNativeStackParamList
> = NativeStackScreenProps<RootNativeStackParamList, T>;

export type RootDrawerParamList = {
  Dashboard: undefined;

  Communities: undefined;
  Members: {communityId: number} | undefined;
  Profile: undefined;
  Report: undefined;

  CEC: undefined;
  Skills: undefined;
};

export type DrawerScreenProp<T extends keyof RootDrawerParamList> =
  DrawerScreenProps<RootDrawerParamList, T>;
