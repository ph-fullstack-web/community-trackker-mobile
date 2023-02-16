import {DrawerScreenProps} from '@react-navigation/drawer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootDrawerParamList = {
  CEC: undefined;
  Communities: undefined;
  CommunityMembers: {communityId: number} | undefined;
  Dashboard: undefined;
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
