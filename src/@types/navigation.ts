import {DrawerScreenProps} from '@react-navigation/drawer';

export type RootDrawerParamList = {
  Communities: undefined;
  Members: undefined;
  CEC: undefined;
};

export type DrawerScreenProp<T extends keyof RootDrawerParamList> =
  DrawerScreenProps<RootDrawerParamList, T>;
