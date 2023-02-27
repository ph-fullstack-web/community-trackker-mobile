import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  container_light: {
    backgroundColor: COLORS.WHITE,
  },
  container_dark: {
    backgroundColor: COLORS.DARK_GRAY,
  },
});

export default styles;
