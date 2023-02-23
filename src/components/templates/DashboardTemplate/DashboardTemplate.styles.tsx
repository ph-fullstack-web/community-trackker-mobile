import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  topContainer: {
    backgroundColor: COLORS.MIDNIGHT_BLUE,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  bottomContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: COLORS.WHITE,
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
