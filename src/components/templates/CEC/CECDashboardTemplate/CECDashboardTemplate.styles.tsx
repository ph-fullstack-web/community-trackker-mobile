import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginRight: 4,
  },
  tooltipText: {
    color: COLORS.WHITE,
  },
});

export default styles;
