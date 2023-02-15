import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  searchInput: {
    flex: 0.8,
    borderRadius: 50,
    borderColor: '#dadce0',
    borderStyle: 'solid',
    borderWidth: 1,
    paddingHorizontal: 20,
  },
  searchButton: {
    flex: 0.15,
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#6AA2DC',
  },
});

export default styles;
