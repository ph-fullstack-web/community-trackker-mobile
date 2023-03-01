import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  title_light: {
    color: COLORS.MIDNIGHT_BLUE,
  },
  title_dark: {
    color: COLORS.LIGHT_BLUE,
  },
  subtitle: {
    color: COLORS.DARK_GRAY,
  },
  subtitle_light: {
    color: COLORS.DARK_GRAY,
  },
  subtitle_dark: {
    color: COLORS.VERY_LIGHT_GRAY,
  },
  default: {
    color: COLORS.DARK_GRAY,
  },
  default_light: {
    color: COLORS.DARK_GRAY,
  },
  default_dark: {
    color: COLORS.VERY_LIGHT_GRAY,
  },
});

export default styles;
