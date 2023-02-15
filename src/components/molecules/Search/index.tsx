import {useState} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

import {ButtonWithIcon, TextInput} from 'components/atoms';
import styles from './Search.styles';

type SearchProps = {
  onSearch: (searchText: string) => void;
  viewStyle?: StyleProp<ViewStyle>;
};

export const Search = (props: SearchProps) => {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <View style={[styles.searchContainer, props.viewStyle]}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        onChangeText={text => setSearchText(() => text)}
        defaultValue=""
      />
      <ButtonWithIcon
        style={styles.searchButton}
        onPress={() => props.onSearch(searchText)}
        name="magnifier"
        type="simple-line-icon"
        color="#dadce0"
      />
    </View>
  );
};
