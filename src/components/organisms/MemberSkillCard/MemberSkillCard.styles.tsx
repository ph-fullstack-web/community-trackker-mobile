import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    marginHorizontal: 5,
    marginBottom: 15,
    padding: 20,
    borderLeftWidth: 0,
  },
  avatarContainer: {
    flex: 0.25,
    justifyContent: 'center',
  },
  detailsContainer: {
    flex: 0.75,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
  },
  skills: {
    marginTop: 10,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  buttonTitleStyle: {
    fontSize: 12,
  },
  buttonStyle: {
    borderRadius: 50,
    paddingHorizontal: 15,
    marginRight: 5,
    marginVertical: 2,
  },
});

export default styles;
