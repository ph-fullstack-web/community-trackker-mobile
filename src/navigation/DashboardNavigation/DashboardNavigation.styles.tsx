import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: COLORS.MIDNIGHT_BLUE,
  },
  headerLeft: {
    paddingLeft: 10,
  },
});

export default styles;
