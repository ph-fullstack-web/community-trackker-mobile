import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    zIndex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  searchInputContainer: {
    flex: 0.8,
    flexDirection: 'row',
  },
  searchInput: {
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
    paddingVertical: 10,
  },
  searchButtonContainer: {
    flex: 0.15,
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
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: 10,
    zIndex: -1,
  },
  resultContentContainer: {
    marginTop: 10,
  },
});

export default styles;
