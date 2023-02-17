import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    marginHorizontal: 5,
    marginBottom: 10,
    padding: 20,
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
