import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: COLORS.MIDNIGHT_BLUE,
  },
});

export default styles;
