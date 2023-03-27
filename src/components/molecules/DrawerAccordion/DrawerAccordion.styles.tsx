import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.TRANSPARENT,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    fontSize: 16,
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
  },
  item: {
    paddingLeft: 16,
  },
  label_light: {
    color: COLORS.MIDNIGHT_BLUE,
  },
  label_dark: {
    color: COLORS.LIGHT_BLUE,
  },
});

export default styles;
