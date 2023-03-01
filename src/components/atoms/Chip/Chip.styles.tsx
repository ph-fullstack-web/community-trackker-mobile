import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  chip: {
    borderWidth: 1,
  },
  chip_light: {
    borderColor: COLORS.DARK_BLUE,
  },
  chip_dark: {
    borderColor: COLORS.LIGHT_BLUE,
  },
  chipTitle: {
    fontSize: 12,
  },
  chipTitle_light: {
    color: COLORS.DARK_BLUE,
  },
  chipTitle_dark: {
    color: COLORS.LIGHT_BLUE,
  },
});

export default styles;
