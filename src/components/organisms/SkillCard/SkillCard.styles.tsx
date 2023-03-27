import {COLORS} from 'constants/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    padding: 15,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text_light: {
    color: COLORS.MIDNIGHT_BLUE,
  },
  text_dark: {
    color: COLORS.LIGHT_BLUE,
  },
  titleContainer: {
    flex: 1,
    paddingRight: 0,
    justifyContent: 'flex-start',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
  },
  statusText: {
    marginLeft: 5,
    fontSize: 12,
  },
  buttonContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
