import {useEffect, useState} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Button, Chip, Typeahead} from 'components/atoms';
import {COLORS, GRADIENT} from 'constants/colors';

import {useThemeProvider} from 'providers';

import styles from './MultiSearch.styles';

interface T extends Record<string, any> {}

type MultiSearchProps = {
  onSearch: (searchText: string) => void;
  viewStyle?: StyleProp<ViewStyle>;
  dropdownValues: T[];
  defaultValues?: T[];
  labelProp: string;
  idProp: string;
  placeholder?: string;
};

export const MultiSearch = ({
  onSearch,
  viewStyle,
  dropdownValues = [],
  defaultValues = [],
  labelProp = '',
  idProp = '',
  placeholder = 'Search...',
}: MultiSearchProps) => {
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
        <Button
          containerStyle={styles.searchButtonContainer}
          buttonStyle={styles.searchButton}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: GRADIENT[`${mode}_theme` as keyof typeof GRADIENT],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
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

      <View style={styles.chipsContainer}>
        {selectedValues?.map((value, i) => (
          <Chip key={i} onPress={() => deselect(i)} title={value[labelProp]} />
        ))}
      </View>
    </View>
  );
};
