import {StyleSheet} from 'react-native';

import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  chip: {
    borderColor: COLORS.DARK_BLUE,
    borderWidth: 1,
  },
  chipTitle: {
    color: COLORS.DARK_BLUE,
    fontSize: 12,
  },
});

export default styles;
