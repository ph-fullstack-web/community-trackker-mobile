import {useEffect, useState} from 'react';
import {
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

import {useThemeProvider} from 'providers';
import {TypeaheadList} from '../TypeaheadList';
import styles from './Typeahead.styles';
import {COLORS} from 'constants/colors';

type TypeaheadProps<T> = {
  id: string;
  data: T[];
  label: keyof T;
  minimumChar?: number;
  onSelect: (item: T) => void;
  placeholder?: string;
  selected: string[];
  uniqueKey: keyof T;
  textInputStyle?: StyleProp<TextStyle>;
  resultContentContainerStyle?: StyleProp<ViewStyle>;
};

export const Typeahead = <T extends Record<string, any>>({
  id,
  data,
  label,
  minimumChar = 2,
  onSelect,
  placeholder,
  selected,
  uniqueKey,
  textInputStyle,
  resultContentContainerStyle,
}: TypeaheadProps<T>) => {
  const {mode} = useThemeProvider();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<T[]>([]);
  const [noResult, setNoResult] = useState<boolean>(false);

  const onSearch = (str: string) => {
    setQuery(str);
  };

  const onSelectItem = (item: T) => {
    onSelect(item);
    resetForm();
  };

  const resetForm = () => {
    setQuery('');
    setResults([]);
  };

  const handlePressIn = () => {
    let displayedResults: T[] = [];
    if (!query.trim().length) {
      displayedResults = data.filter(
        item => selected.indexOf(item[label]) === -1
      );
    }
    setResults(displayedResults);
  };

  const handleBlur = () => {
    setResults([]);
  };

  useEffect(() => {
    let filteredResults: T[] = [];
    const lowerCaseData = data.map(item =>
      (item[label] as string).toLowerCase()
    );
    const lowerCaseQuery = query.toLowerCase();

    if (query.length >= minimumChar) {
      for (let i = 0; i < lowerCaseData.length; i++) {
        const item = lowerCaseData[i];

        if (
          item.indexOf(lowerCaseQuery) !== -1 &&
          selected.indexOf(data[i][label]) === -1
        ) {
          filteredResults.push(data[i]);
        }
      }
    }

    setNoResult(!filteredResults.length && query.length >= minimumChar);
    setResults(filteredResults);
  }, [data, label, minimumChar, query, selected]);

  return (
    <View style={styles.container} id={id}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onSearch}
        placeholderTextColor={
          mode === 'light' ? COLORS.BLACK : COLORS.ULTRA_LIGHT_GRAY
        }
        style={[
          styles.input,
          styles[`input_${mode}` as keyof typeof styles],
          textInputStyle,
        ]}
        value={query}
        onBlur={handleBlur}
        onPressIn={handlePressIn}
      />
      <View
        style={[
          styles.resultContainer,
          styles[`resultContainer_${mode}` as keyof typeof styles],
        ]}
      >
        {noResult && (
          <Text
            style={[
              styles.noResultContainer,
              styles.resultContentContainer,
              resultContentContainerStyle,
            ]}
          >
            No Result Found
          </Text>
        )}
        {!!results.length && (
          <ScrollView
            contentContainerStyle={styles.resultContentContainer}
            style={[styles.resultContentContainer, resultContentContainerStyle]}
            keyboardShouldPersistTaps="handled"
            horizontal
          >
            <FlatList
              keyboardShouldPersistTaps="handled"
              keyExtractor={item => item[uniqueKey]}
              data={results}
              renderItem={({item}) => (
                <TypeaheadList
                  onPress={() => onSelectItem(item)}
                  text={item[label]}
                />
              )}
            />
          </ScrollView>
        )}
      </View>
    </View>
  );
};
