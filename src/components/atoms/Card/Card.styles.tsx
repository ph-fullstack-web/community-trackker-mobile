import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 20,
    shadowColor: COLORS.BLACK,
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
  container_light: {
    backgroundColor: COLORS.WHITE,
  },
  container_dark: {
    backgroundColor: COLORS.DARK_GRAY,
  },
});

export default styles;
