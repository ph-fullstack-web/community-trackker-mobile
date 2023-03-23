import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  chip: {
    borderWidth: 1,
  },
  chip_outline_light: {
    borderColor: COLORS.DARK_BLUE,
  },
  chip_outline_dark: {
    borderColor: COLORS.LIGHT_BLUE,
  },
  chip_solid_light: {
    borderWidth: 0,
  },
  chip_solid_dark: {
    borderWidth: 0,
  },
  chip_gradient: {
    borderWidth: 0,
  },
  chipTitle: {
    fontSize: 12,
  },
  chipTitle_outline_light: {
    color: COLORS.DARK_BLUE,
  },
  chipTitle_outline_dark: {
    color: COLORS.LIGHT_BLUE,
  },
  chipTitle_solid_light: {
    color: COLORS.ULTRA_LIGHT_GRAY,
  },
  chipTitle_solid_dark: {
    color: COLORS.ULTRA_LIGHT_GRAY,
  },
  chipTitle_gradient: {
    color: COLORS.ULTRA_LIGHT_GRAY,
  },
});

export default styles;
