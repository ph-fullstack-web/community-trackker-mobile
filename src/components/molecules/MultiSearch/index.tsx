import {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';

import {Button, Chip, Typeahead} from 'components/atoms';
import {COLORS} from 'constants/colors';
import {useThemeProvider} from 'providers';

import styles from './MultiSearch.styles';
import {MultiSearchProps} from './MultiSearch.types';

export const MultiSearch = <T extends Record<string, any>>({
  onSearch,
  viewStyle,
  dropdownValues = [],
  defaultValues = [],
  labelProp = '',
  idProp = '',
  placeholder = 'Search...',
}: MultiSearchProps<T>) => {
  const [selectedValues, setSelectedValues] = useState<T[]>(defaultValues);
  const {mode} = useThemeProvider();

  useEffect(() => {
    if (defaultValues.length) {
      setSelectedValues(defaultValues);
    }
  }, [defaultValues]);

  const select = (value: T) => {
    setSelectedValues(prevState =>
      [...prevState, value].sort((a, b) =>
        a[labelProp].localeCompare(b[labelProp])
      )
    );
  };

  const deselect = (index: number) => {
    setSelectedValues(prevState => prevState?.filter((_, i) => i !== index));
  };

  return (
    <View style={[styles.container, viewStyle]}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Typeahead
            minimumChar={1}
            data={dropdownValues}
            label={labelProp}
            onSelect={select}
            placeholder={placeholder}
            selected={selectedValues.map(value => value[labelProp])}
            uniqueKey={idProp}
            textInputStyle={[
              styles.searchInput,
              styles[`searchInput_${mode}` as keyof typeof styles],
            ]}
            resultContentContainerStyle={styles.resultContentContainer}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            buttonStyle={styles.searchButton}
            gradient
            icon={{
              name: 'clear',
              type: 'materia;',
              size: 15,
              color: COLORS.ULTRA_LIGHT_GRAY,
            }}
            onPress={() => setSelectedValues([])}
          />
          <Button
            buttonStyle={styles.searchButton}
            gradient
            icon={{
              name: 'magnifier',
              type: 'simple-line-icon',
              size: 15,
              color: COLORS.ULTRA_LIGHT_GRAY,
            }}
            onPress={() =>
              onSearch(selectedValues.map(value => value[idProp]).join(','))
            }
          />
        </View>
      </View>
      <ScrollView style={styles.chipsScrollContainer}>
        <View style={styles.chipsContainer}>
          {selectedValues?.map((value, i) => (
            <Chip
              key={i}
              onPress={() => deselect(i)}
              title={value[labelProp]}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
