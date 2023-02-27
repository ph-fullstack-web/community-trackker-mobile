import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  searchInput: {
    flex: 0.8,
    borderRadius: 50,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 20,
  },
  searchButtonContainer: {
    flex: 0.15,
    justifyContent: 'center',
  },
  searchButton: {
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: COLORS.TRANSPARENT,
  },
  searchInput_light: {
    backgroundColor: COLORS.WHITE,
  },
  searchInput_dark: {
    backgroundColor: COLORS.DARK_GRAY,
  },
});

export default styles;
