import {DrawerScreenProps} from '@react-navigation/drawer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// main screen navigation

export type MainRootNativeStackParamList = {
  Dashboard: undefined;
  MyCommunities: undefined;
};

export type MainNativeStackScreenProp<
  T extends keyof MainRootNativeStackParamList
> = NativeStackScreenProps<MainRootNativeStackParamList, T>;

// my communities navigation

export type RootDrawerParamList = {
  CEC: undefined;
  Communities: undefined;
  CommunityMembers: {communityId: number} | undefined;
  Members: undefined;
  Profile: undefined;
};

export type DrawerScreenProp<T extends keyof RootDrawerParamList> =
  DrawerScreenProps<RootDrawerParamList, T>;

export type RootNativeStackParamList = {
  CommunitiesStack: undefined;
  CommunityMembersStack: {communityId: number} | undefined;
};

export type NativeStackScreenProp<T extends keyof RootNativeStackParamList> =
  NativeStackScreenProps<RootNativeStackParamList, T>;
