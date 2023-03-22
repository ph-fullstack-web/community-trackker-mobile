import {StyleProp, ViewStyle} from 'react-native';

export type MultiSearchProps<T> = {
  onSearch: (searchText: string) => void;
  viewStyle?: StyleProp<ViewStyle>;
  dropdownValues: T[];
  defaultValues?: T[];
  labelProp: string;
  idProp: string;
  placeholder?: string;
};
