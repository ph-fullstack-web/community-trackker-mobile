import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  userDetails: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  fullname: {
    marginTop: 10,
    fontSize: 24,
    color: COLORS.ULTRA_LIGHT_GRAY,
  },
  email: {
    fontSize: 14,
    color: COLORS.LIGHT_GRAY,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  detailsContainer: {
    paddingTop: 20,
  },
  valueContainer: {
    paddingVertical: 10,
  },
  value: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  tabMenu: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 15,
  },
  tabText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.GRAY,
  },
});

export default styles;
