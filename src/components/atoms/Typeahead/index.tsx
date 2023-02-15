import {useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

import {TypeaheadList} from '../TypeaheadList';
import styles from './Typeahead.styles';

type TypeaheadProps<T> = {
  data: T[];
  label: keyof T;
  minimumChar?: number;
  onSelect: (item: T) => void;
  uniqueKey: keyof T;
};

export const Typeahead = <T extends Record<string, any>>({
  data,
  label,
  minimumChar = 2,
  onSelect,
  uniqueKey,
}: TypeaheadProps<T>) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<T[]>([]);

  const resetForm = () => {
    setQuery('');
    setResults([]);
  };

  const onSearch = (str: string) => {
    setQuery(str);
  };

  const onSelectItem = (item: T) => {
    onSelect(item);
    resetForm();
  };

  useEffect(() => {
    let filteredResults: T[] = [];

    if (query.length >= minimumChar) {
      filteredResults = data.filter(item =>
        (item[label] as string).toLowerCase().includes(query)
      );
    }

    setResults(filteredResults);
  }, [data, label, minimumChar, query]);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={onSearch} value={query} />
      <View style={styles.resultContainer}>
        {!!results.length && (
          <ScrollView
            keyboardShouldPersistTaps="handled"
            horizontal
            contentContainerStyle={styles.resultContentContainer}
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
