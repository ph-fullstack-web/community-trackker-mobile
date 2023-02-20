import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.MIDNIGHT_BLUE,
  },
});

export default styles;
