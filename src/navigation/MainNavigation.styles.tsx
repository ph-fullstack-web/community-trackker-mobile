import {COLORS} from 'constants/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: COLORS.LIGHT_GRAY,
    borderBottomWidth: 2,
  },
  headerRight: {
    paddingRight: 10,
  },
  headerLeft: {
    paddingLeft: 10,
  },
});

export default styles;
