import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  icon: {
    fontSize: 16,
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
  },
  ripple_light: {
    color: COLORS.VERY_LIGHT_GRAY,
  },
  ripple_dark: {
    color: COLORS.MEDIUM_GRAY,
  },
  text_light: {
    color: COLORS.MIDNIGHT_BLUE,
  },
  text_dark: {
    color: COLORS.LIGHT_BLUE,
  },
});

export default styles;
