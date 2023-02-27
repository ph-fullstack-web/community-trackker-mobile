import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 0,
  },
  topContainer: {
    backgroundColor: COLORS.MIDNIGHT_BLUE,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  bottomContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  titleSeparator: {
    fontSize: 11,
    fontWeight: 'bold',
    color: COLORS.GRAY,
    paddingVertical: 10,
  },
  sectionContainer: {
    marginVertical: 10,
  },
});

export default styles;
