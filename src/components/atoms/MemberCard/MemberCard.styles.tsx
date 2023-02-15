import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#dadce0',
    borderStyle: 'solid',
    borderWidth: 1,
    margin: 5,
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
    fontSize: 20,
  },
  email: {
    fontSize: 13,
  },
  dateHired: {
    fontSize: 13,
  },
});

export default styles;
