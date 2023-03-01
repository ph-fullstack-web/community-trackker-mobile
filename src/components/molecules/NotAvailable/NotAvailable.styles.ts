import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 50,
  },
  text: {
    fontSize: 20,
  },
  text_light: {
    color: COLORS.MIDNIGHT_BLUE,
  },
  text_dark: {
    color: COLORS.VERY_LIGHT_GRAY,
  },
});

export default styles;
