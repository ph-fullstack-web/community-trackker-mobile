import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  scrollStyle: {
    flex: 1,
    paddingHorizontal: 10,
  },
  scrollContentContainer: {
    width: '100%',
    flexDirection: 'column',
  },
  container_light: {
    backgroundColor: COLORS.WHITE,
  },
  container_dark: {
    backgroundColor: COLORS.BLACK,
  },
});

export default styles;
