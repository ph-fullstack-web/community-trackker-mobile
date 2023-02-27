import {useMemo, useState} from 'react';
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

const icon = {
  name: 'magnifier',
  type: 'simple-line-icon',
  size: 15,
  color: COLORS.ULTRA_LIGHT_GRAY,
};
const linearGradientProps = {
  colors: [COLORS.DARK_PLUM, COLORS.DARK_BLUE, COLORS.MEDIUM_BLUE],
  start: {x: 0, y: 0.5},
  end: {x: 1, y: 0.5},
};

export const Search = ({onSearch, viewStyle}: SearchProps) => {
  const containerStyle = useMemo(
    () => [styles.searchContainer, viewStyle],
    [viewStyle]
  );
  const [searchText, setSearchText] = useState('');
  const {theme} = useTheme();
  const searchBarStyle = useMemo(
    () => [
      styles.searchInput,
      {
        backgroundColor: theme.colors.white,
        shadowColor: theme.colors.black,
      },
    ],
    [theme.colors.black, theme.colors.white]
  );

  const handleChangeText = (text: string) => setSearchText(text);

  const handleSearch = () => onSearch(searchText);

  return (
    <View style={containerStyle}>
      <TextInput
        style={searchBarStyle}
        placeholder="Search..."
        onChangeText={handleChangeText}
        defaultValue=""
      />
      <Button
        containerStyle={styles.searchButtonContainer}
        buttonStyle={styles.searchButton}
        ViewComponent={LinearGradient}
        linearGradientProps={linearGradientProps}
        icon={icon}
        onPress={handleSearch}
      />
    </View>
  );
};
