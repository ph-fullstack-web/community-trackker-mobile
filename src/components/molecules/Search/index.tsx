import {useState} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '@rneui/themed';

import {Button, TextInput} from 'components/atoms';
import {COLORS} from 'constants/colors';
import styles from './Search.styles';

type SearchProps = {
  onSearch: (searchText: string) => void;
  viewStyle?: StyleProp<ViewStyle>;
};

export const Search = (props: SearchProps) => {
  const [searchText, setSearchText] = useState<string>('');
  const {theme} = useTheme();

  return (
    <View style={[styles.searchContainer, props.viewStyle]}>
      <TextInput
        style={[
          styles.searchInput,
          {
            backgroundColor: theme.colors.white,
            shadowColor: theme.colors.black,
          },
        ]}
        placeholder="Search..."
        onChangeText={text => setSearchText(() => text)}
        defaultValue=""
      />
      <Button
        containerStyle={styles.searchButtonContainer}
        buttonStyle={styles.searchButton}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: [COLORS.DARK_PLUM, COLORS.DARK_BLUE, COLORS.MEDIUM_BLUE],
          start: {x: 0, y: 0.5},
          end: {x: 1, y: 0.5},
        }}
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
