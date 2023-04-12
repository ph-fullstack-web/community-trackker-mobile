import {useState} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

import {useThemeProvider} from 'providers';
import {Button, TextInput} from 'components/atoms';
import {COLORS} from 'constants/colors';
import styles from './Search.styles';

type SearchProps = {
  onSearch: (searchText: string) => void;
  viewStyle?: StyleProp<ViewStyle>;
};

export const Search = (props: SearchProps) => {
  const [searchText, setSearchText] = useState<string>('');
  const {mode} = useThemeProvider();

  return (
    <View style={[styles.searchContainer, props.viewStyle]}>
      <TextInput
        style={[
          styles.searchInput,
          styles[`searchInput_${mode}` as keyof typeof styles],
        ]}
        placeholder="Search..."
        onChangeText={text => setSearchText(() => text)}
        defaultValue=""
      />
      <Button
        containerStyle={styles.searchButtonContainer}
        buttonStyle={styles.searchButton}
        gradient
        icon={{
          name: 'magnifier',
          type: 'simple-line-icon',
          size: 15,
          color: COLORS.ULTRA_LIGHT_GRAY,
        }}
        onPress={() => props.onSearch(searchText)}
      />
    </View>
  );
};
