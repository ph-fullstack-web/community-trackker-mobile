import {COLORS} from 'constants/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5,
    padding: 20,
    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.MEDIUM_GRAY,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
  },
  avatarContainer: {
    flex: 0.25,
  },
  detailsContainer: {
    flex: 0.75,
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  email: {
    fontSize: 13,
  },
  dateHired: {
    fontSize: 13,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});

export default styles;
