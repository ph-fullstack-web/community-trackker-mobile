import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: COLORS.WHITE,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  bottomContainer: {
    flex: 1,
    padding: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
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
