import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
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
    color: COLORS.MIDNIGHT_BLUE,
  },
  item: {
    paddingLeft: 16,
  },
});

export default styles;
