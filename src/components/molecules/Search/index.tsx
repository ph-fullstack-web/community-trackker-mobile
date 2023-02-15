import {useState} from 'react';
import {View, StyleSheet, StyleProp} from 'react-native';

import {ButtonWithIcon, TextInput} from 'components/atoms';

type SearchProps = {
  onSearch: (searchText: string) => void;
  viewStyle?: StyleProp<any>;
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

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  searchInput: {
    flex: 0.8,
    borderRadius: 50,
    borderColor: '#dadce0',
    borderStyle: 'solid',
    borderWidth: 1,
    paddingHorizontal: 20,
  },
  searchButton: {
    flex: 0.15,
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#6AA2DC',
  },
});
