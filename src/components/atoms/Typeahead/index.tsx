import {useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {useTheme} from '@rneui/themed';

import {TypeaheadList} from '../TypeaheadList';
import styles from './Typeahead.styles';

type TypeaheadProps<T> = {
  data: T[];
  label: keyof T;
  minimumChar?: number;
  onSelect: (item: T) => void;
  placeholder?: string;
  selected: string[];
  uniqueKey: keyof T;
};

export const Typeahead = <T extends Record<string, any>>({
  data,
  label,
  minimumChar = 2,
  onSelect,
  placeholder,
  selected,
  uniqueKey,
}: TypeaheadProps<T>) => {
  const {theme} = useTheme();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<T[]>([]);

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

    setResults(filteredResults);
  }, [data, label, minimumChar, query, selected]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onSearch}
        style={[styles.input, {borderColor: theme.colors.grey3}]}
        value={query}
      />
      <View
        style={[styles.resultContainer, {backgroundColor: theme.colors.white}]}
      >
        {!!results.length && (
          <ScrollView
            contentContainerStyle={styles.resultContentContainer}
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
