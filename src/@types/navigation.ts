import {DrawerScreenProps} from '@react-navigation/drawer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Community} from 'models/business';

export type RootDrawerParamList = {
  Communities: undefined;
  Members: undefined;
  CEC: undefined;
  Dashboard: undefined;
  CommunityMembers: {communityId: number} | undefined;
};

export type DrawerScreenProp<T extends keyof RootDrawerParamList> =
  DrawerScreenProps<RootDrawerParamList, T>;

export type RootNativeStackParamList = {
  CommunitiesStack: undefined;
  CommunityMembers: {communityId: number} | undefined;
};

export type NativeStackScreenProp<T extends keyof RootNativeStackParamList> =
  NativeStackScreenProps<RootNativeStackParamList, T>;
