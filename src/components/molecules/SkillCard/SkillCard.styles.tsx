import {COLORS} from 'constants/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    padding: 15,
    margin: 10,
  },
  text_light: {
    color: COLORS.MIDNIGHT_BLUE,
  },
  text_dark: {
    color: COLORS.LIGHT_BLUE,
  },
  titleContainer: {
    flex: 0.8,
    paddingRight: 0,
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
