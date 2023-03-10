import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 50,
  },
  text: {
    marginTop: 25,
    fontSize: 20,
    textAlign: 'center',
  },
  text_light: {
    color: COLORS.MIDNIGHT_BLUE,
  },
  text_dark: {
    color: COLORS.VERY_LIGHT_GRAY,
  },
  buttonContainer: {
    marginTop: 15,
  },
  button: {
    marginTop: 20,
    padding: 5,
    borderRadius: 20,
    width: 200,
  },
  buttonText: {
    color: COLORS.VERY_LIGHT_GRAY,
    textAlign: 'center',
    fontSize: 18,
  },
  button_light: {
    backgroundColor: COLORS.MEDIUM_BLUE,
  },
  button_dark: {
    backgroundColor: COLORS.LIGHT_BLUE,
  },
});

export default styles;
