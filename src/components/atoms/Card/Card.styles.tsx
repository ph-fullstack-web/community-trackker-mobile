import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 20,

    borderBottomColor: COLORS.VERY_LIGHT_GRAY,
    borderBottomWidth: 4,
    borderLeftColor: COLORS.VERY_LIGHT_GRAY,
    borderLeftWidth: 3,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default styles;
