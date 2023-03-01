import {COLORS} from 'constants/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  appCardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  appCardButtonContainer: {
    paddingBottom: 10,
  },
  appCardButton: {
    borderRadius: 50,
    width: 80,
    padding: 15,
  },
  text_light: {
    color: COLORS.MIDNIGHT_BLUE,
  },
  text_dark: {
    color: COLORS.LIGHT_BLUE,
  },
});

export default styles;
